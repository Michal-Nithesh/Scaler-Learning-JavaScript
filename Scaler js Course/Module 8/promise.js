// How to produce a promise

let myPromise = new Promise(function(resolve , reject){
    const a = 4
    const b = 4

    setTimeout(()=>{
        if(a == b){
            resolve("The values are Equal")
        }
        else{
            reject("The values are not Equal")
        }
    } , 2000)
})


// pending State

//console.log(myPromise)

// fulfilled - then method

// consuming your promises
myPromise.then(function(result){
        console.log(result)
})  //fulfilled State

myPromise.catch(function(failedResult){
        console.log(failedResult)
})  // Rejected State


// Your Promise will get Setlled