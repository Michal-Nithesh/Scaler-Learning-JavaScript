function Person(_name , _age ,_bounty){
    this.name = _name
    this.age = _age
    this.bounty = _bounty

    this.grtName = function(){
        return name
    }
}

let Person1 = new Person("Monkey D Luffy" , 21 , 300000000)

//Person1.name = 'Estacus Kid'  // Changing name outside of the function

console.log(Person1)

// console.log(Person1.grtName())