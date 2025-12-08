//   Array

// NOTE:- Javascript array are resizeable

const myArr = [0,1,2,3,4,5]
const myheros =["vivek","kannu"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);


// Array methods

myArr.push(12)           // insert element at end 
myArr.push(7)
myArr.pop()                // removes last element

myArr.unshift(9)        // insert element at the start
myArr.shift()           // removes first element


console.log(myArr.includes(9))          // give true orr false 
console.log(myArr.indexOf(3));         // give index if present otherwise -1

console.log(myArr);



const newArr = myArr.join()                // covert into single striing seperated by commad

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);         // string




//  SLICE and SPLICE 

console.log('A',myArr);              // [ 0,1,2,3,4,5]

const myny1 = myArr.slice(1,3)     // will not include last range
console.log(myny1);          // [1,2]
console.log('B', myArr);    // [0,1,2,3,4,5]


// Splice - includes last range and manipulates(changes) original array
const myny2 = myArr.splice(1,3)      
console.log('C', myArr);        // [0,4,5]
console.log(myny2);             // [1,2,3]





