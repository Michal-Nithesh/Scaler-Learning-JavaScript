// Arrays provides you an ordered collection of data

var arr = [10, 'Ferrari', true, 9.86]

console.log(arr)

//accesing the elements

var a = arr[1]

console.log(arr[3])

//Replacing elements of an array by using Index

arr[2] = 'Bentley'

console.log(arr)

//Length of the Array

console.log(arr.length)

console.log('The Length of the array is ',arr.length)

// Inbuilt js Array methods

var array = [12, 10, 7, 11, 9]

//pop method

array.pop()

console.log(array)
console.log('Popped Array' ,array)

//push method

array.push(14)

console.log(array)
console.log('Pushed Array' ,array)

//shift method

var B = array.shift()

console.log(B)

console.log(array)
console.log('Shifted Array' ,array)

//unshift method

array.unshift(18)

console.log('Unshifted Array' ,array)