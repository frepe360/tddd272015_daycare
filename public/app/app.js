angular.module('app', ['ngRoute']);

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.testvar = 'this is a test variable to make sure the controller works';
});