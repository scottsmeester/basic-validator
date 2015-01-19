var myPhone = prompt("Please enter your phone number (xxx-xxx-xxxx):");
var myBirthDate = prompt("Please enter your birth date: (xx/xx/xx)");
var myPostalCode = prompt("Please enter your postal code (xxxxx OR xxxxx-xxxx):");
var myState = prompt("Please enter your state (XX):");
var myStatus = prompt("Are you married (yes/no)?");

var i;
var inValids = [];

var phLen = myPhone.length;
var bdLen = myBirthDate.length;
var pcLen = myPostalCode.length;
var stLen = myState.length;
var msLen = myStatus.length;

var isValid = true; // reset isValid
// check phone number
// characters at 4 an 8 need to be dashes and needs to have a length of 12 charaters
if ((myPhone.charAt(3) === "-" && myPhone.charAt(7) === "-") && phLen === 12) {

	for (i = 0; i < phLen; i++) {

		if (i !== 3 && i !== 7) {

			if (isNaN(parseFloat(myPhone.charAt(i)))) {
				isValid = false;
			}
		}
	}
}
else {
	isValid = false;
}

if (isValid !== true) {
	inValids.push("Please enter a valid phone number!")
	// alert("Please enter a valid phone number!");
}



var isValid = true; // reset isValid
// check birth date
// charaters at 3 and 6 needs to be slashes and needs to have length of eight charaters
if ((myBirthDate.charAt(2) === "/" && myBirthDate.charAt(5) ==="/") && bdLen === 8) {

	for (i = 0; i < bdLen; i++) {

		if (i !== 2 && i !== 5) {

			if (isNaN(parseFloat(myBirthDate.charAt(i)))) {
				isValid = false;
			}

		}

	}

}
else {
	isValid = false;
}

if (isValid !== true) {
	inValids.push("Please enter a valid birth date!");
}



var isValid = true; // reset isValid
// check postal code
// charaters at 3 and 6 needs to be slashes and needs to have length of eight charaters
if ((myPostalCode.charAt(5) === "-") && pcLen === 10) {

	for (i = 0; i < pcLen; i++) {

		if (i !== 5) {

			if (isNaN(parseFloat(myPostalCode.charAt(i)))) {
				isValid = false;
			}

		}

	}

}
else if (pcLen === 5) {

	for (i = 0; i < pcLen; i++) {
		if (isNaN(parseFloat(myPostalCode.charAt(i)))) {
			// console.log(myPostalCode.charAt(i));
			isValid = false;
		}
	}

}
else {
	isValid = false;
}


if (isValid !== true) {
	inValids.push("Please enter a valid postal code!");
}



var isValid = true; // reset isValid
// check state
// needs to have length of two charaters
if (stLen === 2) {

	for (i = 0; i < stLen; i++) {

		if (!isNaN(parseFloat(myState.charAt(i)))) {
			isValid = false;
		}

	}

}
else {
	isValid = false;
}

if (isValid !== true) {
	inValids.push("Please enter a valid state!");
}



var isValid = true; // reset isValid
// check married status
// needs to have length of two or three charaters
if ((msLen === 2 || msLen === 3) && (myStatus.toLowerCase() === "yes" || myStatus.toLowerCase() === "no")) {


}
else {
	isValid = false;
}

if (isValid !== true) {
	inValids.push("Please tell me if you're married!");
}



if (inValids.length > 0) {
	alert(inValids.join("\n"));
}