angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'partials/main', controller: 'mainCtrl'})
});

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.testvar = 'this is a test variable to make sure the controller works';
});

