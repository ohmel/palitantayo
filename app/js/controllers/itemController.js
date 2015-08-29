/**
 * Created by Ohmel on 7/29/2015.
 */
ptApp.controller('itemController', function ($scope, Globals, itemService, $route) {
    $scope.testMessage = "asdfa asfsf asd fasdf adads sd";
    $scope.route = $route.current.params;
    $scope.globals = Globals;
    $scope.slides = [
        {image: $scope.globals.rootUrl+'app/images/items/1.jpg', description: 'Image 00'},
        {image: $scope.globals.rootUrl+'app/images/items/phone.jpeg', description: 'Image 01'},
        {image: $scope.globals.rootUrl+'app/images/items/laptop.png', description: 'Image 01'},
    ];

    $scope.items = [
        "Range: 5k - 10k sf hsdj sdkj askf askjfaskj sdf sj asf s askhfj sakf as sdk",
        "Range: 10k - 20k sa s ks asdh fkj hdkjs jka",
        "Range: 11k - 21k asf ea ow ksf aga sad we hls awef hsdk ef bskafbas gberiugl hsfakwd we we hwaeoifh e",
        "Range: 13k - 22k alsf ash grehg fn ghreg 43 jslg ehgs gjbgw l",
        "Range: 12k - 23k asd ghaskg kg ae;ig ;eor aslkn gesigb ejfa;s jgreougegasdt ga",
        "Range: 1211k - 23k ask hsakd hkjsdhf kajsdfb sdkajf ksdjafh sdkj",
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
