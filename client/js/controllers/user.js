/**
 * Created by Ting on 2015/5/7.
 */
angular.module('app')
  .controller('UserController', ['$scope', '$state', 'User', function ($scope, $state, User) {
    $scope.users = [];

    $scope.addUser = function () {
      User.create($scope.newUser).$promise.then(function (user) {
        $scope.newUser = '';
        $scope.result = "success:" + user.id;
        $scope.userForm.email.$setPristine();
        $scope.userForm.password.$setPristine();
        $('.focus').focus();
      });
    };
  }]);
