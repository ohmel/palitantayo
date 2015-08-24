/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('loginController', function ($scope, Globals, ngDialog, ngNotify, loginService) {

    // create a message to display in our view
    $scope.globals = Globals;
    $scope.user = {};
    $scope.perms = []

    loginService.test(
        function (success) {
            $scope.resp = success.data;
        }, function (error) {
            //ngNotify.set(error.message, 'error');
        }
    );

    $scope.login = function () {
        //alert("ASDf");
        if ($scope.globals.isNothing($scope.user) || $scope.user.length === 0) {
            ngDialog.open({
                template: '<p>Please put login details!</p>',
                plain: true
            });
        } else {
            loginService.login(
                function (success) {
                    $scope.perms = success.data;
                    ngDialog.open({
                        template: "<p>YES YOU'RE LOGGED IN!</p>",
                        plain: true
                    });
                    $scope.user = {};
                }, function (error) {
                    ngNotify.set(error.message, 'error')
                    $scope.user = {};
                }, $scope.user);

        }
    }

});