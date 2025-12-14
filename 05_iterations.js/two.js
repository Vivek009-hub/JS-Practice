// For in LOOP ( objects are iterated with the help of this loop )

const myObject = {
    js: "javascript",
    cpp: 'c++',
    rb: "rubby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);      // will give values of key
    //  console.log(key);                  // will give keys
}


const programming = ["js", "rb", "c++", "java"]
for (const key in programming) {
    // console.log(key);    // will give index ( keys of array ie.0,1,2,3) 
    // console.log(programming[key]);
}


// NOTE:- we can't use FOR IN LOOP on Map ( Map is not iterable )






// FOR EACH LOOP 
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item) {
    // console.log(item);

})
coding.forEach((item) => {
    //  console.log(item);

})




// another method
function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe)





coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})





// Objects in a array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    // console.log(item);   // gives object in output
    console.log(item.languageName);   // give languageName
    
    
})