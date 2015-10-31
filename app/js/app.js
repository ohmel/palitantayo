/**
 * Created by Ohmel on 7/29/2015.
 */
// app.js

// create the module and name it scotchApp
var ptApp = angular.module('ptApp', ['angularFileUpload', 'ngRoute', 'ngAnimate', 'ngDialog', 'ngNotify', 'ngCookies', 'ui.bootstrap', 'ngMessages']);
ptApp.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);
ptApp.run(['$rootScope', '$location', 'loginService', function ($rootScope, $location, loginService, Globals) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
        //console.log(next);
        //console.log($rootScope.user.isLoggedIn);
        if (next.access !== undefined) {
            if (next.access.requiresLogin === true) {
                if($rootScope.user == undefined){
                    $location.path('/error/401');
                }
                if($rootScope.user.isLoggedIn !== true){
                    $location.path('/error/401');
                }
                if (next.access.isOwned !== undefined && next.access.isOwned === true) {
                    if ($rootScope.user.userId != next.params.userId) {
                        $location.path('/error/401');
                    }
                }
            }
        }
    })
}])
// create the controller and inject Angular's $scope
