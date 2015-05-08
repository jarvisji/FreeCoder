/**
 * Created by Ting on 2015/5/7.
 */
angular.module('app')
  .controller('MemberController', ['$scope', '$state', 'Member', function ($scope, $state, Member) {
    $scope.members = [];

    console.log($state);
    $scope.addUser = function () {
      Member.create($scope.newUser).$promise.then(function (member) {
        $scope.newUser = '';
        $scope.result = "success:" + member.id;
        $scope.memberForm.email.$setPristine();
        $scope.memberForm.password.$setPristine();
        $('.focus').focus();
      });
    };

    $scope.login = function () {
      Member.login($scope.member).$promise.then(function (data) {
        $state.go('home');
      }, function (error) {
        if (error && error.status == '401') {
          $scope.errorMsg = error.data.error.message;
        } else {
          $scope.errorMsg = "Unknown error.";
        }
      });
    }
  }]);
