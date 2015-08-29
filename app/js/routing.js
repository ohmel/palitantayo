/**
 * Created by Ohmel on 7/29/2015.
 */
// configure our routes
ptApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/js/pages/home.html',
            controller  : 'mainController'
        })
        // route for the about page
        .when('/items', {
            templateUrl : 'app/js/pages/items.html',
            controller  : 'itemsController'
        })
        .when('/items/:itemId', {
            templateUrl : 'app/js/pages/item.html',
            controller  : 'itemController'
        })
        .when('/profile/:userId', {
            templateUrl : 'app/js/pages/profile.html',
            controller  : 'profileController'
        })
        // route for the contact page
        .when('/login', {
            templateUrl : 'app/js/pages/login.html',
            controller  : 'loginController'
        });
});