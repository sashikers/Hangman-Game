// defines the word bank 
var words = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear"];
var allGuesses = document.getElementById("allGuesses");

// creates empty array to hold the guessable letters
var currentWordArray = [];

function makeMan() {
	// selects random word from the word bank
	var currentWord = words[Math.floor(Math.random()*words.length)];
	// puts the selected word into uppercase
	currentWord = currentWord.toUpperCase();

	// creates array of the letters in the selected word
	var letterArray = currentWord.split("");

	// resets the letter array
	currentWordArray = [];

	// creates an object out of every letter and puts it in the empty guessable letters array
	for (i = 0; i < letterArray.length; i++) {
		// sets up an empty object
		var letterObject = {}; 
		// assigns unsolved class - empty space 
		letterObject.unsolved = "_";
		// assigns solved class - the correct letter
		letterObject.solved = letterArray[i];
		// appends the object letters into the guessable letter array
		currentWordArray.push(letterObject);
		console.log(letterObject);
	}

	console.log(currentWordArray);
	// var letterObject = {};
	// var currentWordArray = currentWord.split("");
	// console.log(currentWordArray);

	// for (var i = 0; i < currentWordArray.length; i++) {
	// 	currentWordArray[i].unsolved = "_";
	// }
	// console.log(currentWordArray);

}

makeMan();

document.onkeyup = function(event) {
	// takes the key pressed by user and converts it into an uppercase string
	var userInput = String.fromCharCode(event.keyCode).toUpperCase();
	// creates an HTML span element
	var guessedLetter = document.createElement("span");
	// sets the class of the HTML element to guessedButton for formatting
	guessedLetter.setAttribute("class", "guessedButton");
	// sets a text node with the userinput as the text
	var textGuessedLetter = document.createTextNode(userInput);
	// appends the text node to the HTML span element
	guessedLetter.appendChild(textGuessedLetter);
	// appends the HTML element to the guesses div to display all guessed letters
	document.getElementById("allGuesses").appendChild(guessedLetter);
}


	