/**
 * Created by Ting on 2015/5/12.
 */
angular.module('freeCoderApp')
  .controller('userProfileCtrl', ['$scope', '$state', '$log', 'Member', 'messagesContext', function ($scope, $state, $log, Member, messagesContext) {
    $scope.pageHead = messagesContext.get('user.profile.page.header');
    $scope.pageHeadDesc = messagesContext.get('user.profile.page.sub.header');
    $scope.member = undefined;
    $scope.changePasswordOption = undefined;
    $scope.changePasswordResult = {};

    var getCurrentMember = function () {
      Member.findById({'id': Member.getCurrentId()}, function (data) {
        $scope.member = data;
      }, function (error) {
        console.log(error);
      });
    };

    getCurrentMember();

    $scope.updateMember = function () {
      console.log($scope.member);

    };

    $scope.updatePassword = function () {
      if ($scope.changePasswordOption) {
        $scope.changePasswordResult = {};
        Member.changePassword($scope.changePasswordOption, function (successRes) {
          $scope.changePasswordResult.alertStyle = "alert-success";
          $scope.changePasswordResult.message = messagesContext.get('user.profile.changePassword.success');
        }, function (errorRes) {
          $scope.changePasswordResult.alertStyle = "alert-danger";
          $scope.changePasswordResult.message = messagesContext.get('common.error.occurred', {msg: errorRes.data.error.message});
        });
      }
    };

  }]);
