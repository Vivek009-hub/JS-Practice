// const score = 190
// console.log(score)                   // 190

// const balance = new Number(120.82)
// console.log(balance);                 //[Number: 120.82]


// console.log(balance.toString().length);        6
// console.log(balance.toFixed(2));          // 120.82
// console.log(balance.toPrecision(3));     // 121


// const  hundreds = 1000000000
// console.log(hundreds.toLocaleString('en-IN'));       // give commas according to indian system 

// // Note :- can use browser console to view more properties of Number (just write Number.)






// // +++++++++++++++++++++++++++++++++++   Maths ++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));    //absolute method         -> 4
// console.log(Math.round(12.4));  // round method         -> 12
// console.log(Math.ceil(12.2));    // gives upper value   -> 13
// console.log(Math.floor(12.9));   /// gives lower value  ->  12
// console.log(Math.sqrt(12));       // find square root of the value
// console.log(Math.pow(12,2));      // gives 12 ki power 2




// Important
console.log(Math.random());    // always gives value between 0 to 1
console.log((Math.random()*10) + 1);     // 1 is added to prevent 0 i want from 1 
console.log(Math.floor(Math.random()*10)+1);     // give floor value




//  REMEMBER THIS FORMULA
const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min);   // gives value between 10 and 20 



