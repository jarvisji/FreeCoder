/**
 * Created by Ting on 2015/5/15.
 */
describe('Login controller cases.', function () {
  var $rootScope, $scope, $httpBackend, $q, $compile, $templateCache, $timeout, Member, deferred;
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
  var mockRegisterReturn = {
    "email": "a@b.com",
    "verificationToken": "19a8324e674a9070f6df6cfc32a8ac1542ea357d6e5b016ae5e66add9ddb2dcbcbd7c1e79cf921fb54f59ba977f0f17dfa0a75bddd01420a9b81ba964c9b5bdb",
    "id": "55580286369c1a5c2e7396ab"
  };

  beforeEach(module('freeCoderApp'));
  beforeEach(module('templates'));
  beforeEach(inject(function (_$rootScope_, $controller, $state, $location, _$timeout_, messagesContext, $injector) {
    // here demonstrate inject dependency by _name_.
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
    $scope = $rootScope.$new();
    // here demonstrate inject dependencies by $injector, and share them with 'it' by global variables.
    $httpBackend = $injector.get('$httpBackend', '');
    Member = $injector.get('Member', '');
    $q = $injector.get('$q', '');
    $compile = $injector.get('$compile', '');
    $templateCache = $injector.get('$templateCache', '');
    deferred = $q.defer();

    // here demonstrate to use 'this' to share variable with 'it' instead of declare global variable.
    this.$state = $state;
    $rootScope.sessionInfo = {};

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

  /**
   * 1. Check email exists.
   * 2. Check sign up success input box status should no error, and show success message to user.
   * 3. Check sign up failed, show error message to user.
   */
  it('Test sign up success.', function () {
    // mock
    spyOn(Member, 'create').and.returnValue({$promise: deferred.promise});
    var signUpTpl = $templateCache.get('app/login/user-signup.tpl.html');
    $compile(signUpTpl)($scope);

    // run
    $scope.register();
    deferred.resolve(mockRegisterReturn);
    $rootScope.$digest();

    // verify
    expect($scope.memberForm.email.$pristine).toBe(true);
    expect($scope.memberForm.password.$pristine).toBe(true);
    expect($scope.alert.style).toBe('alert-success');
    expect($scope.alert.message).toBeDefined();
  });

  it('Test sign up failed', function () {
    // mock
    spyOn(Member, 'create').and.returnValue({$promise: deferred.promise});

    // run
    $scope.register();
    deferred.reject(
      {
        "name": "ValidationError",
        "status": 422,
        "data": {"error": {"message": "422 error"}}
      });
    $rootScope.$digest();

    // verify
    expect($scope.alert.style).toBe('alert-danger');
    expect($scope.alert.message).toBe('422 error');
  });

  it('Test login success.', function () {
    // mock Member service by $q.
    spyOn(Member, 'login').and.returnValue({$promise: deferred.promise});
    spyOn(Member, 'isAuthenticated').and.returnValue(true);
    spyOn(this.$state, 'go');

    // run testing method
    $scope.login();
    deferred.resolve(mockAccessToken);
    $rootScope.$apply();

    // assert the result.
    expect(Member.login).toHaveBeenCalled();
    expect($rootScope.sessionInfo.isLogin).toBe(true);
    expect(this.$state.go).toHaveBeenCalledWith('dashboard');
  });

  it('Test login failed.', function () {
    // mock Member service by $q.
    spyOn(Member, 'login').and.returnValue({$promise: deferred.promise});
    spyOn(Member, 'isAuthenticated').and.returnValue(false);

    // run testing method
    $scope.login();
    deferred.reject({status: '401', data: {error: {message: 'login failed'}}});
    $rootScope.$apply();

    // assert the result.
    expect($rootScope.sessionInfo.isLogin).toBeUndefined();
    expect($scope.errorMsg).toBe('login failed');
  });

  it('Test forget password success.', function () {
    // mock
    $scope.resetOption = {};
    spyOn(Member, 'resetPassword').and.returnValue({$promise: deferred.promise});

    // run
    $scope.forgot();
    deferred.resolve({});
    $rootScope.$apply();

    // verify
    expect($scope.alert.style).toBe('alert-success');
    expect($scope.alert.message).toBeDefined();
  });

  it('Test forget password failed.', function () {
    // mock
    $scope.resetOption = {};
    spyOn(Member, 'resetPassword').and.returnValue({$promise: deferred.promise});

    // run
    $scope.forgot();
    deferred.reject({});
    $rootScope.$apply();

    // verify
    expect($scope.alert.style).toBe('alert-danger');
    expect($scope.alert.message).toBeDefined();
  });

  it('Test reset password input not same.', function () {
    // mock
    $scope.resetOption = {password: "pass", repeatPassword: "1234"};
    var resetTpl = $templateCache.get('app/login/user-reset.tpl.html');
    $compile(resetTpl)($scope);
    // run
    $scope.reset();
    $rootScope.$apply();

    // verify
    expect($scope.alert.style).toBe('alert-danger');
    expect($scope.alert.message).toBeDefined();
  });

  it('Test reset password success.', function () {
    // mock
    $scope.resetOption = {password: "pass", repeatPassword: "pass"};
    var resetTpl = $templateCache.get('app/login/user-reset.tpl.html');
    $compile(resetTpl)($scope);
    spyOn(Member, 'resetPasswordConfirm').and.returnValue({$promise: deferred.promise});
    spyOn(Member, 'logout');
    spyOn(this.$state, 'go');

    // run
    $scope.reset();
    deferred.resolve({});
    $rootScope.$apply();
    $timeout.flush();

    // verify
    expect($scope.alert.style).toBe('alert-success');
    expect($scope.alert.message).toBeDefined();
    expect(Member.logout).toHaveBeenCalled();
    expect(this.$state.go).toHaveBeenCalledWith('login');
  });

  it('Test reset password failed.', function () {
    // mock
    $scope.resetOption = {password: "pass", repeatPassword: "pass"};
    var resetTpl = $templateCache.get('app/login/user-reset.tpl.html');
    $compile(resetTpl)($scope);
    spyOn(Member, 'resetPasswordConfirm').and.returnValue({$promise: deferred.promise});

    // run
    $scope.reset();
    deferred.reject({data: {error: {message: 'error'}}});
    $rootScope.$apply();

    // verify
    expect($scope.alert.style).toBe('alert-danger');
    expect($scope.alert.message).toBe('error');
  });
});
