"use strict"

async function isUserAFK() {
	const overlay = document.querySelector('.user-afk');
	const button = document.querySelector('.user-afk__button');

	let idleTimeout = 60000; //1 minute
	let idleTimer;
	let answerTimeout = 10000; //10 second
	let answerTimer;

	document.addEventListener('mousemove', throttle(resetIdleTimer, 100));
	document.addEventListener('keydown', resetIdleTimer);
	document.addEventListener('click', resetIdleTimer);
	button.addEventListener('click', userAnswerYes);

	resetIdleTimer();


	function resetIdleTimer() {
		clearTimeout(idleTimer);
		idleTimer = setTimeout(userAFK, idleTimeout);
	}

	function userAFK() {
		overlay.style.opacity = "1";
		overlay.style.zIndex = '3';

		answerTimer = setTimeout(() => {closeWindow()}, answerTimeout);
	}

	function userAnswerYes() {
		overlay.style.opacity = "0";
		overlay.style.zIndex = '-1';

		clearTimeout(answerTimer);
	}

	function closeWindow() {
		alert("window will be close");
		window.close();
	}
}