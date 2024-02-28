const fs = require('fs')

console.log('Firt Line')

// Call back Function
fs.readFile('f1.txt' , cb1) //cb1 -> callback 1

function cb1(err , data){
    if(err){
        console.log(err)
    }

    console.log('File 1 data -> ' + data)
    fs.readFile('f2.txt' , cb2)
}


function cb2(err , data){
    if(err){
        console.log(err)
    }

    console.log('File 2 data -> ' + data)
    fs.readFile('f3.txt' , cb3)
}


function cb3(err , data){
    if(err){
        console.log(err)
    }

    console.log('File 3 data -> ' + data)
}

console.log('Last Line')