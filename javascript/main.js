$(function () {

    checkTop();
    animateNavbar();

    $(window).on("scroll", function () {
        checkTop()
    });

    $(window).resize(function () {
        checkTop();
        animateNavbar();
    });

    var classAdded = false;

    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass('change');
        if ($(window).scrollTop() < 200) {
            if (classAdded == false) {
                $(".navbar-expand-md").addClass("navbar-bg");
                classAdded = true;
            } else {
                $(".navbar-expand-md").removeClass("navbar-bg");
                classAdded = false;
            }
        } else {
            classAdded = !classAdded;
        }
    });

    function checkTop() {

        if ($(window).outerWidth() < 768) {
            $(".navbar-brand").css("display", "block");
            $(".navbar-nav").css("width", "100%");
            if ($(window).scrollTop() > 200) {
                $(".navbar-expand-md").addClass("navbar-bg");
                $(".space").css("display", "none");
            } else {
                if (classAdded == false)
                    $(".navbar-expand-md").removeClass("navbar-bg");
            }
        } else {
            if ($(window).scrollTop() > 200) {
                $(".navbar-brand").css("display", "block");
                $(".navbar-expand-md").addClass("navbar-bg");
                $(".navbar-nav").css("width", "70%");
                $(".space").css("display", "none");
            } else {
                $(".navbar-expand-md").removeClass("navbar-bg");
                $(".navbar-brand").css("display", "none");
                $(".navbar-nav").css("width", "100%");
                $(".space").css("display", "block");
            }
        }
    }


    $(".navbar-nav a, .navbar-brand").click(function (link) {
        link.preventDefault();
        let target = $(this).attr("href");

        $("html, body").stop().animate({
            scrollTop: $(target).offset().top - 70
        }, 1000);
    });


    TweenMax.to(".header .borderBox", .5, { top: "0%" });

    var navbarFlag = false;
    function animateNavbar() {
        if ($(window).outerWidth() >= 768 && !navbarFlag) {
            TweenMax.staggerTo(".navbar-nav .nav-item", .6, { delay: .5, transform: "translateY(0)", opacity: 1 }, .1);
            navbarFlag = true;
        }
    }

    TweenMax.to(".header h1", .5, { delay: 1.5, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".header p", .5, { delay: 2, transform: "translateY(0)", opacity: 1 });
    TweenMax.to(".header .btn", .5, { delay: 2.5, transform: "translateY(0)", opacity: 1 });



    var team = new Waypoint({
        element: document.getElementById('team'),
        handler: function (down) {
            TweenMax.to(".creativeTeam .description h1", .8, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".creativeTeam .description .line", .5, { delay: .8, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".creativeTeam .description p", .8, { delay: 1.3, transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var bestTeam = new Waypoint({
        element: document.getElementById('bestTeam'),
        handler: function (down) {
            TweenMax.to(".bestTeam .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".bestTeam .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".bestTeam .description p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });

            TweenMax.staggerTo(".teamGallery .member", .6, { delay: 1.5, transform: "translateY(0)", opacity: 1 }, .1);
        },
        offset: '60%'
    })

    var work = new Waypoint({
        element: document.getElementById('work'),
        handler: function (down) {
            TweenMax.to(".ourWork .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".ourWork .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".ourWork .description p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });

            TweenMax.to(".ourWork .gallery .img1", .5, { delay: 1.5, transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".ourWork .gallery .img2", .5, { delay: 2, transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".ourWork .gallery .img3", .5, { delay: 2.5, transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".ourWork .gallery .img4", .5, { delay: 3, transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var chooseUs = new Waypoint({
        element: document.getElementById('chooseUs'),
        handler: function (down) {
            TweenMax.to(".chooseUs img", 1, { transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".chooseUs .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".chooseUs .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".chooseUs .description h5", 1.5, { delay: 1, transform: "translateY(0)", opacity: 1 }, .5);
            TweenMax.staggerTo(".chooseUs .description .icon", 1.5, { delay: 1, transform: "translateY(0)", opacity: 1 }, .5);
            TweenMax.staggerTo(".chooseUs .description p", 1.5, { delay: 1.25, transform: "translateY(0)", opacity: 1 }, .5);
        },
        offset: '60%'
    })

    var service = new Waypoint({
        element: document.getElementById('service'),
        handler: function (down) {
            TweenMax.to(".ourService .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".ourService .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".ourService .description p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });

            TweenMax.staggerTo(".ourService .ourServicePhoto .descContent", 1.6, { delay: 1, transform: "translateX(0)", opacity: 1 }, .4);
        },
        offset: '60%'
    })

    var client = new Waypoint({
        element: document.getElementById('client'),
        handler: function (down) {
            TweenMax.to(".ourClient .description h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".ourClient .description .line", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".ourClient .description p", .5, { delay: 1, transform: "translateY(0)", opacity: 1 });

            TweenMax.to(".ourClient .clientPhoto", .5, { delay: 1, transform: "translateX(0)", opacity: 1 });
            TweenMax.to(".ourClient .clientComment", .5, { delay: 1.5, transform: "translateX(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var contact = new Waypoint({
        element: document.getElementById('contact'),
        handler: function (down) {
            TweenMax.to(".getInTouch h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".getInTouch i", 1.2, { delay: .5, transform: "translateY(0)", opacity: 1 }, .2);
        },
        offset: '60%'
    })

    var footer = new Waypoint({
        element: document.getElementById('footer'),
        handler: function (down) {
            TweenMax.staggerTo(".footer .f-content .text", 1.5, {  transform: "translateY(0)", opacity: 1 }, .5);
            TweenMax.staggerTo(".footer .f-content .icon", 1.5, { transform: "translateX(0)", opacity: 1 }, .5);
            TweenMax.to(".footer .borderBox", 1, {delay: 1.5,  transform: "translate(-50%,-35%) rotate(-45deg)", opacity: 1});
        },
        offset: '70%'
    })



});