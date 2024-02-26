let arr = [1 ,2 ,3 ,4 ,5]

let squaredArr = []

for(let i = 0 ; i<arr.length ; i++){
    squaredArr.push(arr[i]*arr[i])
}

console.log(squaredArr)

// MAP

// Map will loop through every element of your array and will perform specific operations that you have provided

// Map method will always return you a new array with your results

// Higher Order Function

const num = [1 ,2 ,3 ,4 ,5] //num is a every array

const SquaredNum = num.map(function(n){
    return n*n
})

console.log(SquaredNum)

const transactions = [1000 ,2000 ,3000 ,4000 ,-850 ,3400 ,-4500];

const intoDollar = 80;

let TransactionsInDollars = transactions.map((amount)=>{
    return (amount / intoDollar).toFixed(0) //toFixed is used to no need decimal number
})

console.log(TransactionsInDollars)


//forEach 

//forEach doesn't return array

//In forEach return values

let TransactionsInDollars1 = transactions.forEach((amount)=>{
    console.log((amount / intoDollar).toFixed(0)) //toFixed is used to no need decimal number
})