let playerScore = 0;
let computerScore = 0;
let ties = 0;

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
    result.innerHTML = "Well done, you chose " + playerSelection + 
    " and the computer chose " + computerSelection + 
    " so you win!";
}

function youLose(playerSelection, computerSelection) {
    computerScore++
    result.innerHTML = "Unfortunately, you chose " + playerSelection + 
    " and the computer chose " + computerSelection + 
    " so you lose!";
}

function youDraw(playerSelection, computerSelection) {
    ties++
    result.innerHTML = "You both selected " + computerSelection +
    " so it's a tie!";
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  (playerSelection.toLowerCase() === computerSelection)
  game(playerSelection, computerSelection);
  scores.innerHTML = "Your score: " + playerScore + 
    ". Computer score: " + computerScore + ". Ties: " + ties;
}
const body = document.querySelector("body");

const rock = document.createElement('button');
rock.setAttribute('id', 'rock');
rock.innerHTML = "Rock";
rock.addEventListener('click', function (e) {
  playRound("rock");
})
body.appendChild(rock);

const paper = document.createElement('button');
paper.setAttribute('id', 'paper');
paper.innerHTML = "Paper";
paper.addEventListener('click', function (e) {
  playRound("paper");
})
body.appendChild(paper);

const scissors = document.createElement('button');
scissors.setAttribute('id', 'scissors');
scissors.innerHTML = "Scissors";
scissors.addEventListener('click', function (e) {
  playRound("scissors");
})
body.appendChild(scissors);

const result = document.createElement('div');
const scores = document.createElement('p');
body.appendChild(result);
body.appendChild(scores);
