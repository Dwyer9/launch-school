/* Understand the Problem
Input - An integer for the amount of cubes
Output - An integer of how many cubes are left over after building the biggest possible structure
Rules:
  Expilicit
    - Structure is built in layers
    - Each block must be supported by 4 blocks
    - A block can support more than one block
    - Top layer is a single block
    - No gaps between layers

  Implicit
    - Number of blocks in a layer is that layer's number squared

  Questions
    - Will input always be a positive integer?
    - Is it a 3D structure?
    - Are all blocks the same size?
    - Does a block on a lower layer have to be supporting one on a higher layer?


Examples/Test Cases
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

Data Structures
  For this problem, we will only need numbers. Likely store the incrementing total in a number to compare with the input number

Algorithm
  - Create a variable that will store the running total
  - Starting from 1, check if the total plus the square of the row level is greater than the input
    - If it's greater, return input minus total
    - If not, add square of row level to total
  - Increase row level and repeat until result is found

Implement in Code */

function calculateLeftoverBlocks(input) {
  let total = 0;
  for (let i = 1; ; i++) {
    if (total + i ** 2 > input) {
      return input - total;
    } else {
      total += i ** 2;
    }
  }
}
