$(function () {

    checkTop();

    $(window).on("scroll", function () {
        checkTop()
    });

    function checkTop() {
        if ($(window).scrollTop() > 100) {
            $(".navbar-expand-md").css("display", "flex");
        } else {
            $(".navbar-expand-md").css("display", "none");
        }
    }
    
    TweenMax.to(".header .borderBox", .8, { delay: .5, top: "0%" });

    TweenMax.to(".header h1", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".header p", .5, { delay: 1.5, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".header .btn", .5, { delay: 2, transform: "translateY(0)", opacity: 1 });


    var team = new Waypoint({
        element: document.getElementById('team'),
        handler: function (down) {
            TweenMax.to(".creative-team .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".creative-team .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".creative-team .description p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var bestTeam = new Waypoint({
        element: document.getElementById('bestTeam'),
        handler: function (down) {
            TweenMax.to(".best-team .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".best-team .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".best-team .description p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".best-team .description .team-btn", .5, { delay: 1.5, transform: "translateY(0)", opacity: 1 });

            TweenMax.staggerTo(".best-team .team-gallery .member", 1.2, { delay: 1.5, transform: "translateY(0)", opacity: 1 }, .2);
        },
        offset: '60%'
    })

    var work = new Waypoint({
        element: document.getElementById('work'),
        handler: function (down) {
            TweenMax.to(".our-work .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".our-work .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".our-work .description p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".our-work .description .work-btn", .5, { delay: 1.5, transform: "translateY(0)", opacity: 1 });

            TweenMax.to(".our-work .gallery .img1", .5, { delay: 1.5, transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".our-work .gallery .img2", .5, { delay: 2, transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".our-work .gallery .img3", .5, { delay: 2.5, transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".our-work .gallery .img4", .5, { delay: 3, transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var chooseUs = new Waypoint({
        element: document.getElementById('chooseUs'),
        handler: function (down) {
            TweenMax.to(".choose-us .photo-div", 1, { transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".choose-us .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".choose-us .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".choose-us .description h5", 1.5, { delay: 1, transform: "translateY(0)", opacity: 1 }, .5);
            TweenMax.staggerTo(".choose-us .description .icon", 1.5, { delay: 1, transform: "translateY(0)", opacity: 1 }, .5);
            TweenMax.staggerTo(".choose-us .description p", 1.5, { delay: 1.5, transform: "translateY(0)", opacity: 1 }, .5);
        },
        offset: '60%'
    })

    var service = new Waypoint({
        element: document.getElementById('service'),
        handler: function (down) {
            TweenMax.to(".our-service .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".our-service .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".our-service .description p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".our-service .description .service-btn", .5, { delay: 1.5, transform: "translateY(0)", opacity: 1 });

            TweenMax.staggerTo(".our-service .our-service-photo .desc-content", 1.6, { delay: 1, transform: "translateX(0)", opacity: 1 }, .4);
        },
        offset: '60%'
    })

    var client = new Waypoint({
        element: document.getElementById('client'),
        handler: function (down) {
            TweenMax.to(".our-client .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".our-client .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".our-client .description p", .6, { delay: 1, transform: "translateY(0)", opacity: 1 }, .3);
        },
        offset: '60%'
    })

    var contact = new Waypoint({
        element: document.getElementById('contact'),
        handler: function (down) {
            TweenMax.to(".get-in-touch h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".get-in-touch i", 1.2, { delay: .5, transform: "translateY(0)", opacity: 1 }, .2);
        },
        offset: '60%'
    })

    var footer = new Waypoint({
        element: document.getElementById('footer'),
        handler: function (down) {
            TweenMax.staggerTo(".footer .footer-content .text", 1.5, { transform: "translateY(0)", opacity: 1 }, .5);
            TweenMax.staggerTo(".footer .footer-content .icon", 1.5, { transform: "translateX(0)", opacity: 1 }, .5);
            TweenMax.to(".footer .borderBox", 1, { delay: 1.5, transform: "translate(-50%,-35%) rotate(-45deg)", opacity: 1 });
        },
        offset: '70%'
    })



});