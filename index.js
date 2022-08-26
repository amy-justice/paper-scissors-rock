var options = ["Paper", "Scissors", "Rock"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(options) {
    let computerChoice = Math.floor(Math.random()*options.length);
    console.log(options[computerChoice]);
    return options[computerChoice].toLowerCase();
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose Paper, Scissors, or Rock: ");
    return playerChoice.toLowerCase();
}

function playRound(options) {
    let computerChoice = getComputerChoice(options);
    let playerChoice = getPlayerChoice();
    if (playerChoice == computerChoice) {
        console.log("It's a draw!")
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore += 1;
        console.log("Rock beats Scissors! You win!")
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerScore += 1;
        console.log("Scissors beats Paper! You win!")
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        playerScore += 1;
        console.log("Paper beats Rock! You win!")
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        console.log("Scissors beats Paper! You lose!")
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        console.log("Paper beats Rock! You lose!")
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        console.log("Rock beats Scissors! You lose!")
    } else {
        console.log("Did you enter the right thing? Try again!")
    }
    return playerScore, computerScore;
}

function game(options) {
    for (i = 0; i < 5; i++) {
        playRound(options);
        if (playerScore == 3) {
            console.log("You won best of 5! Great job!")
            break;
        } else if (computerScore == 3) {
            console.log("Aww you lose...")
            break;
        }
    }
    if (playerScore > computerScore) {
        console.log("You won! Nice one.")
    } else if (computerScore > playerScore) {
        console.log("You lose, unlucky!")
    }
}

game(options);