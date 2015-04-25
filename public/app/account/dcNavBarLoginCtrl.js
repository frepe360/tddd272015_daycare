angular.module('app').controller('dcNavBarLoginCtrl', function($scope, $http, $window, dcUser, dcIdentity) {
    $scope.identity = dcIdentity;
    $scope.signin = function(username, password) {
        $http.post('/login', {username: username, password: password}).then(function(res) {
                dcIdentity.currentUser = new dcUser(res.data);
            },
            function() {
                console.log('Login failed');
            });
    };

    $scope.signout = function() {
        $http.post('/logout').then(function() {
            $scope.username = "";
            $scope.password = "";
            $scope.identity.currentUser = undefined;
        });
    };
});
