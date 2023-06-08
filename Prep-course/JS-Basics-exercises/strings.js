// Length
"These aren't the droids you're looking for.".length;

// ALL CAPS
'confetti floating everywhere'.toUpperCase();

// Repeat
function repear(num, str) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

// Multiline String
let str = 'A pirate I was meant to be! \nTrim the sails and roam the sea!';

// Case-insensitive Equality
// string1.toUpperCase() === string2.toUpperCase();
// string1.toUpperCase() === string3.toUpperCase();

// Contains character
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
byteSequence.includes('x');

// Blank? 1
// function isBlank(str) {
//   return str.length === 0
// }

// Blank? 2
function isBlank(str) {
  if (str.length === 0) return true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') return false;
  }

  return true;
}

// Capitalise Words
function capitalise(str) {
  return str
    .split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ');
  // let arr = str.split(' ');
  // let capArr = arr.map((el) => el[0].toUpperCase() + el.slice(1));
  // return capArr.join(' ');
}

console.log(capitalise('launch school tech & talk'));
