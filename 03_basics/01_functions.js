// function sayMyName() {
//     console.log("v");
// }

// sayMyName()

// function addtwonumber(a, b) {     // -> parameters
//     console.log(a+b)
// }
// const result = addtwonumber(1, 2)     //-> arguments 
// console.log(result)     // undefined ( bcoz we haven't return  result anywhere , hmne kuch return nhi kraya)




// function addtwonumber(a, b) {     // -> parameters
    
// // first method
//     // let result = a +b
//     // return result

// // second method
//     return a+b
// }
// const result = addtwonumber(1, 2)     //-> arguments 
// console.log(result)






// function loginUserMessage(username){
//     return `${username} just logged in `
// }

// console.log(loginUserMessage("vivek"))    // vivek just logged in
// console.log(loginUserMessage())        // undefined


function loginUserMessage(username="sam"){
    return `${username} just logged in `
}

console.log(loginUserMessage("vivek"))    //vivek just logged in
console.log(loginUserMessage())        // sam just logged in