"use strict"

function getSystemYear() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const container = document.querySelector(".copyright-law__year");
	
	container.textContent = currentYear;
}