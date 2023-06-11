const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['rock', 'scissors'],
  lizard: ['spock', 'paper'],
};
const WINNING_SCORE = 3;
const NUMBER_OF_ROUNDS = 5;

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWelcome() {
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock');
  prompt(`Best of ${NUMBER_OF_ROUNDS} wins!`);
}

function isWinner(choice1, choice2) {
  return WINNING_COMBOS[choice1].includes(choice2);
}

function displayGameWinner(playerChoice, computerChoice) {
  if (isWinner(playerChoice, computerChoice)) {
    prompt('You win!');
  } else if (isWinner(computerChoice, playerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function updateScore(playerChoice, computerChoice) {
  if (isWinner(playerChoice, computerChoice)) {
    playerScore++;
  } else if (isWinner(computerChoice, playerChoice)) {
    computerScore++;
  }
}

function displayScore() {
  prompt(`Your score is ${playerScore}, computer score is ${computerScore}\n`);
}

function checkOverallWinner() {
  if (playerScore === 3) {
    prompt('You won the game!\n');
    gameOver = true;
  } else if (computerScore === 3) {
    prompt('Computer won the game!\n');
    gameOver = true;
  }
}

function newGame() {
  gameOver = false;
  playerScore = 0;
  computerScore = 0;
}

displayWelcome();

while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerChoice = readline.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  displayGameWinner(playerChoice, computerChoice);
  updateScore(playerChoice, computerChoice);
  displayScore();
  checkOverallWinner();

  if (gameOver) {
    prompt('Do you want to play again? (y/n)');
    let answer = readline.question().toLowerCase();
    while ((answer[0] !== 'y' && answer[0] !== 'n') || answer.length > 1) {
      prompt('Please enter y or n');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') break;
    newGame();
    console.clear();
    displayWelcome();
  }
}
