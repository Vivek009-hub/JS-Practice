// // ++++++++++  DATE +++++++++

// let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);     // date is of Object type

// let myCreatedDate = new Date (2023,0,23,5,3)     // months start from zero 
// // let myCreatedDate = new Date("2023-01-14")     // yy-mm-dd format
// // let myCreatedDate = new Date("01-14-2023")    // mm-dd-yy format
// console.log(myCreatedDate.toLocaleString());



// let  timeStamps  = Date.now()           // give time in milliseconds

// console.log(timeStamps);
// console.log(myCreatedDate.getTime());     // this case used to compare date orr time with timestamps.
// console.log(Math.floor(Date.now()/1000));        // give time in seconds



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);     // +1 bcoz it starts from 0
console.log(newDate.getDay());





//  IMPORTANT  

newDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric"
})

console.log(newDate);
