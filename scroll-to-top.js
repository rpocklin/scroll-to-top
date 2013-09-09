"use strict";

// javascript taken from from http://labs.mitgux.com/smooth-scroll-to-top-using-css3-animations
// image taken from http://gazpo.com/downloads/tutorials/jquery/scrolltop/

$(function() {

  // Get the click event
  $("#scroll-to-top").on("click.scroll-to-top", function() {

    // Get the scroll pos
    var pos = $(window).scrollTop();

    // Set the body top margin
    $("body").css({
      "margin-top": -pos + "px",
      "overflow-y": "scroll" // This property is posed for fix the blink of the window width change
    });

    // Make the scroll handle on the position 0
    $(window).scrollTop(0);

    var body = $('body');
    body.addClass('scroll-to-top');

    // Apply the scroll effects
    body.css("margin-top", "0");

    // ugly but required, or you need to listen for the transitionEnd event
    setTimeout(function() {

      body.removeClass('scroll-to-top');

    }, 1000); // should match css3 transition

  });
});
