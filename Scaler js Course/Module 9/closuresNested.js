function greet(){
    let name = 'Roy'

    function displayName(){
        console.log('Hi '+ name)

        let age = 20

        function diplayAge(){
            console.log('My age is '+ age +" "+ name)
        }

        return diplayAge
    }

    return displayName
}

let G1 = greet()

// console.log(G1)

G1() // displayName

let G2 = G1()

// console.log(G2)

G2() // displayAge