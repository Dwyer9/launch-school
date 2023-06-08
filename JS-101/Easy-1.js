// Isn't it Odd
function isOdd(num) {
  return Math.abs(num % 2) === 1;
}

// Odd Numbers
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

// Even Numbers
// for (let i = 2; i < 100; i += 2) {
//   console.log(i);
// }
// for (let i = 1; i < 100; i += 1) {
//   if (!isOdd(i)) console.log(i);
// }
// for (let i = 1; i < 100; i += 1) {
//   if (i % 2 === 0) console.log(i);
// }

// How big is the room?
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
