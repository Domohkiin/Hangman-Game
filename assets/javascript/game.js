//Array of pets 
var pets = 
["pineapple", "snail", "narwhal", "lobster", "dragon", "dilophosaurus", 
"rock", "bird", "lizard", "cat", "dog"]

//the var where the guessed letters are put
var guessedLetters = [];

//word to guess
var wordToGuess = null;

//Number of guesses you start with
var guessesLeft = null;

//Win to loss counter
var wins = 0;
var losses = 0;

//randmly selects a word from the pets array
var word = pets[Math.floor(Math.random() * pets.length)];

//separates the selected word and divides it into individual letters
//var letters = word.split("");

//generates underscores equal to the length of the selected word and
//puts them on the page
var underscore = "";
for(i=0; i<word.length; i++) {
	underscore = underscore + "_ "
}
document.querySelector("#current-word").innerHTML = underscore;

//updates the total guesses var
var updateGuessesLeft = function(){
	guessesLeft = word.length + 5;
	document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

updateGuessesLeft();

//Detects which key is pressed
document.onkeyup = function(event) {

	//Reduces the guesses left by one everytime a key is pressed 
	guessesLeft--;

	//turns all inputed letters to lower case
	var key = String.fromCharCode(event.keycode).toLowerCase();

	//pushes guessed letters into the guessedLetters array
	guessedLetters.push(choice);

	//Checks if the guessed letter is in the word
	for(str.search("key")>= 0)
		underscore = str.replace()
}
