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

    var follow = function(callback, errback, userId, followingId){
        $http({
            method: 'POST',
            url: url + 'profile/follow',
            data: {
                userId: userId,
                followingId: followingId
            }
        }).success(callback).error(errback);
    };

    var checkIfFollowing = function(callback, errback, userId, followingId){
        $http({
            method: 'GET',
            url: url + 'profile/checkIfFollowing',
            params: {
                userId: userId,
                followingId: followingId
            }
        }).success(callback).error(errback);
    };

    return {
        getProfile: getProfile,
        follow: follow,
    };
});