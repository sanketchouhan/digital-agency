$(function () {

    checkTop();

    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass('change');

    });

    $(window).resize(function () {
        checkTop();
    });

    function checkTop() {
        if ($(window).outerWidth() < 768) {
            $(".navbar-nav").css("width", "100%");
        } else {
            $(".navbar-nav").css("width", "70%");
        }
    }


});