// const tinderUser = new Object()

const tinderUser={}

tinderUser.id = "123343"
tinderUser.name="Vivek"
tinderUser.isLoggedIn=false

console.log(tinderUser)


// Objects Nesting
const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            firstname:"Vivek",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser?.fullName?.userfullname.firstname);  
// these question marks can be used for extra security purpose (especialy in API responses)






// Merging two Objects
const obj5={
    1:"a",
    2:"b",
}

const obj6={
    3:"c",
    4:"d"
}

const obj7 = { obj5 , obj6}        // will create a new object having these ( obj1 and obj2 ) inside them as object
console.log(obj7);


// assign method ( for merging )
const obj1={1:"a",2:"b",}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4 = Object.assign({},obj1,obj2,obj3)
// Syntax : const obj4 = Object.assing(target, source)
console.log(obj4);



// Most commonly used method for merging

const obja = {...obj1, ...obj2}

console.log(obja)








console.log(tinderUser);            // { id: '123343', name: 'Vivek', isLoggedIn: false }
console.log(Object.keys(tinderUser))       //    [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));   //  [ '123343', 'Vivek', false ]

console.log(Object.entries(tinderUser));   // [ [ 'id', '123343' ], [ 'name', 'Vivek' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


// now we get arrays of keys and values and now we can easily apply loop orr iterate over them...
