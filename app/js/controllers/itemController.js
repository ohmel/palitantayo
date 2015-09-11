/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('itemController', function ($scope, Globals, itemService, $route, profileService, ngNotify) {
    $scope.testMessage = "asdfa asfsf asd fasdf adads sd";
    $scope.route = $route.current.params;
    $scope.globals = Globals;
    $scope.slides = [
        {image: $scope.globals.rootUrl+'app/images/items/1.jpg', description: 'Image 00'},
        {image: $scope.globals.rootUrl+'app/images/items/phone.jpeg', description: 'Image 01'},
        {image: $scope.globals.rootUrl+'app/images/items/laptop.png', description: 'Image 01'},
    ];

    $scope.item = {};
    $scope.profile = {};

    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
        $scope.direction = 'left';
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.direction = 'right';
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };



    itemService.item(
        function (success) {
            $scope.item = success.data;
            profileService.getProfile(
                function (success) {
                    $scope.profile = success.data;
                }, function (error) {
                    ngNotify.set(error.message, 'error')
                }, $scope.item.user_id);
        }, function (error) {
            //ngNotify.set(error.message, 'error');
        },
        $scope.route.itemId
    );
})
    .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if (scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done});
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if (scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, {left: startPoint}, {left: 0, onComplete: done});
                }
                else {
                    done();
                }
            }
        };
    });
