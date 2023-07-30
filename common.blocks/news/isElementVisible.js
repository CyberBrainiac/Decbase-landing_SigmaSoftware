"use strict"

function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if the element is within the viewport's visible area
  const isVisible = (
    rect.top <= 600 && 
		rect.top >= -300
  );

  return isVisible;
}

