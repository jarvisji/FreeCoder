/**
 * Created by Ting on 2015/9/28.
 */
angular.module('fc.common.ui.pageContainer', [])
  .directive('fcPageContainer', ['$log', function ($log) {
    var supportAttributes = {};
    return {
      restrict: 'E',
      scope: true,
      //template: '<div class="page-container"></div>',
      compile: function (element, attributes) {
        $log.debug('fcPageContainer.compile(), element: %o, attributes: %o', element, attributes);
        var html = element.html();
        var newElement = $('<div class="page-container">' + html + '</div>');
        element.replaceWith(newElement);
      }
    };
  }]);

