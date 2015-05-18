/**
 * Created by jiting on 15/5/11.
 */
angular.module('freeCoderApp')
  .controller('todoCtrl', ['$scope', 'Member', 'Task', 'messagesContext', 'userTasks', function ($scope, Member, Task, messagesContext, userTasks) {
    $scope.uiText = {newTaskTitlePlaceholder: messagesContext.get('todo.new.placeholder')};
    $scope.alert = {};
    $scope.newTask = {};
    $scope.tasks = userTasks;

    var checkTasksCount = function () {
      if ($scope.tasks.length == 0) {
        $scope.uiText.noTasks = messagesContext.get('todo.list.no.tasks');
      } else if ($scope.uiText.noTasks) {
        delete $scope.uiText.noTasks;
      }
    };
    checkTasksCount();

    $scope.createTask = function () {
      Task.create($scope.newTask).$promise.then(function (value, responseHeaders) {
        $scope.newTask = {};
        $scope.tasks.unshift(value);
        checkTasksCount();
      }, function (errResp) {
        $scope.alert.style = 'alert-danger';
        $scope.alert.message = errResp.data.error.message;
      });
    };

    $scope.getTasks = function () {
      Member.tasks({id: Member.getCurrentId()}).$promise.then(function (value, respHeaders) {
        $scope.tasks = value;
        checkTasksCount();
      }, function (errResp) {
        $scope.alert.style = 'alert-danger';
        $scope.alert.message = errResp.data.error.message;
      })
    };


  }]);
