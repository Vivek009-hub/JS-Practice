// if(true){
//     let a =10
//     const b=20
//     var c=30
// }
// // console.log(a);    // error dega
// // console.log(b);    // error dega
// console.log(c);       // 30



// let a = 100
// if(true){
//     let a =10
//     const b=20

//     console.log('Inner a:',a);
    
// }
// console.log('Outer a:',a);







// NOTE:-  Outside cannot access inside but inside can access outside very well
function one(){
    const username="vivek"

    function two(){
        const website ="youtube"
        console.log(username);   // vivek ( we can access outside element)
    }
    // console.log(website);     // will give error ( cant access outside block )

    two()   
}
one()








//  Two methods of declaring functions 
console.log(addOne(5))  // 6 ( will work normally)

function addOne(num){
    return num+1
}
console.log(addOne(5))  // 6 ( will work normally)





// console.log(addTwo(5));    // Error ( trying to access variable before intialization)

const addTwo = function(num){     // here we have stored function in a variable
    return num+2
}
console.log(addTwo(5));    // 7