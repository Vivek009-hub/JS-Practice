// Objects can be created in 2 ways ( By literals orr By constructor)
// Object created by constructor method called as Singleton Object



// Singleton ( Constructor )
// method => Object.create


// Object Literals  ( behind the scene these keys are also string) (NON SINGLETON)

const mySym = Symbol("key")

const Jsuser = {
    name: "vivek",
    "full name": "Vivek kumar",
    // mySym:"mykey1",
    [mySym]: "mykey1",
    age: 12,
    location: "Hapur",
    email: "vivek@gmail.com",
    ifLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
    
}

console.log(Jsuser.email);     // this method is good
console.log(Jsuser["email"]);     // but this is more professional and advantageous

// console.log(Jsuser.full name)      // we cannot access this by old method
console.log(Jsuser["full name"]);

console.log(Jsuser.mySym);
// console.log(typeof Jsuser.mySym);    // it will give string but we know that it is a Symbol datatye so do that symbol will follow a proper syntax in key

console.log(Jsuser[mySym]);     // mykey1





//  Changing values in Object

Jsuser.email = "vivek@example.com"
console.log(Jsuser["email"]);

Object.freeze(Jsuser)           // All value become freeze ( unchangeable )

Jsuser.email = "kannu@example.com"

console.log(Jsuser);





// functions in Objects

Jsuser.greeting = function () {
    console.log("Hello JS User");
}

Jsuser.greetingtwo = function () {
    console.log(`Hello JS User, ${this.name}`);
    console.log(`Hello JS User, ${this["full name"]}`);

}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());

