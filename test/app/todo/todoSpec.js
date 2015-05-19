/**
 * Created by Ting on 2015/5/18.
 */
describe('Todo controller cases.', function () {
  var $scope, $compile, $templateCache, Task, Member, messagesContext, deferred;
  var mockTasks = [
    {
      "title": "jj3",
      "order": 1432000333232,
      "created": "2015-05-19T01:52:13.232Z",
      "lastUpdated": "2015-05-19T01:52:13.232Z",
      "id": "555a974d685fe21c2e3fd8b5",
      "memberId": "555843ab7585689c19c3d11b"
    },
    {
      "title": "jj2",
      "order": 1432000328897,
      "created": "2015-05-19T01:52:08.898Z",
      "lastUpdated": "2015-05-19T01:52:08.898Z",
      "id": "555a9748685fe21c2e3fd8b4",
      "memberId": "555843ab7585689c19c3d11b"
    },
    {
      "title": "jj1",
      "order": 1432000324479,
      "created": "2015-05-19T01:52:04.480Z",
      "lastUpdated": "2015-05-19T01:52:04.480Z",
      "id": "555a9744685fe21c2e3fd8b3",
      "memberId": "555843ab7585689c19c3d11b"
    }
  ];
  var mockErrorReturn = {
    "data": {
      "error": {
        "name": "Error",
        "status": 401,
        "message": "Authorization Required",
        "statusCode": 401,
        "code": "AUTHORIZATION_REQUIRED",
        "stack": "Error: Authorization Required"
      }
    }
  };
  var mockCurrentUserId = '554c81e5d8404b7007865c2e';

  beforeEach(module('freeCoderApp'));
  beforeEach(module('templates'));
  beforeEach(inject(function ($rootScope, $controller, $q, _$compile_, _$templateCache_, _$log_, _Task_, _Member_, _messagesContext_) {
    $scope = $rootScope.$new();
    $compile = _$compile_;
    $templateCache = _$templateCache_;
    Task = _Task_;
    Member = _Member_;
    messagesContext = _messagesContext_;
    deferred = $q.defer();

    var controller = $controller('todoCtrl as todoCtrl', {
      $scope: $scope,
      $log: _$log_,
      Member: Member,
      Task: Task,
      messagesContext: messagesContext,
      userTasks: angular.copy(mockTasks)
    });
  }));

  it('Test create todo item success.', function () {
    // verify before
    expect($scope.tasks.length).toEqual(mockTasks.length);
    expect($scope.newTask).toEqual({});

    // mock
    $scope.newTask = mockTasks[0];
    spyOn(Task, 'create').and.returnValue({$promise: deferred.promise});

    // run
    $scope.createTask();
    deferred.resolve(mockTasks[0]);
    $scope.$digest();

    // verify after
    expect($scope.newTask).toEqual({});
    expect($scope.tasks.length).toEqual(mockTasks.length + 1);
  });

  it('Test create todo item failed.', function () {
    // mock
    $scope.newTask = mockTasks[0];
    spyOn(Task, 'create').and.returnValue({$promise: deferred.promise});

    // run
    $scope.createTask();
    deferred.reject(mockErrorReturn);
    $scope.$digest();

    // verify after
    expect($scope.newTask).toEqual(mockTasks[0]);
    expect($scope.tasks.length).toEqual(mockTasks.length);
    expect($scope.alert.style).toEqual('alert-danger');
    expect($scope.alert.message).toBeDefined();
  });

  it('Test uiText of todo page.', function () {
    expect($scope.uiText).toBeDefined();
    expect($scope.uiText).not.toEqual({});
  });

  it('Test list of todo items.', function () {
    // mock
    spyOn(Member, 'tasks').and.returnValue({$promise: deferred.promise});
    spyOn(Member, 'getCurrentId').and.returnValue(mockCurrentUserId);
    $scope.uiText.noTasks = 'should be delete if get tasks.';

    // run
    $scope.getTasks();
    deferred.resolve(mockTasks);
    $scope.$digest();

    // verify after
    expect($scope.tasks.length).toEqual(mockTasks.length);
    expect($scope.alert).toEqual({});
    expect($scope.uiText.noTasks).toBeUndefined();
  });

  it('Test blank list of todo items.', function () {
    // mock
    spyOn(Member, 'tasks').and.returnValue({$promise: deferred.promise});
    spyOn(Member, 'getCurrentId').and.returnValue(mockCurrentUserId);

    // run
    $scope.getTasks();
    deferred.resolve([]);
    $scope.$digest();

    // verify after
    expect($scope.tasks.length).toEqual(0);
    expect($scope.uiText.noTasks).not.toBeUndefined();
  });

  it('Test move the last task to the first.', function () {
    // mock
    spyOn(Task, 'prototype$updateAttributes').and.returnValue({$promise: deferred.promise});

    $scope.tasks.unshift($scope.tasks.pop());
    expect($scope.tasks[0].order < $scope.tasks[1].order).toBe(true);
    // run
    var mockEvent = {dest: {index: 0}, source: {index: $scope.tasks.length - 1}};
    $scope.treeOptions.dropped(mockEvent);
    // verify
    expect($scope.tasks[0].order < $scope.tasks[1].order).toBe(false);
    expect(Task.prototype$updateAttributes).toHaveBeenCalled();
  });

  it('Test  move the first task to the last.', function () {
    spyOn(Task, 'prototype$updateAttributes').and.returnValue({$promise: deferred.promise});
    $scope.tasks.push($scope.tasks.shift());
    expect($scope.tasks[$scope.tasks.length - 1].order > $scope.tasks[$scope.tasks.length - 2].order).toBe(true);
    // run
    var mockEvent = {dest: {index: $scope.tasks.length - 1}, source: {index: 0}};
    $scope.treeOptions.dropped(mockEvent);
    // verify
    expect($scope.tasks[$scope.tasks.length - 1].order > $scope.tasks[$scope.tasks.length - 2].order).toBe(false);
    expect(Task.prototype$updateAttributes).toHaveBeenCalled();
  });

  it('Test move the first task to the middle.', function () {
    spyOn(Task, 'prototype$updateAttributes').and.returnValue({$promise: deferred.promise});
    $scope.tasks.splice(1, 0, $scope.tasks.shift());
    expect($scope.tasks[0].order < $scope.tasks[1].order).toBe(true);
    // run
    var mockEvent = {dest: {index: 1}, source: {index: 0}};
    $scope.treeOptions.dropped(mockEvent);
    // verify
    expect($scope.tasks[0].order > $scope.tasks[1].order).toBe(true);
    expect($scope.tasks[1].order > $scope.tasks[2].order).toBe(true);
    expect(Task.prototype$updateAttributes).toHaveBeenCalled();
  });

  it('Test drag but not change the order.', function () {
    spyOn(Task, 'prototype$updateAttributes').and.returnValue({$promise: deferred.promise});
    var mockEvent = {dest: {index: 0}, source: {index: 0}};
    $scope.treeOptions.dropped(mockEvent);
    expect(Task.prototype$updateAttributes).not.toHaveBeenCalled();
  });

  it('Test delete todo item success.', function () {
    spyOn(Task, 'deleteById').and.returnValue({$promise: deferred.promise});

    $scope.deleteTask(0);
    deferred.resolve();
    $scope.$digest();

    expect($scope.tasks.length).toEqual(mockTasks.length - 1);
    expect($scope.alert).toEqual({});
  });

  it('Test delete todo item failed.', function () {
    spyOn(Task, 'deleteById').and.returnValue({$promise: deferred.promise});

    $scope.deleteTask(0);
    deferred.reject(mockErrorReturn);
    $scope.$digest();

    expect($scope.tasks.length).toEqual(mockTasks.length);
    expect($scope.alert.style).toEqual('alert-danger');
    expect($scope.alert.message).toBeDefined();
  });

  it('Test drag start and stop flag.', function () {
    expect($scope.dragging).toBeFalsy();

    $scope.treeOptions.dragStart();
    expect($scope.dragging).toBeTruthy();

    $scope.treeOptions.dragStop();
    expect($scope.dragging).toBeFalsy();
  });

  it('Test change completion status of task.', function () {
    spyOn(Task, 'update').and.returnValue({$promise: deferred.promise});
    // the verify of click again only work when showing all tasks, because if hide completed task, the first task will not consist.
    $scope.isDisplayCompletedTasks = true;
    var template = $templateCache.get('app/todo/todo.tpl.html');
    var element = $compile(template)($scope);
    $scope.$digest();

    var checkbox = $(element).find('input:checkbox[name="chbTask"]')[0];

    // before click
    expect($scope.tasks[0].isCompleted).toBeFalsy();
    expect($scope.tasks[0].completionTime).toBeUndefined();
    // after click
    checkbox.click();
    expect($scope.tasks[0].isCompleted).toBeTruthy();
    expect($scope.tasks[0].completionTime).toBeGreaterThan(0);
    // click again
    checkbox.click();
    expect($scope.tasks[0].isCompleted).toBeFalsy();
    expect($scope.tasks[0].completionTime).toEqual("");
  });
});
