"use strict"

function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if the element is within the viewport's visible area
  const isVisible = (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );

  return isVisible;
}

// Example usage:
const blockToCheck = document.getElementById('block-to-check');
const isVisible = isElementVisible(blockToCheck);

if (isVisible) {
  console.log('The block is visible on the page.');
} else {
  console.log('The block is not visible on the page.');
}