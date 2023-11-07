// THE COMPLICATED ONES



// TASK 3 Has Vowel

const hasVowel = (string) => console.log(string.toLowerCase().split('').filter(x => ['a', 'e','i','o','u'].includes(x)).length > 0);

hasVowel("")      //  -> false 
hasVowel("Javascript")  //   -> true 
hasVowel("Tech Global")   //  -> true 
hasVowel("1234")     //  -> false 
hasVowel("ABC")     //  -> true 

// TASK 4Start Vowel

function startVowel(string){
    return ('aeiouAEIOU'.includes(string[0]));
}

console.log(startVowel("Hello"))    // -> false 
console.log(startVowel("Apple"))  //  -> true 
console.log(startVowel("orange"))  // -> true 
console.log(startVowel(""))   //  -> false 
console.log(startVowel("  "))   //  -> false 
console.log(startVowel("123"))   //  -> false

// TASK 6 Swap first and last characters

function replaceFirstLast(string){
    let firstChar = string[0];
    let lastChar = string[string.length -1];
    let middleChar = string.slice(1, string.length -1);

    if(string.trim().length < 2) console.log('');
    else console.log(lastChar + middleChar + firstChar);
}

replaceFirstLast("")      //   ->  "" 
replaceFirstLast("Hello")     //  ->  "oellH" 
replaceFirstLast("Tech Global")   //  -> "lech GlobaT" 
replaceFirstLast("A")    //   -> "" 
replaceFirstLast("    A      ")   //   -> ""

// TASK 7 Swap first and last 4 Characters

function swap4(string){
    let first4 = string.slice(0, 4);
    let last4 = string.slice(string.length - 4);
    let middle4 = string.slice(4, string.length - 4);

    if(string.trim().length < 8) console.log('');
    else console.log(last4 + middle4 + first4);
}

swap4("abc")      // -> "" 
swap4("JavaScript")    //  -> "riptScJava" 
swap4("TechGlobal")   //  -> "obalGlTech" 
swap4("")       //  -> "" 
swap4("  ")     //  -> "" 
swap4("Apple")    //   -> ""

// TASK 8 Swap First and Last Words !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function swapFirstLastWord(string){
    let firstWord = string.slice(0, string.indexOf(' '));
    let lastWord = string.slice(string.lastIndexOf(' '));
    let middleWord = string.slice(string.indexOf(' '), string.lastIndexOf(' ') + 1);

    if(string.trim().includes(' ')) console.log(lastWord + middleWord + firstWord);
    else console.log('');
}

swapFirstLastWord("Hello World")    //  -> "World Hello" 
swapFirstLastWord("I like JavaScript")  // -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")   //  -> "bar bar foo foo" 
swapFirstLastWord("")      //   -> "" 
swapFirstLastWord("  ")      //   -> "" 
swapFirstLastWord("Hello")     //   -> "" 
swapFirstLastWord("Hello   ")    //   -> "" 

// TASK 15 Factorial

function factorial(num){
    let factor = num;
    
    for(i = num - 1; i > 1; i--){
        factor *= i;
    }
    if(num === 0) console.log(1);
    else console.log(factor);
}

factorial(5)  //   -> 120 
factorial(4)   // -> 24 
factorial(0)   // -> 1 
factorial(1)   // -> 1

// TASK 16 Count 3 or Less

const count3OrLess = (string) => console.log(string.trim().split(' ').filter(x => x.length <= 3 && x.length >= 1).length);

count3OrLess("Hello")      //   -> 0 
count3OrLess("Hi John")     //    -> 1 
count3OrLess("JavaScript is fun")     //  -> 2 
count3OrLess("My name is John Doe")   //  -> 3 
count3OrLess("")         //  -> 0

// TASK 17 remove extra spaces

const removeExtraSpaces = (string) => console.log(string.trim().split(' ').filter(x => x.length >= 1).join(' '));

removeExtraSpaces("Hello")        //   -> "Hello" 
removeExtraSpaces("    Hello    World  ")   //    -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")  //  -> "JavaScript is fun” 
removeExtraSpaces("")         //    -> ""

// TASK 22 Reverse string words

const reverseStringWords = (string) => console.log(string.trim().split(' ').map(x => x.split('').reverse().join('')).join(' '));

reverseStringWords("Hello World")    //  -> "olleH dlroW" 
reverseStringWords("I like JavaScript")  //   -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")     //  -> "olleH" 
reverseStringWords("")       //  -> "" 
reverseStringWords(" ")       //  -> ""

// TASK 26 Palindrome

function isPalindrome(string){
    if(string.toLowerCase().trim() === string.toLowerCase().trim().split('').reverse().join('')) return true;
    else return false; 
}

console.log(isPalindrome("Hello")) //  -> false 
console.log(isPalindrome("Kayak")) //  -> true 
console.log(isPalindrome("civic"))  // -> true 
console.log(isPalindrome("abba"))  // -> true 
console.log(isPalindrome("ab  a")) //  -> false 
console.log(isPalindrome("123454321"))  // -> true 
console.log(isPalindrome("A")) // -> true 
console.log(isPalindrome(""))  // -> true 


// TASK 27 Prime Number

function isPrime(num){

    if(num < 2) return false;
    else if(num === 2 || num === 3) return true;
    else if(num % 2 === 0 || num % 3 === 0) return false;

    let d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d += 2
    }
    return true; 
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

// TASK 28 add two arrays

function add(arr1, arr2){
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    return arr1.map((value, i) => value + (arr2[i] || 0));
}


console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))        // -> [9, 3, 2, 7, 5, 10] 
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))   //  -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))       //  -> [0, 0, 0, 0]