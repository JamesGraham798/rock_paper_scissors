console.log("hello")

let MAX = 3

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

console.log(getComputerChoice())
