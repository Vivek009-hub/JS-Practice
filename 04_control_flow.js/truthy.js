// Truthy and falsy value 

// const userMail = "vivek@gmail.com"
// const userMail = ""          // didn't get user mail ( false maan liya )
const userMail = []           // got user mail ( maan liya true)

if(userMail){             // without any comparison maan liya true hi hai 
    console.log('got user mail');
}else{
    console.log("didn't get user mail");
}

// NOTE:-

// falsy values ( all these are falsy values (already considered))
//  false , 0 , -0,BigInt 0n, "",null, undefined , NaN 

// truthy values
// "0",'false'," ",[],{},function(){}




// dont check array as this =>  if(userMail)

if(userMail.length === 0 ){

}

// for object

const emptyObj ={}
if(Object.keys(emptyObj).length==0){
    // Object.keys(emptyObj)  => will returns a array then we can apply length
}








// Nullish Coalescing Operator (??): null undefined ( for safelty checking )

// ( mainly used for null and undefined safety check )
let val1;

// val1=12??undefined   // 12
// val1= null??10       // null

val1 = null ?? 10 ?? 20      //10 
console.log(val1);




// Terniary Opretor

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log('less than 80'):console.log('more than 80');




