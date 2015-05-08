/**
 * Created by Ting on 2015/5/7.
 */
angular.module('app')
  .controller('MemberController', ['$scope', '$state', 'Member', function ($scope, $state, Member) {
    $scope.users = [];

    $scope.addUser = function () {
      Member.create($scope.newUser).$promise.then(function (member) {
        $scope.newUser = '';
        $scope.result = "success:" + member.id;
        $scope.userForm.email.$setPristine();
        $scope.userForm.password.$setPristine();
        $('.focus').focus();
      });
    };
  }]);
