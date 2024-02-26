let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"},
]

// Age od All the Men(Males)
// Chaning  
 let males = arr.filter(function(obj){
    return obj.gender == "M"
 }).map(function(male){
    return male.age
 })

 console.log(males)
 
 // Normal
 
// let agesOfmales = males.map(function(male){
 //   return male.age
 //})

 //console.log(agesOfmales)

 // From the Transactions Array filter out positive Elements and Calculate the total amount
 // Use filter and Reduce to Achieve this 

 const Transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

 let TotalAmount = arr.filter(function(obj){
    return obj.Transactions == (n % 2 == 0)
 })

 console.log(TotalAmount)