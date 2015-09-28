/**
 * Created by Ting on 2015/5/7.
 */
angular.module('freeCoderApp', ['lbServices', 'ui.router', 'ui.tree', 'ngCookies', 'i18nMessages', 'fcUtils', 'fc.common.ui.pageHeader', 'fc.common.ui.pageContainer', 'fc.common.ui.pageSidebar'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $stateProvider.state('sign-up', {
      url: '/sign-up',
      templateUrl: 'app/login/user-signup.tpl.html',
      controller: 'loginCtrl'
    });
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/login/user-login.tpl.html',
      controller: 'loginCtrl'
    });
    $stateProvider.state('forgot', {
      url: '/forgot',
      templateUrl: 'app/login/user-forgot.tpl.html',
      controller: 'loginCtrl'
    });
    $stateProvider.state('reset', {
      url: '/reset',
      templateUrl: 'app/login/user-reset.tpl.html',
      controller: 'loginCtrl'
    });
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.tpl.html',
      controller: 'dashboardCtrl'
    });
    $stateProvider.state('profile', {
      url: '/profile',
      templateUrl: 'app/profile/user-profile.tpl.html',
      controller: 'userProfileCtrl'
    });
    $stateProvider.state('todo', {
      url: '/todo',
      templateUrl: 'app/todo/todo.tpl.html',
      controller: 'todoCtrl',
      resolve: {
        userTasks: ['Member', function (Member) {
          return Member.tasks({id: Member.getCurrentId(), filter: {order: 'order DESC'}}).$promise;
        }]
      }
    });
    $stateProvider.state('pomodoro', {
      url: '/pomodoro',
      templateUrl: 'app/pomodoro/pomodoro.tpl.html',
      controller: 'pomodoroCtrl'
    });
    $urlRouterProvider.otherwise('login');
  }])
  .controller('rootCtrl', ['$scope', '$rootScope', '$state', '$log', 'Member', 'Subscribe', 'messagesContext', function ($scope, $rootScope, $state, $log, Member, Subscribe, messagesContext) {
    // init sessionInfo object at the beginning, other pages can call its properties directly needn't worry about undefined error.
    $rootScope.sessionInfo = {isLogin: Member.isAuthenticated()};

    // define data of fc-page-header directive..
    $scope.pageHeaderData = {
      "pageLogo": {
        "text": "FreeCoder",
        //"imgUrl": "http://www.keenthemes.com/preview/metronic/theme/assets/admin/layout3/img/logo-default.png", // if "src" defined, will override "text" property.
        "href": "www.baidu.com"
      },
      "userMenu": {
        "name": "Jarvis",
        "avatar": "assets/img/avatar9.jpg",
        "menuItems": [
          {
            "iconClass": "icon-user",
            "label": "My Profile",
            "handler": "profile"  // $state
          },
          "divider",
          {
            "iconClass": "icon-key",
            "label": "Log Out",
            "handler": function () {
              $scope.logout();
            }
          }
        ]
      }
    };

    // define data of fc-page-sidebar directive.
    $scope.pageMenuData = [
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
        "href": "pomodoro",
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
    ];

    // Listen to $stateChangeStart event to handle protected resources.
    // https://github.com/angular-ui/ui-router/wiki
    var noLoginCheckStates = ['login', 'sign-up', 'forgot', 'reset'];
    var pageType = ['site', 'app'];
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      $rootScope.sessionInfo.stateName = toState.name;
      if (noLoginCheckStates.indexOf(toState.name) == -1) {
        if (!Member.isAuthenticated()) {
          $log.debug('Need login first.');
          event.preventDefault();
          $state.go('login');
        } else {
          $rootScope.sessionInfo.pageType = pageType[1]; // app
        }
      } else {
        $rootScope.sessionInfo.pageType = pageType[0]; // website
      }
    });

    $scope.menu = [
      {label: messagesContext.get('dashboard.page.header'), location: 'dashboard', icon: 'fa-tachometer'},
      {label: messagesContext.get('pomodoro.page.header'), location: 'pomodoro', icon: 'fa-clock-o'},
      {label: messagesContext.get('todo.page.header'), location: 'todo', icon: 'fa-tasks'},
      {label: messagesContext.get('user.profile.page.header'), location: 'profile', icon: 'fa-user'}];

    $scope.logout = function () {
      $log.debug('app.logout().');
      Member.logout().$promise.then(function (data) {
        $log.debug('logout success.');
        $rootScope.sessionInfo.isLogin = Member.isAuthenticated();
        $state.go('login');
      });
    };

    $scope.subscribe = function () {
      Subscribe.create({email: $scope.subscribe.email}).$promise.then(function (value, respHeader) {
        console.log('thanks for subscribe');
      }, function (errResp) {

      });
    };
  }]);
