/**
 * Created by jiting on 15/5/11.
 */
angular.module('freeCoderApp')
  .controller('todoCtrl', ['$scope', '$log', 'Member', 'Task', 'messagesContext', 'userTasks', function ($scope, $log, Member, Task, messagesContext, userTasks) {
    $scope.uiText = {newTaskTitlePlaceholder: messagesContext.get('todo.new.placeholder')};
    $scope.alert = {};
    $scope.newTask = {};
    $scope.tasks = userTasks;
    $scope.mouseOverIndex;

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
        alertRequestError(errResp);
      });
    };

    $scope.getTasks = function () {
      Member.tasks({
        id: Member.getCurrentId(),
        filter: {order: 'order DESC'}
      }).$promise.then(function (value, respHeaders) {
          $scope.tasks = value;
          checkTasksCount();
        }, function (errResp) {
          alertRequestError(errResp);
        })
    };

    $scope.deleteTask = function (index) {
      var taskId = $scope.tasks[index].id;
      $log.debug('Deleting task. index, id:', index, taskId);
      Task.deleteById({id: taskId}).$promise.then(function (value, respHeader) {
        $scope.tasks.splice(index, 1);
      }, function (errResp) {
        alertRequestError(errResp);
      });
    };

    $scope.treeOptions = {
      // recalculate 'order' value when changed task position in list.
      dropped: function (event) {
        if (event.dest.index != event.source.index) {
          var newPositionIdx = event.dest.index;
          var movedTask = $scope.tasks[newPositionIdx];
          if (newPositionIdx == 0) {
            movedTask.order = new Date().getTime();
          } else if (newPositionIdx == $scope.tasks.length - 1) {
            var beforeTask = $scope.tasks[newPositionIdx - 1];
            movedTask.order = beforeTask.order - 10000;
          } else {
            var beforeTask = $scope.tasks[newPositionIdx - 1];
            var afterTask = $scope.tasks[newPositionIdx + 1];
            movedTask.order = afterTask.order + parseInt((beforeTask.order - afterTask.order) / 2);
            $log.debug("Moved task position, new order value to before:", beforeTask.order - movedTask.order);
            $log.debug(".. new order value to after:", movedTask.order - afterTask.order);
          }
          // save to db.
          Task.prototype$updateAttributes({id: movedTask.id}, {order: movedTask.order}).$promise.then(function (value, respHeader) {
            $log.debug('Updated task order successful. id, order:', value.id, value.order);
          }, function (errResp) {
            alertRequestError(errResp);
          });
        }
      },
      dragStart: function (event) {
        $scope.dragging = true;
      },
      dragStop: function (event) {
        $scope.dragging = false;
      }
    };

    var alertRequestError = function (errResp) {
      $scope.alert.style = 'alert-danger';
      $scope.alert.message = errResp.data.error.message;
    }
  }]);
