// Find returns the first element of an array that satisfy the condition

const transactions = [1000 ,3000 ,4000 ,2000 ,-898 ,3800 ,-4500]

let firstWithdrawl = transactions.find(function(n){
    return n<0
})

console.log("First Withdraw -> "+firstWithdrawl)


// Find Index

let firstWithdrawlIndex = transactions.findIndex(function(n){
    return n<0
})

console.log('Index -> '+firstWithdrawlIndex)