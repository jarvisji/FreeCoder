/**
 * Created by Ting on 2015/5/7.
 */
angular.module('app', ['lbServices', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'MemberController'
    });
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'MemberController'
    });
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });
    $urlRouterProvider.otherwise('home');
  }])
  .controller('RootController', ['$scope', '$state', '$log', 'Member', function ($scope, $state, $log, Member) {
    $scope.logout = function () {
      $log.debug("logging out...");
      Member.logout().$promise.then(function (data) {
        $scope.isLogin = Member.isAuthenticated();
        $state.go('login');
      });
    }
  }]);
