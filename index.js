var options = ["Fire", "Water", "Grass"];
let playerScore = 0;
let computerScore = 0;

// getting DOM elements
const scoreboardText = document.getElementById('scoreboard-text');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');

function getComputerChoice(options) {
    let computerChoice = Math.floor(Math.random()*options.length);
    console.log(options[computerChoice]);
    return options[computerChoice].toLowerCase();
}

function getPlayerChoice() {
    // let playerChoice = prompt("Choose Paper, Scissors, or Rock: ");
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);
            let playerChoice = button.id;
            playRound(options, playerChoice.toLowerCase())
        })
    })
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
        scoreboardText.innerHTML = "Water beats Grass <br> You win!"
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
        scoreboardText.innerHTML = "Grass beats Fire <br> You lose!"
    } else {
        console.log("Did you enter the right thing? Try again!")
    }
    return playerScore, computerScore;
}

// function game(options) {
//     for (i = 0; i < 5; i++) {
//         playRound(options);
//         if (playerScore == 3) {
//             console.log("You won best of 5! Great job!")
//             break;
//         } else if (computerScore == 3) {
//             console.log("Aww you lose...")
//             break;
//         }
//     }
//     if (playerScore > computerScore) {
//         console.log("You won! Nice one.")
//     } else if (computerScore > playerScore) {
//         console.log("You lose, unlucky!")
//     }
// }

// game(options);

// playRound(options)

getPlayerChoice();