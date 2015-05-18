/**
 * Created by jiting on 15/5/11.
 */
angular.module('freeCoderApp')
  .controller('todoCtrl', ['$scope', 'Member', 'Task', 'messagesContext', function ($scope, Member, Task, messagesContext) {
    $scope.uiText = {newTaskTitlePlaceholder: messagesContext.get('todo.new.placeholder')};
    $scope.alert = {};
    $scope.newTask = {};
    $scope.tasks = [];

    $scope.createTask = function () {
      Task.create($scope.newTask).$promise.then(function (value, responseHeaders) {
        $scope.newTask = {};
        $scope.tasks.unshift(value);
      }, function (errResp) {
        $scope.alert.style = 'alert-danger';
        $scope.alert.message = errResp.data.error.message;
      });
    }
  }]);
