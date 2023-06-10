const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num) || num < 0);
}

// Welcome message
prompt('Welcome to the loan calculator');

// Ask for loan amount
prompt('What is the loan amount?');
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt('Must enter a positive number');
  loanAmount = readline.question();
}

// Ask for loan duration
prompt('What is the loan duration in years?');
let loanDuration = readline.question();

while (invalidNumber(loanDuration) || loanDuration < 1) {
  prompt('Must enter a positive number greater than 1');
  loanDuration = readline.question();
}

// Calculate duration in months
let monthlyDuration = +loanDuration * 12;

// Ask for APR
prompt('What is the interest rate?\n(Example 5 for 5%)');
let interestRate = readline.question();

while (invalidNumber(interestRate)) {
  prompt('Must enter a positive number');
  interestRate = readline.question();
}

// Calculate monthly interest rate
let annualInterestRate = +interestRate / 100;
let monthlyInterestRate = +annualInterestRate / 12;

// Calculate Monthly Payment
let monthlyPayment;

if (monthlyInterestRate === 0) {
  monthlyPayment = loanAmount / monthlyDuration;
} else {
  monthlyPayment =
    +loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -monthlyDuration)));
}

// Display monthly payment
prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

// Ask to calculate again?
