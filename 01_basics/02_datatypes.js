"use Strict";  // treat all JS code as newer version

// alert(3+3)

// Documentation for Javascript 
// https://tc39.es/ecma262/   -> official documenation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript  ->  MDN web docs

let name = "Hitesh"; // string literal
let age = 22; // number literal
let isApproved = false; // boolean literal
let firstName = undefined; // undefined literal
let selectedColor = null; // null literal
let lastName = Symbol("id"); // symbol literal

console.log(typeof name);   
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof selectedColor);
console.log(typeof lastName);


// number => 2 to power` 53
// bigint => larger than 2 to power 53
// string => '', "", ``
// null => standalone value
// undefined => 
// boolean => true/false
// symbol => unique identifiers

// object => key-value pairs
let person = {
    name: "Hitesh",
    age: 22
};


console.log( typeof undefined)   // undefined
console.log( typeof null)       // object