// you need the sum of every element in an array

let num = [1 ,2 ,3 ,4 ,10]

let sum = 0 // accumulator

for(let i = 0 ; i<num.length ; i++){
        sum = sum+num[i]
}

console.log(sum)


// Reduce

// Reduce method always gives a single value

let result = num.reduce(function(acc , value){
        let updatedSum = acc + value
        return updatedSum
}, 0)

console.log(result)


let product = num.reduce(function(acc , value){
    let updatedProduct = acc * value
    return updatedProduct
}, 1)

console.log(product)