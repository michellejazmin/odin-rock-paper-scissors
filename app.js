let playerCounter = 0, computerCounter = 0;

function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * 3);
  return options[index];
}

function getPlayerChoice() {
  let playerChoice = prompt('Choose your weapon: ').toLowerCase();
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  let result;

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

  return result;
}

function game() {  
  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    console.log(`Round ${i+1}: ` + playRound(playerSelection, computerSelection));
  }
  
  console.log(`Player: ${playerCounter} points\nComputer: ${computerCounter} points`);

  if (playerCounter > computerCounter) console.log('You won the game!');
  else if (playerCounter < computerCounter) console.log('You lost the game!');
  else console.log("There are no winners");
}

game();