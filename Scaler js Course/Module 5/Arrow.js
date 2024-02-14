//normal function

let test1 = function(){
    console.log(1)
}

let test2 = function(a){
    console.log(a + 2)
}

let test3 = function(a ,b){
    console.log(a + b)
}

test1()

test2(10)

test3(2 ,8)


// Arrow Function

let test4 = ()=>{
    console.log(1)
}

let test5 = (a) => console.log(a + 2)


let test6 = (a ,b)=>{
    console.log(a + b)
}

test4()

test5(10)

test6(4 ,2)
