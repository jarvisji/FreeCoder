/**
 * Created by Ting on 2015/5/8.
 */
angular.module('freeCoderApp')
  .controller('dashboardCtrl', ['$scope', '$state', 'Member', function ($scope, $state, Member) {
    $scope.$parent.isLogin = Member.isAuthenticated();
    if (!Member.isAuthenticated()) {
      $state.go('login');
    }
  }]);