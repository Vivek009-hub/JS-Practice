let score = "33abc" 

console.log((typeof score))

let valueInNumber = Number(score)
console.log( valueInNumber)   //Nan =  not a number
console.log(typeof valueInNumber)     // number

// // NOTE: NaN is a type of number in JS

// let socre1 = null
// console.log(null);     // null
// console.log(typeof socre1);   // object

// let varInNumber = Number(socre1)
// console.log(varInNumber);        // 0
// console.log(typeof varInNumber);     // number



// // try conversion for Undefined and string and boolean 


// // "33"  => 33
// // "33abc" => NaN
// // true => 1
// // false => 0
// // null => 0
// // undefined => NaN



// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  // true

// // 1 => true
// // 0 => false
// // "" => false
// // "hitesh" => true
// // null => false
// // undefined => false
// // " " => true


// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);     // 33
// console.log(typeof stringNumber);    // string



//  ************************* Operations ************************* //

// let value = 1
// let negValue = -value
// console.log(negValue);   // -1 

// console.log("1" + 2);  12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2);    // 122
// console.log(1 + 2 + "2");    // 32

// console.log( "Hitesh" + " " + "Kumar")  // Hitesh Kumar
// console.log("vivek" + " kumar");    // vivek kumar


console.log(+true);    // 1
// console.log(true +);     // error
console.log(+"");          // 0


//  Study prefix and postfix ++ and -- operator  in detail by JS MDN documentation

