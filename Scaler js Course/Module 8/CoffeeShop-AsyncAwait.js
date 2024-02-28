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

// Async Await Keywords

async function serveOrder(){
    try{

        let orderPlaced = await placeOrde('coffee')
        console.log(orderPlaced)
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)

    } catch (error) {
        console.log(error)
    }
    
}

serveOrder()