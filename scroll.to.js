//http://www.dconnell.co.uk/blog/index.php/2012/03/12/scroll-to-any-element-using-jquery/
$.scrollTo = function(selector, time, verticalOffset) {
  time = typeof(time) != 'undefined' ? time : 500;
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : -25;
  element = $(selector);
  offset = element.offset();
  if (offset) {
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
      scrollTop: offsetTop
    }, time);
  }
};
