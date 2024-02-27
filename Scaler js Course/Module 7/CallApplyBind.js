let person1 = {   // Object
    firstName : 'Ben',
    lastName : 'Beck',
    age : 29,
}

let printDetails = function(city , power){   // Function
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city} and 
I have a ${power}`)
}


let person2 = {   // Object
    firstName : 'Roronoa',
    lastName : 'Zoro',
    age : 23,
}

// call Method
printDetails.call(person2 , 'Grand Line' , 'Sword Man')

// apply Method
printDetails.apply(person2 , ['Grand Line' , 'Sword Man'])

// Bind Method
let myFun = printDetails.bind(person2 , 'Grand Line' , 'Sword Man')

console.log(myFun)

myFun()