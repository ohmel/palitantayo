/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('itemsController', function ($scope, Globals, itemService, profileService) {
    $scope.tooltipMessage = "Description Goes Here sdaf s sdf sdf sf saf sf sdf sdafsdafsdf asdfsda fsd adf sdf";
    $scope.globals = Globals;
    $scope.itemService = itemService;
    $scope.profileService = profileService;
    $scope.slides = [
        {image: $scope.globals.rootUrl+'app/images/featured/f1.gif', description: 'Image 00'},
        {image: $scope.globals.rootUrl+'app/images/logo2.png', description: 'Image 01'},
        {image: $scope.globals.rootUrl+'app/images/logo.jpg', description: 'Image 01'},
    ];

    $scope.items = [];

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

    itemService.itemList(
        function (success) {
            $scope.items = success.data;
        }, function (error) {
            //ngNotify.set(error.message, 'error');
        }
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