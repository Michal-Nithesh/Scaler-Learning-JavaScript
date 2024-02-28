const myPromise = () => Promise.resolve('I have resolved!')

function firstFunction(){
    myPromise().then(res => console.log(res))
    console.log('Second')
}

async function secondFunction(){
    console.log(await myPromise())
    console.log('Second')
}

firstFunction()
secondFunction()