/**
 * This is a directive to display timer of pomodoro.
 * Created by Ting on 2015/5/21.
 */
angular.module('freeCoderApp')
  .directive('fcPomodoroTimer', function ($interval, $log, Member, Pomodoro, messagesContext) {
    return {
      restrict: 'E',
      templateUrl: 'common/directives/fc-pomodoro-timer.tpl.html',
      link: function (scope, element, attr) {
        $log.debug('fcPomodoroTimer:', arguments);
        var timer, startTs, pomodoro;
        var userId = attr.userId || Member.getCurrentId();
        Member.pomodoros({
          id: userId,
          filter: {where: {status: 'inProgress'}, include: {task: 'pomodoros'}}
        }).$promise.then(function (value, respHeader) {
            $log.debug('Query in progress pomodoro: ', value);
            if (value.length == 0) {
              element.text(messagesContext.get('pomodoro.directive.no.active'));
            } else {
              pomodoro = value[0];
              if (!pomodoro.task) {
                $(element).find('.panel-body').text(messagesContext.get('pomodoro.directive.no.task'));
              } else {
                $(element).find('.panel-body').text(pomodoro.task.title + ' (' + pomodoro.task.pomodoros.length + 'Pomodoros)');
              }
              handlePomodoro();
            }
          }, function (errResp) {
            console.log(errResp);
          });

        var handlePomodoro = function () {
          var now = new Date().getTime();
          var pomodoroEndTime = Date.parse(pomodoro.startTime) + pomodoro.duration;
          var remainDuration = Number.parseInt((pomodoroEndTime - now) / 1000);
          $log.debug('handlePomodoro. now, pomodoroEndTime, remainDuration:', now, pomodoroEndTime, remainDuration);
          if (remainDuration > 1) {
            // continue timer
            startTimer(remainDuration);
          } else {
            // finish the timeout pomodoro
            $log.debug('Pomodoro timeout, update status to finished.');
            Pomodoro.finishPomodoro({id: pomodoro.id});
          }
        };

        var startTimer = function (remainDuration) {
          if (angular.isDefined(timer))
            return;

          startTs = new Date().getTime();
          $log.debug('Timer started. duration: ', remainDuration);
          timer = $interval(function () {
            remainDuration = remainDuration - 1;
            var timeStr = formatDuration(remainDuration);
            $(element).find('.fc-pomodoro-timer').text(timeStr);
            if (remainDuration == 0) {
              stopTimer();
              $log.debug('Pomodoro time up, update status to finished.');
              Pomodoro.finishPomodoro({id: pomodoro.id});
            }
          }, 1000);
        };

        var stopTimer = function () {
          if (angular.isDefined(timer)) {
            $interval.cancel(timer);
            timer = undefined;
            var realTs = new Date().getTime() - startTs;
            $log.debug('Timer stopped. real spend time (ms): ', realTs);
          }
        };

        var formatDuration = function (duration) {
          if (isNaN(duration)) {
            $log.error('duration is not number:', duration);
          } else {
            var minutes = Math.floor(duration / 60);
            var seconds = duration % 60;
            return getTimeString(minutes, seconds);
          }
        };

        // for test, easy to get text and compare with element.
        var getTimeString = function (minutes, seconds) {
          var minutesStr = minutes < 10 ? '0' + minutes : '' + minutes;
          var secondsStr = seconds < 10 ? '0' + seconds : '' + seconds;
          return minutesStr + " : " + secondsStr;
        };

        scope.$on('$destroy', function () {
          // Make sure that the interval is destroyed too
          stopTimer();
        });
      }
    }
  });
