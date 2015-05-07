/**
 * Created by Ting on 2015/5/7.
 */
angular.module('app', ['lbServices', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('register', {
      url: '',
      templateUrl: 'views/register.html',
      controller: 'UserController'
    });
    $urlRouterProvider.otherwise('register');
  }]);
