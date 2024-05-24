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
//CREATE function to play a full game
function playGame() {
    //MOVE playround and variables inside the new function

    //CREATE 2 variables for each player score
    //AND initialize them to 0
    let humanScore = 0;
    let computerScore = 0;
    //REPEAT 5 rounds of game

    for (let i = 0; i < 5; i++) {
        //GET both human and computer choice
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    //PRINT winner of the game
    //IF player won- print he won

    if (humanScore > computerScore) {

        console.log("You Won The Game!");
    //  IF player lost, print he lost
    } else if (humanScore < computerScore) {

        console.log("You Lost The Game!");
    //  IF player drew, print he drew
    } else {

        console.log("You Drew The Game");

    }


    //CREATE a function to play a round
    function playRound(humanChoice, computerChoice) {
        //DECIDE who wins the round- Check human choice and compare to computer choice
        //CALL a function to print who won
        //INCREMENT a score acording to the result
        switch(humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    console.log(roundEndMessage(humanChoice, computerChoice, "lose"));
                    computerScore++; 
                } else if (computerChoice === "scissor") {
                    console.log(roundEndMessage(humanChoice, computerChoice, "win"));
                    humanScore++;
                } else {
                    console.log(roundEndMessage(humanChoice, computerChoice, "draw"));
                }
                break;
        
            case "paper":
                if (computerChoice === "scissor") {
                    console.log(roundEndMessage(humanChoice, computerChoice, "lose"));
                    computerScore++;
                } else if (computerChoice === "rock") {
                    console.log(roundEndMessage(humanChoice, computerChoice, "win"));
                    humanScore++;
                } else {
                    console.log(roundEndMessage(humanChoice, computerChoice, "draw"));
                }
                break;
        
            case "scissor":
                if (computerChoice === "rock") {
                    console.log(roundEndMessage(humanChoice, computerChoice, "lose"));
                    computerScore++;
                } else if (computerChoice === "paper") {
                    console.log(roundEndMessage(humanChoice, computerChoice, "win"));
                    humanScore++;      
                } else {
                    console.log(roundEndMessage(humanChoice, computerChoice, "draw"));
                }
                break;
            }
        }
}

//CREATE a function to return the string
function roundEndMessage(humanChoice, computerChoice, status) {
    //CHECK which status it is
    //IF status is win, than return winning string
    if (status === "win") {

        return `You win! ${humanChoice} beats ${computerChoice}`;
    //  IF status is lose, than return losing string
    } else if (status === "lose") {

        return `You lose! ${computerChoice} beats ${humanChoice}`;
    // IF status is draw, than return draw string
    } else {

        return `You draw! ${humanChoice} draws ${computerChoice}`;
    }
}

playGame();

