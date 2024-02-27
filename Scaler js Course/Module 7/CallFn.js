let person1 = {   // Object
    firstName : 'Ben',
    lastName : 'Beck',
    age : 29,

    printDetails : function(){   // Method
        console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    }
}

let person2 = {   // Object
    firstName : 'Roronoa',
    lastName : 'Zoro',
    age : 23,

    // printDetails : function(){   // Method
        // console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    // }
}

// Call

person1.printDetails.call(person2)



person1.printDetails()
// person2.printDetails()
