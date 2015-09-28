'use strict';
/**
 * fc-common-ui-header
 *
 * Attributes:
 * - data: string. // Object name of data of page header.
 * - [enable-search]:true[|false]
 *
 *
 *
 * Bind JSON data in $scope:
 * {
 *     "pageLogo": {
 *       "text": "FreeCoder",
 *       //"imgUrl": "http://www.keenthemes.com/preview/metronic/theme/assets/admin/layout3/img/logo-default.png", // if "src" defined, will override "text" property.
 *     "href": "www.baidu.com"
 *   },
 *   "userMenu": {
 *     "name": "Jarvis",
 *     "avatar": "assets/img/avatar9.jpg",
 *     "menuItems": [
 *       {
 *         "iconClass": "icon-user",
 *         "label": "My Profile",
 *         "handler": "profile"  // $state
 *       },
 *       "divider",
 *       {
 *        "iconClass": "icon-key",
 *        "label": "Log Out",
 *        "handler": function () {
 *          $scope.logout();
 *        }
 *      }
 *    ]
 *  }
 * }
 *
 * Created by Ting on 2015/9/26.
 */
angular.module('fc.common.ui.pageHeader', [])
  //.config(['$logProvider', function ($logProvider) {
  //  $logProvider.debugEnabled(false);
  //}])
  .directive('fcPageHeader', ['$log', '$state', function ($log, $state) {
    var supportAttributes = {
      "data": "data",
      "enableSearch": "enableSearch"
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
        scope.uiFlag = {isSearchInputOpen: false};
        $log.debug('fcPageHeader.link(), scope: %o, element: %o, attributes: %o', scope, element, attr);
        scope.data = scope.$parent[attr[supportAttributes.data]];
        scope.uiFlag.isEnableSearch = attr[supportAttributes.enableSearch];

        scope.onSearchBtnClicked = function () {
          if (scope.uiFlag.isSearchInputOpen) {
            $log.debug('do search... not implemented yet.');
          }
          scope.uiFlag.isSearchInputOpen = !scope.uiFlag.isSearchInputOpen;
        };

        scope.onMenuItemClick = function (item) {
          if (typeof(item.handler) == 'string') {
            $state.go(item.handler);
          } else if (typeof(item.handler) == 'function') {
            item.handler();
          }
        }
      }
    };
  }]);

