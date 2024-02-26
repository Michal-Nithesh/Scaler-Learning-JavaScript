// You have to check for even numbers in an array and put them in a seperste array

let num = [1 ,2 ,3 ,4 ,5 ,6 ,7]

let evenArray = []
for(let i = 0 ; i<num.length ; i++){
    if(num[i]%2 == 0){
        evenArray.push(num[i])
    }
}

console.log(evenArray)


//filter

// Filters Returns a new Array it will return all those elements that matches the specific condition.
// If the conditions is true it wll return the element for that condition and if it is false it will discard that element

let number = [1 ,2 ,20 ,35 ,12 ,17 ,46]

let evenNum = num.filter(function(){
    return n%2==0
})

console.log(evenNum)

const transactions = [1000 ,3000 ,4000 ,2000 ,-898 ,3800 ,-4500];

const despositedAmount = transactions.filter(function(amount){
    return amount>0
})

console.log(despositedAmount)