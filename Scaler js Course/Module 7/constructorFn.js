//( non-constructor

//let car1 = {
//    name : 'X4',
//  company : 'BMW',
//    color : 'Red'
//}

//let car2 = {
//    name : 'S-class',
//    company : 'Mercedes',
//    color : 'White'
//} )

//Constructor

// type 1
// function createCar(_name, _company, _color){

// }

// let car1 = new createCar('X4' , 'BMW' , 'Red')

// let car2 = new createCar('S-class' , 'Mercedes' , 'White')


// type 2
// Template
function createCar(_name, _company, _color){
        this.name = _name,
        this.company = _company,
        this.color = _color
}

let car1 = new createCar('X4' , 'BMW' , 'Red')

let car2 = new createCar('S-class' , 'Mercedes' , 'White')

console.log(car1)

console.log(car2)

// Constructor
// type 3
// Method
function createCar(_name, _company, _color){
    this.name = _name,
    this.company = _company,
    this.color = _color,

    this.drive = function(){
        console.log(`I am Driving ${this.name} and it is of ${this.color} color`)
    }
}

let car3 = new createCar('X4' , 'BMW' , 'Red')

let car4 = new createCar('S-class' , 'Mercedes' , 'White')

console.log(car1)

console.log(car2)

car3.drive()