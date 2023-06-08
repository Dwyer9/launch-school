// Retreive a Value 1
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

student['courses'];
student.courses;

// Retrieve a value 2
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus',
//   },
//   occupation: 'engineer',
// };

// jane['location']['country'];
// jane.location.country;

// Add a property
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 7;
fido['favourite food'] = 'Mince';

// Greetings from Jane
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus',
  },
  occupation: 'engineer',
  greet: function (name) {
    console.log(`Hej, ${name}`);
  },
};

// Dot v Bracket Notation
// First example will log {prefix: "Pacific"}, second will log {Indian: 'Pacific} - need to use bracket notation when using variable names

// Is it true? - object keys are strings, not === true

// Car Keys
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7,
};

let keys = [];

for (let prop in vehicle) {
  keys.push(vehicle[prop]);
}

// Object to nested array
// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33,
// };

// let nestedPerson = [];

// for (let prop in person) {
//   nestedPerson.push([prop, person[prop]]);
// }

// Vice Versa
let nestedArray = [
  ['title', 'Duke'],
  ['name', 'Nukem'],
  ['age', 33],
];

let person2 = {};
nestedArray.forEach((el) => {
  person2[el[0]] = el[1];
});

// Cloning a person
function clone(obj) {
  Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true,
  },
  age: 33,
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age); // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName); // false
console.log(clonedPerson.name.isStageName); // false
