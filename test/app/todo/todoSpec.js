/**
 * Created by Ting on 2015/5/18.
 */
describe('Todo controller cases.', function () {
  var $scope, $compile, $templateCache, Task, Member, messagesContext, deferred;
  var mockTasks = [
    {
      "title": "This is the first task.",
      "created": "2015-05-18T07:45:44.509Z",
      "lastUpdated": "2015-05-18T07:45:44.509Z",
      "id": "555998a87ed9b4bc26dca7ce",
      "memberId": "554c81e5d8404b7007865c2e"
    },
    {
      "title": "Buy something for wife's birthday.",
      "created": "2015-05-18T07:45:48.699Z",
      "lastUpdated": "2015-05-18T07:45:48.699Z",
      "id": "555998ac7ed9b4bc26dca7cf",
      "memberId": "554c81e5d8404b7007865c2e"
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

  beforeEach(module('freeCoderApp'));
  beforeEach(module('templates'));
  beforeEach(inject(function ($rootScope, $controller, $q, _$compile_, _$templateCache_, _Task_, _Member_, _messagesContext_) {
    $scope = $rootScope.$new();
    $compile = _$compile_;
    $templateCache = _$templateCache_;
    Task = _Task_;
    Member = _Member_;
    messagesContext = _messagesContext_;
    deferred = $q.defer();

    $controller('todoCtrl', {
      $scope: $scope,
      Member: Member,
      Task: Task,
      messagesContext: messagesContext
    })
  }));

  it('Test create todo item success.', function () {
    // verify before
    expect($scope.tasks).toEqual([]);
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
    expect($scope.tasks.length).toEqual(1);
  });

  it('Test create todo item failed.', function () {
    // mock
    $scope.newTask = mockTasks[0];
    spyOn(Task, 'create').and.returnValue({$promise: deferred.promise});
    //var template = $templateCache.get('app/todo/todo.tpl.html');
    //$compile(template)($scope);

    // run
    $scope.createTask();
    deferred.reject(mockErrorReturn);
    $scope.$digest();

    // verify after
    expect($scope.newTask).toEqual(mockTasks[0]);
    expect($scope.tasks.length).toEqual(0);
    expect($scope.alert.style).toEqual('alert-danger');
    expect($scope.alert.message).toBeDefined();
  });

  it('Test uiText of todo page.', function () {
    expect($scope.uiText).toBeDefined();
    expect($scope.uiText).not.toEqual({});
  });

  it('Test list of todo items.', function () {

  });

  it('Test blank list of todo items.', function () {

  });

  it('Test delete todo item success.', function () {

  });

  it('Test delete todo item failed.', function () {

  });
});
