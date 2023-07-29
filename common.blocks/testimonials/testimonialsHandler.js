"use strict"

function testimonialsHandler() {
	const cardWidth = calcCardWidth();
	const strip = document.querySelector(".testimonials-container__strip");

	/*if someone want to see my good adaptive, dinamically resize is very good choice ;) */
	window.addEventListener('resize', () => {
		strip.style.left = "0";
		calcCardWidth();
	}); 

	const leftButton = document.querySelector("#testimonials-button-left");
	const rightButton = document.querySelector("#testimonials-button-right");

	leftButton.addEventListener('click', leftButtonHandler);
	rightButton.addEventListener('click', rightButtonHandler);

	/**Infinity Scroll Card*/
	let cardArr = [...document.querySelectorAll(".testimonials-container__card")];
	let currentVisibleCard = [cardArr[0], cardArr[1]];

	function leftButtonHandler(ev) {
		if( moveCardToLeft()) {
			return "move card left";
		}

		/**If card didnt move, move strip*/
		moveStripTo('left');
	}

	function rightButtonHandler(ev) {
		if( moveCardToRight()) {
			return "move card right";
		}

		/**If card didnt move, move strip*/
		moveStripTo('right');
	}

	function moveCardToLeft() {
		const currentLeftCard = currentVisibleCard[0];
		const currentLeftCardPosition = cardArr.indexOf(currentLeftCard);

		if(currentLeftCardPosition === 0) {
			const moveElem = cardArr.pop();

			cardArr.unshift(moveElem);
			currentVisibleCard = [moveElem, currentLeftCard];
			strip.removeChild(moveElem);
			strip.insertBefore(moveElem, currentLeftCard);

			/**New element need to be place out left border without animation, and then move with animation to right*/
			strip.classList.remove("testimonials-container__strip_transition");
			moveStripTo('right');
			
			setTimeout(() => {
				strip.classList.add("testimonials-container__strip_transition");
				moveStripTo('left');
			}, 10);

			return true;
		}

		currentVisibleCard = [cardArr[currentLeftCardPosition - 1], currentLeftCard];
		return false;
	}

	function moveCardToRight() {
		const currentRightCard = currentVisibleCard[1];
		const currentRightCardPosition = cardArr.indexOf(currentRightCard);

		if(currentRightCardPosition === cardArr.length - 1) {
			const moveElem = cardArr.shift();

			cardArr.push(moveElem);
			currentVisibleCard = [currentRightCard, moveElem];
			strip.removeChild(moveElem);
			strip.appendChild(moveElem);

			/**New element need to be place out right border without animation, and then move with animation to left*/
			strip.classList.remove("testimonials-container__strip_transition");
			moveStripTo('left');
			
			setTimeout(() => {
				strip.classList.add("testimonials-container__strip_transition");
				moveStripTo('right');
			}, 10);

			return true;
		}

		currentVisibleCard = [currentRightCard, cardArr[currentRightCardPosition + 1]];
		return false;
	}

	function moveStripTo(direction) {
		const allowedValue = ["left", "right"];
		if(allowedValue.indexOf(direction) === -1) {throw new UnvalidValueError("values 'left' and 'right' allowed")}

		if( isNaN( parseFloat(strip.style.left))) {
			strip.style.left = '0px';
		}

		if(direction === 'left') {
			strip.style.left = parseFloat(strip.style.left) +  cardWidth + 'px';
		} else {
			strip.style.left = parseFloat(strip.style.left) -  cardWidth + 'px';
		}
	}
}