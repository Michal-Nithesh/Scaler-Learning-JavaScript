// Normal function
var a =4

function add(x){
    console.log(x + a)
}

add(6)

add(6)



//Impure Function

var a =4

function addImpure(x){
    console.log(x + a)
    a++
}

addImpure(6)

addImpure(6)

addImpure(6)


// Pure Function

function addPure(x , a){
    console.log(x + a)
}

addPure(2 , 6)

// 2
// Complete Pure function

function addPure(x , a){
    return x + a
}

console.log(addPure(3 , 8))