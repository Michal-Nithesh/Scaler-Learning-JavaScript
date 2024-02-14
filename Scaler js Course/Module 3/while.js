// A While loop evaluates the condition inside the parenthesis ().
// If the condition evaluates to true, the code inside the while loop is executed.
// The condition is evaluated again.
// This process continues untill the condition is false.
// When the condition evaluates to false, the loop stops.

//Syntax

//  while(condition){
      //code goes here
      //increment/decrement
//  }


// We have to print 1 to 10 with using the while loop

var i = 1
var n = 10

while(i <= 10){
    console.log(i) // 1 2 3 4 5 6 7 8 9 10
    i++
}

// Do While Loop

var i = 11
var n = 10

do{
    console.log(i)
    i++
} while(i <= n) //condition Fails


var i = 10
var n = 18

do{
    console.log(i)
    i++
} while(i <= n) //condition True