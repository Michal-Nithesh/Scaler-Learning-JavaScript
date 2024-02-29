let sum = function(x ,y){
    console.log(x + y)
}

sum(2 , 3)



let sumCurried = function(x){
    return function(y){
        console.log(x + y)
    }
}

let sumTwoNumbers = sumCurried(2)

sumTwoNumbers(3)

// console.log(sumTwoNumbers)