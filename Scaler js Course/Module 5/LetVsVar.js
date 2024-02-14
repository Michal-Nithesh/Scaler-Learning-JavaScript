                                                //VAR KEYWORD

var a = 20

var a = 35

console.log(a)

console.log(b)

//Using VAR keyword 
//In var keyword we can able to redeclartion,reassignment and scoping the function

if(true){
    var c = 40 //using var keyword
    console.log(c)
}

// variable declared with var keyword are not blocked scoped they are function scoped

console.log(c)

                                                //LET KEYWORD


//Using Let Keyword
//In let keyword we can't able to redeclartion but we can able to reassignment and it will scoping the block

let b = 30

//(let b = 45) //Let keyword doesn't allow Redeclaration

b = 50 // we can reassign the value

if(true){
    let c = 40 //using let keyword
    console.log(c)
}

// variable declared with var keyword are not blocked scoped they are function scoped

console.log(c)


                                                //CONST KEYWORD

// Using const keyword
//In let keyword we can't able to redeclartion but we can't able to reassignment and it will scoping the block

const d =100

//(const d =120)  //Const keyword doesn't allow Redeclaration

d = 34 // It show an ,for assignment to constant variable

console.log(d)

if(true){
    const c = 40 //using let keyword
    console.log(c)
}

console.log(c)