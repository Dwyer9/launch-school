// Question 1 - No error, you are able to add an element to an index longer than the current array, it will add undefined elements between what is there and the specified index.
//  Bonus - wil return undefined

// Question 2
str[str.length - 1] === '!';
// Can also use str.endsWith()

// Question 3
Obj.hasOwnProperty('Spot');

// Question 4
let munstersDescription = 'the Munsters are CREEPY and Spooky.';
munstersDescription[0].toUpperCase() +
  munstersDescription.toLowerCase().slice(1);

// Question 5
//  true - type coercion changes false to 0
// False  - no type coercion

// Question 6
Object.assign(additionalAges, ages);

// Question 7
str.includes('Dino');

// Question 8
flinstones.push('Dino');

// Question 9
flinstones.push('Dino', 'Happy');

// Question 10
let index = advice.indexOf('house');
advice.slice(0, index);
