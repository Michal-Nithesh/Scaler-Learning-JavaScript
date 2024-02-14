// In JavaScript, the for-in loop allows you to loop through the properties of an object.
// The statements of code found within the loop body will be executed once for each property of the object.

var colors = {
    primary : 'Blue',
    secondary :'Green',
    tertiary : 'White'
}

// Syntax

for(var color in colors){
    console.log(colors[color])
}

for(var color in colors){
    console.log(color +' -> '+colors[color])
}

var colorsArray = ['Yellow' ,'Red' ,'Orange' ,'Pink']

for(var color in colorsArray){
    console.log(colorsArray[color])
}

for(var color in colorsArray){
    console.log(color+' -> '+colorsArray[color])
}