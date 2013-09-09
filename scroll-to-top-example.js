// to include in your app

// scroll-to-top
$(window).scroll(
//  _.debounce(
    function() {

    if ($(this).scrollTop() > 200) {
      $('#scroll-to-top').addClass('visible');
    } else {
      $('#scroll-to-top').removeClass('visible');
    }

//  }, 50)
    });
