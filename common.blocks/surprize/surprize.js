"use strict"

function surprize(surname) {
	const overlay = document.querySelector(".surprize");
	const dateContainer = document.querySelector(".surprize__date");
	const surnameContainer = document.querySelector(".surprize__surname");
	const kittenContainer = document.querySelector(".surprize__kittens");

	let date = Date();
	let deleteDay = date.slice(3);
	let gmtPosition = date.indexOf("GMT") - 12;
	let shortDate = deleteDay.slice(0, gmtPosition);

	dateContainer.textContent = shortDate;

	overlay.style.display = "flex";
	setTimeout(() => {
		overlay.style.display = "none";
	}, 5000);
}