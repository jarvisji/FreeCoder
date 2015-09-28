/**
 * Created by Ting on 2015/9/28.
 *
 * fc-page-sidebar
 * This is a side menu directive, support one level sub-menu.
 *
 * Attributes:
 * - data: string. // Object name of menu data..
 *
 * For the menu data:
 * Support 3 types of 'href' property: external url (start with http:// or https://), $state name, function.
 *
 * menuData = [
 {
   "href": "dashboard",
   "iconClass": "icon-home",
   "title": "Dashboard"
 },
 {
   "href": "todo",
   "iconClass": "icon-list",
   "title": "Todo"
 },
 {
   "href": function() {// do something},
   "iconClass": "icon-clock",
   "title": "Pomodoro"
 },
 {
   "href": "#",
   "iconClass": "icon-user",
   "title": "User",
   "subMenu": [
     {
       "href": "profile",
       "iconClass": "icon-user",
       "title": "Profile"
     }
   ]
 }
 ]
 */
angular.module('fc.common.ui.pageSidebar', [])
  //.config(['$logProvider', function ($logProvider) {
  //  $logProvider.debugEnabled(false);
  //}])
  .directive('fcPageSidebar', ['$log', '$state', function ($log, $state) {
    var supportAttributes = {
      "data": "data"
    };
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      templateUrl: 'common/directives/fc-page-sidebar.tpl.html',
      link: function (scope, element, attr) {
        $log.debug('fcPageSidebar.link(), scope: %o, element: %o, attributes: %o', scope, element, attr);
        scope.uiFlag = {};
        scope.menu = scope.$parent[attr[supportAttributes.data]];
        var openMenuIndex, activeMenuIndex;

        scope.onMenuItemClick = function (index) {
          var item = scope.menu[index];
          if (angular.isObject(item.subMenu)) {
            // clicked subMenu toggle subMenu open/close.
            if (openMenuIndex != undefined && index != openMenuIndex) {
              // close current opened menu.
              scope.menu[openMenuIndex].isOpen = false;
              scope.menu[openMenuIndex].subMenuStyle = '';
            }
            item.isOpen = !item.isOpen;
            item.subMenuStyle = item.isOpen ? {display: 'block'} : {};
            openMenuIndex = item.isOpen ? index : undefined;
          } else {
            // clicked menu item instead of subMenu item.
            if (activeMenuIndex != undefined && activeMenuIndex != index) {
              clearMenuItemProperty('isActive');
              clearMenuItemProperty('isOpen');
              clearMenuItemProperty('subMenuStyle');
            }
            item.isActive = true;
            activeMenuIndex = index;
            if (angular.isString(item.href)) {
              if (isExternalUrl(item.href)) {
                window.location.href = item.href;
              } else {
                $state.go(item.href);                 // trade as state
              }
            } else if (angular.isFunction(item.href)) {
              item.href();
            }
          }
        };

        scope.onSubMenuItemClick = function (menuItem, subMenuItemIndex) {
          var subMenuItem = menuItem.subMenu[subMenuItemIndex];
          if (angular.isString(subMenuItem.href)) {
            if (isExternalUrl(subMenuItem.href)) {
              window.location.href = subMenuItem.href;
            } else {
              // trade as state
              $state.go(subMenuItem.href);
            }
            clearMenuItemProperty('isActive');
            menuItem.isActive = true;
            subMenuItem.isActive = true;
            activeMenuIndex = openMenuIndex; // menu item is active when sub menu item clicked.
          } else if (angular.isFunction(subMenuItem.href)) {
            subMenuItem.href();
          }
        };

        var isExternalUrl = function (url) {
          return url.indexOf('http://') === 0 || url.indexOf('https://') === 0;
        };

        // clear active flag of current selected menu item.
        var clearMenuItemProperty = function (prop) {
          for (var i = 0; i < scope.menu.length; i++) {
            var menuItem = scope.menu[i];
            if (menuItem[prop]) {
              delete menuItem[prop];
            }
            // check subMenu.
            if (angular.isArray(menuItem.subMenu)) {
              for (var j = 0; j < menuItem.subMenu.length; j++) {
                var subMenuItem = menuItem.subMenu[j];
                if (subMenuItem[prop]) {
                  delete subMenuItem[prop];
                }
              }
            }
          }
        }
      }
    };
  }]);
