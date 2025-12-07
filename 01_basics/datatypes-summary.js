// Primitive 

// 7 types : String, Number, BigInt , Boolean , undefined , null , Symbol


// Non-Primitive
// Array, Object, Functions 

// Note : Javascript is a dynamically typed language  ( we dont need to specify datatype while declaring a variable )

// Datatype are determined automatically during the execution of code based on the value assigned to variable







//  use of Symbol datatype to create unique identifiers
let id1 = Symbol('124')
let id2 = Symbol('123')

console.log(id1 === id2);   // false








// example of array and object
let colors = ['red', 'green', 'blue']   // array
let person = {                         // object
    name: 'vivek',
    age: 22
}

const myFunction = function() {
    console.log("This is my function");
}
myFunction();
console.log(typeof myFunction);   // function  but technically it is called object function   further study we got to know that fucntion also acts as object in JS








//  typeof operator to know the datatype of variable
console.log( typeof colors);      // object
console.log( typeof person);      // object
console.log( typeof myFunction);  // function




const score = 100;
const scoreValue = 100.23;

console.log(typeof score);       // number
console.log(typeof scoreValue);  // number





const isLoggedIn = false;
const outsideTemp = null;
let userEmail;  //  undefined

console.log(typeof isLoggedIn);    // boolean
console.log(typeof outsideTemp);  // object
console.log(typeof userEmail);     // undefined



let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);    // bigint



//  +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive types) vs Heap (non-primitive types)

// primitive basically gives copy of the actual value where as non-primitive gives reference of the location where value is stored in memory


// primitive type example (stack)
let myName = "vivek"

let anotherName = myName      // myName ki copy anotherName me store ho gayi
anotherName = "kanak"    // but changing anotherName will not affect myName

console.log(myName);        // vivek
console.log(anotherName);   // kanak



// non-primitive type example (heap)
let userOne ={
    email : "user@example.com",
    upi:"user@ybl"
}

let userTwo = userOne    // userTwo me userOne ka reference store ho gaya
userTwo.email = "vivek@example.com"

console.log(userOne.email);   
console.log(userTwo.email);
