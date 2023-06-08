// 1.
// array1 - 4, array2 - 5, array3 - 0, array4 - 3, array5 - 101

// 2.
// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// myArray.forEach((el) => {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// 3.
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// myArray.forEach((nest) => {
//   nest.forEach((el) => {
//     if (el % 2 === 0) {
//       console.log(el);
//     }
//   });
// });

// 4.
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let oddOrEven = myArray.map((el) => (el % 2 === 0 ? 'even' : 'odd'));

// 5.
function findIntegers(arr) {
  return arr.filter((el) => Number.isInteger(el));
}

// 6.
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let mapped = arr.map((el) => el.length);
let filtered = mapped.filter((el) => el % 2 !== 0);

// 7.
let array = [3, 5, 7];
function sumOfSquares(arr) {
  return arr.reduce((acc, el) => acc + el * el, 0);
}
console.log(sumOfSquares(array));

// 8.
function oddLengths(arr) {
  return arr.reduce((result, el) => {
    let length = el.length;
    if (length % 2 !== 0) {
      result.push(length);
    }
    return result;
  }, []);
}

// 9.
function checkForThree(arr) {
  return arr.includes(3);
}
console.log(checkForThree([1, 3, 5, 7, 9, 11]));
console.log(checkForThree([]));
console.log(checkForThree([2, 4, 6, 8]));

// 10.
arr[1][3] = 606;
