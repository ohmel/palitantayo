/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('itemsController', function ($scope, Globals) {
    $scope.tooltipMessage = "Description Goes Here sdaf s sdf sdf sf saf sf sdf sdafsdafsdf asdfsda fsd adf sdf";
    $scope.globals = Globals;
    $scope.slides = [
        {image: $scope.globals.rootUrl+'app/images/featured/f1.gif', description: 'Image 00'},
        {image: $scope.globals.rootUrl+'app/images/logo2.png', description: 'Image 01'},
        {image: $scope.globals.rootUrl+'app/images/logo.jpg', description: 'Image 01'},
    ];

    $scope.items = [
        "Range: 5k - 10k",
        "Range: 10k - 20k",
        "Range: 11k - 21k",
        "Range: 13k - 22k",
        "Range: 12k - 23k",
        "Range: 1211k - 23k",
    ]

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