ptApp.service('commentService', function ($http, Globals) {

    "use strict";
    var url = Globals.remoteRootUrl + "index.php/api/";

    var postComment = function (callback, errback, comment, parentId, commentType){
        $http({
            method: 'POST',
            url: url + 'comment/postComment',
            data: {
                comment: comment
            },
            params: {
                commentType: commentType,
                parentId: parentId
            }
        }).success(callback).error(errback);
    };

    var getComments = function (callback, errback, id, commentType){
        $http({
            method: 'GET',
            url: url + 'comment/getComments',
            params: {
                parentId: id,
                commentType: commentType
            }
        }).success(callback).error(errback);
    };

    return {
        getComments: getComments,
        postComment: postComment
    };
});