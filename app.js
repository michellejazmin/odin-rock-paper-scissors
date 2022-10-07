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
