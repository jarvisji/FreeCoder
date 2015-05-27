var loopback = require('loopback');
var path = require('path');
var assert = require('assert');
var debug = require('debug')('freecoder:member');

module.exports = function (Member) {
  // send verification email after registration
  // refer to http://docs.strongloop.com/display/public/LB/Remote+hooks
  Member.afterRemote('create', function (context, member, next) {
    debug('> Member.afterRemote("create") triggered');
    var app = Member.app;
    var protocol = app.get('extProtocol');
    var host = app.get('extHost');
    var port = app.get('extPort');
    var restApiRoot = app.get('restApiRoot');
    var redirect = encodeURIComponent('/#/dashboard');
    var userModel = member.constructor;
    var verifyHref;
    if (port) {
      verifyHref = protocol + '://' + host + ':' + port + restApiRoot + userModel.http.path + userModel.sharedClass.find('confirm', true).http.path +
      '?uid=' + member.id + '&redirect=' + redirect;
    } else {
      verifyHref = protocol + '://' + host + restApiRoot + userModel.http.path + userModel.sharedClass.find('confirm', true).http.path +
      '?uid=' + member.id + '&redirect=' + redirect;
    }
    var options = {
      type: 'email',
      to: member.email,
      from: Member.app.get('supportEmail'),
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/email_templates/registration_verify.ejs'),
      verifyHref: verifyHref
    };
    member.verify(options, function (err, response) {
      if (err) {
        next(err);
        return;
      }
      debug('>> verification email sent:', response);
      next();
    });
  });

  /**
   * Send email to user to reset password. The 'resetPaswordRequest' even is triggerred by Users/reset API.
   */
  Member.on('resetPasswordRequest', function (info) {
    debug('> on resetPasswordRequest:', info); // the email of the requested user
    var app = Member.app;
    var protocol = app.get('protocol');
    var host = app.get('extHost');
    var port = app.get('extPort');
    var restApiRoot = app.get('restApiRoot');
    var redirect = encodeURIComponent('/#/reset');
    var resetHref;
    if (port) {
      resetHref = protocol + '://' + host + ':' + port + '/#/reset' + '?uid=' + info.accessToken.userId + '&token=' + info.accessToken.id + '&redirect=' + redirect;
    } else {
      resetHref = protocol + '://' + host + '/#/reset' + '?uid=' + info.accessToken.userId + '&token=' + info.accessToken.id + '&redirect=' + redirect;
    }
    var options = {
      type: 'email',
      to: info.email,
      from: Member.app.get('supportEmail'),
      subject: 'Get your account back.',
      template: path.resolve(__dirname, '../../server/email_templates/forgot_password.ejs'),
      resetHref: resetHref
    };
    var template = loopback.template(options.template);
    options.html = template(options);

    loopback.Email.send(options, function (err, email) {
      if (err) {
        console.error(err);
      } else {
        console.log('send success:', email);
      }
    });
  });

  /**
   * Change user password by verify old password first.
   * @param access_token
   * @param options
   * @param cb
   */
  Member.changePassword = function (access_token, options, cb) {
    debug('> Member.changePassword().', access_token, options);

    Member.validatePassword(options.oldPass);
    Member.validatePassword(options.newPass);

    var ctx = loopback.getCurrentContext();
    var accessToken = ctx.get('accessToken');
    var userId = accessToken.userId;
    this.findById(userId, function (err, user) {
      if (err) {
        cb(err);
      }
      debug(">> get User:", user);
      user.hasPassword(options.oldPass, function (err, isMatch) {
        if (err) {
          debug('>> verify old password failed: ', err);
          cb(err);
        }
        if (isMatch) {
          user.password = Member.hashPassword(options.newPass);
          user.save(function (err) {
            if (err) {
              cb(err);
            } else {
              debug('>> change password successful.');
              cb();
            }
          });
        } else {
          cb('Invalid password.');
        }
      });
    });
  };

  /**
   * Reset user password by verify email.
   * @param userId
   * @param tokenId
   * @param redirect
   * @param cb
   */
  Member.resetPasswordConfirm = function (userId, tokenId, options, redirect, cb) {
    assert(typeof options === 'object', 'options required when calling Member.resetPassword()');
    assert(options.password, 'You must supply a password (options.password)');
    var self = this;
    var AccessToken = loopback.AccessToken;
    AccessToken.findById(tokenId, function (err, token) {
      if (err) {
        cb(err);
      } else if (token) {
        token.validate(function (err, isValid) {
          if (err) {
            cb(err);
          } else if (isValid) {
            self.findById(userId, function (err, user) {
              user.password = Member.hashPassword(options.password);
              user.lastUpdated = Date.now();
              user.save(function (err) {
                if (err) {
                  cb(err);
                } else {
                  debug('>> Reset password successful. Destroy reset token.');
                  token.destroy();
                  cb();
                }
              });
              cb(null, token);
            });
          } else {
            cb(getInvalidTokenError());
          }
        });
      } else {
        cb(getInvalidTokenError());
      }
    });
  };

  function getInvalidTokenError() {
    var e = new Error('Invalid Access Token');
    e.status = e.statusCode = 401;
    e.code = 'INVALID_TOKEN';
    return e;
  }

  /**
   * Define REST API for change password.
   */
  Member.remoteMethod('changePassword', {
    description: "Change password by verify current password.",
    http: {verb: 'post', path: '/changePassword'},
    accepts: [
      {
        arg: 'access_token', type: 'string', required: true, http: function (ctx) {
        var req = ctx && ctx.req;
        var accessToken = req && req.accessToken;
        var tokenID = accessToken && accessToken.id;

        return tokenID;
      }
      },
      {arg: 'options', type: 'object', required: true, http: {source: 'body'}}
    ],
    returns: {}
  });

  /**
   * Real update user password by reset token in email.
   */
  Member.remoteMethod('resetPasswordConfirm', {
      description: 'Confirm a user reset password with email verification token',
      accepts: [
        {arg: 'uid', type: 'string', required: true},
        {arg: 'token', type: 'string', required: true},
        {arg: 'options', type: 'object', required: true, http: {source: 'body'}},
        {arg: 'redirect', type: 'string'}
      ],
      http: {verb: 'post', path: '/resetConfirm'}
    }
  );

  /**
   * Redirect page after reset password confirmed, if the 'redirect' parameter is given.
   */
  //Member.afterRemote('resetPasswordConfirm', function (ctx, inst, next) {
  //  if (ctx.args.redirect !== undefined) {
  //    if (!ctx.res) {
  //      return next(new Error('The transport does not support HTTP redirects.'));
  //    }
  //    ctx.res.location(ctx.args.redirect);
  //    ctx.res.status(302);
  //  }
  //  next();
  //});
};
