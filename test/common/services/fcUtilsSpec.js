/**
 * Created by Ting on 2015/5/20.
 */
describe('Test methods in fcUtils.', function () {
  var fcDateUtils;

  beforeEach(module('fcUtils'));
  beforeEach(inject(function (_fcDateUtils_) {
    fcDateUtils = _fcDateUtils_;
  }));

  it('Test fcDateUtils.getTodayTimestampRange().', function () {
    var now = new Date().getTime();
    var todayRange = fcDateUtils.getTodayTimestampRange();
    var oneDayMilliseconds = 24 * 60 * 60 * 1000;

    expect(now).toBeGreaterThan(todayRange.start);
    expect(now).toBeLessThan(todayRange.end);
    expect(todayRange.end - todayRange.start + 1).toEqual(oneDayMilliseconds);
  });

  it('Test fcDateUtils.isInToday()', function () {
    expect(fcDateUtils.isInToday(0)).toBeFalsy();
    expect(fcDateUtils.isInToday(undefined)).toBeFalsy();
    expect(fcDateUtils.isInToday("")).toBeFalsy();
    expect(fcDateUtils.isInToday("nonDateString")).toBeFalsy();
    expect(fcDateUtils.isInToday(new Date())).toBeTruthy();
    expect(fcDateUtils.isInToday(new Date().getTime())).toBeTruthy();
    expect(fcDateUtils.isInToday(new Date().toString())).toBeTruthy();
    var oneDayMilliseconds = 24 * 60 * 60 * 1000;
    expect(fcDateUtils.isInToday(new Date().getTime() + oneDayMilliseconds)).toBeFalsy();
    expect(fcDateUtils.isInToday(new Date().getTime() - oneDayMilliseconds)).toBeFalsy();
  });
});
