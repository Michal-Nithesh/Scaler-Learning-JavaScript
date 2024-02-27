// Non - Strict

console.log(this) // window Object


// Function
function displayThis(){ // window Object
    console.log(this)
}

displayThis()


// Object -> Function
// Method
let myObj = {  // Object Itself
    name : 'Michal',
    age : 20,

    myFn : function(){
            console.log(this)
    }
}

myObj.myFn()


//Object -> Functoin -> Function
// Function -> Method
let myObj1 = {       // window Object
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