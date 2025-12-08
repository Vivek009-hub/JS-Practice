// const heros =["thor","spiderman"]
// const names=["vivek","kannu"]

// // heros.push(names)

// // console.log(heros);         // [ 'thor', 'spiderman', [ 'vivek', 'kannu' ] ]    -> bcoz wkt array take any type of data so it takes another array as data


// // console.log(heros[2][1]);



// //  Concatenation 

// const newheros=heros.concat(names)     // concat returns a new array so we have to store it in a variable 
// console.log(heros);
// console.log(newheros);     // [ 'thor', 'spiderman', 'vivek', 'kannu' ]



// //  Spread Method (Another method for joining )

// const all_new_heros = [...heros, ...names]
// console.log(all_new_heros);            // [ 'thor', 'spiderman', 'vivek', 'kannu' ]





// const another_array = [ 1,2,3,[4,5,6],7,[6,7,[4,5]]]

// // const usable_another_array = another_array.flat(1)
// // const usable_another_array = another_array.flat(2)
// const usable_another_array = another_array.flat(Infinity)
// console.log(usable_another_array);




console.log(Array.isArray("Vivek"));      // false
console.log(Array.from("Vivek"));         // [ 'V', 'i', 'v', 'e', 'k' ]

// NOTE:-   Because Array.from() converts anything that is iterable (like a string, Set, Map, NodeList, etc.) into an array.

// NOTE:-  Because "Vivek" is a string, not an array.
// Array.isArray() only checks whether the value is an actual array.

console.log(Array.from({name:"vivek"}));    // interesting ( we have specify here ki hame keys ki array chahiye ya values ki )





let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

