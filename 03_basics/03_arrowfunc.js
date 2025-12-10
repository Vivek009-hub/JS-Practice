// //  THIS KEYWORD  ( works only in object)

// const user ={
//     username:"Vivek",
//     price:99,

//     welcomeMessage: function(){
//         console.log(`${this.username},Welcome to website`);    // this() agr cuurent context me access kr rhe hai to this.username)
//         console.log(this);
        
//     }
// }
// user.welcomeMessage()
// user.username="Kannu"
// user.welcomeMessage()

// console.log(this);   // {}     // like abb ye bhr hai sbse to iske pass koi current context nhi hai  (koi current context hi nhi hai) => so it wil give {}  ( empty object )


// //  Window => is known as Global object of browser








// +++++++++++++++++++  ARRAY FUNCTION  ++++++++++++++

// const chai =()=>{
//     let username="vivek"
//     console.log(this);     // {}
    
// }
// chai()


// Pure Arrow Function

// const addTwo=(num1,num2)=>{       // explicit method (return will be used with curly braces)
//     return num1+num2
// }


// const addTwo=(num1,num2)=>  num1+num2     // implicit method  ( no return without curly braces)

// const addTwo=(num1,num2)=>  (num1+num2 )    // implicit method   ( no return without curly braces)

const addTwo=(num1,num2)=>  ({username:"Vivek"}) 

console.log(addTwo(3,4));


// Example of arrow use case 
const myarray=[1,21,312,43,12]
myarray.forEach(()=>{})
// myarray.forEach(()=>())  
