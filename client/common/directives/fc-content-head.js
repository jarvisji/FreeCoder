/**
 * Created by Ting on 2015/9/28.
 *
 * fc-content-head
 *
 * Attributes:
 * - title: string; Title of head.
 * - desc: string;
 */
angular.module('fc.common.ui.contentHead', [])
  .directive('fcContentHead', ['$log', function ($log) {
    var supportAttributes = {title: 'title', desc: 'desc'};
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'common/directives/fc-content-head.tpl.html',
      link: function (scope, element, attr) {
        $log.debug('fcContentHead.link(), scope: %o, element: %o, attributes: %o', scope, element, attr);
        scope.title = attr[supportAttributes.title];
        scope.desc = attr[supportAttributes.desc];
      }
    };
  }]);
