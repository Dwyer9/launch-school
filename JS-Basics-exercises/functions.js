//  Sum
function sum(a, b) {
  return a + b;
}

// Loq Quote - logs undefined due to no return statement
function brendanEichQuote() {
  console.log('Always bet on Javascript');
}

// Cite the Author
function cite(author, quote) {
  console.log(`${author} said: ${quote}`);
}

// Squared Number
function squaredNumber(num) {
  return num * num;
  // return num ** 2
}

// Display Division - function is not properly called

// Three-way Comparison
function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    return -1;
  } else if (str1.length > str2.length) {
    return 1;
  } else {
    return 0;
  }
}

// Transformation
'Captain Ruby'.replace('Ruby', 'Javascript');

// Internationalisation 1
let greetings = {
  en: 'Hi!',
  fr: 'Salut!',
  pt: 'Ola!',
  de: 'Hallo!',
};

function greet(code) {
  if (greetings[code]) return greetings[code];
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'

// Locale Part 1
function extractLanguage(locale) {
  return locale.split('_')[0];
}

// Locale Part 2
function extractRegion(locale) {
  let arr = locale.split('.');
  return arr[0].split('_')[1];
}

// Internationlisation 2
let greetinsEN = {
  GB: 'Hello!',
  AU: 'Howdy!',
  US: 'Hey!',
};

function localGreet(locale) {
  let language = extractLanguage(locale);
  let country = extractRegion(locale);
  if (language === 'en') return greetinsEN[country];

  return greet(language);
}
