angular.module('app').controller('dcNavBarLoginCtrl', function($scope, $http) {
    $scope.userAuthenticated = false;
    $scope.signin = function(username, password) {
        console.log('Sending POST to /login with username: ' + username + ' and password ' + password);
        $http.post('/login', {username: username, password: password}).then(function() {
                $scope.userAuthenticated = true;
            },
            function() {
                $scope.userAuthenticated = false;
            });
    };

    $scope.signout = function() {
        $http.post('/logout').then(function() {
            $scope.username = "";
            $scope.password = "";
            $scope.userAuthenticated = false;

        });
    };
});
