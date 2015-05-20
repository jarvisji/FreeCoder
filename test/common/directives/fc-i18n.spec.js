/**
 * Created by Ting on 2015/5/20.
 */
describe('Test fcI18n directive.', function () {
  var element, $compile, $rootScope, messagesContext;

  beforeEach(module('freeCoderApp'));
  beforeEach(inject(function (_$compile_, _$rootScope_, _messagesContext_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    messagesContext = _messagesContext_;
  }));

  it('span has text', function () {
    element = $compile('<span fc-i18n="app.name"></span>')($rootScope);
    expect(element.text()).toEqual(messagesContext.get('app.name'));
  });
});
