/**
 * Created by Ting on 2015/5/7.
 */
angular.module('freeCoderApp')
  .controller('loginCtrl', ['$scope', '$state', 'Member', 'messagesContext', function ($scope, $state, Member, messagesContext) {
    $scope.addUser = function () {
      Member.create($scope.newUser).$promise.then(function (member) {
        $scope.newUser = '';
        $scope.result = "success:" + member.id;
        $scope.memberForm.email.$setPristine();
        $scope.memberForm.password.$setPristine();
        $('.focus').focus();
        $scope.errorMsg = undefined;
      }, function (error) {
        $scope.errorMsg = error && error.status == '422' ? error.data.error.message : messagesContext.get('common.error.unknown');
      });
    };

    $scope.login = function () {
      Member.login($scope.member).$promise.then(function (data) {
        $scope.errorMsg = undefined;
        $state.go('dashboard');
      }, function (error) {
        $scope.errorMsg = error && error.status == '401' ? error.data.error.message : messagesContext.get('common.error.unknown');
      });
    }
  }]);
