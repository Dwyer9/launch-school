// 1. It will log 1, doesn't change bar because the variable is reinitialised inside the function scope

// 2.
// function getName() {
//   let firstName = prompt('What is your first name?');
//   let surname = prompt('What is your surname?');
//   return `${firstName} ${surname}`;
// }

// console.log('Greetings, ' + getName());

// 3.
function multiply() {
  let num1 = prompt('Enter first number');
  let num2 = prompt('Enter second number');
  let sum = +num1 * +num2;
  console.log(`${num1} * ${num2} = ${sum}`);
}

multiply();

// 4. Nothing - return statement is before console.log

// 5. Nothing - returns value but doesn't log it

/* 6. 
arguments - 2, 3, 4
body {let result ...}
declaration - function multiplyNumbers() {}
invocation - multipyNumbers(2, 3, 4)
name - multiplyNumbers
parameters - num1, num2, num3
return value - result
variables - multiplyNumbers, num1, num2, num3, result, product */

// 7. Hello, undefined

// 8. 42, 3.1415

// 9. Multiply, left, right, product, getNumber, prompt, parseFloat, question, console left, right

// 10. Global - multiply, getNumber, parseFloat, question, left, right, console
// Locatl - left, right, product, prompt

// 11. No - variables inside the function are local scope to that function, variables on line 10/11 are initialised in the global scope
