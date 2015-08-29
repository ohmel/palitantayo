/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('profileController', function ($scope, Globals, $route) {
    $scope.tooltipMessage = "Description Goes Here sdaf s sdf sdf sf saf sf sdf sdafsdafsdf asdfsda fsd adf sdf";
    $scope.globals = Globals;
    $scope.route = $route.current.params;

})
