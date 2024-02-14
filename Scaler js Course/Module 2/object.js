// IN Js object are in key value pair 

var person = {
    firstName : 'Michal',
    secondName : 'Nithesh',
    age : 18,
    ownsCar : false
}

console.log(person)

//Dot notation

console.log(person.age) //18

// Bracket notation

console.log(person['firstName']) //Michal

var StrawHat = {
    firstName : 'Monkey',
    middleName : 'D',
    lastName : 'Luffy',

    CrewMates : ['Zoro' , 'Sanji' , 'Nami' , 'Usppo' , 'Frankey' , 'Nico Robin' , 'Brook' , 'Jembei'],

    isPirates : false,

    Roles : {
        Captain : 'Sungod',
        ViceCap : {
            Swordman : 'King of the hell',
            Chef : 'MR.Prince',
            Sniper : 'God Usppo'
        }
    }
}

console.log(StrawHat.CrewMates[0]) //Zoro
console.log(StrawHat.CrewMates[1])
console.log(StrawHat.CrewMates[2])
console.log(StrawHat.CrewMates[3])
console.log(StrawHat.CrewMates[4])
console.log(StrawHat.CrewMates[5])
console.log(StrawHat.CrewMates[6])
console.log(StrawHat.CrewMates[7])

console.log(StrawHat.Roles.ViceCap.Sniper) //God usopp

StrawHat.isPirates = true

console.log(StrawHat)