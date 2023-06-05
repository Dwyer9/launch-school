// Truthy v Falsy - falsy values - null, undefined, 0, '', NaN, -0

// Yes? No? Part 1
let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log('Yes!');
} else {
  console.log('No!');
}

// Yes? No? Part 2
randomNumber ? console.log('Yes!') : console.log('No!');

// Check the Weather, Part 1
let weather = 'cloudy';
if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log('Grab your umbrella.');
} else {
  console.log("Let's stay inside");
}

// Switch - neigh, tweet tweet, *cricket* - no break statements

// Check the Weather, Part 1
switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  default:
    console.log("Let's stay inside");
}

// Logical conditions 1 "Yes!" - using OR operator, only 1 needs to be true

// Logical conditions 2 - "No..." - using AND operator, both need to be true

// Logical conditions 3 - $3.99 - sale is true, !sale is false

// Are we moving? - Yes, both side are true
// without brackets - No, AND evaluates first, and speed is not greater than zero
