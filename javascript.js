let MAX = 3;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(number = MAX) {
    // Value will be 0, 1, or 2
    let computerChoice = Math.floor(Math.random() * number);
    let rockPaperScissors;

    if (computerChoice == 0) {
        rockPaperScissors = "rock";
    }
    else if (computerChoice == 1) {
        rockPaperScissors = "paper";
    }
    else {
        rockPaperScissors = "scissors";
    }
    return rockPaperScissors;
}

function playRound(humanChoice, computerChoice) {

    let results;

    if (humanChoice == 'rock' && computerChoice == 'paper') {
        results = "You lose that round! Paper beats Rock.";
        computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        results = "You win that round! Rock beats Scissors.";
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        results = "You lose that round! Scissors beats paper.";
        computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        results = "You win that round! Paper beats Rock.";
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        results = "You lose that round! Rock beats Scissors.";
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        results ="You win that round! Scissors beats Paper.";
        humanScore++;
    } else {
        results = `You tied that round! Both of you used ${humanChoice}`;
    }

    return results;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.textContent.toLowerCase());
            
            let resultsDiv = document.querySelector('#results');

            resultsDiv.textContent = playRound(button.textContent.toLowerCase(), getComputerChoice());

            let scoreDiv = document.querySelector('#score')

            scoreDiv.textContent = `You:${humanScore} Opponent:${computerScore}`

            let winnerDiv = document.querySelector('#winner');

            if (humanScore == 5) {
                winnerDiv.textContent = `You are the winner! Refresh the page to start again`;
            } 
            else if (computerScore == 5) { 
                winnerDiv.textContent = `You lost! Refresh the page to start again`;
            }
        })
    }
)



