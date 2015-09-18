/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('mainController', function ($location, $scope, Globals, ngDialog, $rootScope, $cookies, loginService) {

    // create a message to display in our view
    $scope.globals = Globals;
    $scope.isLoggedIn = false;
    if(Globals.isNothing($rootScope.user)){
        loginService.checkIfLoggedIn(
            function(success){
                $rootScope.user = success.data;
            }, function (error) {
                $location.path("/error/" + error.data.errorCode);
            });
    }

    $scope.logout = function(){
        loginService.logout(function(success){
            $rootScope.user = success.data;
            $location.path("/");
        },function(error){

        });
    }

    //ngDialog.open({
    //    template: '<p>Hello World! I am a dialog box!</p>',
    //    plain: true
    //});
});