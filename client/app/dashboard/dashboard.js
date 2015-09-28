/**
 * Created by Ting on 2015/5/8.
 */
angular.module('freeCoderApp')
  .controller('dashboardCtrl', ['$scope', '$rootScope', '$state', 'Member', 'messagesContext', function ($scope, $rootScope, $state, Member, messagesContext) {
    $scope.pageHead = messagesContext.get('dashboard.page.header');
  }]);
