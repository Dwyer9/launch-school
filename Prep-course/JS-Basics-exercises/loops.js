// 1. Will log even numbers from 0 to 10
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 2.
for (let i = 10; i >= 1; i -= 1) {
  console.log(i);
  if (i === 1) console.log('Launch!');
}

// Triple Greeting
let greeting = 'Aloha!';

for (let i = 0; i <= 3; i++) {
  console.log(greeting);
}

// Take two
for (let i = 1; i <= 100; i++) {
  console.log(i * 2);
}

// Looping over Array elements
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

// Continue
let cities = [
  'Istanbul',
  'Los Angeles',
  'Tokyo',
  null,
  'Vienna',
  null,
  'London',
  'Beijing',
  null,
];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === null) continue;

  console.log(cities[i].length);
}

// And on and on and on - No end condition specified
for (let i = 0; i < 1; i += 1) {
  console.log('and on');
  // can also use break
}

// That's odd
let count = 1;
while (count < 41) {
  if (count % 2 === 1) console.log(count);
  count += 1;
}

// Finding Nemo
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
for (let i = 0; i < fish.length; i++) {
  if (fish[i] !== 'Nemo') {
    console.log(fish[i]);
  } else {
    console.log(fish[i]);
    break;
  }
}

// Do.. While - While loop won't run because the condition is false to start, Do While loop will always run once before checking the start condition
