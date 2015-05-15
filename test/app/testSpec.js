describe('the first test', function () {
  it('simple it', function () {
    expect(true).toBe(true);
  })
});

describe('the angular test', function () {
  var controller;
  var $scope;

  beforeEach(module('freeCoderApp'));
  beforeEach(inject(function ($rootScope) {
    $scope = $rootScope.$new();
  }));

  it('controller test', inject(function ($controller) {
    $controller('loginCtrl', {$scope: $scope});
    $scope.testJasmine();

    expect($scope.val).toEqual(1);
  }));
});
