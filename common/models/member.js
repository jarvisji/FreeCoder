var loopback = require('loopback');
var path = require('path');
var debug = require('debug')('freecoder:member');

module.exports = function (Member) {
  // send verification email after registration
  // refer to http://docs.strongloop.com/display/public/LB/Remote+hooks
  Member.afterRemote('create', function (context, member, next) {
    debug('> Member.afterRemote("create") triggered');
    var options = {
      type: 'email',
      to: member.email,
      from: 'support@freecoder.net', //TODO: read from configuration
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/email_templates/registration_verify.ejs'),
      redirect: encodeURIComponent('/#/dashboard')
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

  Member.changePassword = function (access_token, options, cb) {
    debug('> Member.changePassword().', access_token, options);

    Member.validatePassword(options.oldPass);
    Member.validatePassword(options.newPass);
    //if (!options.oldPass || !options.newPass) {
    //  var msg = 'oldPass or newPass is invalid.';
    //  debug(msg);
    //  cb(msg)
    //}

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
  })
};
