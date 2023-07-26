"use strict"

function removeServiceContent() {
  const container = document.querySelector(".service");
  let child = document.querySelector(".content");
  container.removeChild(child);

  let newChild = document.createElement("div");
  newChild.classList.add("content");
  container.appendChild(newChild);
}