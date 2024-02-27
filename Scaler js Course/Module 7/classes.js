class Person {                          // class
        constructor(_name , _age){      // constructor
                this.name = _name
                this.age = _age
        }

        welcome(){                      // Method
            console.log(`Wlecome ${this.name}`)
        }
}

let Person1 = new Person('Michal', 19)
let Person2 = new Person('Nithesh', 19)
let Person3 = new Person('Roy', 19)
let Person4 = new Person('Joel', 18)
let Person5 = new Person('Shanks', 23)
let Person6 = new Person('Devu', 15)

console.log(Person1)
console.log(Person2)
console.log(Person3)
console.log(Person4)
console.log(Person5)
console.log(Person6)

Person1.welcome()
Person2.welcome()
Person3.welcome()
Person4.welcome()
Person5.welcome()
Person6.welcome()
