$(function () {

    checkTop()

    $(window).on("scroll", function () {
        checkTop()
    });

    $(window).resize(function () {
        checkTop();
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


});