angular.module('app').controller('dcSignupCtrl', function($scope, dcUser) {
    console.log('Trying to create a new user from dcUser');
    var newUser = new dcUser();
    console.log(newUser);

    $scope.signup = function() {
        console.log('User tried to sign up');
        newUser.$save().then(function() {
            console.log('The save thing seem to have worked');
        }, function(reason) {
            console.log('Nope, creating a new user did not work...');
            console.log(reason);
        });
    }
});
