"use strict"

function formHandler() {
	const form = document.querySelector(".sign-form");
	const email = document.querySelector(".sign-form > input[type = 'email']");
	const [name, surname] = document.querySelectorAll(".sign-form > input[type = 'text']");
	form.addEventListener("submit", validateForm);

	function validateForm(ev) {
		ev.preventDefault();
		const formData = new FormData(ev.target);

		try {
			validate_name_surname(name);
			validate_name_surname(surname);
		} catch (error) {
			console.log(error);
			return false;
		}
	
		/**Validate E-mail*/
		const emailValue = email.value.trim();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailRegex.test(emailValue)) {
			email.style.borderColor = "rgb(255, 0, 0)";
			alert("E-mail is incorrect!");
			return false;
		}

		email.style.borderColor = "#EEE";
		name.style.borderColor = "#EEE";
		surname.style.borderColor = "#EEE";

		let userProps = {
			name: formData.get("name"),
			surname: formData.get("surname"),
			email: formData.get("email"),
		}

		localStorage.setItem('currentUser', JSON.stringify(userProps));
		if(userProps.name === "Sigma" || userProps.name === "sigma") {
			surprize(userProps.surname);
		}
	}

	function validate_name_surname(elem) {
		let field = elem.name;
		let fieldValue = elem.value.trim();
		const latinLowerLetter = {start: 97, end: 122};
		fieldValue = fieldValue.toLowerCase();
		let fieldChar = fieldValue.split('');

		for(const char of fieldChar) {
			if(char === " ") {
				elem.style.borderColor = "rgb(255, 0, 0)";
				alert(`${field} can not contain space`);
				throw new UnvalidValueError(char);
			}
			if( isNumber(char)) {
				elem.style.borderColor = "rgb(255, 0, 0)";
				alert(`${field} can not contain number`);
				throw new UnvalidValueError(char);
			}

			if(char.charCodeAt() < latinLowerLetter.start || char.charCodeAt() > latinLowerLetter.end) {
				elem.style.borderColor = "rgb(255, 0, 0)";
				alert(`${field} can contain only latin symbols`);
				throw new UnvalidValueError(char);
			}
			fieldValue = fieldValue.charAt(0).toUpperCase() + fieldValue.slice(1);
		}
	}

	function isNumber(symbol) {
		return !isNaN(symbol) && symbol !== '' && symbol !== "" && symbol !== ``;
	}
}