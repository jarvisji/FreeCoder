/**
 * Created by Ting on 2015/5/7.
 */
angular.module('freeCoderApp')
  .controller('loginCtrl', ['$scope', '$rootScope', '$state', '$location', '$timeout', 'Member', 'messagesContext', function ($scope, $rootScope, $state, $location, $timeout, Member, messagesContext) {
    $scope.rememberMe = false;
    $scope.alert = {};
    $scope.uiText = {
      placeholderEmail: messagesContext.get('user.forget.email.placeholder'),
      placeholderLoginEmail: messagesContext.get('user.login.email.placeholder'),
      placeholderLoginPassword: messagesContext.get('user.login.password.placeholder'),
      placeholderResetPassword: messagesContext.get('user.reset.password.new'),
      placeholderResetPasswordAgain: messagesContext.get('user.reset.password.again')
    };

    // check url parameters for /reset
    if ($location.path() == '/reset') {
      var emailToken = $location.search();
      if (!emailToken || !emailToken.uid || !emailToken.token) {
        $scope.pageErrMessage = messagesContext.get('user.reset.password.link.error');
      }
    }

    $scope.register = function () {
      Member.create($scope.newUser).$promise.then(function (member) {
        $scope.newUser = '';
        $scope.alert.message = messagesContext.get('user.register.success');
        $scope.alert.style = 'alert-success';
        $scope.memberForm.email.$setPristine();
        $scope.memberForm.password.$setPristine();
      }, function (error) {
        $scope.alert.message = error && error.status == '422' ? error.data.error.message : messagesContext.get('common.error.unknown');
        $scope.alert.style = 'alert-danger';
      });
    };

    $scope.login = function () {
      // For remember me, refer to:
      // http://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK#AngularJSJavaScriptSDK-Persistingtheaccesstoken
      Member.login({rememberMe: $scope.rememberMe}, $scope.member).$promise.then(function (data) {
        if (!data.user.emailVerified) {
          Member.logout();
          $scope.errorMsg = messagesContext.get('user.login.email.not.verified');
        } else {
          $scope.errorMsg = undefined;
          $rootScope.sessionInfo = {isLogin: Member.isAuthenticated()};
          $state.go('dashboard');
        }
      }, function (error) {
        $scope.errorMsg = error && error.status == '401' ? error.data.error.message : messagesContext.get('common.error.unknown');
      });
    };

    $scope.forgot = function () {
      Member.resetPassword({email: $scope.resetOption.email}).$promise.then(function (successValue, successResp) {
        $scope.alert.style = "alert-success";
        $scope.alert.message = messagesContext.get('user.reset.password.email.sent');
      }, function (errorResp) {
        $scope.alert.style = "alert-danger";
        $scope.alert.message = messagesContext.get('common.error.occurred');
      });
    };

    $scope.reset = function () {
      if ($scope.resetOption.password != $scope.resetOption.repeatPassword) {
        $scope.resetForm.repeatPassword.$invalid = true;
        $scope.alert.style = 'alert-danger';
        $scope.alert.message = messagesContext.get('user.reset.password.not.same');
      } else {
        $scope.resetForm.repeatPassword.$invalid = false;
        Member.resetPasswordConfirm(emailToken, $scope.resetOption).$promise.then(function (successValue, successResp) {
          $scope.alert.style = 'alert-success';
          $scope.alert.message = messagesContext.get('user.reset.password.success');
          Member.logout();
          $timeout(function () {
            $state.go('login');
          }, 3000);
        }, function (errorResp) {
          $scope.alert.style = 'alert-danger';
          $scope.alert.message = errorResp.data.error.message;
        });
      }
    };
  }]);
