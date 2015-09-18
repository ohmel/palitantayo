ptApp.service('commentService', function ($http, Globals) {

    "use strict";
    var url = Globals.remoteRootUrl + "index.php/api/";

    var postComment = function (callback, errback){
        $http({
            method: 'POST',
            url: url + 'site/itemList'
        }).success(callback).error(errback);
    };

    var getComments = function (callback, errback, userId){
        $http({
            method: 'GET',
            url: url + 'item/getUserItems',
            params: {
                userId: userId
            }
        }).success(callback).error(errback);
    };

    var item = function (callback, errback, itemId){
        $http({
            method: 'GET',
            url: url + 'site/item',
            params: {
                itemId: itemId
            }
        }).success(callback).error(errback);
    };
    return {
        itemList: itemList,
        getUserItems: getUserItems,
        item: item
    };
});