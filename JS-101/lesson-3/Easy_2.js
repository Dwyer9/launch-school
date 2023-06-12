// Question 1
advice.replaceAll('important', 'urgent');

// Question 2
let reversed = array.slice().reverse();
reversed = array.slice().sort((a, b) => b - a);
let reversedArray = [];
array.forEach((el) => reversedArray.unshift(el));

// Question 3
numbers.includes(number1);
numbers.includes(number2);

// Question 4
'Four score and' + famousWords;
`Four score and ${famousWords}`;
'Four score and'.concat(famounsWords);

// Question 5
numbers.splice(2, 1);

// Question 6
let newArr = [];
flinstones.forEach((el) => {
  if (typeof el !== 'string') {
    el.forEach((item) => newArr.push(item));
  } else newArr.push(el);
});

// Question 7
Object.entries(flinstones).filter((el) => el[0] === 'Barney');

// Question 8
Array.isArray(numbers);
Array.isArray(table);

// Question 9
let padding = Math.floor((40 - title.length) / 2);
title.padStart(padding + title.length, ' ');

// Question 10
statement.split('').filter((el) => el === 't').length;
