function printFirstName(firstname , CB){
    console.log(firstname)
    CB('Beckham')
}

function printLastName(lastname){
    console.log(lastname)
}

printFirstName('Ben' , printLastName) //Call Back





//

const isEven = (n) => {
    return n % 2 == 0
}

let printResult = (evenFn , num ) => {
    const isNumEven = evenFn(num)

    console.log(`The number ${num} is an Even Number ${isNumEven}`)
}

printResult(isEven , 16)