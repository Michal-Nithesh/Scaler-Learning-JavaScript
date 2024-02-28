const fs = require('fs')

console.log('Firt Line')

// waiting for complete
let data = fs.readFileSync('f1.txt')

console.log('File 1 Data -> '+ data)

// Ater that only the Last Line execute
console.log('Last Line')