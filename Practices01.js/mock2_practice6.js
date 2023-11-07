
// TASK 3

const hasVowel = (string) => console.log(string.toLowerCase().split('').filter(x => ['a','e','i','o','u'].includes(x)).length > 0);

hasVowel("")      //  -> false 
hasVowel("Javascript")   //  -> true 
hasVowel("Tech Global")   //  -> true 
hasVowel("1234")     //  -> false 
hasVowel("ABC")     // -> true

// TASK 4

function startVowel(string){
    return ('aeiouAEIOU').includes(string[0]);
}

console.log(startVowel("Hello"))  //   -> false 
console.log(startVowel("Apple"))   // -> true 
console.log(startVowel("orange")) //  -> true 
console.log(startVowel(""))    // -> false 
console.log(startVowel("  "))   //  -> false 
console.log(startVowel("123"))   //  -> false 

// TASK 6

function replaceFirstLast(string){
    let firstLetter = string[0];
    let lastLetter = string[string.length - 1];
    let middleLetters = string.slice(1, string.length - 1);

    if(string.trim().length < 2) console.log('');
    else console.log(lastLetter + middleLetters + firstLetter);
}

replaceFirstLast("")       //  ->  "" 
replaceFirstLast("Hello")     //  ->  "oellH" 
replaceFirstLast("Tech Global")   // -> "lech GlobaT" 
replaceFirstLast("A")      // -> "" 
replaceFirstLast("    A      ")     // -> ""

// TASK 7 

function swap4(string){
    let first4 = string.slice(0, 4);
    let last4 = string.slice(string.length - 4);
    let middle = string.slice(4, string.length - 4);

    if(string.trim().length < 8) console.log('');
    else console.log(last4 + middle + first4);
}

swap4("abc")    //   -> "" 
swap4("JavaScript")   //   -> "riptScJava" 
swap4("TechGlobal")  //   -> "obalGlTech" 
swap4("")        // -> "" 
swap4("  ")     //  -> "" 
swap4("Apple")    //   -> ""

// TASK 8!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function swapFirstLastWord(string){
    let firstWord = string.slice(0, string.indexOf(' '));
    let lastWord = string.slice(string.lastIndexOf(' '));
    let middleWord = string.slice(string.indexOf(' '), string.lastIndexOf(' ') + 1);

    if(string.trim().includes(' ')) console.log(lastWord + middleWord + firstWord);
    else console.log('');
}

swapFirstLastWord("Hello World")   //   -> "World Hello" 
swapFirstLastWord("I like JavaScript")  // -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")    // -> "bar bar foo foo" 
swapFirstLastWord("")      //   -> "" 
swapFirstLastWord("  ")       //  -> "" 
swapFirstLastWord("Hello")      //  -> "" 
swapFirstLastWord("Hello   ")     //  -> ""


function factorial(num){
    let factor = num;

    for(i = factor - 1; i > 1; i--){
        factor *= i;
    }
    if(num === 0) console.log(1);
    else console.log(factor); 
}

factorial(5)  //   -> 120 
factorial(4)   // -> 24 
factorial(0)  //  -> 1 
factorial(1)  //  -> 1


// TASK 16

const count3OrLess = (string) => console.log(string.trim().split(' ').filter(x => x.length <= 3 && x.length >= 1).length);

count3OrLess("Hello")     //    -> 0 
count3OrLess("Hi John")       //  -> 1 
count3OrLess("JavaScript is fun")     //  -> 2 
count3OrLess("My name is John Doe")   //  -> 3 
count3OrLess("")        //   -> 0

// TASK 17

const removeExtraSpaces = (string) => console.log(string.trim().split(' ').filter(x => x.length >= 1).join(' '));

removeExtraSpaces("Hello")     //      -> "Hello" 
removeExtraSpaces("    Hello    World  ")    //   -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")   // -> "JavaScript is fun” 
removeExtraSpaces("")          //   -> "" 

// TASK 22

const reverseStringWords = (string) => console.log(string.trim().split(' ').map(x => x.split('').reverse().join('')).join(' '));

reverseStringWords("Hello World")    //  -> "olleH dlroW" 
reverseStringWords("I like JavaScript")    // -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")     //  -> "olleH" 
reverseStringWords("")       //  -> "" 
reverseStringWords(" ")       //  -> "" 

// TASK 26

function isPalindrome(string){
    if(string.toLowerCase().trim() === string.toLowerCase().trim().split('').reverse().join('')) console.log(true);
    else console.log(false);
}

isPalindrome("Hello")   //-> false 
isPalindrome("Kayak") //  -> true 
isPalindrome("civic") //  -> true 
isPalindrome("abba")  // -> true 
isPalindrome("ab  a") //  -> false 
isPalindrome("123454321")  // -> true 
isPalindrome("A")  // -> true 
isPalindrome("") //  -> true 

// TASK 27

function isPrime(num){
    if(num < 2) return false;
    else if(num === 2 || num === 3) return true;
    else if(num % 2 === 0 || num % 3 === 0) return false ;

    let d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d += 2
    }
    return true; 
}

console.log(isPrime(5))  // -> true 
console.log(isPrime(2))  // -> true 
console.log(isPrime(29))  // -> true 
console.log(isPrime(-5)) // -> false 
console.log(isPrime(0)) // -> false 
console.log(isPrime(1))  //-> false

// TASK 28

function add(arr1, arr2){
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    return arr1.map((value, i) => value + (arr2[i] || 0));
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))      //   -> [9, 3, 2, 7, 5, 10] 
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))   //  -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))      //   -> [0, 0, 0, 0]

// TASK 33

const noDigit = (string) => console.log(string.split('').filter(x => x > '9' || x < '0').join(''));

noDigit("")         //  -> "" 
noDigit("Javascript")    //   -> "Javascript" 
noDigit("123Hello")       //  -> "Hello" 
noDigit("123Hello World149")   //  -> "Hello World” 
noDigit("123Tech456Global149")   //  -> "TechGlobal"

// TASK 34

const noVowel = (string) => console.log(string.split('').filter(x => !['a', 'e','i','o','u','A','E','I','O','U'].includes(x)).join(''));

noVowel("TechGlobal")  // -> "TchGlbl" 
noVowel("AEOxyz")  // -> "xyz" 
noVowel("Javascript")  // -> "Jvscrpt" 
noVowel("")  // -> "" 
noVowel("125$")  // -> "125$"

// TASK 35

const sumOfDigits = (string) => console.log(string.split('').filter(x => x >= '0' && x <= '9').reduce((sum, num) => sum + Number(num), 0));

sumOfDigits("Javascript")  //     -> 0 
sumOfDigits("John’s age is 29")   //  -> 11 
sumOfDigits("$125.0")    //   -> 8 
sumOfDigits("")        // -> 0

// TASK 36

function arrFactorial(array){
    return array.map(num => {
        let factor = 1;

        for(i = 2; i <= num; i++){
            factor *= i; 
        }
        return factor;
    })

}

console.log(arrFactorial([1, 2, 3 ,4]))  //   -> [1, 2, 6, 24] 
console.log(arrFactorial([0, 5]))     //  -> [1,120] 
console.log(arrFactorial([5 , 0, 6]))   //  -> [120, 1, 720] 
console.log(arrFactorial([]))      // -> [] 