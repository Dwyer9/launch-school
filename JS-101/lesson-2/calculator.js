const readline = require('readline-sync');

console.log('Welcome to the Calculator!');

// Ask user for first number
console.log("What's the first number?");

let number1 = readline.question();

// Ask user for second number
console.log("What's the second number?");

let number2 = readline.question();

// Ask user for an operation to perform
console.log(
  'What operation would you like to perform? \n1) Add 2) Subtract 3) Mulitply 4) Divide '
);
let operation = readline.question();
// Perform the operation on the two numbers

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

// Print the result to the terminal
console.log(`The result is ${output}`);
