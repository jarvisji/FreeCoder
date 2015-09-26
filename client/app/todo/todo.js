/**
 * Created by jiting on 15/5/11.
 */
angular.module('freeCoderApp')
  .controller('todoCtrl', ['$scope', '$log', '$filter', '$state', 'Member', 'Task', 'Pomodoro', 'messagesContext', 'fcDateUtils', 'userTasks', function ($scope, $log, $filter, $state, Member, Task, Pomodoro, messagesContext, fcDateUtils, userTasks) {
    $scope.uiText = {
      newTaskTitlePlaceholder: messagesContext.get('todo.new.placeholder'),
      displayCompletedTasks: messagesContext.get('todo.filter.display.completed.tasks'),
      delete: messagesContext.get('todo.button.delete'),
      pomodoro: messagesContext.get('todo.button.pomodoro'),
      noTasks: messagesContext.get('todo.list.no.tasks')
    };
    $scope.alert = {};
    $scope.newTask = {};
    $scope.todayTasks = [];
    $scope.todayCompletedTasks = [];
    $scope.tasks = [];
    $scope.scopes = {}; // record scope information of tree-nodes.


    /**
     * Split today tasks and to-do tasks out.
     */
    var splitTasks = function (allTasks) {
      $scope.todayTasks = [];
      $scope.tasks = [];
      for (var i = 0; i < allTasks.length; i++) {
        var task = allTasks[i];
        if (fcDateUtils.isInToday(task.targetTime)) {
          $scope.todayTasks.push(angular.copy(task));
        } else {
          $scope.tasks.push(angular.copy(task));
        }
      }
    };

    $scope.createTask = function () {
      Task.create($scope.newTask).$promise.then(function (value, responseHeaders) {
        $scope.newTask = {};
        $scope.tasks.unshift(value);
      }, function (errResp) {
        alertRequestError(errResp);
      });
    };

    $scope.getTasks = function () {
      Member.tasks({
        id: Member.getCurrentId(),
        filter: {order: 'order DESC'}
      }).$promise.then(function (data, respHeaders) {
          splitTasks(data);
        }, function (errResp) {
          alertRequestError(errResp);
        });
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

    $scope.finishTask = function (task) {
      $log.debug('Changing task completion. id, isCompleted:', task.id, task.isCompleted);
      task.completionTime = task.isCompleted ? new Date().getTime() : 0;
      Task.update({where: {id: task.id}}, task).$promise.then(function (value, respHeader) {
        $log.debug('Updated task completion successful. id, isCompleted, completionTime:', value.id, value.isCompleted, value.completionTime);
      }, function (errResp) {
        alertRequestError(errResp);
      });
    };

    $scope.startPomodoro = function (task) {
      var now = new Date().getTime();
      Member.pomodoros({
        id: Member.getCurrentId(),
        filter: {where: {status: 'inProgress'}}
      }, function (value, respHeader) {
        var remainDuration;
        if (value.length > 0) {
          // if there is in progress pomodoro but time out, then finish it.
          var pomodoro = value[0];
          var pomodoroEndTime = Date.parse(pomodoro.startTime) + pomodoro.duration;
          remainDuration = pomodoroEndTime - new Date().getTime();
          if (remainDuration <= 0) {
            Pomodoro.finishPomodoro({id: pomodoro.id});
          }
        }

        if (value.length === 0 || remainDuration <= 0) {
          Pomodoro.create({startTime: now, taskId: task.id, type: 'work'}).$promise.then(function (value, respHeaders) {
            $state.go('pomodoro');
          }, function (errResp) {
            alertRequestError(errResp);
          });
        } else {
          $scope.alert.style = 'alert-warning';
          $scope.alert.message = messagesContext.get('pomodoro.error.exist.inprogress.pomodoro');
        }
      }, function (errResp) {
        alertRequestError(errResp);
      });
    };

    //$scope.filterCompletedTodayTasks = function () {
    //  if ($scope.isShowCompletedTodayTasks) {
    //    $scope.todayTasks = $scope.todayTasks.concat($scope.todayCompletedTasks);
    //    $scope.todayCompletedTasks = [];
    //    $filter('orderBy')($scope.todayTasks, 'order', true);
    //  } else {
    //    $scope.todayCompletedTasks = [];
    //    for (var i = 0; i < $scope.todayTasks.length; i++) {
    //      if ($scope.todayTasks[i].isCompleted) {
    //        $scope.todayCompletedTasks.push($scope.todayTasks.splice(i, 1));
    //      }
    //    }
    //    $filter('orderBy')($scope.todayCompletedTasks, 'order', true);
    //  }
    //};

    $scope.updateTaskTargetTime = function (taskId, newTargetTime) {
      $log.debug('updateTaskTargetTime(), taskId: %s, newTargetTime: %s', taskId, newTargetTime);
      Task.prototype$updateAttributes({id: taskId}, {targetTime: newTargetTime}).$promise.then(function (resp, respHeader) {
        $log.debug('Update task target time successful: ', resp);
      }, function (errResp) {
        $log.error('Update task target time failed: ', errResp);
        alertRequestError(errResp);
      });
    };

    $scope.treeOptions = {
      dropped: function (event) {
        var targetChangedTask = event.source.nodeScope.$modelValue;
        if (event.dest.nodesScope.$id != event.source.nodesScope.$id) {
          // from a tree-nodes to another tree-nodes.
          if (event.dest.nodesScope.$id == $scope.scopes.todayTasksTreeNodesScopeId) {
            // move task to today.
            targetChangedTask.targetTime = fcDateUtils.getTodayTimestampRange().start;
          } else if (event.dest.nodesScope.$id == $scope.scopes.tasksTreeNodesScopeId) {
            // move task to to-do.
            targetChangedTask.targetTime = 0;
          }
          $scope.updateTaskTargetTime(targetChangedTask.id, targetChangedTask.targetTime);
        }

        // recalculate 'order' value when changed task position in list.
        if (event.dest.index != event.source.index || event.dest.nodesScope.$id != event.source.nodesScope.$id) {
          var taskArray = 'tasks';
          if (event.dest.nodesScope.$id == $scope.scopes.todayTasksTreeNodesScopeId) {
            taskArray = 'todayTasks';
          }
          var newPositionIdx = event.dest.index;
          var newOrderValue = calculateOrderValue(taskArray, newPositionIdx);
          // save to db.
          updateTaskOrder(targetChangedTask.id, newOrderValue);
        }
      },
      dragStart: function (event) {
        $scope.dragging = true;
      },
      dragStop: function (event) {
        $scope.dragging = false;
      }
    };

    /**
     * Currently use 'timestemp' value to identify task order.
     * @param oldIndex
     * @param newIndex
     */
    var calculateOrderValue = function (taskArray, newIndex) {
      var newOrderVal;
      if (newIndex === 0) {
        // thr first one
        newOrderVal = new Date().getTime();
      } else if (newIndex == $scope[taskArray].length - 1) {
        // the last one
        var beforeTask = $scope[taskArray][newIndex - 1];
        newOrderVal = beforeTask.order - 10000;
      } else {
        // the middle one
        beforeTask = $scope[taskArray][newIndex - 1];
        var afterTask = $scope[taskArray][newIndex + 1];
        newOrderVal = afterTask.order + parseInt((beforeTask.order - afterTask.order) / 2);
        $log.debug("Moved task position, new order value to before:", beforeTask.order - newOrderVal);
        $log.debug(".. new order value to after:", newOrderVal - afterTask.order);
      }
      return newOrderVal;
    };

    var updateTaskOrder = function (taskId, newOrder) {
      $log.debug('updateTaskOrder(),', arguments);
      Task.prototype$updateAttributes({id: taskId}, {order: newOrder}).$promise.then(function (value, respHeader) {
        $log.debug('Update task order successful:', value);
      }, function (errResp) {
        $log.error('Update task target time failed: ', errResp);
        alertRequestError(errResp);
      });
    };

    var alertRequestError = function (errResp) {
      //TODO: move class to template.
      $scope.alert.style = 'alert-danger';
      $scope.alert.message = errResp.data.error.message;
    };

    var clearAlert = function () {
      $scope.alert = {};
    };

    var updateDbTasks = function (task) {

    };

    // controller init:
    $scope.getTasks();
  }]);

