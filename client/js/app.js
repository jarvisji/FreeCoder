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
      controller: 'MemberController'
    });
    $urlRouterProvider.otherwise('home');
  }]);
