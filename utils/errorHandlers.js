"use strict"

class UnvalidValueError extends Error {
	constructor(value) {
		super(`Unvalid value: ${JSON.stringify(value)}`);
	}
}