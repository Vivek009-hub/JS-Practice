if(true){
    let a =10
    const b=20
    var c=30
}
// console.log(a);    // error dega
// console.log(b);    // error dega
console.log(c);       // 30



let a = 100
if(true){
    let a =10
    const b=20

    console.log('Inner a:',a);
    
}
console.log('Outer a:',a);

