/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('registerController', function ($scope, Globals, itemService, $route) {
    $scope.itemService = itemService;
    $scope.globals=Globals;
});
