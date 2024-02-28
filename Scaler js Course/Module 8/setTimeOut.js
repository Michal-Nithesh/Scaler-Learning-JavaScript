// setTimeout(callback , 2000)

console.log('Before')


function greet(){
    console.log('Hello from the setTimeout')
}

setTimeout(greet , 5000)  // 5000 -> it will execute after 5 sec


console.log('After')