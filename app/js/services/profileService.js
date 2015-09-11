ptApp.service('profileService', function ($http, Globals) {

    "use strict";
    var url = Globals.remoteRootUrl + "index.php/api/";
    var getProfile = function (callback, errback, userId) {
        $http({
            method: 'GET',
            url: url + 'profile/getProfile',
            params: {
                userId: userId
            }

        }).success(callback).error(errback);
    };
    return {
        getProfile: getProfile,
    };
});