let options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  console.log(index);
  console.log(options[index]);
  return options[index];
}
