$(function () {

    var team = new Waypoint({
        element: document.getElementById('aboutTeam'),
        handler: function (down) {
            TweenMax.to(".aboutTeam h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.to(".aboutTeam p", .5, { delay: .5, transform: "translateY(0)", opacity: 1 });
        },
        offset: '60%'
    })

    var teamMember = new Waypoint({
        element: document.getElementById('teamMember'),
        handler: function (down) {
            TweenMax.to(".container h1", .5, { transform: "translateY(0)", opacity: 1 });
            TweenMax.staggerTo(".teamMember .col-sm-6", 1.8, { delay: .5, transform: "translateY(0)", opacity: 1 }, .3);
        },
        offset: '70%'
    })


});