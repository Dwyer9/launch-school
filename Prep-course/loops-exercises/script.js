// 1.
// let age = Number(prompt('How old are you?'));

// console.log(`You are ${age} years old`);
// for (let future = 10; future <= 40; future += 10) {
//   console.log(`In ${future} years, you will be ${age + future} years old`);
// }

// 2.
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}

// 3. counter is assigned value in while condition - will always be true

// 4. No error, will print numbers from 1 to 5

// 5.
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater 2');

// 6.
function factorialRec(num) {
  if (num === 1) return num;

  return num * factorialRec(num - 1);
}
