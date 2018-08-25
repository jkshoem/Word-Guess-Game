//global
var wordOptions = ["apple", "banana", "orange", "strawberry", "watermelon", "lemon", "grape", "lime", "raspberry", "blueberry", "blackberry", "cherry", "peach", "pineapple"] ;
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
//
var blanksAndSuccesss = [];
var wrongLetters = [];

//winslossguess
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



//func 
//Start
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset variables
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesss = [];

    for (var i=0; i < numBlanks; i++) {
        blanksAndSuccesss.push("_");
    }

    document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesss.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesss);
}
//checkletter and 
function checkletter(letter) {
    var isletter = false;

    for (var i =0; i<numBlanks; i++){
        if(selectedWord[i] == letter) {
            isletter = true;
        }
    }
    if(isletter) {
        for (var i=0; i<numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesss[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    console.log(blanksAndSuccesss);
}
//score 
function roundComplete(){
    //check score in console
    console.log("Win Count: " + winCount)
    console.log("Loss Count: " + lossCount)
    console.log("Guesses Left " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesss.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");



    if (lettersinWord.toString() == blanksAndSuccesss.toString()) {
        winCount++;
        alert("you win!");

        document.getElementById("winCounter").innerHTML = winCount;
        alert(selectedWord + "!")
        startGame();
    }
    //
    else if (guessesLeft == 0) {
        lossCount++;
        alert("you lost!");

        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();

    }

    


}

//main
startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkletter(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}