var a = 21

var a = 10 //redecalrtion of a variable

console.log(a)

if(a == 10){
    var b = 40
    console.log(b)
}

// variable declared with var keyword are not blocked scoped they are function scoped

console.log(b)

function test(){
    var c = 100
    console.log(c)
}
test()

//console.log(c) C is inside the function so this c is not defined