"use strict"

function monitoringUserScroll() {
  window.addEventListener('scroll', throttle(userScrollHandler, 30));

  
  function throttle(func, limit) {
    let inThrottle;
    
    return function(ev) {
      if (!inThrottle) {
        func(ev);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }


  function userScrollHandler(ev) {
    updateProgressBar();
  }
}