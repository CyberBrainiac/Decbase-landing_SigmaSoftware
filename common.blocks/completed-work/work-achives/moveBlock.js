"use strict"

function moveBlock(ev) {
  const area = document.querySelector(".completed-work");
  const mouseX = ev.clientX;
  const mouseY = ev.clientY;
  
  const topAreaPosition = calculateDistanceToTopBorder(area);
  const relativY = mouseY - topAreaPosition;
  const movableBlocks = document.querySelectorAll(".work-achives__card");

  for (const movableBlock of movableBlocks) {
    movableBlock.style.left = mouseX - movableBlock.clientWidth / 2 + 'px';
    movableBlock.style.top = relativY - movableBlock.clientHeight / 2 + 'px';
  }
}


function calculateDistanceToTopBorder(block) {
  const rect = block.getBoundingClientRect();
  const distanceToTop = rect.top;
  return distanceToTop;
}


function handleMouseEnter() {
  const movableBlocks = document.querySelectorAll(".work-achives__card");
  const vectors = document.querySelectorAll(".work-achives__vector");

  for (const movableBlock of movableBlocks) {
    movableBlock.style.position = "absolute";
  }

  for (const vector of vectors) {
    vector.style.opacity = 0;
  }
}


function handleMouseLeave() {
  const movableBlocks = document.querySelectorAll(".work-achives__card");
  const vectors = document.querySelectorAll(".work-achives__vector");

  for (const movableBlock of movableBlocks) {
    movableBlock.style.position = "relative";
    movableBlock.style.top = "initial";
    movableBlock.style.left = "initial";

    if(movableBlock.classList.contains("work-achives__card_set-down")) {
      movableBlock.style.top = "50%";
    }
  }

  for (const vector of vectors) {
    vector.style.opacity = "initial";
  }
}