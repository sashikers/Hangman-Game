var words = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear"];
var allGuesses = document.getElementById("allGuesses");


console.log(words);

function makeMan() {
	var currentWord = words[Math.floor(Math.random()*words.length)];
	currentWord = currentWord.toUpperCase();
	console.log(currentWord);
	var currentWordArray = currentWord.split("");
	console.log(currentWordArray);
}

makeMan();

document.onkeyup = function(event) {
	var userInput = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(userInput);
	var guessedLetter = document.createElement("span");
	guessedLetter.setAttribute("class", "guessedButtons");
	var textGuessedLetter = document.createTextNode(userInput);
	guessedLetter.appendChild(textGuessedLetter);
	document.getElementById("allGuesses").appendChild(guessedLetter);
}

	