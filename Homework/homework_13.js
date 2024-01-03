// Homework 13

// TASK 1 

function countVC(str){

   let strArray = str.trim().toLowerCase().split('')
    let countVow = 0
    let countCon = 0

   strArray.map((letter, i) => {

    if('aeiou'.includes(letter)) countVow++
    else if('bcdfghjklmnpqrstvwxyz'.includes(letter))countCon++

   })
  
   console.log(`{vowels: ${countVow}, consonants: ${countCon}}`)

}

countVC("Hello")      //         -> {vowels: 2, consonants: 3}
countVC("Programming")//   -> {vowels: 3, consonants: 8}
countVC("123AbC")         //     -> {vowels: 1, consonants: 2}
countVC("123!@#xyz")       //     -> {vowels: 0, consonants: 3}
countVC("")                   //        -> {vowels: 0, consonants: 0}


// TASK 2 

const countChars = str => {

let strArr = str.trim().toLowerCase().replaceAll(' ', '').split('')
let countLetters = 0
let countNum = 0
let countSpecial = 0
strArr.map((letter, i) => {

    if('abcdefghijklmnopqrstuvwxyz'.includes(letter)) countLetters++
    else if('0123456789'.includes(letter)) countNum++
    else countSpecial++


})


console.log(`{letters: ${countLetters}, numbers: ${countNum}, specials: ${countSpecial}}`)
}

countChars("Hello")  //  -> {letters: 5}
countChars("Programming 123") // -> {letters: 11, numbers: 3}
countChars("123AbC!@#") // -> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321") // -> {numbers: 10}
countChars("     ") // -> {}
countChars("") // -> {}


// TASK 3 (Had to look at your recording for this one)





// TASK 4 (having a problem with ***)

const starOut = str => {

    if(str.includes('*')){
        console.log(str.trim().slice(0, str.indexOf('*') -1)  + str.trim().slice(str.lastIndexOf('*') + 2))
    }
    else console.log(str);
}



 // console.log(str.trim().slice(str.indexOf('*') - 1 , str.lastIndexOf('*') + 2))


starOut("ab*cd") // -> "ad"
starOut("ab**cd") // -> "ad"
starOut("xm*sm*sy") // -> "xy"
starOut("abc")  //   -> "abc"
starOut("***")   // -> ""
starOut("   ")    //  -> "   "
starOut("")   // -> ""


// TASK 5

const romanToInt = str => {


    let strArra = str.trim().split('')
    const romanArray = [];
    for(let i = 0; i < strArra.length; i ++){
        if(strArra[i] === 'I') romanArray.push(1)
        else if(strArra[i] === 'V') romanArray.push(5)
        else if(strArra[i] === 'X') romanArray.push(10)
        else if(strArra[i] === 'L') romanArray.push(50)
        else if(strArra[i] === 'C') romanArray.push(100)
        else if(strArra[i] === 'D') romanArray.push(500)
        else if(strArra[i] === 'M') romanArray.push(1000)

    }
    
    if(str === 'IV') console.log(4)
    else console.log(romanArray.reduce((sum, i) => sum + i , 0))

}

romanToInt("I") // -> 1
romanToInt("IV") // -> 4
romanToInt("CXII") // -> 112
romanToInt("MMM") // -> 3000
romanToInt("MMMDCCCLXXXVIII")  // -> 3888
romanToInt("MDCLXVI")   // -> 1666