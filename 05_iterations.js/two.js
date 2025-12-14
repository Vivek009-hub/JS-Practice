// For in LOOP ( objects are iterated with the help of this loop )

const myObject ={
    js:"javascript",
    cpp: 'c++',
    rb:"rubby",
    swift:"swift by apple"
}

for(const key in myObject){
    console.log(myObject[key]);      // will give values of key
    console.log(key);                  // will give keys
}


const programming = ["js" ,"rb" ,"c++","java"]
for(const key in programming){
    console.log(key);    // will give index ( keys of array ie.0,1,2,3) 
    console.log(programming[key]);
}


// NOTE:- we can't use FOR IN LOOP on Map ( Map is not iterable ) 