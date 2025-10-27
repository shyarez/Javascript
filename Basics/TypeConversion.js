// ==============================
// TYPE CONVERSION 
// ==============================

// JavaScript is loosely typed — it tries to convert types automatically when needed.
// But you can also convert types manually (explicit conversion).

// ------------------------------
// STRING CONVERSION
// ------------------------------
let age = 25;
let ageAsString = String(age); // Converts number to string
console.log(typeof ageAsString); // "string"
console.log("Age as string:", ageAsString); // "25"

// ------------------------------
// NUMBER CONVERSION
// ------------------------------
let input = "123";
let inputAsNumber = Number(input); // Converts string to number
console.log(typeof inputAsNumber); // "number"
console.log("Input as number:", inputAsNumber); // 123

// If the string is not a valid number:
let invalid = Number("hello");
console.log(invalid); // NaN (Not a Number)

// ------------------------------
// BOOLEAN CONVERSION
// ------------------------------
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(""));       // false (empty string)
console.log(Boolean("hello"));  // true (non-empty string)
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false

// ------------------------------
// IMPLICIT CONVERSION (auto by JS)
// ------------------------------
console.log("5" + 2); // "52" → string + number = string aka concatanation
console.log("5" - 2); // 3   → string - number = number
console.log("5" * 2); // 10  → string * number = number
console.log("5" / 2); // 2.5 → string / number = number

// ------------------------------
// parseInt() and parseFloat()
// ------------------------------
let price = "99.99";
console.log(parseInt(price));   // 99 → whole number
console.log(parseFloat(price)); // 99.99 → keeps decimals

// parseInt ignores non-numeric characters after the number
console.log(parseInt("42px"));  // 42
console.log(Number("42px"));    // NaN
