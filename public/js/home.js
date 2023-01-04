var containerMaxWidth = 1460;
var phoneHeight = window.innerHeight * 0.59;
var phoneWidth = phoneHeight * 0.4957;
var containerInnerMargin = 30;

var animationCandidates = [];
var inViewCandidatesMap = new Map();

function toPxPoint(point) {
    return point[0] + 'px ' + point[1] + 'px';
}

function toCSSPolygon(polArray) {
    return 'polygon(' + polArray.map((x) => toPxPoint(x)).join(',') + ')';
}

function getTargetVisibilityRatio(target) {
    var viewTop = window.pageYOffset;
    var viewBottom = viewTop + window.innerHeight;
    var rect = target.getBoundingClientRect();
    var elementTop = rect.top + viewTop;
    var elementBottom = elementTop + rect.height;

    if (elementTop >= viewBottom || elementBottom <= viewTop) {
        return 0;
    } else if (elementTop <= viewTop && elementBottom >= viewBottom) {
        return 1;
    } else if (elementBottom <= viewBottom) {
        if (elementTop < viewTop) {
            return (elementBottom - viewTop) / window.innerHeight;
        } else {
            return (elementBottom - elementTop) / window.innerHeight;
        }
    } else {
        return (viewBottom - elementTop) / window.innerHeight;
    }
}

function screenPassedRatio(target) {
    var rect = target.getBoundingClientRect();
    var elmTop = rect.top + window.pageYOffset;
    var elmBottom = elmTop + rect.height;

    var pageTop = window.pageYOffset;
    var pageBottom = pageTop + window.innerHeight;

    // var inScreen = (elmTop >= pageTop && elmTop <= pageBottom) || (elmBottom >= pageTop && elmBottom <= pageBottom)
    // || (pageTop >= elmTop && pageTop <= elmBottom);
    var maxScreenPixels =
        rect.height + (window.innerHeight - rect.height) + rect.height;

    var ratio = 1 - (elmBottom - pageTop) / maxScreenPixels;
    return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
}

function runSeeker(it) {
    var oTargetRatio = it.ratioMethod(it.observingTarget);
    var newDuration = it.animationSeeker(it.animation, oTargetRatio);
    if (newDuration !== undefined) {
        if (newDuration >= it.animation.duration) {
            if (it.options.animationOut) {
                it.options.animationOut(it);
            }
        } else if (newDuration < it.animation.duration) {
            if (it.options.animationIn) {
                it.options.animationIn(it);
            }
        }
    }
}

var animationObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            var targetAnims = entry.target.__wooobaAnim;

            if (targetAnims) {
                targetAnims.forEach(function (targetAnim) {
                    if (entry.isIntersecting && targetAnim) {
                        inViewCandidatesMap.set(targetAnim.name, targetAnim);
                    } else {
                        inViewCandidatesMap.delete(targetAnim.name);
                    }

                    if (targetAnim) {
                        // targetAnim.animationSeeker(
                        //     targetAnim.animation,
                        //     targetAnim.ratioMethod(targetAnim.observingTarget)
                        // );
                        runSeeker(targetAnim);
                    }
                });
            }
        });
    },
    { threshold: 0 }
);

function setupAnimation(
    name,
    target,
    observingTarget,
    animationCreator,
    animationSeeker,
    ratioFunction,
    options
) {
    if (!target || !observingTarget || !animationCreator || !animationSeeker) {
        console.error(
            'animation target, animation observingTarget, animation creator function, animation seekerFunction are all required'
        );
    }

    if (!ratioFunction) ratioFunction = getTargetVisibilityRatio;
    if (!options) options = {};

    var newAnim = {
        name: name,
        target: target,
        observingTarget: observingTarget,
        animationSeeker: animationSeeker,
        animation: animationCreator(target),
        ratioMethod: ratioFunction,
        options: options,
    };

    animationObserver.observe(observingTarget);

    animationCandidates.push(newAnim);
    if (observingTarget.__wooobaAnim) {
        observingTarget.__wooobaAnim.push(newAnim);
    } else {
        observingTarget.__wooobaAnim = [newAnim];
    }
}

function performAnimations() {
    var iter = inViewCandidatesMap.values();

    var it;
    while ((it = iter.next().value)) {
        runSeeker(it);
    }
}

function calculateMobilePolygon(
    screenWidth,
    screenHeight,
    containerWidth,
    containerHeight
) {
    /* 
    we need 9 points in our polygon (a frame),
    with inner portion visible 
    */
    var centeredXMargin = (screenWidth - containerWidth) / 2;
    var centeredYMargin = (screenHeight - phoneHeight) / 2;
    var innerSquareLeftStart =
        centeredXMargin + (containerWidth - phoneWidth - containerInnerMargin);
    var innerSquareTop = centeredYMargin;

    var sPoly = [];
    sPoly.push([0, 0]); // 0
    sPoly.push([0, containerHeight]); // 1
    sPoly.push([innerSquareLeftStart, containerHeight]); // 2
    sPoly.push([innerSquareLeftStart, innerSquareTop]); // 3
    sPoly.push([innerSquareLeftStart + phoneWidth, innerSquareTop]); // 4
    sPoly.push([
        innerSquareLeftStart + phoneWidth,
        innerSquareTop + phoneHeight,
    ]); // 5
    sPoly.push([innerSquareLeftStart, innerSquareTop + phoneHeight]); // 6
    sPoly.push([innerSquareLeftStart, containerHeight]); // 7
    sPoly.push([screenWidth, screenHeight]); // 8
    sPoly.push([screenWidth, 0]); // 9

    var innerSquareLeftEnd = screenWidth / 2 - phoneWidth / 2;

    var ePoly = [];
    ePoly.push([0, 0]); // 0
    ePoly.push([0, containerHeight]); // 1
    ePoly.push([innerSquareLeftEnd, containerHeight]); // 2
    ePoly.push([innerSquareLeftEnd, innerSquareTop]); // 3
    ePoly.push([innerSquareLeftEnd + phoneWidth, innerSquareTop]); // 4
    ePoly.push([innerSquareLeftEnd + phoneWidth, innerSquareTop + phoneHeight]); // 5
    ePoly.push([innerSquareLeftEnd, innerSquareTop + phoneHeight]); // 6
    ePoly.push([innerSquareLeftEnd, containerHeight]); // 7
    ePoly.push([screenWidth, screenHeight]); // 8
    ePoly.push([screenWidth, 0]); // 9

    return { start: sPoly, end: ePoly };
}

function createPhoneLevelOneAnimation(target) {
    var polygons = calculateMobilePolygon(
        window.innerWidth,
        window.innerHeight,
        Math.min(window.innerWidth, containerMaxWidth),
        window.innerHeight
    );

    target.style.clipPath = toCSSPolygon(polygons.start);

    return anime({
        targets: target,
        autoplay: false,
        easing: 'easeInOutSine',
        keyframes: [
            { clipPath: toCSSPolygon(polygons.start), duration: 0 }, // start frame
            { clipPath: toCSSPolygon(polygons.end), duration: 2000 }, // end frame
        ],
        duration: 2000,
    });
}

function createHeroTextAnimation(target) {
    target.style.opacity = 1;

    return anime({
        targets: target,
        autoplay: false,
        easing: 'easeInOutSine',
        duration: 1000,
        keyframes: [
            { opacity: 0, duration: 0 },
            { opacity: 1, duration: 530 },
            { opacity: 0.1 },
        ],
    });
}

function seekDefault(animation, ratio) {
    if (animation) {
        var newDur = animation.duration * ratio;
        animation.seek(newDur);
        return newDur;
    }
}

function createPhoneAnimation(target) {
    var screenWidth = window.innerWidth,
        screenHeight = window.innerHeight,
        containerWidth = Math.min(window.innerWidth, containerMaxWidth),
        centeredXMargin = (screenWidth - containerWidth) / 2,
        centeredYMargin = (screenHeight - phoneHeight) / 2;

    var innerSquareLeftStart =
        centeredXMargin + (containerWidth - phoneWidth - containerInnerMargin);
    var innerSquareLeftEnd = screenWidth / 2 - phoneWidth / 2;

    target.style.width = phoneWidth + 'px';
    target.style.height = phoneHeight + 'px';
    target.style.left = innerSquareLeftStart + 'px';
    target.style.top = centeredYMargin + 'px';

    return anime({
        targets: target,
        autoplay: false,
        easing: 'easeInOutSine',
        keyframes: [
            { left: innerSquareLeftStart + 'px', duration: 0 }, // start frame
            {
                left: innerSquareLeftEnd + 'px',
                duration: 2000,
            }, // end frame
        ],
        duration: 2000,
    });
}

function toTargetPercent(width, targetWidth, offset) {
    return ((width + offset) / targetWidth) * 100;
}

function createCircleRevealAnimation(target) {
    let precision = 64;
    let radius = 50;

    var rect = target.getBoundingClientRect();
    var heightOffset = rect.height / 2;
    var widthOffset = rect.width / 2;

    var c = [...Array(precision)].map((_, i) => {
        let a = (-i / (precision - 1)) * Math.PI * 2;
        let x = Math.cos(a) * radius + 0.5;
        let y = Math.sin(a) * radius;
        return `${toTargetPercent(
            x,
            rect.width,
            widthOffset
        )}% ${toTargetPercent(y, rect.height, heightOffset)}%`;
    });

    target.style.clipPath = `polygon(100% 50%, 100% 100%, 0 100%, 0 0, 100% 0, 100% 50%, ${c.join(
        ','
    )})`;

    return anime({
        targets: target,
        autoplay: false,
        easing: 'easeInOutSine',
        keyframes: [
            { scale: 1, duration: 0 }, // start frame
            {
                scale: 45,
                duration: 2000,
            }, // end frame
        ],
        duration: 2000,
    });
}

// create all animations
function createAnimations() {
    setupAnimation(
        'phone-level-one',
        document.getElementById('hero'),
        document.getElementById('observerLevelOne'),
        createPhoneLevelOneAnimation,
        seekDefault,
        screenPassedRatio,
        {
            animationOut: function (it) {
                it.target.style.display = 'none';
            },
            animationIn: function (it) {
                it.target.style.display = 'flex';
            },
        }
    );

    var circleCutRevealer = document.getElementById('circleCut');

    setupAnimation(
        'phone',
        document.getElementById('playViewer'),
        document.getElementById('observerLevelOne'),
        createPhoneAnimation,
        seekDefault,
        screenPassedRatio,
        {
            animationOut: function (it) {
                it.target.style.display = 'none';
                circleCutRevealer.style.display = 'flex';
            },
            animationIn: function (it) {
                it.target.style.display = 'flex';
                circleCutRevealer.style.display = 'none';
            },
        }
    );

    setupAnimation(
        'hero-text',
        document.getElementById('heroText'),
        document.getElementById('heroText').querySelector('h1.clr-black'),
        createHeroTextAnimation,
        seekDefault,
        screenPassedRatio
    );

    var menuWrapper = document.querySelector('.menu-wrapper');
    setupAnimation(
        'circle-reveal',
        document.getElementById('circleCut'),
        document.getElementById('playViewerLarge'),
        createCircleRevealAnimation,
        seekDefault,
        screenPassedRatio,
        {
            animationOut: function (it) {
                menuWrapper.classList.add('background-blur');
            },
            animationIn: function (it) {
                menuWrapper.classList.remove('background-blur');
            },
        }
    );
}

window.addEventListener('load', function () {
    createAnimations();
});

window.addEventListener('scroll', performAnimations);
