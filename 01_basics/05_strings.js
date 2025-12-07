const name = "vivek"
const repoCount=50

console.log(name + repoCount + " Value");  // outdated Method

console.log(`Hello my name is ${name } and my repo count is ${repoCount}`);  // modern and most used method




// another method to declare string
const gameName = new String("hitesh")
console.log(gameName);    // try to do this in browser console. -> it return a object of element of this string


// NOTE :- Study methods of string under prototype

console.log(gameName.length);     
console.log(gameName.toUpperCase());  
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)    // we cannot give negative index in substring concept
console.log(newString);     // hite ( it will not include last index)


// slice method
const anotherString = gameName.slice(-8,4)
console.log(anotherString);


// trim ( remove extra whitespaces )
const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())



// Replace (read documentation )

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))




// includes ( check whether that part is there orr not in the string )

console.log(url.includes('sundar'));     // false



// SPLIT
// Note :- If i want to split a string into a array based on certain characters like space orr comma 
const companyName = "vivek-kumar-barwal"
console.log(companyName.split("-"))  



// Methods -> Static , Instance 

// Static Methods

const numbers =[1,23,4,52,121]

const max = Math.max.apply(null,numbers)
const min = Math.min.apply(null, numbers)
console.log('Maximum is : ',max);
console.log('Minimum is : ',min);

