console.log("2" === 2);  // false  strict equality operator

console.log("2" ==2);  // true 



//  Avoid these types of comparisons  ( they can create confusion and bugs in code )

console.log(null > 0);   
console.log(null == 0);   
console.log(null >= 0);

console.log(undefined > 0);   
console.log(undefined == 0);   
console.log(undefined < 0);
console.log(undefined >= 0);
