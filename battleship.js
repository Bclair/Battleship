var location = 3;
var location = 4;
var location = 5;

var guess;   // undefined until user makes a guess
var hits = 0;
var guesses = 0;

var isSunk = false;  //will be true when ship is sunk

while (isSunk == false) {
    guess = prompt('Ready, Aim, Fire! (Enter a number from 0-6):');
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    } else {
        guesses = guesses +1;
    }
}