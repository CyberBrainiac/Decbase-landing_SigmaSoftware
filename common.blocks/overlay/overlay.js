"use strict"

deleteOverlay();

function deleteOverlay() {
	window.addEventListener("load", function() {
		const overlay = document.querySelector(".overlay");
		const overlay__loader = document.querySelector(".overlay__loader");

		overlay.addEventListener('animationend', (ev) => {
			overlay.style.display = "none";
		}, {once: true});

		/**Wait additional 5s*/
		this.setTimeout(() => {
			overlay__loader.style.display = "none";
			overlay.classList.add("overlay_disappearance");

			document.querySelector(".main-wrap").style.display = "block";
		}, 5);
	});
}
