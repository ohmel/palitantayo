/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('mainController', function ($scope, Globals, ngDialog, $rootScope, $cookies, loginService) {

    // create a message to display in our view
    $scope.globals = Globals;
    $scope.isLoggedIn = false;
    if(Globals.isNothing($rootScope.user)){
        loginService.checkIfLoggedIn(
            function(success){
                if(success.data.isLoggedIn === true){
                    $rootScope.user = success.data;
                }
            }, function (error) {
                $location.path("/error/" + error.data.errorCode);
            });
    }



    //ngDialog.open({
    //    template: '<p>Hello World! I am a dialog box!</p>',
    //    plain: true
    //});
});