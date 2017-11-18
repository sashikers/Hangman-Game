var words = ["Anchor", "Almanac", "Barebottle", "Cellarmaker", "Harmonic", "Magnolia", "ThirstyBear"];

console.log(words);

function makeMan() {
	var currentWord = words[Math.floor(Math.random()*words.length)]
	console.log(currentWord);
	var currentWordArray = currentWord.split("");
	console.log(currentWordArray);
}

makeMan();


	