/**
 * Created by Ting on 2015/5/21.
 */
angular.module('freeCoderApp')
  .controller('pomodoroCtrl', ['$scope', '$state', 'Member', 'messagesContext', function ($scope, $state, Member, messagesContext) {
    $scope.userId = Member.getCurrentId();
    $scope.pageHead = messagesContext.get('pomodoro.page.header');

  }]);
