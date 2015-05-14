/**
 * Created by Ting on 2015/5/11.
 */
angular.module('i18nMessages', [])
  .value('i18nMessages', {
    'common.error.unknown': 'Unknown error.',
    'common.error.occurred': 'Error occurred: {{msg}}',
    'user.profile.changePassword.success': 'Password was changed successfully.',
    'user.reset.password.email.sent': 'An email is on its way with a link to reset your password. But hurry, it expires in 15 minutes.',
    'user.reset.password.link.error': 'The request link is not valid, please open link via received email.',
    'user.reset.password.not.same': 'Passwords are not same.',
    'user.reset.password.success': 'Password was reset, will jump to login page in 3 seconds.'
  })
  .factory('messagesContext', function ($interpolate, i18nMessages) {
    var handleNotFound = function (msg, msgKey) {
      return msg || '?' + msgKey + '?';
    };

    return {
      get: function (msgKey, interpolateParams) {
        var msg = i18nMessages[msgKey];
        if (msg) {
          return $interpolate(msg)(interpolateParams);
        } else {
          return handleNotFound(msg, msgKey);
        }
      }
    };
  });
