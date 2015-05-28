/**
 * Created by Ting on 2015/5/8.
 */
angular.module('freeCoderApp')
  .controller('dashboardCtrl', ['$scope', '$rootScope', '$state', 'Member', function ($scope, $rootScope, $state, Member) {
    $rootScope.sessionInfo = {isLogin: Member.isAuthenticated()};
    if (!Member.isAuthenticated()) {
      $state.go('login');
    }
  }]);
