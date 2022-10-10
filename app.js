let playerCounter = 0, computerCounter = 0;

// Get random choice from the computer
function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * 3);
  return options[index];
}

// Play a round
function playRound(playerSelection) {
  let result;
  let computerSelection = getComputerChoice();
  let message = document.getElementById('message');
  let playerPoints = document.getElementById('player-points');
  let computerPoints = document.getElementById('computer-points');
  let winner = document.getElementById('winner');

  if (playerSelection === computerSelection) {
    result = "It's a tie";
  }
  else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      result = 'You win! Rock beats scissors';
      playerCounter++;
    }
    else {
      result = 'You lose! Paper beats rock';
      computerCounter++;
    }
  }
  else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      result = 'You win! Paper beats rock';
      playerCounter++;
    }
    else {
      result = 'You lose! Scissors beats paper';
      computerCounter++;
    }
  }
  else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      result = 'You win! Scissors beats paper';
      playerCounter++;
    }
    else {
      result = 'You lose! Rock beats scissors';
      computerCounter++;
    }
  }

  message.textContent = result;
  playerPoints.textContent = playerCounter;
  computerPoints.textContent = computerCounter;

  if (playerCounter === 5) {
    winner.textContent = 'You won the game!';
  }

if (computerCounter === 5) {
    winner.textContent = 'You lost the game :(';
  }

}

const rock = document.getElementById('rock');
rock.addEventListener('click', e => playRound('rock'));
  
const paper = document.getElementById('paper');
paper.addEventListener('click', e => playRound('paper'));
  
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', e => playRound('scissors'));

