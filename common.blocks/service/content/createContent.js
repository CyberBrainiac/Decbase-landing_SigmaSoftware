"use strict"

class UnvalidValueError extends Error {
	constructor(value) {
		super(`Unvalid value: ${JSON.stringify(value)}`);
	}
}

function isNumber(symbol) {
	return !isNaN(symbol) && symbol !== '' && symbol !== "" && symbol !== ``;
}

function createCard(id, title) {
  if(!isNumber(id)) {throw new UnvalidValueError(id)}
  if(typeof title !== 'string') {throw new UnvalidValueError(title)}

  const container = document.querySelector('.content');
  const card = document.createElement("div");
  card.classList.add(".content__card");
}