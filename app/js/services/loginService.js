ptApp.service('loginService', function ($http, Globals) {

    "use strict";
    var url = Globals.remoteRootUrl + "index.php/api/";

    var user = {};

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
    };

    var checkIfLoggedIn = function(callback, errback){
        $http({
            method: 'GET',
            url: url + 'site/checkLogin'
        }).success(callback).error(errback);
    };

    var logout = function(callback, errback){
        $http({
            method: 'GET',
            url: url + 'site/logout'
        }).success(callback).error(errback);
    };


    return {
        test: test,
        checkIfLoggedIn: checkIfLoggedIn,
        logout: logout,
        login: login
    };
});