/**
 * Created by Ohmel on 7/29/2015.
 */
// configure our routes
ptApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/js/pages/home.html',
        })
        // route for the about page
        .when('/items', {
            templateUrl : 'app/js/pages/items.html',
            controller  : 'itemsController'
        })
        .when('/item/:itemId', {
            templateUrl : 'app/js/pages/item.html',
            controller  : 'itemController'
        })
        .when('/profile/:userId', {
            templateUrl : 'app/js/pages/profile.html',
            controller  : 'profileController'
        })
        .when('/editProfile/:userId', {
            templateUrl : 'app/js/pages/editProfile.html',
            controller  : 'editProfileController',
            access: {
                requiresLogin: true,
                isOwned: true
            }
        })
        .when('/post', {
            templateUrl : 'app/js/pages/post.html',
            controller  : 'postController',
            //access: {
            //    checkLogin: function(loginService){
            //        var userData =  loginService.checkIfAuthorized();
            //        console.log(userData);
            //        return userData.isLoggedIn;
            //    }
            //
            access: {
                requiresLogin: true
            }
        })
        .when('/register', {
            templateUrl : 'app/js/pages/register.html',
            controller  : 'registerController'
        })
        .when('/error/:errorCode', {
            templateUrl : 'app/js/pages/error.html',
            controller  : 'errorController'
        })
        // route for the contact page
        .when('/login', {
            templateUrl : 'app/js/pages/login.html',
            controller  : 'loginController'
        });

});