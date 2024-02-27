let myObj = {}

console.log(myObj)

let person1 = {
    name : 'Mike',
    age : 21
}


console.log(person1)

console.log(person1.hasOwnProperty('gender'))


// Constructor fn

function person(_name , _age){
    this.name = _name
    this.age = _age
}

let person2 = new person('Roy' , 19)

console.log(person2)