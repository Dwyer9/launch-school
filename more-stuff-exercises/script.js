// 1. [1, 4, 3] - mutated array rather than changing what it references

// 2. Haven't defined the greeting variable before using it

// 3.
let sqr37 = Math.sqrt(37);
console.log(sqr37);

// 4. (if passed in as an array)
function largest(nums) {
  console.log(Math.max(...nums));
}

// 5. Return a reversed list of the lengths of each word in the string

// 6.
function matchWords(arr, exp) {
  let matches = [];
  for (let i = 0; i < arr.length; i++) {
    if (exp.test(arr[i])) {
      matches.push(arr[i]);
    }
  }
  return matches;
}

// 7. Allows code to continue to run if an exception is hit at runtime

// 8.
// function isNotANumber(num) {
//   let floored = Math.floor(num);
//   return !Number.isInteger(floored);
// }

function isNotANumber(value) {
  return value !== value;
}

// 9.
function negativeZero(num) {
  return 1 / num === -Infinity;
}

// 10. 5, y++ converts to number, increments after returning
