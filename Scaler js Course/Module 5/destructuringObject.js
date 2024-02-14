// Destructuring an Object

let Captain = {
    Name : 'Monkey D Luffy',
    Age : 21,
    Bounty : 300000000,
    Gender : 'M'
}

//This are undefined  
//let {a ,b ,c ,d} = Captain
//console.log(a)
//console.log(b)
//console.log(c)


let {Name : N,Age ,Bounty ,Gender} = Captain

console.log(Name) //This is method
console.log(N) //Ths is another method
console.log(Age)
console.log(Bounty)
console.log(Gender)



