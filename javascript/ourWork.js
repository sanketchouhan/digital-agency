$(function () {

    checkTop();
    ourWorkDivHeight();

    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass('change');

    });

    $(window).resize(function () {
        checkTop();
        ourWorkDivHeight();
    });

    function checkTop() {
        if ($(window).outerWidth() < 768) {
            $(".navbar-nav").css("width", "100%");
        } else {
            $(".navbar-nav").css("width", "70%");
        }
    }

    function ourWorkDivHeight() {
        if ($(window).outerWidth() < 768) {
            $(".bestWork .workContent").css("min-height", $(window).outerWidth() / 2);
        }else{
            $(".bestWork .workContent").css("min-height", $(window).outerWidth() / 4);
        }
    }

});