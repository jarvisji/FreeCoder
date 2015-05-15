/**
 * Created by Ting on 2015/5/15.
 */
describe('Login controller cases.', function () {
  var $scope, $httpBackend, createController, Member;
  var mockUser = {
    "email": "jiting@outlook.com",
    "password": "pass",
    "id": "554c81e5d8404b7007865c2e"
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
  beforeEach(inject(function ($rootScope, $controller, $state, $location, $timeout, messagesContext, $injector) {
    $scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend', 'error');
    Member = $injector.get('Member', '');
    $httpBackend.when('GET', 'app/dashboard/dashboard.tpl.html').respond(200, '');
    createController = function () {
      return $controller('loginCtrl', {
        $scope: $scope,
        $rootScope: $rootScope,
        $state: $state,
        $location: $location,
        $timeout: $timeout,
        Member: Member,
        messagesContext: messagesContext
      });
    };
    console.log(Member.isAuthenticated());
    //spyOn(Member, "login").and.callFake(function() {
    //  return 1001;
    //});
  }));

  it('Test login().', function (done) {
    var controller = createController();
    //$httpBackend.flush();
    $httpBackend.expectPOST(/^\/api\/Members\/login.*/, /{.*}/).respond(200, mockAccessToken);

    $scope.member = mockUser;

    Member.login($scope.member).$promise.then(function (data) {
      console.log(data);
    }).catch(function (error) {
      console.log(error);
    }).finally(done);

    console.log(controller);
    //$scope.login();
    $httpBackend.flush();
    console.log($scope);
    expect($scope.errorMsg).not.toEqual(undefined);
  })
});
