angular.module('app').factory('dcUser', function($resource) {
    var UserResource = $resource('/api/users/:id', {_id: '123'});

    return UserResource;
});