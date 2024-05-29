// write a function that returns the computer choice- rock, paper or scissors
humanScore = 0;
computerScore = 0;
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



//CREATE a function to play a round
function playRound(humanChoice, computerChoice) {
//DECIDE who wins the round- Check human choice and compare to computer choice
//CALL a function to print who won
//INCREMENT a score acording to the result



const divText = document.querySelector("div");
const divScore = document.querySelector(".score");



switch(humanChoice) {
    case "rock":
        if (computerChoice === "paper") {
            divText.textContent = roundEndMessage(humanChoice, computerChoice, "lose");
            computerScore++; 
        } else if (computerChoice === "scissor") {
            divText.textContent = roundEndMessage(humanChoice, computerChoice, "win");
            humanScore++;
        } else {
            divText.textContent = roundEndMessage(humanChoice, computerChoice, "draw");
        }
        break;

    case "paper":
        if (computerChoice === "scissor") {
            divText.textContent = roundEndMessage(humanChoice, computerChoice, "lose");
            computerScore++;
        } else if (computerChoice === "rock") {
            divText.textContent = roundEndMessage(humanChoice, computerChoice, "win");
            humanScore++;
        } else {
            divText.textContent = roundEndMessage(humanChoice, computerChoice, "draw");
        }
        break;

    case "scissor":
        if (computerChoice === "rock") {
            divText.textContent = roundEndMessage(humanChoice, computerChoice, "lose");
            computerScore++;
        } else if (computerChoice === "paper") {
            divText.textContent = roundEndMessage(humanChoice, computerChoice, "win");
            humanScore++;      
        } else {
            divText.textContent = roundEndMessage(humanChoice, computerChoice, "draw");
        }
        break;
    }

    divScore.textContent = `Human:${humanScore} | Computer:${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {

        if (humanScore > computerScore) {
            
            setTimeout(function() {
                alert("You Won The Game!"); 
            }, 0)
        } else {
            
            setTimeout(function() {
                alert("You Lost The Game!"); 
            }, 0)
        }

        humanScore = 0;
        computerScore = 0;
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


//SELECT all buttons
//ADD eventlistener for humanchoice for the game
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        playRound(button.innerText, getComputerChoice())
    })
})


