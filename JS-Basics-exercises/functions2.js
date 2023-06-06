// Greet 1 - function greet(greeting = 'Hello')

// Greet 2 -
function greet(greeting = 'Hello', recipient = 'World') {
  console.log(`${greeting}, ${recipient}!`);
}

// Greet 3
// function greet() {
//   let greeting = greeting();
//   let recipient = recipient();
//   console.log(`${greeting}, ${recipient}!`);
// }

// Calculate BMI
function calculateBMI(height, weight) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

console.log(calculateBMI(183, 95));

// Calculate Cat Age
function catAge(age) {
  if (age === 0) return;
  if (age === 1) return 15;
  if (age === 2) return 24;

  return (age - 2) * 4 + 24;
}

// Remove Last Char
function removeLastChar(str) {
  return str.slice(0, str.length - 1);
}

// Arrow Functions 1
let sentence = (verb, noun) =>
  template.replace('VERB', verb).replace('NOUN', noun);

// Arrow Functions 2
let initGame = () => ({
  level: 1,
  score: 0,
});
