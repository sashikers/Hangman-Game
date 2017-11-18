"use strict";
var availableLetters, words, lettersGuessed, lettersMatched, numLettersMatched, 
guessWord, letters;

function setup() {
	availableLetters = "abcdefghijklmnopqrstuvwxyz";
	words = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear"];

	lettersGuessed = lettersMatched = '';
	numLettersMatched = 0;

	guessWord = words[Math.floor(Math.random() * words.length)];
	guessWord = guessWord.toUpperCase();

	letters = document.getElementById("letters");
	letters.innerHTML = "<li class=\"current-word\">Brewery is:</li>";

	var letter, i;
	for (i = 0; i < guessWord.length; i++) {
		letter = "<li class=\"letter letter" + guessWord.charAt(i) + "\">" + guessWord.charAt(i) + "</li>";
		letters.insertAdjacentHTML('beforeend',letter);
	}

	console.log(words);
	console.log(guessWord);
};

setup();

document.onkeyup = function(event) {
	// takes the key pressed by user and converts it into an uppercase string
	var userInput = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(userInput);
}



// console.log(words);	



/*

// defines the word bank 
var words = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear"];
var allGuesses = document.getElementById("allGuesses");

// creates empty array to hold the guessable letters
var currentWordArray = [];
// selects random word from the word bank
var currentWord = words[Math.floor(Math.random()*words.length)];
// puts the selected word into uppercase
currentWord = currentWord.toUpperCase();

// creates array of the letters in the selected word
var letterArray = currentWord.split("");

// creates an object out of every letter and puts it in the empty guessable letters array
for (var i = 0; i < letterArray.length; i++) {
	// sets up an empty object
	var letterObject = {}; 
	// assigns unsolved class - empty space 
	letterObject.unsolved = "_";
	// assigns solved class - the correct letter
	letterObject.solved = letterArray[i];
	// appends the object letters into the guessable letter array
	currentWordArray.push(letterObject);
}


// function makeMan() {

// 	// resets the letter array
// 	// currentWordArray = [];
	
// 	// for (var i = 0; i < currentWordArray.length; i++){
// 	// 	var letterFlip = "";
// 	// 	letterFlip = currentWordArray[i].unsolved;
// 	// 	var letterTile = document.createElement("span");
// 	// 	letterTile.setAttribute("class", "letter-tile tileNumber"+i);
// 	// 	// letterTile.setAttribute("class", "tileNumber" + i);
// 	// 	var textLetterFlip = document.createTextNode(letterFlip);
// 	// 	letterTile.appendChild(textLetterFlip);
// 	// 	document.getElementById("hangman").appendChild(letterTile);
// 	// }
// 	console.log(currentWordArray);

// }

console.log(currentWordArray);


// for (var i = 0; i < currentWordArray.length; i++){
// 	var letterFlip = "";
// 	letterFlip = currentWordArray[i].unsolved;
// 	var letterTile = document.createElement("span");
// 	letterTile.setAttribute("class", "letter-tile tileNumber"+i);
// 	var textLetterFlip = document.createTextNode(letterFlip);
// 	letterTile.appendChild(textLetterFlip);
// 	document.getElementById("hangman").appendChild(letterTile);
// };

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

	for (var i = 0; i < currentWordArray.length; i++) {
		if (currentWordArray[i].solved === userInput) {
			// document.getElementsByClassName("tileNumber"+i).innerHTML = currentWordArray[i].solved;
			// console.log(userInput);
		} else {

		};
	};
};

*/
	