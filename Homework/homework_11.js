/// HOMEWORK 11


// TASK 1 count Palindrome in a string

const countPalindrome = str => {
    let strArray = str.split(' ');
    const revArray = [];

    for(word of strArray){
        if(word.length >1 && word.toLowerCase().split('').reverse().join('') === word.toLowerCase()) revArray.push(word);

    }
    console.log(revArray.length)
    
} ;


countPalindrome("See you at noon") // -> 1
countPalindrome("Kayak races attracts racecar drivers") // -> 2
countPalindrome("")  //-> 0
countPalindrome("No palindrome here") // -> 0
countPalindrome("Mom and Dad" ) // -> 2


// TASK 2 (incomplete still needs work)

function sum(arr, boolean){
    let total = 0;
    let arrEven = [];
    let arrOdd = [];
    if(boolean === true) arrEven.push(arr[arr.length % 2 !== 0])
    else arrOdd.push(arr[arr.length % 2 === 0])

    for(x of arr){
        total += x 
    }

   console.log(total); 
}

sum([1, 5, 10], true)  //-> 11
sum([3, 7, 2, 5, 10], false) // -> 12
sum([-1, 1, -2, 2], true) // -> -3
sum([0, -1, 15, 1], false) // -> 0
sum([1, 2, 3, 4, -4], true) //-> 0


// TASK 3 (incomplete)
const nthChars = (str, num) =>  console.log(str.split('')[num-1] || "")

nthChars("Java", 2)  //-> "aa"
nthChars("JavaScript", 5)  // -> "St"
nthChars("Java", 3)  // -> "v"
nthChars("Hi", 4)  // -> ""
nthChars("0123456789", 2) // -> "13579"

// TASK 4

function canFormString(str1, str2){

    let strOneArr = str1.split('');
    let strTwoArr = str2.split('');

    const match = [];
    

    for(let i = 0; i <= strOneArr.length; i++){
        for(let j = 0; j <= strTwoArr.length; i++){
            if(strTwoArr[j] === strOneArr[i]) match.push[j];
        }
    }

    if(match.length >= strTwoArr.length )
    return true;
    else return false;
}

console.log(canFormString("Hello", "Hi"))  // -> false
console.log(canFormString("programming", "gaming")) //  -> true
canFormString("halogen", "hello") //  -> false
canFormString("CONVERSATION", "voices rant on")  // -> true
canFormString("12", "123") // -> false



// TASK 5 incomplete- have to deal with spaces 

const isAnagram = (str1, str2) => {
    if(str1.toLowerCase().split('').sort().join() === str2.toLowerCase().split('').sort().join()) return true
    else return false
}

console.log(isAnagram("Apple", "Peach")) //  -> false
console.log(isAnagram("listen", "silent"))  // -> true
console.log(isAnagram("astronomer", "moon starer"))   //-> true
console.log(isAnagram("CINEMA", "iceman"))  // -> true
console.log(isAnagram("123", "1234")) // -> false

// TASK 6 


function count(arr, bool){

    if(bool === true){
        return arr.filter(x => x % 2 === 0).length
}
    else return arr.filter(x => x % 2 !== 0).length
}

console.log(count([1, 5, 10], true))  //-> 1
console.log(count([3, 7, 2, 5, 10], false)) // -> 3
console.log(count([-1, 1, -2, 2], true)) // -> 2
console.log(count([0, -1, 15, 1], false)) // -> 3
console.log(count([1, 2, 3, 4, -4], true))// -> 3

// TASK 7

let total = 0;
const sumDigitsDouble = str => console.log(str.split('').filter(x => x >= 0 || x <= 9))

sumDigitsDouble("Javascript") // -> -1
sumDigitsDouble("23abc45")   //-> 28
sumDigitsDouble("Hi-23")  //-> 10
sumDigitsDouble("ab12")  //-> 6
sumDigitsDouble("n0numh3r3") //-> 12

// TASK 8 (Still trying to workout the logic)

