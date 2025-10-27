// ==============================
// VARIABLES in JavaScript
// ==============================

// Variables are containers for storing data values.
// You can declare them using 'let', 'const', or 'va'`.

// 'let' allows you to reassign values
let name = "Lily";
name = "CoderLily"; //  allowed
console.log("Name:", name); // Output: CoderLily

// 'const' is used when the value should not change
const birthYear = 2000;
// birthYear = 2001; throws an error
console.log("Birth Year:", birthYear);

// 'var' is the old way (NOT recommended now)
// It has function scope, not block scope
var language = "JavaScript";
console.log("Language:", language);

// You can store different types of data
let age = 25; // number
let isStudent = true; // boolean
let hobbies = ["coding", "music", "reading"]; // array
let profile = { username: "shreya", level: "beginner" }; // object

console.log("Age:", age);
console.log("Is student?", isStudent);
console.log("Hobbies:", hobbies);
console.log("Profile:", profile);

// ==============================
// ARITHMETIC OPERATORS
// ==============================

// Arithmetic operators let you perform math operations

let a = 10;
let b = 3;

console.log("a + b =", a + b); //  Addition → 13
console.log("a - b =", a - b); //  Subtraction → 7
console.log("a * b =", a * b); //  Multiplication → 30
console.log("a / b =", a / b); //  Division → 3.333..
console.log("a % b =", a % b); //  Modulus (remainder) → 1
console.log("a ** b =", a ** b); // Exponentiation → 1000

// Updating values using shorthand
a += 5; // same as a = a + 5
console.log("a after += 5:", a); // → 15

b *= 2; // same as b = b * 2
console.log("b after *= 2:", b); // → 6

// Increment & Decrement
let count = 0;
count++; // adds 1
console.log("count after ++:", count); // → 1

count--; // subtracts 1
console.log("count after --:", count); // → 0
