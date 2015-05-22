/**
 * Created by Ting on 2015/5/22.
 */
describe('Test fcPomodoroTimer directive.', function () {
  var $scope, $compile, $interval, $templateCache, Member, Task, Pomodoro, messagesContext, deferred, $promise, element;

  var mockPomodoroInProgress = {
    "startTime": new Date(),
    "type": "work",
    "taskId": "555edb9654b34a382d1b1e70",
    "status": "inProgress",
    "duration": 1500000,
    "id": "555edd9554b34a382d1b1e71",
    "memberId": "554c81e5d8404b7007865c2e",
    "created": "2015-05-22T07:41:09.429Z",
    "lastUpdated": "2015-05-22T07:41:09.429Z",
    "task": {
      "title": "Create test case for fcPomodoroTimer directive.",
      "order": 1432280343745,
      "targetTime": "2015-05-21T16:00:00.000Z",
      "id": "555edb9654b34a382d1b1e70",
      "memberId": "554c81e5d8404b7007865c2e",
      "created": "2015-05-22T07:32:38.161Z",
      "lastUpdated": "2015-05-22T07:39:06.124Z",
      "pomodoros": [{
        "startTime": "2015-05-22T07:41:07.061Z",
        "type": "work",
        "taskId": "555edb9654b34a382d1b1e70",
        "status": "inProgress",
        "duration": 1500000,
        "id": "555edd9554b34a382d1b1e71",
        "memberId": "554c81e5d8404b7007865c2e",
        "created": "2015-05-22T07:41:09.429Z",
        "lastUpdated": "2015-05-22T07:41:09.429Z"
      }]
    }
  };

  var mockPomodoroInProgressWithoutTask = {
    "startTime": "2015-05-22T07:41:07.061Z",
    "type": "work",
    "taskId": "555edb9654b34a382d1b1e70",
    "status": "inProgress",
    "duration": 1500000,
    "id": "555edd9554b34a382d1b1e71",
    "memberId": "554c81e5d8404b7007865c2e",
    "created": "2015-05-22T07:41:09.429Z",
    "lastUpdated": "2015-05-22T07:41:09.429Z"
  };

  var mockPomodoroInProgressTimeout = {
    "startTime": "2015-04-22T07:41:07.061Z",
    "type": "work",
    "taskId": "555edb9654b34a382d1b1e70",
    "status": "inProgress",
    "duration": 1500000,
    "id": "555edd9554b34a382d1b1e71",
    "memberId": "554c81e5d8404b7007865c2e",
    "created": "2015-05-22T07:41:09.429Z",
    "lastUpdated": "2015-05-22T07:41:09.429Z",
    "task": {
      "title": "Create test case for fcPomodoroTimer directive.",
      "order": 1432280343745,
      "targetTime": "2015-05-21T16:00:00.000Z",
      "id": "555edb9654b34a382d1b1e70",
      "memberId": "554c81e5d8404b7007865c2e",
      "created": "2015-05-22T07:32:38.161Z",
      "lastUpdated": "2015-05-22T07:39:06.124Z",
      "pomodoros": [{
        "startTime": "2015-04-22T07:41:07.061Z",
        "type": "work",
        "taskId": "555edb9654b34a382d1b1e70",
        "status": "inProgress",
        "duration": 1500000,
        "id": "555edd9554b34a382d1b1e71",
        "memberId": "554c81e5d8404b7007865c2e",
        "created": "2015-05-22T07:41:09.429Z",
        "lastUpdated": "2015-05-22T07:41:09.429Z"
      }]
    }
  };

  beforeEach(module('freeCoderApp'));
  beforeEach(module('templates'));
  beforeEach(inject(function ($rootScope, $controller, $q, _$interval_, _$compile_, _$templateCache_, _Member_, _Task_, _Pomodoro_, _messagesContext_) {
    $scope = $rootScope.$new();
    $interval = _$interval_;
    $compile = _$compile_;
    $templateCache = _$templateCache_;
    Member = _Member_;
    Task = _Task_;
    Pomodoro = _Pomodoro_;
    deferred = $q.defer();
    $promise = {$promise: deferred.promise};
    messagesContext = _messagesContext_;

    spyOn(Member, 'pomodoros').and.returnValue($promise);
    spyOn(Pomodoro, 'finishPomodoro');
    element = $compile('<fc-pomodoro-timer userId="userId"></fc-pomodoro-timer>')($scope);
    //$scope.$digest();
  }));

  it('If in progress pomodoro not time out, start timer and show task information on timer page.', inject(function () {
    deferred.resolve([mockPomodoroInProgress]);
    $scope.$digest(); // now the success callback was called and $interval was initialized.

    $interval.flush(1000);
    expect($(element).find('.fc-pomodoro-timer').text()).not.toEqual('');
    expect($(element).find('.panel-body').text().indexOf(mockPomodoroInProgress.task.title)).toEqual(0);
  }));

  it('If have a in progress pomodoro, but no related task information, will prompt error message.', function () {
    deferred.resolve([mockPomodoroInProgressWithoutTask]);
    $scope.$digest();

    expect($(element).find('.panel-body').text()).toEqual(messagesContext.get('pomodoro.directive.no.task'));
  });

  it('If in progress pomodoro is time out, update it status to finish.', function () {
    deferred.resolve([mockPomodoroInProgressTimeout]);
    $scope.$digest();

    expect(Pomodoro.finishPomodoro).toHaveBeenCalled();
  });

  it('If last work pomodoro is finished, show a new break timer, with start button.', function () {

  });

  it('If last break pomodoro is finished, show a new work timer, with start button.', function () {

  });

  it('If last work pomodoro is finished, and now a break time also past, will show a new work time with start button.', function () {

  });

  it('If user clicks start button, will create a new pomodoro entity.', function () {

  });


});
