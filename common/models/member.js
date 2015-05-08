var path = require('path');
var debug = require('debug')('freecoder:member');

module.exports = function (Member) {
  // send verification email after registration
  // refer to http://docs.strongloop.com/display/public/LB/Remote+hooks
  Member.afterRemote('create', function (context, member, next) {
    console.log('> Member.afterRemote("create") triggered');
    var options = {
      type: 'email',
      to: member.email,
      from: 'support@freecoder.net', //TODO: read from configuration
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/email_templates/registration_verify.ejs'),
      redirect: '/home'
    };
    member.verify(options, function (err, response) {
      if (err) {
        next(err);
        return;
      }
      console.log('> verification email sent:', response);
      next();
    });
  });
};
