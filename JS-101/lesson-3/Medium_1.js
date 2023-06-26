// Question 1
for (let i = 0; i < 10; i++) {
  console.log(
    'The Flintstones Rock!'.padStart(i + 'The Flintstones Rock!'.length, ' ')
  );
}

// Question 2
let munstersDescription = 'The Munsters are creepy and spooky.';
let newStr = '';
for (let i = 0; i < munstersDescription.length; i++) {
  if (
    munstersDescription.charCodeAt(i) > 65 &&
    munstersDescription.charCodeAt(i) < 90
  ) {
    newStr += munstersDescription[i].toLowerCase();
  } else {
    newStr += munstersDescription[i].toUpperCase();
  }
}

// LS solution
// console.log(munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join(""));

// Question 3 - number % divisor === 0 is finding the factors - any number that goes divides without a remainder
function factors(number) {
  if (number < 1) {
    console.log('Enter a positive number');
    return;
  }
  let factors = [];
  for (let i = 1; i < number / 2; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

// Question 4 - push mutates the original array, concat returns a new array

// Question 5 - JS rounding error? If so, then second snippet will be false

// Question 6 - Will out put false - use Number.isNaN()

// Question 7 - 34 - function changes the value of the variable created ni the function scope, not the original, so we log answer - 8

// Question 8 - Yes - pointer to same values, then mutating those values

// Question 9 - Paper

// Question 10 - 'no' - foo returns yes, and yes !== no
