/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('editPostController', function (FileUploader, $scope, $rootScope, Globals, itemService, $route, ngNotify, $location) {
    $scope.itemService = itemService;
    $scope.route = $route.current.params;
    $scope.showUpload = false;
    $scope.itemPost = {};
    $scope.categories = [];
    $scope.uploader = new FileUploader({
        url: "/palittayo/index.php/api/item/uploadItem",
        formData: {
            date: $scope.itemPost
        }
    });


    $scope.editItem = function(itemPost){
        $scope.itemPost = itemPost;
        itemService.editItem(
            function(success){
                $scope.itemPost.location = $location.host();
                $scope.itemPost.item_id = success.data;
                $scope.showUpload = true;
            }, function (error){
                ngNotify.set("Something went wrong on your form", "error");
            }, itemPost, $scope.route.itemId
        )
    }

    itemService.item(
        function(success){
            $scope.itemPost = success.data;
        }, function(error){
            ngNotify.set("Can't get Item details...", "error");
        }, $scope.route.itemId
    );

    itemService.loadCategories(
        function(success){
            $scope.categories = success.data;
        }, function (error){

        }
    )
});
