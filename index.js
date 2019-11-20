var word = require("./word.js");
var inquirer = require("inquirer");

var letras = "abcdefghijklmnopqrstuvwxyz";
//options array
var letrasList = [];

//random 
var randIndex = Math.floor(Math.random() * letrasList.length);
var randWord = letrasList[randIndex];

//to the constructor
var programWord = new word (randWord);
var requireNew = false;

//fro the already guessed letters
var incorrectGuess = [];
var correctGuess = [];

var leftLives = 10;

function logicPath(){
    if (requireNew){
        var randIndex = Math.floor(Math.random() * letrasList.length);
        var randWord = letrasList[randIndex];

        programWord = new word (randWord);
        var requireNew = false;
    }

//testing 
var fullWord = [];
programWord.arr.forEach(completeP);

//missing lett
if (fullWord.includes(false)){
    inquirer
    .prompt([
        {
            type: "input",
            message: "Guess the lettter!",
            name: "userinput"
        }
    ])
    .then(function(input){
        if(
            !letras.includes(input.userinput) ||
            input.userinput.length > 1
        ) {
            console.log("\nTry again...\n");
            logicPath();
        }else{
            if(
                incorrectGuess.includes(input.userinput) ||
                correctGuess.includes(input.userinput) ||
                input.userinput === ""
            ){
                console.log("\nUndifined Value\n");
                logicPath();
            }else{
                var checking = [];
                programWord.arr.forEach(check);
                if(checking.join("")=== fullWord.join(" ")) {
                    console.log("\nINCORRECT\n");

                    incorrectGuess.push(input.userinput);
                    leftLives--;
                }else{
                console.log("\n¡CORRECT!\n");
                    correctGuess.push(input.userinput);
                }
                programWord.log();

                //prints
                console.log("Lives left: " + leftLives + "\n");
                console.log("Alreaady used: " + incorrectGuess.join(" ") + "\n");

                if(leftLives > 0){
                    logicPath();
                }else{
                    console.log("Oops, srry loser");
                    restartGame();
                }

                function check(key){
                    checking.push(key.guessed);               
                }
            }
        }
    });
} else {
    console.log("YOU WIN!");
    restartGame();
}
function completeP(key){
    fullWord.push(key.guessed);
}
}
 function restartGame() {
     inquirer
     .prompt([
         {
            type: "list",
            message: "Would you like to:",
            choices: ["Play Again", "Exit"],
            name: "restart"
         }
     ]).then(function(input){
        if(input.restart === "Play Again"){
            requireNew = true;
            incorrectGuess = [];
            correctGuess = [];
            leftLives = 10;
            logicPath();
        }else{
            return;
        }
     });
 }
logicPath();