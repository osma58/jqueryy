$(document).ready(function() {
    // $('main').hide(3000).delay(1000).show(500);

    //muis event
    $('figure img').mouseenter( function() {
        $(this).fadeTo(600, .01);
    }).mouseleave(function() {
        $(this).fadeTo(1000, 1);
    }).click(function() {
        $(this).next().toggle(700);
    })

    //footer 
    $('footer').click(function() {
        $(this).animate( {
            top: '-=55px', 
            opacity:'-=.2'
        }, 900)
    }).dblclick (function() {
        $(this).animate( {
            top: '0',
            opacity: '1'

        }, 900)
    })
});