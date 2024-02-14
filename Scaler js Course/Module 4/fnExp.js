// What is an Expression 

var a = 2 + 3

console.log(a)

// Function
// 1

var add = function(a ,b){
    console.log(a +b)
}

add(5 ,7)


// 2

var add = function(a ,b){
    return a + b
}

let result = add(5 ,7)

console.log(result)


// 3

var add = function(a ,b){
    return a + b
}

var sum = add

var total = sum(3 ,4)

console.log(total)