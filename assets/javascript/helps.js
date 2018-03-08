<div id="game">
    <p>Press r, p or s to start playing!</p>
  </div>

  <script type="text/javascript">
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var ties = 0;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r") && (computerGuess === "s")) {
          wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          losses++;
        } else if (userGuess === computerGuess) {
          ties++;
        }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    };


    <!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <title>
      Data Types, User Input, Conditional Logic
    </title>
  </head>
  <body>
    <script type="text/javascript">

      var userName = prompt("What's your name?");
      var confirmCats = confirm("Do you like cats?");

      var petName = "Meeses";
      var petType = "Tuxedo Cat";
      var petAge = 5;
      var petIsCat = true;

      if (confirmCats) {
        alert(petName + " " + petType + " " + petAge);
      }
      else {
        alert("You don't get my cat's information");
      }

      if (petIsCat) {
        alert("My pet is a cat");
      }
      else {
        alert("My pet is not a cat");
      }

      if (petAge !== 7) {
        alert("My pet is not 7 years old");
      }

      if (petAge === 5) {
        alert("My pet is 5 years old");
      }
      else if (petAge < 5) {
        alert("My pet is less than 5 years old");
      }
      else if (petAge > 5) {
        alert("My pet is older than 5 years old");
      }

      // document.write() overwrites the entire page. We don't normally use this, but we will today for simplicity
      document.write("Welcome to our page " + userName);

      var catAge = prompt("How old is your cat?");

      // Won't work as expected
      alert(catAge + 2);

      // Works as expected
      alert(parseInt(catAge) + 2);

    </script>
  </body>
</html>

<div id="game">
<!-- write some starting text -->
Press R P or S to begin
</div>

<script type="text/javascript">

//define what beats what
//make decideWinner(userGuess, compGuess) function
//IF userguess==computerGuess, return "tie"
//ELSE, 
//test for the 3 user wins
//ELSE the computer wins

function decideWinner(choice_user, choice_comp) {
  if (choice_user === choice_comp) {
    return "This game is a tie!"
  }

  if (choice_user === "r") {
    if (choice_comp === "s") {
      return "User wins!"
    } else {
      return "Comp wins!"
    }
  }

  if (choice_user === "p") {
    if (choice_comp === "s") {
      return "Comp wins!"
    } else {
      return "User wins!"
    }
  }

    if (choice_user === "s") {
      if (choice_comp === "r") {
        return "Comp wins!"
      } else {
        return "User wins"
      }

    }
}
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];

    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      //
      //make sure userGuess is r, p, or s
      //IF RPS: 
      if (userGuess == "r" || userGuess == "p" || userGuess == "s") {
        //get computer's guess
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        //Compare computer to user's guess to figure out who won

        var winnerString = "<h1>" + decideWinner(userGuess, computerGuess) + "</h1>";

        //display the winner

        //get #game element
        var gameElement = document.getElementById("game");
        //set the text of #game to something about the winner
        gameElement.innerHTML = winnerString;
      
      }
//ELSE: do nothing
      else {

      }
      // Randomly chooses a choice from the options array. This is the Computer's guess.

      // Alerts the key the user pressed (userGuess).
      alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      alert("Computer guess: " + computerGuess);


    };