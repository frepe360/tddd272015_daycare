angular.module('app').factory('dcUser', function($resource) {
    var UserResource = $resource('/api/users/');

    return UserResource;
});