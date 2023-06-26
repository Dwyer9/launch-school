/* Understand the Problem
Input - An array of strings
Output - New Array where the strings are sorted by the highest number of adjacent consonants
Rules - 
  Explicit
    - Consonants are considered adjacent if they are next to each other in the same word, or separated by a space across adjacent words
    - Consonants are any letter that is not a vowel
    - If 2 strings contain the same highest number, retain their original positioning
  Implicity
    -Strings can contain multiple words


Questions
  - Will there by other punctuation/non-letter characters in the strings? If so, how do we handle that?
  - Will the input always be strings?
  - What to do with an empty array?
  - Will there be empty strings?


Test Cases & Examples
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

Data Structures
Will use Arrays in this code. We may want to use an object to store data at some point

Algorithm
Loop over array of strings
  - remove whitespace from strings
  - count number of adjacent consonants in string
    - Use function to count number of adjacent 
  - Add to object with the string as key, number as value
Convert object to array, and then sort based on number
Create final array with strings in order


Counting function
  - Remove spaces from the string
  - Create a counter set to zero
  - Create an empty string
  - Loop through input string, if the letter is a consonant, add it to the empty string
    - If it's a vowel, 
      -check the length of the temp string to counter. 
      -If longer, update counter. 
      - Reset temp string
  - Return the count


Implement the Code */

function countConsonants(string) {
  let newString = string.replaceAll(' ', '').toLowerCase();
  let counter = 0;
  let temp = '';
  for (let i = 0; i < newString.length; i++) {
    if ('aeiou'.includes(newString[i])) {
      if (temp.length > counter && temp.length > 1) {
        counter = temp.length;
      }
      temp = '';
    } else {
      temp += newString[i];
    }
  }

  if (temp.length > counter && temp.length > 1) {
    counter = temp.length;
  }

  return counter;
}

function sortStringsByConsonants(array) {
  return array.sort((a, b) => {
    return countConsonants(b) - countConsonants(a);
  });
}

countConsonants('month');
