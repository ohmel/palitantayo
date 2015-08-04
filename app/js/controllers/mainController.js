/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('mainController', function ($scope, Globals, ngDialog) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.heeh = 'pati main controller damay!';
    $scope.globals = Globals;

    //ngDialog.open({
    //    template: '<p>Hello World! I am a dialog box!</p>',
    //    plain: true
    //});
});