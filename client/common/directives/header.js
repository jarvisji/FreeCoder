'use strict';
/**
 * fc-common-ui-header
 *
 * Attributes:
 * - data: Object. // data of page header.
 * - [enable-search]:true[|false]
 *
 *
 *
 * Bind JSON data in $scope:
 *  {
 *    "pageLogo": {
 *      "src": "string",
 *      "href": "string"
 *    },
 *    "userMenu": {
 *      "name": "string",
 *      "avatar": "string of image url",
 *      "menuItems": [
 *        {
 *          "iconClass": "icon-user",
 *          "label": "string",
 *          "href": "string"
 *        }
 *      ]
 *    }
 * }
 *
 * Created by Ting on 2015/9/26.
 */
angular.module('fc.common.ui.pageHeader', [])
  //.config(['$logProvider', function ($logProvider) {
  //  $logProvider.debugEnabled(false);
  //}])
  .directive('fcPageHeader', ['$log', function ($log) {
    var supportAttributes = {
      "data": 'data'
    };
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'common/directives/header.tpl.html',
      // TODO:J why 'link' function will not be execute if 'compile' is defined.
      //compile: function (element, attributes) {
      //  $log.debug('fcPageHeader.compile(), element: %o, attributes: %o', element, attributes);
      //},
      link: function (scope, element, attr) {
        $log.debug('fcPageHeader.link(), scope: %o, element: %o, attributes: %o', scope, element, attr);
        scope.data = scope.$parent[attr[supportAttributes.data]];
        console.log(scope.data);
      }
    };
  }]);

