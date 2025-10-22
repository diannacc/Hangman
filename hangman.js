var POSSIBLE_WORDS = ["obdurate","verisimilitude","defenestrate","obsequious","dissonant","toady","idempotent"];

var MAX_GUESSES = 6;
var word="";
var guesses = "";
var guess_count = MAX_GUESSES;

function newGame(){
    var randomIndex = parse(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updatePage();
}

function guessLetter(){
    var input = document.getElementById("guess");
    var letter = input.ariaValueMax;
    if(word.indexOf(letter)<0){
        guess_count--;
    }
    guess+=letter;
    updatePage();

}


function updatePage(){
    var clueString = "";
    for(var i =0;i<word.length;i++){
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >= 0){//You Guessed it}
            clueString += currentLetter + " ";

        }
        else{
            clueString += "_ ";
        }

        clueString+= "_ ";
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
    
}