ptApp.service('permissionsService', function ($http, Globals) {

    "use strict";
    var url = Globals.remoteRootUrl + "index.php/api/";
    var perms = [];

    var fetchPerms = function(callback, errback, user){
        $http({
            method: 'GET',
            url: url + 'permission/fetchPerms',
            params: user
        }).success(callback).error(errback);
    }

    return {
        perms: perms,
        fetchPerms: fetchPerms
    };
});