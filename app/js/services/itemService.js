ptApp.service('itemService', function ($http, Globals) {

    "use strict";
    var url = Globals.remoteRootUrl + "index.php/api/";

    var itemList = function (callback, errback){
        $http({
            method: 'GET',
            url: url + 'site/itemList'
        }).success(callback).error(errback);
    };

    var getUserItems = function (callback, errback, userId){
        $http({
            method: 'GET',
            url: url + 'item/getUserItems',
            params: {
                userId: userId
            }
        }).success(callback).error(errback);
    };

    var postItem = function (callback, errback, item){
        $http({
            method: 'POST',
            url: url + 'site/postItem',
            data: {
                item: item
            }
        }).success(callback).error(errback);
    }

    var item = function (callback, errback, itemId){
        $http({
            method: 'GET',
            url: url + 'site/item',
            params: {
                itemId: itemId
            }
        }).success(callback).error(errback);
    };

    var getImages = function (callback, errback, itemId){
        $http({
            method: 'GET',
            url: url + 'item/getImages',
            params: {
                itemId: itemId
            }
        }).success(callback).error(errback);
    };

    var loadCategories = function (callback, errback){
        $http({
            method: 'GET',
            url: url + 'site/loadCategories',
        }).success(callback).error(errback);
    }

    var featuredItem = function (callback, errback){
        $http({
            method: 'GET',
            url: url + 'item/featuredItem'
        }).success(callback);
    }

    return {
        itemList: itemList,
        getUserItems: getUserItems,
        featuredItem: featuredItem,
        postItem: postItem,
        getImages: getImages,
        loadCategories: loadCategories,
        item: item
    };
});