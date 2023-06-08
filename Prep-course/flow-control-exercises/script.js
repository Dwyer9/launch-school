// 1.
/* false
true
3
3
false
true
false
false
true X
true
true X
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
(!true || (!20 === 20) || (82 === 82)) || false;
(!true || false || true) || false;
(false || false || true) || false;
true */

// 2.
// function evenOrOdd(num) {
//   if (num % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }

// 3.
function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('not a number');
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

// 4.
// 'Product 2', 'Product 3', 'Product not Found!' - no break statements

// 5.
// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// 6.  'Not Empty' - empty array is a truthy value

// 7.
function capsPlus10(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

// 8.
function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is greater than 100`);
  }
}

// 9
/* console.log(false ?? null); false
console.log(true ?? (1 + 2)); true
console.log((1 + 2) ?? true); 3
console.log(null ?? false); false
console.log(undefined ?? (1 + 2)); 3
console.log((1 + 2) ?? null); 3
console.log(null ?? undefined); undefined
console.log(undefined ?? null); null
*/

// 10. (5, 7), (0, 0), (4, 42), (3, 42)
