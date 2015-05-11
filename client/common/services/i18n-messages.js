/**
 * Created by Ting on 2015/5/11.
 */
angular.module('i18nMessages', [])
  .value('i18nMessages', {
    'common.error.unknown': 'Unknown error.'
  })
  .factory('messageaContext', function ($interpolate, i18nMessages) {
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
