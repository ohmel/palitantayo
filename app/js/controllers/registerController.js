/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('registerController', function ($scope, Globals, itemService, profileService, $route, ngNotify) {
    $scope.itemService = itemService;
    $scope.globals=Globals;
    $scope.registerForm = {
    };

    $scope.register = function(registerForm){
        profileService.register(
            function(success){
                ngNotify.set('REgistration successful', 'success');
            }, function(error){
                ngNotify.set('There was an error on your registration', 'error');
            }, registerForm
        );
    }
});
