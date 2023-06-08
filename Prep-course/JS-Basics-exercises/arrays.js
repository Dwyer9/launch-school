// first element - would return undefined if empty
function first(arr) {
  return arr[0];
}

// Last element
function last(arr) {
  return arr[arr.length - 1];
}

// Add + Delete
// energy.shift();
// energy.push('geothermal');

// Alphabet
// alphabet.split('');

// Filter
let scores = [96, 47, 113, 89, 100, 102];
scores.filter((el) => el > 100).length;

// Vocabulary
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated'],
];

vocabulary.forEach((nest) => {
  nest.forEach((el) => console.log(el));
});

// Equality - log false, arrays will only equate to true if they point to the same spot in memory. Would need to loop over each and compare each element to check for true equality

// Type
function filter(input) {
  return Array.isArray(input);
}

// Travel
let destinations = [
  'Prague',
  'London',
  'Sydney',
  'Belfast',
  'Rome',
  'Aruba',
  'Paris',
  'Bora Bora',
  'Barcelona',
  'Rio de Janeiro',
  'Marrakesh',
  'New York City',
];

function checkDestination(dest) {
  for (let i = 0; i < destinations.length; i++) {
    if (dest === destinations[i]) return true;
  }

  return false;
}

// Passcode
passcode.join('-');

// Checking items off grocery list
let groceryList = [
  'paprika',
  'tofu',
  'garlic',
  'quinoa',
  'carrots',
  'broccoli',
  'hummus',
];
for (let i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i]);
  groceryList.shift();
}
