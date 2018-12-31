//to ensure that this file runs with the DOM is loaded
$(document).ready(function() {

// GLOBAL VARIABLES
//--------------------------------------------------------------------------
    
    //all possible letters that player or computer can choose from
    var theAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //computer randomly chosen letter from the alphabet
    var computerChoice = "";

    //list of player failed attempts to guess the computer's choice
    var failedGuesses = [];

    //counter for number of player's successful guesses
    var winCounter = 0;

    //counter for number of player's failed guesses
    var lossCounter = 0;

    //maximum number of guesses per "round"
    var guessesLeft = 9;


// FUNCTIONS
//--------------------------------------------------------------------------

// starts a new round
function newRound () {
    computerChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];

    // reset the round
    guessesLeft = 9;
    failedGuesses = [];

    // change HTML to reflect newRound conditions
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("lossCounter").innerHTML = lossCounter;
    document.getElementById("failedGuesses").innerHTML = failedGuesses;

    // testing and debugging
    console.log(computerChoice);
}

//checks whether player input matches or does not match computer selection
function checkLetter (letter) {

    //check to see if player's guess matches computer; if so, register win + start new round
    if (letter === computerChoice) {
        winCounter++;
        alert("You guessed my letter! Yay!");
        document.getElementById("winCounter").innerHTML = winCounter; //update HTML
        newRound(); // reset the round
    }

    else if (guessesLeft <= 9 && guessesLeft > 1) {
        guessesLeft--;
        failedGuesses.push(letter);
        document.getElementById("failedGuesses").innerHTML = failedGuesses.join(" ")
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }

    else {
        lossCounter++;
        failedGuesses.push(letter);
        document.getElementById("failedGuesses").innerHTML = failedGuesses.join(" ")
        alert("You lost! Try again :)");
        document.getElementById("lossCounter").innerHTML = lossCounter; // update HTML
        newRound();
    }

    // testing and debugging
    console.log("Win Count: " + winCounter + " | Loss Count: " + lossCounter + " | Guesses Left " + guessesLeft);
}

//MAIN OPERATIONS
//--------------------------------------------------------------------------

// initiates the program code for the first round and reset for subsequent rounds
newRound();

// "listen" for player keystrokes to register them as guesses
document.onkeyup = function(event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(playerGuess);

        // testing and debugging
        console.log(playerGuess);

}

});