$(function () {

    ourWorkDivHeight();

    $(window).resize(function () {
        ourWorkDivHeight();
    });

    function ourWorkDivHeight() {
        if ($(window).outerWidth() < 768) {
            $(".bestWork .workContent").css("min-height", $(".bestWork .container").width() / 2);
        }else{
            $(".bestWork .workContent").css("min-height", $(".bestWork .container").width() / 4);
        }
    }

});