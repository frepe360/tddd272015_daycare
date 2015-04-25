angular.module('app').factory('dcIdentity', function($window, dcUser) {

    var currentUser;
    if(!!$window.thePersistantUser) {
        currentUser = new dcUser($window.thePersistantUser);
    }

    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        }
    };
});