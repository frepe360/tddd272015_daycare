angular.module('app').controller('dcNavBarLoginCtrl', function($scope, $http, $window) {
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
        if(!!$window) {
            console.log('This is someVar: ' + $window);
        } else {
            console.log('There was no someVar');
        }
        $http.post('/logout').then(function() {
            $scope.username = "";
            $scope.password = "";
            $scope.userAuthenticated = false;

        });
    };
});
