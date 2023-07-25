"use strict"
deleteOverlay();

function deleteOverlay() {
	window.addEventListener("load", function() {

		/**Wait additional 5s*/
		this.setTimeout(() => {
			document.querySelector(".overlay").style.display = "none";
			document.querySelector(".main-wrap").style.display = "block";
		}, 5);
	});
}

/**
 * ДОДАТИ поступовий перехід від оверлєя до сторінки через OPACITY, коли анімація завершиться, Display:none
 */