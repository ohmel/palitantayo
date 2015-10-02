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
                if(success.data == true){
                    $location.path("/" + error.data.errorCode);
                    ngNotify.set('Registration successful', 'success');
                }

            }, function(error){
                ngNotify.set('There was an error on your registration', 'error');
            }, registerForm
        );
    }
});
