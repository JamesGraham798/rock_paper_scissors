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

function getHumanChoice() {

    let humanAnswer = prompt("Enter rock, paper, or scissors");
    return humanAnswer.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else {
        console.log(`You tied! Both of you used ${humanChoice}`);
    }

}

function playGame() {
    
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You are the winner! The score was you:${humanScore} computer:${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log(`You are the loser! The score was you:${humanScore} computer:${computerScore}`);
    } else {
        console.log(`You tied! The score was you:${humanScore} computer:${computerScore}`);
    }

}

playGame();
