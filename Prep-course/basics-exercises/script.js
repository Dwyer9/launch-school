// 1.
let name = 'Mat' + ' ' + 'Dwyer';
console.log(name);

//2.
let thousands = parseInt(4936 / 1000);
let hundreds = parseInt((4936 - thousands * 1000) / 100);
let tens = parseInt((4936 - thousands * 1000 - hundreds * 100) / 10);
let ones = parseInt(4936 - thousands * 1000 - hundreds * 100 - tens * 10);
console.log(thousands, hundreds, tens, ones);

//3.
/* 
string
boolean
number
number
undefined
object
*/

//4.
//Using + when either operand is a string will coerce the other operand into a string, and then  concatenate.

// 5.
console.log(Number('5') + 10);

//6.
console.log(`The value of 5 + 10 is ${Number('5') + 10}`);

// 7. No error, returns undefined

// 8.
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

// 9.
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};

// 10. False

// 11. 3

// 12. True
