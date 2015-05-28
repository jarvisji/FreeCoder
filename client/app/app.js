/**
 * Created by Ting on 2015/5/7.
 */
angular.module('freeCoderApp', ['lbServices', 'ui.router', 'ui.tree', 'ngCookies', 'i18nMessages', 'fcUtils'])
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
  .controller('rootCtrl', ['$scope', '$rootScope', '$state', '$log', 'Member', 'messagesContext', function ($scope, $rootScope, $state, $log, Member, messagesContext) {
    $rootScope.sessionInfo = {isLogin: Member.isAuthenticated()};

    $scope.menu = [
      {label: messagesContext.get('dashboard.page.header'), location: 'dashboard', icon: 'fa-tachometer'},
      {label: messagesContext.get('pomodoro.page.header'), location: 'pomodoro', icon: 'fa-clock-o'},
      {label: messagesContext.get('todo.page.header'), location: 'todo', icon: 'fa-tasks'},
      {label: messagesContext.get('user.profile.page.header'), location: 'profile', icon: 'fa-user'}];
    $scope.logout = function () {
      Member.logout().$promise.then(function (data) {
        $log.debug('logout success.');
        $rootScope.sessionInfo.isLogin = Member.isAuthenticated();
        $state.go('login');
      });
    };
  }]);
