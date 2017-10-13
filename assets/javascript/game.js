///Array of pets 
var pets = 
["pineapple", "snail", "narwhal", "lobster", "dragon", "dilophosaurus", 
"rock", "bird", "lizard", "cat", "dog"]

//the var where the guessed letters are put
var guessedLetters = [];

var correctGuesses = [];

//Win to loss counter
var wins = 0;
var losses = 0;

//number of guesses you have left
var guessesLeft = [];

function startGame() {
	//randomly selects a word from the pets array
	word = pets[Math.floor(Math.random() * pets.length)];

	//displays underscores in place of the selected word
	for (var i = 0; i < word.length; i++) {
		correctGuesses.push('_');

	}
	//sets the initial guess count to 5 more than the length of the word
	guessesLeft = word.length + 5;

	//prints the underscores to the page
	document.querySelector("#current-word").innerHTML = correctGuesses.join(' ');

	//shows the word for debugging
	//document.querySelector("#secret").innerHTML = word;

}

//resets the values of the vars and starts a new game
function reset() {
	guessedLetters = [];
	correctGuesses = [];
	document.querySelector("#current-word").innerHTML = correctGuesses.join(' ');
	document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(', ');
	startGame();
}


function updateGuesses(letter){
	//checks if the letter pressed is in the word
	if (word.indexOf(letter) === -1) {
		//decrements the guesses left if the guess is wrong
		guessesLeft --;
		guessedLetters.push(letter);
		document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(', ');
		document.querySelector("#guesses-left").innerHTML = guessesLeft;
	} else {
		//if it is in the word it will replace the underscore(s) in the proper place
		for (var i = 0; i< word.length; i++) {
			if (word[i] === letter) {
				correctGuesses[i] = letter;
			}
		}
		document.querySelector("#current-word").innerHTML = correctGuesses.join(' ');
	}

}
//checks if the user has won
function checkWin() {
	//if no underscores are found in the array
	if (correctGuesses.indexOf('_') === -1) {
		//wins increases by 1
		wins++;
		//and win count is displayed on the page
		document.querySelector("#wins").innerHTML = wins;
		//runs the show word function 
		showWord();
		//reset();

		//if the player runs out of guesses 
	} else if (guessesLeft === 0) {
		//losses increase by 1
		losses ++;
		//and are shown on the page
		document.querySelector("#losses").innerHTML = losses;
		//reset function runs
		reset();
	}
}
//displays the correct word after it is fully guessed
function showWord() {
	//empties the correctGuesses var
	correctGuesses = [];
	//displays the word 
	document.querySelector("#current-word").innerHTML = word + " is correct!"
	document.querySelector("#Press-Any-Key").innerHTML = "Press any key to continue!";
	
		reset();
	}


//Detects which key is pressed
document.onkeyup = function (event) {


	var letterGuessed = event.key;

	updateGuesses(letterGuessed);
	checkWin();
	
};
//runs the startGame function
startGame();
