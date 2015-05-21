/**
 * Created by Ting on 2015/5/21.
 */
angular.module('freeCoderApp')
  .controller('pomodoroCtrl', function ($scope, $state, Member, messagesContext) {
    $scope.userId = Member.getCurrentId();
    if (!$scope.userId) {
      $state.go('login');
    }
  });
