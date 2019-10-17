(function($) {
  'use strict';
  
  let scrollTouch = true;
  const mouseScrollerDiv = $("#mouseScrollerDiv");
  mouseScrollerDiv.css("visibility", "unset")
  const bannerID = $("#bannerID");
  const bannerIDHeight = bannerID.outerHeight() - 250

  function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  function checkPosition() {
    let windowY = window.scrollY;

    if (windowY < bannerIDHeight) {
      if (scrollTouch) {
        mouseScrollerDiv.css("visibility", "visible")
        mouseScrollerDiv.addClass('fadeIn')
        mouseScrollerDiv.addClass('animated')
        mouseScrollerDiv.addClass('faster')
        mouseScrollerDiv.on('animationend', function() { 
          mouseScrollerDiv.css("visibility", "visible")
          mouseScrollerDiv.removeClass('fadeOut')
          mouseScrollerDiv.removeClass('animated')
          mouseScrollerDiv.removeClass('faster')
        })
        scrollTouch = false
      }
    } else {
      if (!scrollTouch) {
        mouseScrollerDiv.addClass('fadeOut')
        mouseScrollerDiv.addClass('animated')
        mouseScrollerDiv.addClass('faster')
        mouseScrollerDiv.on('animationend', function() { 
          mouseScrollerDiv.css("visibility", "hidden")
          mouseScrollerDiv.removeClass('fadeIn')
          mouseScrollerDiv.removeClass('animated')
          mouseScrollerDiv.removeClass('faster')
        })
        scrollTouch = true
      }
    }
  }

  window.addEventListener('scroll', debounce(checkPosition));
})(jQuery);