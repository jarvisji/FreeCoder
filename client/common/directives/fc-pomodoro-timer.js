/**
 * This is a directive to display timer of pomodoro.
 * Created by Ting on 2015/5/21.
 */
angular.module('freeCoderApp')
  .directive('fcPomodoroTimer', function ($interval, $log, Member, Pomodoro, messagesContext) {
    return {
      restrict: 'E',
      template: '<span></span>',
      link: function (scope, element, attr) {
        console.log(arguments);
        var timer, startTs;
        var userId = attr.userId || Member.getCurrentId();
        Member.pomodoros({id: userId, filter: {where: {status: 'inProgress'}}}, function (value, respHeader) {
          //value = [{startTime: new Date().getTime() - 60000, duration: 60000}];
          if (value.length == 0) {
            element.text(messagesContext.get('pomodoro.directive.no.active'));
          } else {
            console.log('pomodoro task: ', pomodoro.task);
            handlePomodoro(value[0]);
          }
        }, function (errResp) {
          console.log(errResp);
        });

        var handlePomodoro = function (pomodoro) {
          var now = new Date().getTime();
          var pomodoroEndTime = pomodoro.startTime + pomodoro.duration;
          var remainDuration = Number.parseInt((pomodoroEndTime - now) / 1000);
          console.log('remainDuration:', now, pomodoroEndTime, remainDuration);
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
            element.text(timeStr);
            if (remainDuration == 0) {
              stopTimer();
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
          return minutes + " : " + seconds;
        };

        scope.$on('$destroy', function () {
          // Make sure that the interval is destroyed too
          stopTimer();
        });
      }
    }
  });
