/**
 * Created by Ting on 2015/9/28.
 */
angular.module('fc.common.ui.pageContent', [])
  .directive('fcPageContent', ['$log', function ($log) {
    var supportAttributes = {};
    return {
      restrict: 'E',
      scope: true,
      compile: function (element, attributes) {
        $log.debug('fcPageContent.compile(), element: %o, attributes: %o', element, attributes);
        var html = element.html();
        var newElement = $('<div class="page-content-wrapper"><div class="page-content">' + html + '</div></div>');
        element.replaceWith(newElement);
      }
    };
  }]);
