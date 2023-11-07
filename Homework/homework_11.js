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

// TASK 5
