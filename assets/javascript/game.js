///Array of pets 
var pets = 
["pineapple", "snail", "narwhal", "lobster", "dragon", "dilophosaurus", 
"rock", "bird", "lizard", "cat", "dog"]

//the var where the guessed letters are put
var guessedLetters = [];

var correctGuesses = [];

//word to guess
var wordToGuess = null;

//Win to loss counter
var wins = 0;
var losses = 0;

//Number of guesses you start with
var guessesLeft = [];

//separates the selected word and divides it into individual letters
//var letters = word.split("");

//generates underscores equal to the length of the selected word and
//puts them on the page

function startGame() {
	//randomly selects a word from the pets array
	word = pets[Math.floor(Math.random() * pets.length)];

	for (var i = 0; i < word.length; i++) {
		correctGuesses.push('_');

	}

	guessesLeft = word.length + 5;

	document.querySelector("#current-word").innerHTML = correctGuesses.join(' ');
	document.querySelector("#secret").innerHTML = word;
}

function reset() {
	guessedLetters = [];
	correctGuesses = [];
	document.querySelector("#current-word").innerHTML = correctGuesses.join(' ');
	document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(', ');
	startGame();
}

//updates the total guesses var
function updateGuesses(letter){
	guessesLeft --;
	document.querySelector("#guesses-left").innerHTML = guessesLeft;

	if (word.indexOf(letter) === -1) {
		guessedLetters.push(letter);
		document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(', ');
	} else {
		
		for (var i = 0; i< word.length; i++) {
			if (word[i] === letter) {
				correctGuesses[i] = letter;
			}
		}
		document.querySelector("#current-word").innerHTML = correctGuesses.join(' ');
	}

}

function checkWin() {
	if (correctGuesses.indexOf('_') === -1) {
		wins++;
		document.querySelector("#wins").innerHTML = wins;
		reset();
	} else if (guessesLeft === 0) {
		losses ++;
		document.querySelector("#losses").innerHTML = losses;
		reset();
	}
}

//Detects which key is pressed
document.onkeyup = function (event) {

	//turns all inputed letters to lower case
	var letterGuessed = event.key;


	//Reduces the guesses left by one everytime a key is pressed 
	updateGuesses(letterGuessed);
	checkWin();
	
};

startGame();
