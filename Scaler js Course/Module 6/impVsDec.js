// we will be given a number and we have to check that if the square of that number is even or not


// Imperative way of writting code

const a = 5 

const aSquared = a * a

let isEven;

if(aSquared % 2 == 0){
    isEven = true
}

else{
    isEven = false
}

console.log(isEven)



// Declarative way of writting code

const checkForSquare = (x) => (x * x % 2 === 0 ? true : false )

console.log(checkForSquare(4))