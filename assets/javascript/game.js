(function () {
	"use strict";
	var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages;
	console.log("hello");
	function setup() {
		// Start config options
		availableLetters = "abcdefghijklmnopqrstuvwxyz";
		lives = 6;
		words = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear"];
		messages = {
			win: "Awesome! Have a beer!",
			lose: "Oh no! Try again!",
			guessed: "You already tried that one! Bozo!",
			validLetter: "Try a valid letter, please!",
		};
		// end config 

		lettersGuessed = lettersMatched = '';
		numLettersMatched = 0;

		// selects a word
		currentWord = words[Math.floor(Math.random()* words.length)];
		console.log(currentWord);


	}
}
)

// var breweries = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear"];
// console.log(breweries);

// document.onkeyup = function(event){
// 	console.log(event);

// }