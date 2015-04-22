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
