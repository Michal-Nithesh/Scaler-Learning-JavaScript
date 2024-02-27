// Classical Inheritance
// Method & Properties from Base(Parent) class can be put down or can be passed into derived(child) class


class Person {
        constructor(_name , _age){
            this.name = _name
            this.age = _age
        }

        welcome(){                                   // Method Inheritance
            console.log(`Welcome ${this.name}`)
        }
}

class Teacher extends Person{
        constructor(_name , _age ,_classStrength){
            super(_name , _age) 
            this.classStrength = _classStrength
        }

        test(){                                       // Method Inheritance
            super.welcome()
        }
}

class Student extends Person {
    constructor(_name , _age ,_cgpa){
        super(_name , _age) 
        this.cgpa = _cgpa
    }
}

let Person1 = new Person("Michal Nithesh" , 19)

let Teacher1 = new Teacher("Devu" , 32 , 75)

Teacher1.test()                                         // Method Inheritance

let Student1 = new Student("Maxwell" , 19 , 9.2)

console.log(Person1)

console.log(Teacher1)

console.log(Student1)