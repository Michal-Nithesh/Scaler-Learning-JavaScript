function Pirates(){
    console.log('Straw Hat Pirates')
}

// setInterval(Pirates , 1000) // It will execute infinitly

let timer = setInterval(Pirates , 1000)

setTimeout(function(){
    clearInterval(timer)
} , 3000) // 3000 -> After 3 sec it will stop execute