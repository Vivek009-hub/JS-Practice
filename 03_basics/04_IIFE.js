// Immediately Invoked Function Expressions ( IIFE )  
// the funciton we want to invoke immediately


// global scope ke pollution se problm hoti hai kai bar( so to remove that pollution) we use IIFE


// Named IIFE ( have name)
(function chai(){
    console.log(`DB Connected`);
})();      // semicolon neccessary ( without it next wala nhi chlega error dega)


// unNamed IIFE (do not have name)
((name)=>{               // used in array function
    console.log(`DB Connected Two ${name}`);
    
})('Vivek')