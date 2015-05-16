/**
 * Created by Ting on 2015/5/15.
 */
describe('Login controller cases.', function () {
  var $rootScope, $scope, $httpBackend, $q, Member;
  var mockLoginOptions = {
    "email": "jiting@outlook.com",
    "password": "pass"
  };
  var mockAccessToken = {
    "id": "01McPy8R0GmmzNJXz04H3nOOXQMJYlXXoA7cVPdAARCvA7XSpfCAhfkga3PNbMLS",
    "ttl": 1209600,
    "created": "2015-05-15T07:20:58.103Z",
    "userId": "554c81e5d8404b7007865c2e",
    "user": {
      "email": "jiting@outlook.com",
      "emailVerified": true,
      "lastUpdated": "2015-05-14T08:45:42.936Z",
      "id": "554c81e5d8404b7007865c2e"
    }
  };

  beforeEach(module('freeCoderApp'));
  beforeEach(inject(function (_$rootScope_, $controller, $state, $location, $timeout, messagesContext, $injector) {
    // here demonstrate inject dependency by _name_.
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    // here demonstrate inject dependencies by $injector, and share them with 'it' by global variables.
    $httpBackend = $injector.get('$httpBackend', '');
    Member = $injector.get('Member', '');
    $q = $injector.get('$q', '');

    // here demonstrate to use 'this' to share variable with 'it' instead of declare global variable.
    this.$state = $state;

    // init controller
    $controller('loginCtrl', {
      $scope: $scope,
      $rootScope: $rootScope,
      $state: $state,
      $location: $location,
      $timeout: $timeout,
      Member: Member,
      messagesContext: messagesContext
    });

    $httpBackend.when('GET', 'app/dashboard/dashboard.tpl.html').respond(200, '');
  }));

  it('Test login success.', function () {
    // mock Member service by $q.
    var memberDeferred = $q.defer();
    spyOn(Member, 'login').and.returnValue({$promise: memberDeferred.promise});
    spyOn(Member, 'isAuthenticated').and.returnValue(true);
    spyOn(this.$state, 'go');

    // run testing method
    $scope.login();
    memberDeferred.resolve(mockAccessToken);
    $rootScope.$apply();

    // assert the result.
    expect(Member.login).toHaveBeenCalled();
    expect($rootScope.sessionInfo.isLogin).toBe(true);
    expect(this.$state.go).toHaveBeenCalledWith('dashboard');
  });

  it('Test login failed.', function () {
    // mock Member service by $q.
    var memberDeferred = $q.defer();
    spyOn(Member, 'login').and.returnValue({$promise: memberDeferred.promise});
    spyOn(Member, 'isAuthenticated').and.returnValue(false);

    // run testing method
    $scope.login();
    memberDeferred.reject({status: '401', data: {error: {message: 'login failed'}}});
    $rootScope.$apply();

    // assert the result.
    expect($rootScope.sessionInfo.isLogin).toBeUndefined();
    expect($scope.errorMsg).toBe('login failed');
  });
});
