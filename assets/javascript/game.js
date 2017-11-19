/*

var myObj = {
	wordBank: ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear"],
	createCurrentWord: function() {
		this.currentWord = this.wordBank[Math.floor(Math.random() * wordBank.length)];
		return currentWord;
	},
};

// console.log(myObj.wordBank[0]);
myObj.createCurrentWord();
console.log(myObj.currentWord);*/


"use strict";
var availableLetters, words, lettersGuessed, lettersMatched, numLettersMatched, 
guessWord, letters, lives, correctLetters, win, userScore;

userScore = 0;

// this function sets up the original word to be played and can be called letter to get a new word
function setup() {
	// configuration for the setup function
	availableLetters = "abcdefghijklmnopqrstuvwxyz";
	availableLetters = availableLetters.toUpperCase();
	words = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear"];
	lives = 5;
	document.getElementById("livesLeft").innerHTML = 5;
	correctLetters = "";
	document.getElementById("allGuesses").innerHTML = "";

	lettersGuessed = '';
	lettersMatched = 0;
	numLettersMatched = 0;

	// picks a random word and puts it into uppercase
	guessWord = words[Math.floor(Math.random() * words.length)];
	guessWord = guessWord.toUpperCase();

	// sets up the hangman area 
	letters = document.getElementById("letters");
	letters.innerHTML = "<li class=\"current-word\">Brewery is:</li>";

	// generates a list of the letters in the guessable word and puts them into a row
	var letter, i;
	for (i = 0; i < guessWord.length; i++) {
		// puts the letters into a <li> format with class = letter, which allows them to stack inline
		letter = "<li class=\"letter unguessed letter" + guessWord.charAt(i) + "\">" + guessWord.charAt(i) + "</li>";
		// inserts the <li> into the <ul> element 
		letters.insertAdjacentHTML('beforeend',letter);
	}
	console.log("guessWord", guessWord);
};
// runs the initial setup function 
setup();

function gameLost() {
	userScore -= 1;
}
// the win function
function gameWon() {
	userScore += 1; 
	// clears out the guesses <li>s and puts in a win message
	document.getElementById("allGuesses").innerHTML = 'You won! Your total score is ' + userScore + '. You should probably try harder...';
	// updates the score total
	document.getElementById("userScore").innerHTML = userScore;
}


document.onkeyup = function(event) {
	// takes the key pressed by user and converts it into an uppercase string
	var userInput = String.fromCharCode(event.keyCode).toUpperCase();
	console.log("userInput", userInput);

	document.getElementById("alerts").innerHTML = "";

	if (lettersGuessed.indexOf(userInput) > -1) {
		console.log("try again bozo");
	} else {	
	// this checks if the input letter is one of the valid letters
		if (availableLetters.indexOf(userInput) > -1) {
			// adds the guessed letter to the guessed array so that letters cannot be repeated
			lettersGuessed = lettersGuessed + userInput;

			// this checks if the guessed letter is in the guessWord array
			// if it is... 
			if (guessWord.indexOf(userInput) > -1) {
				// if the guessed letter is correct...
				correctLetters += userInput;

				// array that grabs all letters with the class of the guessed letter
				var arrayCorrectlyGuessedLetters = document.getElementsByClassName("letter unguessed letter"+userInput);
				// array goes through loop and every element gets assigned the guessed class, which changes it to a visible color
				for (var i = 0; i < arrayCorrectlyGuessedLetters.length; i++) {
					arrayCorrectlyGuessedLetters[i].className += " guessed";
					lettersMatched += 1;
					console.log("lettersMatched", lettersMatched);
				}

				// going to create the win loop
				if (lettersMatched.length === guessWord.length){
					gameWon();
				}



			} else {
				// and if it's not, it will create a tile for the guessed but wrong letter
				var guessedLetter = document.createElement("span");
				// sets the class of the HTML element to guessedButton for formatting
				guessedLetter.setAttribute("class", "guessedButton");
				// sets a text node with the userinput as the text
				var textGuessedLetter = document.createTextNode(userInput);
				// appends the text node to the HTML span element
				guessedLetter.appendChild(textGuessedLetter);
				// appends the HTML element to the guesses div to display all guessed letters
				document.getElementById("allGuesses").appendChild(guessedLetter);

				lives -= 1;
				document.getElementById("livesLeft").innerHTML = "<strong>" + lives + "</strong>";
				console.log("lives", lives);

				if (lives === 0) {
					// document.getElementById("allGuesses").empty();
				}
			}


		} else {
			// this is what happens when the letter is not valid (aka alphabetical)
			console.log("this is not a valid letter");
			document.getElementById("alerts").innerHTML = '<br>"' + userInput + '" is not a valid letter';
		}
	}
}

console.log("lettersMatched", lettersMatched);



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
	