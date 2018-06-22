let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
const computerScore__span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result > h3');
const Rock = document.getElementById('rock');
const Paper = document.getElementById('paper');
const Scissors = document.getElementById('scissors');
const action = document.getElementById('action');

function main() {
  rock.addEventListener('click', () => game('Rock'));
  paper.addEventListener('click', () => game('Paper'));
  scissors.addEventListener('click', () => game('Scissors'));
}
main();

const getUserInput = userChoice => {
  if (userChoice === 'Rock' || userChoice === 'Paper' || userChoice === 'Scissors') {
    return userChoice;
  }
};

const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];

};

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'ScissorsPaper':
    case 'PaperRock':
      win(userChoice, computerChoice);
      break;

    case 'RockPaper':
    case 'ScissorsRock':
    case 'PaperScissors':
      lose(userChoice, computerChoice);
      break;

    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorScissors':
      draw(userChoice, computerChoice);
      break;
  }
}
game();

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore__span.innerHTML = computerScore;
  result.innerHTML = userChoice + ' beats ' + computerChoice + " You win";
 
};

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore__span.innerHTML = computerScore;
  result.innerHTML = userChoice + ' loses to ' + computerChoice + ' You lose ';
  
};

function draw(userChoice, computerChoice) {
  result.innerHTML = "It's a draw" + " you both pick " + userChoice;

};
