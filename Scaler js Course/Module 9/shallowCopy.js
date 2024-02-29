/// spread operator {...}

let firstPerson = {
    name : 'Ben',
    age : 27,

    address : {
        city : 'Lucknow',
        state : 'UP'
    }
}

let secondPerson = {...firstPerson} // shallow Copy


secondPerson.name = 'Beck'

secondPerson.address.city = 'Delhi'


console.log(firstPerson)
console.log(secondPerson)