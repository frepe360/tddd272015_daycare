angular.module('app').controller('dcSignupCtrl', function($scope, dcUser, $location) {
    console.log('Trying to create a new user from dcUser');

    $scope.signup = function() {
        var newUser = {
            firstName: $scope.firstname,
            lastName: $scope.lastname,
            username: $scope.email,
            password: $scope.password
        }
        var newUser = new dcUser(newUser);
        console.log(newUser);

        newUser.$save().then(function() {
            console.log('User created!');
            $location.path('/');
        }, function(reason) {
            console.log('User creation failed!');
            console.log('TODO: Add some kind of notification why registration failed');
            console.log(reason);
        });
    }
});
