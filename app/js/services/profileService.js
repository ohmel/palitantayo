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

    var follow = function(callback, errback, followedId, followerId){
        $http({
            method: 'POST',
            url: url + 'profile/follow',
            data: {
                followedId: followedId,
                followerId: followerId
            }
        }).success(callback).error(errback);
    };

    var checkIfFollowing = function(callback, errback, followedId, followerId){
        $http({
            method: 'GET',
            url: url + 'profile/checkIfFollowing',
            params: {
                followedId: followedId,
                followerId: followerId
            }
        }).success(callback).error(errback);
    };

    return {
        getProfile: getProfile,
        checkIfFollowing: checkIfFollowing,
        follow: follow,
    };
});