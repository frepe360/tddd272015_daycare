angular.module('app').controller('dcChildCtrl', function($scope, dcIdentity, dcChild) {
    $scope.identity = dcIdentity;

    $scope.createChild = function() {
        var newChildData = {
            firstName: $scope.firstname,
            lastName: $scope.lastname,
            birthdate: $scope.birthdate,
            parents: []
        };
        var newChild = new dcChild(newChildData);

        newChild.$save().then(function() {
            console.log('Child saved!')
        }, function(reason) {
            console.log('Child save failed!');
            console.log('TODO: Add some kind of notification why registration failed');
            console.log(reason);
        });
    }

});