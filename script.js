let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore__span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result > h3');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const action = document.getElementById('action');

const getUserInput = userChoice => {
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    return userChoice;
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'scissors';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'rock';
      break;
  }
}

let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a Draw";
  }
  // draw(userChoice, computerChoice);
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lose! Paper beats rock!';
    } else {
      return 'You won! Paper beats rock!'
    }
  }
  // lose(userChoice, computerChoice);

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You lose :( Scissors beats paper!';
    } else {
      return 'You won! Scissors beats paper!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You won! Rock beats scissors!';
    } else {
      return "You lose! Rock beats Scissors!";
    }
  }
  // win(userChoice, computerChoice);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
    result.innerHTML = determineWinner(userChoice, computerChoice);


  userScore++;
  // computerScore++;

  userScore_span.innerHTML = userScore;
  computerScore__span.innerHTML = computerScore;
}
game();

// function win(userChoice, computerChoice) {
//   userScore++;
//   userScore_span.innerHTML = userScore;
//   computerScore__span.innerHTML = computerScore;
// }

// function lose(userChoice, computerChoice) {
//   computerScore++;
//   userScore_span.innerHTML = userScore;
//   computerScore__span.innerHTML = computerScore;
// }
// function draw(userChoice, computerChoice){
//   userScore_span.innerHTML = userScore;
//   computerScore__span.innerHTML = computerScore;

//  }
function main() {
  rock.addEventListener('click', function () {
    game('rock');
  })
  paper.addEventListener('click', function () {
    game('paper');
  })
  scissors.addEventListener('click', function () {
    game('scissors');
  })
}

main();
