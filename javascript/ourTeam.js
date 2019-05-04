$(function () {

    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass('change');

    });

    $(window).resize(function () {
        if ($(window).outerWidth() < 768){
            $(".navbar-nav").css("width", "100%");
        }else{
            $(".navbar-nav").css("width", "70%");
        }
    });


});