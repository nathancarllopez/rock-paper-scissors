function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tie';
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return 'lose';
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return 'win';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'.");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if (result == 'lose') {
            computerScore++;
            alert(`Computer plays ${computerSelection} and you played ${playerSelection}.\nYou lose.`);
        } else if (result == 'win') {
            playerScore++;
            alert(`Computer plays ${computerSelection} and you played ${playerSelection}.\nYou win.`);
        } else {
            alert(`Computer plays ${computerSelection} and you played ${playerSelection}.\nYou tie.`);
        }
        
    }
    console.log("Here are the results:");
    console.log(`You won ${playerScore} rounds, and the computer won ${computerScore} rounds.`)
    if (playerScore > computerScore) {
        console.log("You win this game!")
    } else if (computerScore > playerScore) {
        console.log("Better luck next time.")
    }
}