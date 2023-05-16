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
    document.querySelector('#start').textContent = 'Start game';

    let scores = {
        'player': 0,
        'computer': 0
    }
    document.querySelector('#player-score').textContent = `Your score: ${scores['player']}`;
    document.querySelector('#computer-score').textContent = `Computer score: ${scores['computer']}`;

    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', () => {
        const result = buttonClick('rock', scores);
        updateScore(result, scores);
        determineWinner(scores);
    });

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => {
        const result = buttonClick('paper', scores);
        updateScore(result, scores);
        determineWinner(scores);
    });

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
        const result = buttonClick('scissors', scores);
        updateScore(result, scores);
        determineWinner(scores);
    });
}

const startButton = document.querySelector('#start');
startButton.addEventListener('click', game);

function updateScore(result, scores) {
    if (result == 'win') {
        // scores["player"]++;
        document.querySelector('#player-score').textContent = `Your score: ${scores['player']}`;
    } else if (result == 'lose') {
        // scores["computer"]++;
        document.querySelector('#computer-score').textContent = `Computer score: ${scores['computer']}`;
    }
}

function determineWinner(scores) {
    if (scores["player"] == 5) {
        document.querySelector('#the-winner').textContent = 'You win!';
        document.querySelector('#start').textContent = 'Restart game';
        scores = {
            'player': 0,
            'computer': 0
        };
    } else if (scores["computer"] == 5) {
        document.querySelector('#the-winner').textContent = 'You lose...';
        document.querySelector('#start').textContent = 'Restart game';
        scores = {
            'player': 0,
            'computer': 0
        };
    }
}