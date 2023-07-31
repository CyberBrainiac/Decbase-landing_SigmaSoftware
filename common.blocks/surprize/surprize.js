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

	let img = document.createElement("img");
	let VPWidth = (window.innerWidth / 3).toFixed();
	let VPHeight = (window.innerHeight / 3).toFixed();
	let url = 'http://placekitten.com' + `/${VPWidth}/${VPHeight}`;

	/*Send request to API*/
	fetch(url).then(
		(response) => {
			img.src = response.url;
			kittenContainer.appendChild(img);
		}
	).catch(err => console.log(err));

	dateContainer.textContent = shortDate;
	surnameContainer.textContent = '"' + surname + '"';
	surnameContainer.style.color = "rgb(55, 128, 107)";

	overlay.style.display = "flex";
	setTimeout(() => {
		overlay.style.display = "none";
	}, 5000);
}