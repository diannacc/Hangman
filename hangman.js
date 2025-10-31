var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];

var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;
var gameOver = false; //Checks to see if the game is finished yet

function newGame() {
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    gameOver = false;
    updatePage();
}

function guessLetter() {
    if (gameOver) {
        alert("The game is over! Start a new game to play again.");//Game Ended Alert
        return;
    }

    if (word === "") {//Start Up New Game Alert
        alert("Start a new game first!");
        return;
    }

    var input = document.getElementById("guess");
    var letter = input.value;

    //Blocks User from Entering Multiple Letters as a Single Guess
    if (letter === "" || letter.length !== 1) {
        alert("Please enter a single letter.");
        input.value = "";
        return;
    }

    //Blocks User from Repeated Letter Guesses
    if (guesses.indexOf(letter) >= 0) {
        alert("You already guessed this letter! Choose another letter.");
        input.value = "";
        return;
    }

    guesses += letter;

    if (word.indexOf(letter) < 0) {
        guess_count--;
    }

    input.value = ""; 
    updatePage();
}

    function updatePage() {
        var clueString = "";
        for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
            if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        } 
            else {
            clueString += "_ ";
        }
    }

    //update the clue string    
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;


    //update the guesses from the user
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;


    //update the image
    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";


    checkGameStatus(); //Game Status Check
}

    //Check to see if the game is Won or Lost
    function checkGameStatus() {
        if (word !== "" && word.split("").every(letter => guesses.indexOf(letter) >= 0)) {
        gameOver = true;
        alert("Congratulations! You've guessed the correct word!");//Won the Game
        } 
        else if (guess_count <= 0) {
        gameOver = true;
        alert("Game Over! You have 0 tries left :( The word was: " + word);//Lost the Game
        }
}
