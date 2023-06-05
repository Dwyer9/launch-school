// Reading Documentation 1

// Finding Documentation - MDN is the best resource

// Lowercase
String.prototype.toLowerCase();
'Aloha, World!'.toLowerCase();

// Mountain Caps - no method for this, need to write own if needed. Split into array, loop over and capitalise first letter in each word, join into string. If only ever one word passed in, str[0].toUpperCase()

// Array Element Access - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let arr = ['fish', 'and', 'chips'];
arr[1];

// Out of Bounds - accessing an element out of bounds returns undefined

// Property vs Method 'palm tree', 'palm tree', 'sequoia'

// Type of Primitive - number, string, boolean, number, object, undefined

// Return Values - string, object, boolean

// Method Chaining -
// Array containing each word
// Array with indices reversed
// string formed from reversed array

// Equality
// True - loose equality will perform type conversion
// False - strict equality evaluates type as well

// Reading Documentation 2

// Style Guide
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log(`The ${iceCreamTaste} ice cream melted`);

// Data Types - https://developer.mozilla.org/en-US/docs/Glossary/Primitive
// String, Number, Boolean, Null, Undefined, BigInt, Symbol

// Largest Number
Number.MAX_VALUE;

// Arithmetic Operator Precedence - exponent above multiply and divide above add - 20.9

// Date -  date.now() = milliseconds since Jan 1 1970

// Which year is this?
// Date.getYear is deprecated, always use Date.getFullYear. getYear will return year - 1900, getFullYear will return year value (e.g. 2023)

// Argument Signatures - expects 1, the seperator. If called without, terms will be joined with a comma. Called with more, they are ignored. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// String Concatenation - 'str1' + 'str2' OR str1.concat(str2)

// SyntaxError - Needs to have parentheses around the first comparison to use the &&
let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit && currentSpeed - speedLimit > 5) {
  console.log(
    '"People are so bad at driving cars ' +
      'that computers don\'t have to be that good to be much better." ' +
      '-- Marc Andreessen'
  );
}

// TypeError - don't need to have brackets after string.length
let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}
