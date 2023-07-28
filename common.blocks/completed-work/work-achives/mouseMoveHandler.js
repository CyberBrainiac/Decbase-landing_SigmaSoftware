"use strict"

function monitoringMousemove() {
  const area = document.querySelector(".completed-work");
  area.addEventListener('mousemove', throttle(moveBlock, 50));

  area.addEventListener("mouseenter", handleMouseEnter);
  area.addEventListener("mouseleave", handleMouseLeave);
}
  






