/**
 * Created by Ting on 2015/5/20.
 */
angular.module('fcUtils', [])
  .factory('fcDateUtils', function () {
    return {
      getTodayTimestampRange: function () {
        var now = new Date();
        now.setHours(0, 0, 0, 0);
        var startTs = now.getTime();
        now.setHours(23, 59, 59, 999);
        var endTs = now.getTime();
        return {start: startTs, end: endTs};
      },
      /**
       * Check given time is in today or not?
       * @param time
       * @return boolean
       */
      isInToday: function (time) {
        var dTime;
        if (!time) {
          return false;
        }
        if (typeof time == 'string') {
          var parseRet = Date.parse(time);
          if (isNaN(parseRet)) {
            return false;
          } else {
            dTime = parseRet;
          }
        } else if (typeof time == 'number') {
          dTime = new Date(time).getTime();
        } else if (time.constructor.name == 'Date') {
          dTime = time.getTime();
        } else {
          throw new Error('Invalid date:' + time);
        }
        var todayRange = this.getTodayTimestampRange();
        return dTime >= todayRange.start && dTime <= todayRange.end;
      }
    };
  });
