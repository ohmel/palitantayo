/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('profileController', function ($location, $scope, Globals, $route, ngNotify, profileService, itemService) {
    $scope.tooltipMessage = "Description Goes Here sdaf s sdf sdf sf saf sf sdf sdafsdafsdf asdfsda fsd adf sdf";
    $scope.globals = Globals;
    $scope.route = $route.current.params;
    $scope.profileService = profileService;
    $scope.itemService = itemService;
    //$scope.profile = {};
    //$scope.items = [];

    if (Globals.isNothing($scope.profile) == true) {
        profileService.getProfile(
            function (success) {
                $scope.profile = success.data;
            }, function (error) {
                $location.path("/error/" + error.data.errorCode);
            }, $scope.route.userId);
    }

    if (Globals.isNothing($scope.items) == true) {
        itemService.getUserItems(
            function (success) {
                $scope.items = success.data;
            }, function (error) {
                $location.path("/error/" + error.data.errorCode);
            }, $scope.route.userId);
    }


})
