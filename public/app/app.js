angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: 'partials/main', controller: 'dcMainCtrl'})
        .when('/faq', { templateUrl: 'partials/faq', controller: 'dcFaqCtrl'})
});

angular.module('app').controller('dcMainCtrl', function($scope) {
    $scope.testvar = 'this is a test variable to make sure the controller works';
});

angular.module('app').controller('dcFaqCtrl', function($scope) {
    $scope.testvar = 'this is a faq variable to make sure the controller works';
});
