"use strict"

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