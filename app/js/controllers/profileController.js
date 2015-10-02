/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('profileController', function ($rootScope, $location, $scope, Globals, $route, ngNotify, profileService, itemService, commentService) {
    $scope.globals = Globals;
    $scope.route = $route.current.params;
    $scope.profileService = profileService;
    $scope.itemService = itemService;
    $scope.comments = [];
    $scope.commentMo = "";
    $scope.following = false;
    $scope.pageLoaded = false;



    $scope.postComment = function (commentMessage) {
        $scope.commentMo = commentMessage;
        commentService.postComment(
            function (success) {
                if (Globals.isNothing($scope.comments) === true) {
                    commentService.getComments(
                        function (success) {
                            $scope.comments = success.data;
                        }, function (error) {
                            ngNotify.set(error.message, 'error')
                        }, $scope.route.userId, 'user');
                } else {
                    $scope.comments.push(success.data);
                }
                $scope.commentMo = "";
            }, function (error) {
                ngNotify.set(error.message, 'error');
            }, $scope.commentMo, $scope.route.userId, 'user'
        );
    }

    $scope.follow = function () {
        var followerId = $rootScope.user.userId;
        var followedId = $scope.profile.user_id;
        profileService.follow(
            function (success) {
                $scope.following = success.data;
            }, function (error) {
                ngNotify.set(error.message, 'error')
            }, followedId, followerId
        );
    };

    commentService.getComments(
        function (success) {
            $scope.comments = success.data;
        }, function (error) {
            ngNotify.set(error.message, 'error');
        }, $scope.route.userId, 'user');

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
                profileService.checkIfFollowing(
                    function (success) {
                        $scope.following = success.data;
                        $scope.pageLoaded = true;
                    }, function (error) {
                        ngNotify.set(error.message, 'error')
                    }, $scope.route.userId, $rootScope.user.userId
                )
            }, function (error) {
                $location.path("/error/" + error.data.errorCode);
            }, $scope.route.userId);
    }
    $scope.editProfile = function () {
        $location.path("/editProfile/" + $scope.route.userId);
    };


});
