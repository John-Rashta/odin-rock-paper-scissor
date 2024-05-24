console.log("Hello World");


// write a function that returns the computer choice- rock, paper or scissors

// CREATE function to randomly choose computer choice
function getComputerChoice() {
    // GET random number between 0 and 2 with math.random
    let choice = Math.floor(Math.random() * 3);
    // IF number is 0, return rock
    if (choice === 0) {
        return "rock";

    //  IF number is 1, return paper
    } else if (choice === 1) {
        return "paper";

    //  IF number is 2, return scissor
    } else {
        return "scissor";
    }
}


//CREATE function to validate user choice
function getHumanChoice() {
//GET user choice to play
let userChoice = prompt("What's is your choice?");
//MODIFY the user input by lowercasing it
userChoice = userChoice.toLowerCase();
//VALIDATE the user choice- has to be rock/paper/scissor
if (userChoice === "paper" || userChoice === "rock" || userChoice === "scissor")
    {
        //IF valid return the choice
        return userChoice;

    // ELSE repeat the process
    } else {
       return getHumanChoice();

    }
}


//CREATE 2 variables for each player score
//AND initialize them to 0
let humanScore = 0;
let computerScore = 0;
