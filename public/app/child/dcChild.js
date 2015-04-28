angular.module('app').factory('dcChild', function($resource) {
    var ChildResource = $resource('/api/children/');

    return ChildResource;
});