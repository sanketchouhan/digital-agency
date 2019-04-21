$(function () {

    checkTop()

    $(window).on("scroll", function () {
        console.log($(window).scrollTop());

        checkTop()
    });

    function checkTop() {
        if ($(window).scrollTop() > 200) {
            $(".navbar").addClass("navbar-bg");
            // $(".navbar-nav a").css("color", "#191919");
            $(".navbar-nav").css("width", "70%");
            $(".navbar-brand").css("display", "block");
            $(".space").css("display", "none");
        } else {
            $(".navbar").removeClass("navbar-bg");
            // $(".navbar-nav a").css("color", "#999999");
            $(".navbar-nav").css("width", "100%");
            $(".navbar-brand").css("display", "none");
            $(".space").css("display", "block");
        }
    }

    $(".navbar-nav a, .navbar-brand").click(function (link) {
        link.preventDefault();
        let target = $(this).attr("href");

        $("html, body").stop().animate({
            scrollTop: $(target).offset().top - 75
        }, 1000);
    })


});