// // for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;   
//     console.log(element);   
// }


// // while loop

// let i = 0 ;
// while (i <=10) {
//     console.log(`Value of index is ${i}`);
//     i=i+2;
// }


// // Do While loop

// let score =11;
// do {
//     console.log(`score is ${score}`);
//     score++;
// } while (score <=10);



// for of loop

const arr =[ 1,2,3,4,5]
for (const element of arr) {
    console.log(element);
    
}

const greetings="hello world"
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    console.log(`Each char is ${greet}`);
    
}



// Maps   ( maps are iterable )

const map = new Map()
map.set('IN',"INDIA")
map.set('US',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")    //    ( if two values are same it will keep One)


console.log(map);

for(const [key,value] of map){
    console.log(key, ':-', value);
}



  

// we have another method to iterate over Object ( Map will not work here )
const myObject ={
    'game1':'NFS',
    'game2': 'Spiderman'
}

for(const key of myObject){
    console.log(key);         // myObject is not iterable
}