let readline = require('readline-sync');

// Isn't it Odd///////////////////////////////////////////////////////////////////
// function isOdd(num) {
//   return Math.abs(num % 2) === 1;
// }

// Odd Numbers///////////////////////////////////////////////////////////////////
// for (let i = 1; i < 100; i += 2) {
//   console.log(i);
// }
// for (let i = 1; i < 100; i += 1) {
//   if (isOdd(i)) console.log(i);
// }
// for (let i = 1; i < 100; i += 1) {
//   if (i % 2 !== 0) console.log(i);
// }

// function logOdds(low, high) {
//   for (let i = low; i < high; i += 1) {
//     if (i % 2 !== 0) console.log(i);
//   }
// }

// let low = +prompt('Enter Low number');
// let high = +prompt('Enter High number');
// logOdds(low, high);

// Even Numbers ////////////////////////////////////////////////////////////////////
// for (let i = 2; i < 100; i += 2) {
//   console.log(i);
// }
// for (let i = 1; i < 100; i += 1) {
//   if (!isOdd(i)) console.log(i);
// }
// for (let i = 1; i < 100; i += 1) {
//   if (i % 2 === 0) console.log(i);
// }

// How big is the room? //////////////////////////////////////////////////////////////
// let length = +prompt('Enter the length of the room in meters');
// let width = +prompt('Enter the width of the room in meters');

// function roomArea(length, width) {
//   let sqM = (length * width).toFixed(2);
//   let sqF = (sqM * 10.7639).toFixed(2);
//   console.log(
//     `The area of the room is ${sqM} square meters (${sqF} square feet).`
//   );
// }

// roomArea(length, width);

// Modify to ask use to specify input type
// let units = prompt('Meters or Feet?');
// let length = +prompt('Enter the length of the room in meters');
// let width = +prompt('Enter the width of the room in meters');

// function roomArea(length, width, units) {
//   let sqM;
//   let sqF;

//   if (units.toLowerCase() === 'meters') {
//     sqM = (length * width).toFixed(2);
//     sqF = (sqM * 10.7639).toFixed(2);
//     console.log(
//       `The area of the room is ${sqM} square meters (${sqF} square feet).`
//     );
//   } else if (units.toLowerCase() === 'feet') {
//     sqF = (length * width).toFixed(2);
//     sqM = (sqF / 10.7639).toFixed(2);
//     console.log(
//       `The area of the room is ${sqF} square feet (${sqM} square meters).`
//     );
//   } else {
//     console.log('Invalid unit');
//   }
// }

// roomArea(length, width, units);

// Tip Calculator ///////////////////////////////////////////////////////////////////
// console.log('How much was the bill?');
// let bill = parseFloat(readline.question());

// console.log('What percentage would you like to tip?');
// let tipRate = parseFloat(readline.question());

// let tip = (bill * (tipRate / 100)).toFixed(2);
// let total = (+bill + +tip).toFixed(2);

// console.log(`The tip is $${tip}`);
// console.log(`The total is $${total}`);

// Sum Or Product of Consecutive Integers //////////////////////////////////////////////
// console.log('Please enter an integer greater than 0');
// let input = readline.question();
// while (input < 0) {
//   console.log('Input needs to be greater than 0');
//   input = readline.question();
// }

// console.log('Enter "s" to compute the sum, or "p" to compute the product');
// let operation = readline.question();
// while (operation !== 'p' && operation !== 's') {
//   console.log('Invalid operation. Please enter "s" for sum or "p" for product');
//   operation = readline.question();
// }

// let total;

// if (operation === 's') {
//   total = 0;
//   for (let i = 1; i <= input; i++) {
//     total += i;
//   }
//   console.log(`The sum of the integers between 1 and ${input} is ${total}`);
// } else {
//   total = 1;
//   for (let i = 1; i <= input; i++) {
//     total *= i;
//   }
//   console.log(`The product of the integers between 1 and ${input} is ${total}`);
// }

// Short Long Short /////////////////////////////////////////////////////////////////////////
// function shortLongShort(str1, str2) {
//   if (str1.length > str2.length) {
//     return `${str2}${str1}${str2}`;
//   } else {
//     return `${str1}${str2}${str1}`;
//   }
// }

// Leap Years Part 1 ///////////////////////////////////////////////////////////////////////
// function isLeapYear(year) {
//   if (year % 4 !== 0) return false;

//   if (year % 100 === 0) {
//     if (year % 400 === 0) return true;
//     return false;
//   }

//   return true;
// }

// Leap Years Part 2 //////////////////////////////////////////////////////////////////////
// function isLeapYear(year) {
//   if (year % 4 !== 0) return false;

//   if (year <= 1752 && year % 4 === 0) return true;

//   if (year % 100 === 0) {
//     if (year % 400 === 0) return true;
//     return false;
//   }

//   return true;
// }

// Multiples of 3 and 5 ///////////////////////////////////////////////////////////////////////
// function multisum(num) {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) total += i;
//   }

//   return total;
// }

// UTF-16 String Value
function utf16Value(string) {
  let total = 0;

  for (let i = 0; i < string.length; i++) {
    total += string.charCodeAt(i);
  }

  return total;
}
