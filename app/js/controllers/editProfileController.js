/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('editProfileController', function ($location, $rootScope, $scope, Globals, $route, ngNotify, profileService) {
    if($rootScope.user.userId != $route.current.params.userId){
        $location.path("/error/" + 401);
    }else{

    }
})
