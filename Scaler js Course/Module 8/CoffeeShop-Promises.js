function placeOrde(drink){
    return new Promise(function(resolve , reject){
        if(drink == 'coffee'){
            resolve('Order for Coffee recieved')
        }
        else{
            reject('Other orders Rejected')
        }
    })
}

function processOrder(order){
    return new Promise (function(resolve){
        console.log('Order is being Processed')
        resolve(`${order} and is served`)
    })
}


// Solution with promises

placeOrde('coffee').then(function(orderPlaced){
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced)
    return orderIsProcessed
}).then(function(processOrder){
    console.log(processOrder)
}).catch(function(err){
    console.log(err)
}) /// Chaining of Promise
