let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    return (randomNumber < 1) ? "rock"
    : (randomNumber < 2) ? "paper"
    : "scissors" ;
}

function game(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        (computerSelection === "paper") ? youLose(playerSelection, computerSelection)
        : (computerSelection === "scissors") ? youWin(playerSelection, computerSelection)
        : youDraw(playerSelection, computerSelection);
    } else if (playerSelection === "scissors") {
        (computerSelection === "paper") ? youWin(playerSelection, computerSelection)
        : (computerSelection === "scissors") ? youDraw(playerSelection, computerSelection)
        : youLose(playerSelection, computerSelection);
    } else { //playerSelection paper
        (computerSelection === "paper") ? youDraw(playerSelection, computerSelection)
        : (computerSelection === "scissors") ? youLose(playerSelection, computerSelection)
        : youWin(playerSelection, computerSelection);
    }
}

function youWin(playerSelection, computerSelection) {
    playerScore++
    console.log("Well done, you chose " + playerSelection + 
    " and the computer chose " + computerSelection + 
    " so you win!");
}

function youLose(playerSelection, computerSelection) {
    computerScore++
    console.log("Unfortunately, you chose " + playerSelection + 
    " and the computer chose " + computerSelection + 
    " so you lose!");
}

function youDraw(playerSelection, computerSelection) {
    console.log("You both selected " + computerSelection +
    " so it's a tie!");
}

function playRound() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick rock, paper or scissors.")
        let computerSelection = computerPlay();
        (playerSelection.toLowerCase() === computerSelection) ? i-- : i;
        game(playerSelection, computerSelection);
        console.log("Your score: " + playerScore + 
        ". Computer score: " + computerScore);
    }
    (playerScore >computerScore) ? console.log("You win!") : console.log("You lose!");
}

playRound();