// const coding = [ "js","ruby","c++","python","java"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item         // forEach kucch bhi return nhi krta 
// }) 

// console.log(values);    // undefined 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// // FILTER ( filter values return krta hai )
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )

// const newNums = myNums.filter( (num) => {
//    // num > 4        // by applying curly braces we have made a scope so it will give []  until we will return it 

//     return num>4
// } )





// // applying forEach
// const newNums =[]

// myNums.forEach( (num) => {
//     if (num>5) {
//         newNums.push(num)
//     }
// })


// console.log(newNums);






const books = [
    { title: 'book 1', genre: "scientific", publish: 1982, edition: 2100 },
    { title: 'book 2', genre: "history", publish: 1982, edition: 2000 },
    { title: 'book 3', genre: "history", publish: 1982, edition: 2000 },
    { title: 'book 4', genre: "science", publish: 1982, edition: 2000 },
]


const userBooks= books.filter( (item)=> item.genre === 'history'  )   // will return a array

const newUserBooks  = books.filter((item)=> item.edition   > 2000 )
console.log(userBooks);

console.log(newUserBooks);


