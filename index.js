var options = ["Fire", "Water", "Grass"];
let playerScore = 0;
let computerScore = 0;
let playerChoice = 0;

// getting DOM elements
const scoreboardText = document.getElementById('scoreboard-text');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const newGameBtn = document.getElementById('restart');
const buttons = document.querySelectorAll('button');


function newGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerHTML = playerScore;
    computerScoreText.innerHTML = computerScore;
    scoreboardText.innerHTML = "First to 5 points <br> Click element to start";
    newGameBtn.style.visibility = 'hidden';
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        console.log("player " + playerChoice)
        startGame(playerChoice);
    })
})

newGameBtn.addEventListener('click', () => {
    newGame();
})

function getComputerChoice(options) {
    let computerChoice = Math.floor(Math.random()*options.length);
    console.log("computer " + options[computerChoice])
    return options[computerChoice].toLowerCase();
}

function startGame(playerChoice) {
    if (playerScore < 5 && computerScore < 5) {
        playRound(options, playerChoice)
        if (computerScore == 5 || playerScore == 5) {
            if (playerScore == 5) {
                scoreboardText.innerHTML = "You won!"
                newGameBtn.style.visibility = 'visible'
            } else {
                scoreboardText.innerText = "You lose, unlucky!"
                newGameBtn.style.visibility = 'visible'
            }
        }
    }
}

function playRound(options, playerChoice) {
    let computerChoice = getComputerChoice(options);
        if (playerChoice == computerChoice) {
            scoreboardText.innerHTML = "It's a draw!"
        } else if (playerChoice == "fire" && computerChoice == "grass") {
            playerScore += 1;
            playerScoreText.innerHTML = playerScore;
            scoreboardText.innerHTML = "Fire beats Grass <br> You win!"
        } else if (playerChoice == "water" && computerChoice == "fire") {
            playerScore += 1;
            playerScoreText.innerHTML = playerScore;
            scoreboardText.innerHTML = "Water beats Fire <br> You win!"
        } else if (playerChoice == "grass" && computerChoice == "water") {
            playerScore += 1;
            playerScoreText.innerHTML = playerScore;
            scoreboardText.innerHTML = "Grass beats Water <br> You win!"
        } else if (playerChoice == "fire" && computerChoice == "water") {
            computerScore += 1;
            computerScoreText.innerHTML = computerScore;
            scoreboardText.innerHTML = "Water beats Fire <br> You lose!"
        } else if (playerChoice == "water" && computerChoice == "grass") {
            computerScore += 1;
            computerScoreText.innerHTML = computerScore;
            scoreboardText.innerHTML = "Grass beats Water <br> You lose!"
        } else if (playerChoice == "grass" && computerChoice == "fire") {
            computerScore += 1;
            computerScoreText.innerHTML = computerScore;
            scoreboardText.innerHTML = "Fire beats Grass <br> You lose!"
        }
    return playerScore, computerScore;
}
