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

function playRound(playerSelection, computerSelection, scores) {
    if (playerSelection == computerSelection) {
        return 'tie';
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'scissors' && computerSelection == 'rock')) {
        scores["computer"]++;
        return 'lose';
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
        scores["player"]++;
        return 'win';
    }
}

function buttonClick(playerSelection, scores) {
    document.querySelector('#player-selection').textContent = `Player chooses ${playerSelection}`

    const computerSelection = getComputerChoice();
    document.querySelector('#computer-selection').textContent = `Computer chooses ${computerSelection}`

    const result = playRound(playerSelection, computerSelection, scores);
    document.querySelector('#results').textContent = `You ${result}`;
    return result;
}

function game() {
    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', () => {
        const result = buttonClick('rock', scores);
        updateScore(result, scores);
    });

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => {
        const result = buttonClick('paper', scores);
        updateScore(result, scores);
    });

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
        const result = buttonClick('scissors', scores);
        updateScore(result, scores);
    });
}

function bestOfFive() {
    let scores = {
        'player': 0,
        'computer': 0
    }
    document.querySelector('#player-score').textContent = `Your score: ${scores['player']}`;
    document.querySelector('#computer-score').textContent = `Computer score: ${scores['computer']}`;
    
    while (scores["player"] < 5 && scores["computer"] < 5) game();

    alert("game over");
}

const startButton = document.querySelector('#start');
startButton.addEventListener('click', bestOfFive);

function updateScore(result, scores) {
    if (result == 'win') {
        // scores["player"]++;
        document.querySelector('#player-score').textContent = `Your score: ${scores['player']}`;
    } else if (result == 'lose') {
        // scores["computer"]++;
        document.querySelector('#computer-score').textContent = `Computer score: ${scores['computer']}`;
    }
}