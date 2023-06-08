// 1. person.name or person['name']

// 2. All of them

// 3.
let myArray = { 0: 'zero', 1: 'one', 2: 'two', length: 3 };

// 4.
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArr = [];

for (let prop in obj) {
  newArr.push(prop.toUpperCase());
}

// 5.
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// 6. primitive - 'foo', 3.1415, false, undefined
// objects - [a, b, c], function..., {a:1, b:2}
// neither - foo

// 7.
myObj.qux = 3;

// 8.
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, keys = Object.keys(obj)) {
  let newObj = {};
  keys.forEach((key) => (newObj[key] = obj[key]));
  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3); // => { bar: 2 }

// 9.

// 10. 1, 2, 'a', 'b', false, null
// [] [] [] {}

// 11.
// obj.bar[3].xyz = 606;

// 12.
// let bar = foo;

// 13.
function foo(bar) {
  console.log(bar());
}

foo(() => 'welcome'); // Should print 'Welcome'
foo(() => 3.1415); // Should print 3.1415
foo(() => [1, 2, 3]);

// 14. variables - hello, greeting, name, xxyzzy, howdy, foo
// property names -  a, b, c, d
// primitives - '', 1, 2, 3, 4, 5, 'Hi', 'Grace'
// objects - hello, xyzzy, {} [] {}, howdy

// 15. variables - bar, arg1, arg2, foo, qux, result
// property names - abc, def, ghi, jkl, mno, pqr, array indices - 0, 1, 2, 3
// primitives - 'Hello', 1, 2, 3, 4, 5, 6, null, Nan, foo, result, 'Victor', 'Antonina'
// objects - bar, qux ={} , [], []
