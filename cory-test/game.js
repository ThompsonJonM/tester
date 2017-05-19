var userInput = '';
var wordArray = ['test', 'tester', 'testertest'];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var word = randomWord.split([]);
var guessArray = [];
var guesses = 10;
var answersArray = [];

//display word length
window.onload = function() {
	for (var i = 0; i < word.length; i++) {
		answersArray[i] = "_";
	}

	document.getElementById("hold").innerHTML = answersArray.join(' ');
}

//store user input into userArray
document.onkeyup = function(input) {

	//var input = input key
	var userInput = (input.key).toLowerCase();

		//record countdown
		if (input.key) {
			guesses--;

			//guess push user input 

			if (guesses === 0) {
				alert("GAME OVER!")
			}
		}

		for (var i = 0; i < word.length; i++) {
			if (userInput === word[i]) {

				answersArray[i] = word[i];
			}
		}

		if (answersArray.length === word.length) {
			alert("YOU WIN!")
		}

		//display guesses in HTML
		document.getElementById("userText").innerHTML = answersArray.join(' ');

		document.getElementById('display').innerHTML = userInput;

		//display guesses left in HTML
		document.getElementById("guesses").innerHTML = guesses;
}

document.onkeyup = function(e) {
	userInput = e.key;
	if (userInput === 'd') {
		document.write(randomWord);
	}
}