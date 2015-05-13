/**
 * Created by Ting on 2015/5/7.
 */
angular.module('freeCoderApp')
  .controller('loginCtrl', ['$scope', '$rootScope', '$state', 'Member', 'messagesContext', function ($scope, $rootScope, $state, Member, messagesContext) {

    if (Member.isAuthenticated())
      $state.go('dashboard');

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
        $rootScope.sessionInfo.isLogin = Member.isAuthenticated();
        $state.go('dashboard');
      }, function (error) {
        $scope.errorMsg = error && error.status == '401' ? error.data.error.message : messagesContext.get('common.error.unknown');
      });
    }
  }]);
