angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: 'partials/main/main', controller: 'dcMainCtrl'})
        .when('/faq', { templateUrl: 'partials/faq/faq'})
        .when('/child', { templateUrl: 'partials/child/child', controller: 'dcChildCtrl'})
        .when('/addresslist', { templateUrl: 'partials/addresslist/addresslist'})
        .when('/signup', { templateUrl: 'partials/account/signup', controller: 'dcSignupCtrl'})
});
