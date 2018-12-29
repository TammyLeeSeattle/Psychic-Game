/*

Requirements of the Game:

The visual elements: display a header, text, Wins, Losses, Guesses Left, and a growing list of Guesses so far

- The ability for the game to create a list that is made up of the player keystrokes
    - this list must increase as the player adds more keystrokes
    - this list must convert the keystroke to lower case
    - this list must be displayed to the player
- Each time a keystroke is found, a -1 is issued from the Guesses Left
- The ability to store a counter for Wins
- The ability to store a counter for Losses
- Create a loop that allows for 9 guesses 
    - if during the loop, a keystroke matches the computer's random letter, then stop the loop
        - then add a +1 to the Win counter
    - if the loop continues until 9 guesses and no match is found, then stop the loop
        - then add a +1 to the Losses counter
- Once the loop ends, then reset the Guesses Left and the Guesses So Far

*/

//initialize the game by creating counters for wins and losses; setting them to zero
var wins = 0,
    losses = 0;

//set default max number of guesses to be 9
var guesses = 9;

//ability for the game to "listen" for player keystrokes
document.onkeyup = function(event) {
    var playerGuess = event.key; // determines which key was pressed by player

        //create an array of every letter in the alphabet
        var theAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        //ability for computer to randomly select a letter from the alphabet and store it for later use
        var computerChoice = theAlphabet[Math.floor(Math.random() * theAlphabet.length)];

        //compare player guess vs. computer guess and determine the result
        function 