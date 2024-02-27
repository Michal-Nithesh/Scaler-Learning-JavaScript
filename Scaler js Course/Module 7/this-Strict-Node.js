// NODE.JS

'use strict'

console.log(this) // Empty Object {}


// Function
function displayThis(){ //undefined
    console.log(this)
}

displayThis()


// Object -> Function
// Method
let myObj = {  //Object Itself
    name : 'Michal',
    age : 20,

    myFn : function(){
            console.log(this.name)
    }
}

myObj.myFn()


//Object -> Functoin -> Function
// Function -> Method
let myObj1 = {       // undefined
    name : 'Michal',
    age : 20,

    myFn2 : function(){
            function myFn3(){
                console.log(this)
            }
            myFn3()
    }
}

myObj1.myFn2()