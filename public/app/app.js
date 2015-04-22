angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: 'partials/main/main', controller: 'dcMainCtrl'})
        .when('/faq', { templateUrl: 'partials/faq/faq', controller: 'dcFaqCtrl'})
});

angular.module('app').controller('dcMainCtrl', function($scope) {
    $scope.testvar = 'this is a test variable to make sure the controller works';
});

angular.module('app').controller('dcFaqCtrl', function($scope) {

});

angular.module('app').controller('dcNavBarLoginCtrl', function($scope, $http) {
    $scope.userAuthenticated = false;
    $scope.signin = function(username, password) {
        console.log('Sending POST to /login with username: ' + username + ' and password ' + password);
        $http.post('/login', {username: username, password: password}).then(function() {
            console.log('Successfully logged in!');
            $scope.userAuthenticated = true;
        },
        function() {
            console.log('Login failed!')
            $scope.userAuthenticated = false;
        });
    }
});
