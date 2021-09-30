//Make sure email input is in the right format
function validateEmail(value) {
	return (value.match(/^(?:[^\s]+@[^\s]+[.][^\s]+)$/g) != null);
}

//Make sure phone input is in the right format
function validatePhone(value) {
	return (value.match(/^(?:[\d]{3}-[\d]{3}-[\d]{4})$/g) != null);
}

//Check email input and display error accordingly
function checkEmail(element) {
	element.style.borderColor = "black";
	document.getElementById(element.id+"_error").style.display = "none";
	if(!validateEmail(element.value)) {
		element.style.borderColor = "#d55b71";
		document.getElementById(element.id+"_error").style.display = "block";
		return false;
	}
	return true;
}

//Check phone input and display error accordingly
function checkPhone(element) {
	element.style.borderColor = "black";
	document.getElementById(element.id+"_error").style.display = "none";
	
	if(!validatePhone(element.value)) {
		element.style.borderColor = "#d55b71";
		document.getElementById(element.id+"_error").style.display = "block";
		return false;
	}
	return true;
}

//Check if the inputted element's value is not empty (first name, last name, message)
function checkNotNull(element) {
	element.style.borderColor = "black";
	document.getElementById(element.id+"_error").style.display = "none";
	if(element.value == "") {
		element.style.borderColor = "#d55b71";
		document.getElementById(element.id+"_error").style.display = "block";
		return false;
	}
	return true;
}

//Register validation functions when the user interacts with the form
function loaded() {
	//Init emailjs API
	emailjs.init('user_YwSwbDf1tvghTaYmuss9L');
	
	//Validate when user leaves a form input
	document.getElementById("user_fname").onblur = function() {
		checkNotNull(this);
	}
	
	document.getElementById("user_lname").onblur = function() {
		checkNotNull(this)
	}
	
	document.getElementById("user_email").onblur = function() {
		checkEmail(this);
	}
	document.getElementById("user_phone").onblur = function() {
		checkPhone(this);
	}
	document.getElementById("user_message").onblur = function() {
		checkNotNull(this);
	}
	
	//Validate when user inputs email or phone
	document.getElementById("user_email").oninput = function() {
		checkEmail(this);
	}
	document.getElementById("user_phone").oninput = function() {
		checkPhone(this);
	}
	
	//Validate all fields and submit the message
	document.getElementById("contact_form").onsubmit = function(e) {
		e.preventDefault();
		if(validateForm()) {
			document.getElementById("submitContactButton").value = "Submitting...";
			emailjs.sendForm('contact_service', 'contact_template', this)
			.then(function() {
				console.log('SUCCESS!');
				//Redirect to confirmation page
				window.location = "/contactConfirmation.html";
			}, function(error) {
				console.log('FAILED...', error);
				document.getElementById("submitContactButton").value = "Submit";
				document.getElementById("submitContactButton_error").innerHTML = "Could not submit contact:\n"+JSON.stringify(error);
				document.getElementById("submitContactButton_error").style.display = "block";
			});
		}
	}
}

//Run validation functions on all form elements
function validateForm() {
	return (
		checkNotNull(document.getElementById("user_fname")) &&
		checkNotNull(document.getElementById("user_lname")) &&
		checkEmail(document.getElementById("user_email")) &&
		checkPhone(document.getElementById("user_phone")) &&
		checkNotNull(document.getElementById("user_message"))
	);
}