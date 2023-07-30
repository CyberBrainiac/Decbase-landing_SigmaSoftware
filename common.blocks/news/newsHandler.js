"use strict"

function newsHandler() {
	const wrap = document.querySelector(".news-container__wrap");
	const imgs = document.querySelectorAll(".news-container__img");

	if( isElementVisible(wrap)) {

		imgs[0].addEventListener('transitionend', (ev) => {
			if(ev.target.style.opacity === '1') {
				visible( imgs[1])
			}
		});
		visible( imgs[0]);

	} else {
		imgs.forEach((img) => {
			if(img.style.opacity === "1") {
				img.style.opacity = "0";
			}
		});
	}


	function visible(elem) {
		elem.style.opacity = "1";
	}
}