/// Homework 12

// TASK 1

function makeNeagative(num){
    if(num > 0 ) console.log("-" + num)
    else console.log(num)
}

makeNeagative(10);
makeNeagative(-7);
makeNeagative(0);
makeNeagative(0.45);

// TASK 2 

function isSumEvenOrOdd(num1, num2, num3){
    if((num1 + num2 + num3) % 2 === 0) console.log('even');
    else console.log('odd')
}

isSumEvenOrOdd(0, 1, 4) // -> "odd"
isSumEvenOrOdd(0, -1, -5)     // -> "even"
isSumEvenOrOdd(0, 0, 0)  //-> "even"
isSumEvenOrOdd(7, 1, 9)       // -> "odd"
isSumEvenOrOdd(1, 1, 1)       // -> "odd"

// TASK 3 (having trouble with this one)






// TASK 4

const myPow = (x, n) => console.log( x**n)

myPow(3, 3) // -> 27
myPow(10, 1) // -> 10
myPow(100, 0) // -> 1
myPow(1, 1) // -> 1
myPow(4, 2)   // -> 16
myPow(0, 0)   // -> 1
myPow(5, 3)   // -> 125


// TASK 5 (still working on this one)

function findLongestWord(str){
    const strArray = str.trim().split(' ')

   //console.log(strArray)

   for(i = 0; i < strArray.length; i++){
     console.log(Math.max(strArray[i].length))
   }
}

findLongestWord("The quick brown fox jumped over the lazy dog") // -> "jumped"
findLongestWord("This is a sample string for testing")  //->"testing" 
findLongestWord("One two ten") // -> "One"
findLongestWord("") // -> ""
findLongestWord("      ") // -> ""