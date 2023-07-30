"use strict"

function monitoringUserScroll() {
  window.addEventListener('scroll', throttle(userScrollHandler, 30));

  function userScrollHandler(ev) {
    updateProgressBar();
		newsHandler();
  }
}