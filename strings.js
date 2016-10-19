var reverseStringArray = [];
var sortedStringArray = [];
var stringArrayForAlph = [];
var palindromeArray = [];

function reversal(string) {
	reverseStringArray = [];
	let reverseString = "";
	for (let i = 0; i < string.length; i++) {

		reverseStringArray[i] = string.charAt(string.length - 1 - i);
		reverseString = reverseStringArray.join("");
	}
	return reverseString;
}




// works, but only if all lowercase
function alphabits(string) {
	stringArrayForAlph = string.split("").sort(function(a, b) {return a.toLowerCase().localeCompare(b.toLowerCase())}).join("");
	return stringArrayForAlph;




	// stringArrayForAlph = [];
	// sortedStringArray = [];
	// let alphabitizedString = "";
	// for (let i = 0; i < string.length; i++) {
	// 	stringArrayForAlph[i] = string.charAt(i);
	// }
	// 	sortedStringArray = stringArrayForAlph.sort();
	// 	let sortedString = sortedStringArray.join("");
	// 	return sortedString;
}

// alphabits function backup
// function alphabits(string) {
// 	stringArrayForAlph = [];
// 	sortedStringArray = [];
// 	let alphabitizedString = "";
// 	for (let i = 0; i < string.length; i++) {
// 		stringArrayForAlph[i] = string.charAt(i);
// 	}
// 		sortedStringArray = stringArrayForAlph.sort();
// 		let sortedString = sortedStringArray.join("");
// 		return sortedString;
// }

function palindrome(string) {
	palindromeArray = [];
	for (let i = 0; i < string.length; i ++) {
		palindromeArray[i] = string.charAt(i);
	}
	for (let p = 0; p < palindromeArray.length; p++) {
		if (palindromeArray[p] === palindromeArray[palindromeArray.length - 1 - p]) {
			return "Your string is a palindrome";
		} else {
			return "Your string ISN'T a palindrome";
		}
	}

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);


var outputString = ""

function processString() {
	document.getElementById("outputBox").innerHTML = "";
	testString = userInput.value;
	let stringReversed = reversal(testString);
	let stringAlphabetized = alphabits(testString);
	let stringPalindrome = palindrome(testString);

	console.log("stringReversed", stringReversed);
	console.log("stringAlphabetized", stringAlphabetized);
	// console.log("stringPalindrome", stringPalindrome);





	outputString = "your text reversed is: " + stringReversed + "<br>" + "your text alphabetized is " + stringAlphabetized + "<br>" + stringPalindrome;
	document.getElementById("outputBox").innerHTML = outputString;

}




var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", processString);





var userInput = document.getElementById("inputText");

userInput.addEventListener("keyup", inputHandler);

function inputHandler(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
			// console.log("event.keyCode", event.keyCode);
 		 	// console.log("event =", event);
	} else if (event.keyCode === 8) {
		// console.log("you deleted a character");
	} else if (event.keyCode === 13) {
		processString();
	} else if (event.keyCode === 91 || event.keyCode === 9 || event.keyCode === 18 || event.keyCode >= 37 && event.keyCode <= 40 || event.keyCode === 16) {
		// console.log("you did something functional which I will not punish you for because I am trying not to be an annoying robot");
	} else {
		userInput.value = "";
		alert("You may only input letters. No numbers, spaces, or special characters are allowed.");
	}
}