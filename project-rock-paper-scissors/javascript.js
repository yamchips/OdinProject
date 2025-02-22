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

function playRound() {
    let humanChoice = this.textContent.toLowerCase();
    let computerChoice = getComputerChoice();

    let text = '';
    if (humanChoice === computerChoice) {
        text = `Tie game! ${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)} to ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)}. Human score: ${humanScore}, Computer score: ${computerScore}.`;
    } else {
        const winCondition = { rock: "scissors", paper: "rock", scissors: "paper" };
        if (winCondition[humanChoice] === computerChoice) {
            humanScore++;
            text = `You win! ${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)}. Human score: ${humanScore}, Computer score: ${computerScore}.`;
        } else {
            computerScore++;
            text = `You lose! ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)}. Human score: ${humanScore}, Computer score: ${computerScore}.`;
        }
    }

    const li = document.createElement('li');
    li.textContent = text;
    const ul = document.querySelector('ul');
    ul.appendChild(li);
    if (humanScore === 5 || computerScore === 5) {
        let winner = humanScore > computerScore ? 'You' : 'Computer';
        winText = `${winner} wins!`;
        const winLi = document.createElement('li');
        winLi.textContent = winText;
        ul.appendChild(winLi);
        resetScore();
    }
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let humanScore = 0;
let computerScore = 0;

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);


