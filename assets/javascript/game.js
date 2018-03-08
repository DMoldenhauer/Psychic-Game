

// PSEUDOCODE
// -------------------------------------------------------------

//repeat until (A) or (B):
//user guesses
// (A)user gives correct guess
//add a win to the screen
//app picks a new letter
//reset guessesLeft  to zero

//(B) user gives a wrong guess
//subtract 1 from guessesLeft
//IF guessesLeft becomes 0.
//add 1 to losses
//app picks a new letter
//reset guessesLeft to 0
//ELSE repeat until (C) or (D):
//add guess to guesses on screen
//decrease guessesLeft count by 1
//(C) user runs out of guesses
//add a loss to the screen
//(D) user gives correct guess
//add win to the screen
//app picks new letter
//reset guessesLeft to zero


//3 functions
//evaluate guess
//correct guess
//incorrect guess
//track guesses left
//restart



// GLOBAL VARIABLES
// --------------------------------------------------------------

// Declare variables for wins, losses, guessesLeft,  
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var randomLetter = "a";
var computerLetter = generateRandomLetter()
var userGuessed = "";


// FUNCTIONS
// -------------------------------------------------------------
// App randomly picks a letter
function generateRandomLetter() {
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    randomLetter = computerChoices[Math.floor(Math.random()*(computerChoices.length))];
    return randomLetter;
}

//Compare user's guess to computer's letter
function compareGuessToComputer() {
    if (userGuessed===computerLetter) {
        winCount= wincount++;
        //test
        alert("Wins: " + winCount);

        document.getElementById("winCounter").innerHTML = winCount;
        alert("You guessed correctly!");
        restart();

    } else if (guessesLeft>0) {
         //test
         alert("test guesses left should drop ");

        var userGuessed = UserGuessed + event.key + " ";
        document.getElementById("userGuesses").innerHTML = userGuessed;
        var guessesLeft = guessesLeft - 1;
        document.getElementById("guessCounter").innerHTML = guessesLeft;

    } else {
        lossCount = lossCount +1;
        //test
        alert("Losses: " + lossCount);

        document.getElementById("lossCounter").innerHTML = lossCount;
        alert("You lost!");
        restart();
    }
}
// restart game
function restart() {
    guessesLeft = 9;
    document.getElementById("guessCounter").innerHTML = guessesLeft;
    generateRandomLetter();
}


// Testing

console.log(computerLetter);

function compareGuessToComputer() {


}

// MAIN PROCESS
// --------------------------------------------------------------

// Restarts Game
restart();

//determine what the user guessed 
document.onkeyup = function (event) {
    var userGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    // return userGuessed;
    compareGuessToComputer();
    // Testing
    console.log(userGuessed);
    console.log(guessesLeft);
    
}


