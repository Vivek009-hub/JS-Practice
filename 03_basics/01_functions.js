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


// function loginUserMessage(username="sam"){
//     return `${username} just logged in `
// }

// console.log(loginUserMessage("vivek"))    //vivek just logged in
// console.log(loginUserMessage())        // sam just logged in







// +++++++++++++++++ PART 2  +++++++++++++++++++++++

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400));    //[ 200, 300, 400 ] -> now we get array , we can perform our desired operations on it


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500,600));  //[ 400, 500, 600 ]







// function with object
const user={
    username:"vivek",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)     //Username is vivek and price is undefined








// function with array

const myarray=[100,200,300,400,500]

function returnsecondvalue(getarray){
    return getarray[1]
}
// console.log(`second value is ${returnsecondvalue(myarray)}`);          output:- 200 
console.log(`second value is ${returnsecondvalue([100,200,300,400,500])}`);      // output:- 200
