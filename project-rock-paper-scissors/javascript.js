function getComputerChoice() {
    let res = Math.random();
    if (res < 0.33) {
        return "rock";
    } else if (res < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Type your choice: rock, paper or scissors.");
    if (input === null) {
        return getComputerChoice();
    }
    switch (input.toLowerCase()) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
            return getComputerChoice();
    }
}


// only play one round
// playRound(humanInput, computerInput);
// console.log(`Human score: ${humanScore}. Computer score: ${computerScore}.`);

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++) {
        const humanInput = getHumanChoice();
        const computerInput = getComputerChoice();
        console.log(`------------------ROUND ${round + 1}------------------`);
        console.log(`You chose ${humanInput}, computer chose ${computerInput}`);
        playRound(humanInput, computerInput);
        console.log(`You got ${humanScore} points and computer got ${computerScore} points.`);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Tie game! ${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)} to ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)}.`);
        } else {
            const winCondition = { rock: "scissors", paper: "rock", scissors: "paper" };
            if (winCondition[humanChoice] === computerChoice) {
                humanScore++;
                console.log(`You win! ${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)}.`);
            } else {
                computerScore++;
                console.log(`You lose! ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)}.`);
            }
        }
    }

}

playGame();