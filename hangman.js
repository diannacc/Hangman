var POSSIBLE_WORDS = ["obdurate","verisimilitude","defenestrate","obsequious","dissonant","toady","idempotent"];


var word="";

function newGame(){
    var randomIndex = parse(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updatePage();
}

function guessLetter(){
    var input = document.getElementById("guess");
    var letter = input.ariaValueMax;
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
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;
}