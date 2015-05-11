/**
 * Created by Ting on 2015/5/7.
 */
angular.module('freeCoderApp')
  .controller('loginCtrl', ['$scope', '$state', 'Member', function ($scope, $state, Member) {
    $scope.addUser = function () {
      Member.create($scope.newUser).$promise.then(function (member) {
        $scope.newUser = '';
        $scope.result = "success:" + member.id;
        $scope.memberForm.email.$setPristine();
        $scope.memberForm.password.$setPristine();
        $('.focus').focus();
        $scope.errorMsg = undefined;
      }, function (error) {
        if (error && error.status == '422') {
          $scope.errorMsg = error.data.error.message;
        } else {
          $scope.errorMsg = "Unknown error.";
        }
      });
    };

    $scope.login = function () {
      Member.login($scope.member).$promise.then(function (data) {
        $scope.errorMsg = undefined;
        $state.go('dashboard');
      }, function (error) {
        if (error && error.status == '401') {
          $scope.errorMsg = error.data.error.message;
        } else {
          $scope.errorMsg = "Unknown error.";
        }
      });
    }
  }]);
