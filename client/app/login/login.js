/**
 * Created by Ting on 2015/5/7.
 */
angular.module('freeCoderApp')
  .controller('loginCtrl', ['$scope', '$rootScope', '$state', '$location', '$timeout', 'Member', 'messagesContext', function ($scope, $rootScope, $state, $location, $timeout, Member, messagesContext) {
    if (Member.isAuthenticated())
      $state.go('dashboard');
    $scope.rememberMe = false;
    $scope.validateRet = {};

    $scope.testJasmine = function () {
      $scope.val = 1;
    };

    // check url parameters for /reset
    if ($location.path() == '/reset') {
      var emailToken = $location.search();
      if (!emailToken || !emailToken.uid || !emailToken.token) {
        $scope.pageErrMessage = messagesContext.get('user.reset.password.link.error');
      }
    }

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
      // For remember me, refer to:
      // http://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK#AngularJSJavaScriptSDK-Persistingtheaccesstoken
      Member.login({rememberMe: $scope.rememberMe}, $scope.member).$promise.then(function (data) {
        $scope.errorMsg = undefined;
        $rootScope.sessionInfo.isLogin = Member.isAuthenticated();
        $state.go('dashboard');
      }, function (error) {
        $scope.errorMsg = error && error.status == '401' ? error.data.error.message : messagesContext.get('common.error.unknown');
      });
    };

    $scope.forgot = function () {
      Member.resetPassword({email: $scope.resetOption.email}, function (successValue, successResp) {
        $scope.validateRet.alertStyle = "alert-success";
        $scope.validateRet.message = messagesContext.get('user.reset.password.email.sent');
      }, function (errorResp) {
        $scope.validateRet.alertStyle = "alert-danger";
        $scope.validateRet.message = messagesContext.get('common.error.occurred');
      });
    };

    $scope.reset = function () {
      $scope.validateRet = {};
      if ($scope.resetOption.password != $scope.resetOption.repeatPassword) {
        $scope.resetForm.repeatPassword.$invalid = true;
        $scope.validateRet.alertStyle = 'alert-danger';
        $scope.validateRet.message = messagesContext.get('user.reset.password.not.same');
      } else {
        $scope.resetForm.repeatPassword.$invalid = false;
        Member.resetPasswordConfirm(emailToken, $scope.resetOption, function (successValue, successResp) {
          $scope.validateRet.alertStyle = 'alert-success';
          $scope.validateRet.message = messagesContext.get('user.reset.password.success');
          Member.logout();
          $timeout(function () {
            $state.go('login');
          }, 3000);
        }, function (errorResp) {
          $scope.validateRet.alertStyle = 'alert-danger';
          $scope.validateRet.message = errorResp.data.error.message;
        })
      }
    }
  }]);
