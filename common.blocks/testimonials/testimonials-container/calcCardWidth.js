"use strict"

function calcCardWidth() {
	const card = document.querySelector(".testimonials-container__card");
	const cardStyle = getComputedStyle(card);
	const marginLeft = parseFloat( cardStyle.marginLeft);
	const margiRight = parseFloat( cardStyle.marginRight);
	const width = parseFloat( cardStyle.width);
	const cardWidth = marginLeft + width + margiRight;

	const container = document.querySelector(".testimonials-container");
	container.style.width = cardWidth * 2 + 'px';

	return cardWidth;
}