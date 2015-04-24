angular.module('app').controller('dcSignupCtrl', function($scope, dcUser) {
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
        }, function(reason) {
            console.log('User creation failed!');
            console.log(reason);
        });
    }
});
