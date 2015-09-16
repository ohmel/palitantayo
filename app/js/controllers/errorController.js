/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('errorController', function ($scope, Globals, $route, ngNotify) {
    $scope.globals = Globals;
    $scope.errorCode = $route.current.params.errorCode;
    $scope.errorDesc = "";
    $scope.errorMessage = "";
    if($scope.errorCode == 401){
        $scope.errorDesc = "Forbidden Access";
        $scope.errorMessage = "Hmm, you might be trying to access something that is not yours...We will catch you! Bwahahaha!!";
    }
    if($scope.errorCode == 404){
        $scope.errorDesc = "Not Found";
        $scope.errorMessage = "The Information that you are trying to view cannot be found!";
    }
    if($scope.errorCode == 500){
        $scope.errorDesc = "Fatal Error";
        $scope.errorMessage = "Woah! Something is broken! *Crap*";
    }
})
