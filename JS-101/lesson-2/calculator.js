const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

let run = true;
let language;

prompt(MESSAGES.language);
languageSelect = readline.question();
while (languageSelect !== '1' && languageSelect !== '2') {
  prompt(MESSAGES.invalidLanguage);
  languageSelect = readline.question();
}

if (languageSelect === '1') {
  language = 'EN';
} else if (languageSelect === '2') {
  language = 'DE';
}

prompt(MESSAGES[language].welcome);

function calculate() {
  // Ask user for first number
  prompt(MESSAGES[language].firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[language].invalidNumber);
    number1 = readline.question();
  }

  // Ask user for second number
  prompt(MESSAGES[language].secondNumber);

  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[language].invalidNumber);
    number2 = readline.question();
  }

  // Ask user for an operation to perform
  prompt(MESSAGES[language].selectOperation);
  let operation = readline.question();

  while (![1, 2, 3, 4].includes(+operation)) {
    prompt(MESSAGES[language].invalidOperation);
    operation = readline.question();
  }

  // Perform the operation on the two numbers

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // Print the result to the terminal
  console.log(MESSAGES[language].result + ' ' + output);

  prompt(MESSAGES[language].runAgain);
  let runAgain = readline.question();

  if (runAgain[0].toLowerCase() !== 'y' || runAgain[0].toLowerCase() !== 'j')
    run = false;
}

while (run) {
  calculate();
}
