ptApp.service('itemService', function ($http, Globals) {

    "use strict";
    var url = Globals.remoteRootUrl + "index.php/api/";
    var test = function (callback, errback) {
        $http({
            method: 'GET',
            url: url + 'site/test'
        }).success(callback).error(errback);
    };
    return {
        test: test,
    };
});