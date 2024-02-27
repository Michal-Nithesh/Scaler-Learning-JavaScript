function person(_name , _age){
    this.name = _name
    this.age = _age

}

person.prototype.getNameandAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

let person1 = new person('Shanks' , 27)

let person2 = new person('Ben Beck' , 28)

console.log(person1.getNameandAge())

console.log(person2)