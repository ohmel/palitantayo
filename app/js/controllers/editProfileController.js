/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('editProfileController', function ($location, $rootScope, $scope, Globals, $route, ngNotify, profileService) {
    $scope.profile={};
    $scope.filterValue = function($event){
        if(isNaN(String.fromCharCode($event.keyCode))){
            $event.preventDefault();
        }else{
            alert("ghghgh");
        }
    };
})
