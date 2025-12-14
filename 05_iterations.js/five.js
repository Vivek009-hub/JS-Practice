// REDUCE METHOD 



// Syntax 
const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

// console.log(sumWithInitial);            // accumulator = initial value ( in starting )
// after accumulator stores the added value




const myNum = [1, 2, 3]

// const addedNums = myNum.reduce(function (acc, currentValue) {
//     console.log(`acc:${acc} and Current Value: ${currentValue}`);
    
//     return acc + currentValue
// }, 0
// )



// with arrow function

const addedNums = myNum.reduce( (acc,curr) => acc+curr, 0)



console.log(addedNums);



// real case example


const shoppingCart = [
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"python course",
        price:99
    },{
        itemName:"web dev course",
        price:199
    },
    {
        itemName:"data science course",
        price:399
    }
]

const totalPrice = shoppingCart.reduce( (acc ,item) =>acc + item.price ,0)

console.log(totalPrice);


