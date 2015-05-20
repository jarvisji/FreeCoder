/**
 * Created by Ting on 2015/5/20.
 */
angular.module('freeCoderApp')
  .directive('fcI18n', ['messagesContext', function (messagesContext) {
    /**
     * This directive doesn't work in some cases:
     * 1. placeholder
     * 2. hidden element
     */
    return {
      restrict: 'A',
      compile: function (element, attr) {
        var text = messagesContext.get(attr['fcI18n']);
        element.text(text);
      }
    }
  }]);
