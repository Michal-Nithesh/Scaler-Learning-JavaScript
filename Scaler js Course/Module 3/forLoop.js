// Loops are the Statement that we can use to control a flow of the program and to do some repeatative

var a = 'Hello its me !!'

// the for loop

for(var i = 0;i < 10; i++){
    console.log(a)
}

//you have an array and you have to square Each element of that array

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Without For Loop
var firstSquare = num[0] * num[0]

var squareArr = [firstSquare]

var secondSquare = num[1] * num[1]

var squareArr = [secondSquare]

// With For Loop

var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var squareArray = [] //empty array for storing the value

for(var i = 0; i < Numbers.length; i++){
    squareArray.push(Numbers[i] * Numbers[i])
}
console.log(squareArray)