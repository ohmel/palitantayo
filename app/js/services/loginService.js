ptApp.service('loginService', function ($http, Globals) {

    "use strict";
    var url = Globals.remoteRootUrl + "index.php/api/";
    var test = function (callback, errback) {
        $http({
            method: 'GET',
            url: url + 'site/test'
        }).success(callback).error(errback);
    };
    var login = function (callback, errback, user){
        $http({
            method: 'POST',
            url: url + 'site/login',
            data: user
        }).success(callback).error(errback);
    }


    return {
        test: test,
        login: login
    };
});