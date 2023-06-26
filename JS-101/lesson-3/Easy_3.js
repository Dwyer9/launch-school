// Question 1
numbers.length = 0;
numbers.splice(0, numbers.length);
while (numbers.length) {
  numbers.pop();
}

// Question 2 1, 2, 34, 5 - binary + converts objects to strings and adds

// Question 3 - "hello there" - doesn't mutate the original string

// Question 4 - [{ first: "42" }, { second: "value2" }, 3, 4, 5];

// Question 5
function isColorValid(color) {
  return color === 'blue' || color === 'green';
}

isColorValid = (color) => color === 'blue' || color === 'green';
isColorValid = (color) => color === ['blue', 'green'].includes(color);
