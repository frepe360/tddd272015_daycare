angular.module('app').controller('dcSignupCtrl', function($scope, dcUser, $location, dcIdentity) {
    $scope.signup = function() {
        var newUserData = {
            firstName: $scope.firstname,
            lastName: $scope.lastname,
            username: $scope.email,
            password: $scope.password
        };
        var newUser = new dcUser(newUserData);

        newUser.$save().then(function() {
            dcIdentity.currentUser = newUser;
            $location.path('/');
        }, function(reason) {
            console.log('User creation failed!');
            console.log('TODO: Add some kind of notification why registration failed');
            console.log(reason);
        });
    }
});
