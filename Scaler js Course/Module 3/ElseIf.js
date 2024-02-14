// 90 to 100 - A
// 70 to 89  - B
// 50 to 69  - c
// lower then 50 - F

var studentScore = 95

if(studentScore > 90){
    console.log('Student has Scored as A Grade')
}

else if(studentScore >= 70 && studentScore <= 89){
    console.log('Student has Scored as B Grade')
}

else if(studentScore >= 50 && studentScore <= 69){
    console.log('Student has Scored as C Grade')
}

else{
    console.log('Student has got an Fail F ')
}
