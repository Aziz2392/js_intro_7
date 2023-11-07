
// TASK 1 Double triple word (complete)

function doubleOrTripleWord(string){
    if(string.length % 2 === 0) console.log(string + string + string);
    else console.log(string + string);
}

doubleOrTripleWord("Tech")    // -> "TechTechTech" 
doubleOrTripleWord("Apple")  //   -> "AppleApple” 
doubleOrTripleWord("")      // -> "" 
doubleOrTripleWord(" ")     //  -> " " 
doubleOrTripleWord("1")     //  -> "11" 
doubleOrTripleWord("22") 

// TASK 2 First and Last Word

function firstLastWord(string){
    console.log(string.slice(0, string.indexOf(" ")) + string.slice(string.lastIndexOf(" ") + 1));
}

firstLastWord("Hello World")   //  -> "HelloWorld" 
firstLastWord("I like JavaScript")   // -> "IJavaScript” 
firstLastWord("Hello")    //   -> "HelloHello" 
firstLastWord("")       //  -> "" 
firstLastWord("  ")     //  -> "" 

// TASK 3 Has Vowel!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const hasVowel = (string) => console.log(string.toLowerCase().split('').filter(x => ['a','e','i','o','u'].includes(x)).length > 0); 

hasVowel("")    //    -> false 
hasVowel("Javascript")  //   -> true 
hasVowel("Tech Global")  //   -> true 
hasVowel("1234")     //  -> false 
hasVowel("ABC")     //  -> true

// TASK 4 Start Vowel!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function startVowel(string){
    return 'aeiouAEIOU'.includes(string[0]);
}

console.log(startVowel("Hello"));// false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange"));// true
console.log(startVowel("")); //false
console.log(startVowel("    "));//false
console.log(startVowel("123") );//false

// TASK 5 Average of Edges (Complete)

function averageOfEdges(num1, num2, num3){
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    let avg = (max + min) / 2;

    console.log(avg);
}

averageOfEdges(0, 0, 0)  // -> 0 
averageOfEdges(0, 0, 6)  // -> 3 
averageOfEdges(-2, -2, 10) //  -> 4 
averageOfEdges(-3, 15, -3)  // -> 6 
averageOfEdges(10, 13, 20)  // -> 15 


// TASK 6 Swap first and last !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function replaceFirstLast(string){
    let firstLetter = string[0];
    let lastLetter = string[string.length - 1];
    let middle = string.slice(1, string.length - 1);

    if(string.trim().length < 2) console.log('');
    else console.log(lastLetter + middle + firstLetter);
}

replaceFirstLast("")        // ->  "" 
replaceFirstLast("Hello")    //   ->  "oellH" 
replaceFirstLast("Tech Global")   //  -> "lech GlobaT" 
replaceFirstLast("A")    //   -> "" 
replaceFirstLast("    A      ")    //  -> ""


// TASK 7 Swap first and last characters!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function swap4(string){

    let first4 = string.slice(0, 4);
    let last4 = string.slice(string.length - 4);
    let middle4 = string.slice(4, string.length - 4);

    if(string.trim().length < 8) console.log('');
    else console.log(last4 + middle4 + first4);
}

swap4("abc")    //   -> "" 
swap4("JavaScript")   //   -> "riptScJava" 
swap4("TechGlobal")   //  -> "obalGlTech" 
swap4("")       //  -> "" 
swap4("  ")     //  -> "" 
swap4("Apple")     //  -> ""

// TASK 8 First and Last Words!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function swapFirstLastWord(string){
    let firstWord = string.slice(0, string.indexOf(' '));
    let lastWord = string.slice(string.lastIndexOf(' '));
    let middleWord = string.slice(string.indexOf(' '), string.lastIndexOf(' ') + 1);

    if(string.trim().includes(' ')) console.log(lastWord + middleWord + firstWord);
    else console.log('');
}

swapFirstLastWord("Hello World")     // -> "World Hello" 
swapFirstLastWord("I like JavaScript")  // -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")   //  -> "bar bar foo foo" 
swapFirstLastWord("")        // -> "" 
swapFirstLastWord("  ")       //  -> "" 
swapFirstLastWord("Hello")     //   -> "" 
swapFirstLastWord("Hello   ")    //   -> ""


// TASK 9 Count Positive Numbers (complete)

const countPos = (array) => console.log(array.filter(x => x > 0).length);

countPos([-45, 0, 0, 34, 5, 67])   //  -> 3 
countPos([-23, -4, 0, 2, 5, 90, 123])  // -> 4 
countPos([0, -1, -2, -3])      // -> 0

// TASK 10 Find Even Numbers

function getEvens(num1, num2){
    let greaterEven = Math.max(num1, num2);
    let lesserEven = Math.min(num1, num2);
    const evens = [];

    for(i = lesserEven; i <= greaterEven; i++){
        if(i % 2 === 0) evens.push(i);
    }
    console.log(evens);
}

getEvens(2, 7)  //  -> [ 2, 4, 6 ] 
getEvens(17, 5)  //  -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)   // -> [ 4 ] 
getEvens(3, 3)   // -> [ ] 

// TASK 11 Find Numbers Divisible by 5

function getMultipleOf5(num1, num2){
    const multiple5 = [];
    let greaterMul = Math.max(num1, num2);
    let lesserMul = Math.min(num1, num2);

    for(i = lesserMul; i <= greaterMul; i++){
        if(i % 5 === 0) multiple5.push(i);
    }
    console.log(multiple5);
}

getMultipleOf5(3, 17) //   -> [ 5, 10, 15] 
getMultipleOf5(23, 5)   // -> [ 20, 15, 10, 5 ] 
getMultipleOf5(5, 5)    //  -> [ 5 ] 
getMultipleOf5(2, 4)    //  -> [ ]

// TASK 12 Count Negative numbers

const countNeg = (array) => console.log(array.filter(x => x < 0).length);

countNeg([-45, 0, 0, 34, 5, 67])    // -> 1 
countNeg([-23, -4, 0, 2, 5, 90, 123]) //  -> 2 
countNeg([0, -1, -2, -3])     //  -> 3 

// TASK 13 count A

const countA = (string) => console.log(string.trim().toLowerCase().split('').filter(x => x.includes('a')).length);

countA("TechGlobal is a QA bootcamp")    //   -> 4 
countA("QA stands for Quality Assurance")   //  -> 5 
countA("Cypress")          //   -> 0

// TASK 14 Count Words

const countWords = (string) => console.log(string.trim().split(' ').length);

countWords("     Javascript is fun       ")      //   -> 3 
countWords("Cypress is an UI automation tool.    ")   //  -> 6  
countWords("1 2 3 4")  

// TASK 15 Factorial

function factorial(number){
    let factor = number;
    
    for(i = factor - 1; i > 1; i--){
        factor *= i;

    }
    if(number === 0) console.log(1);
    else console.log(factor);
}

factorial(5)   //  -> 120 
factorial(4)   // -> 24 
factorial(0)   // -> 1 
factorial(1)   // -> 1

// TASK 16 Count 3 or less

const count3OrLess = (string) => console.log(string.trim().split(' ').filter(x => x.length <= 3 && x.length >= 1).length);

count3OrLess("Hello")        // -> 0 
count3OrLess("Hi John")      //   -> 1 
count3OrLess("JavaScript is fun")    //   -> 2 
count3OrLess("My name is John Doe")  //  -> 3 
count3OrLess("")         //  -> 0

// TASK 17 Remove extra spaces

const removeExtraSpaces = (string) => console.log(string.trim().split(' ').filter(x => x.length >= 1).join(' '));

removeExtraSpaces("Hello")         //  -> "Hello" 
removeExtraSpaces("    Hello    World  ")    //   -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")  //  -> "JavaScript is fun” 
removeExtraSpaces("")           //  -> "" 

// TASK 18 Middle Number

function middleInt(num1, num2, num3){
    let sortArray = [num1, num2, num3].sort();

    console.log(sortArray[1]);
}

middleInt(1, 2, 2)    // -> 2 
middleInt(5, 5, 8)    // -> 5 
middleInt(5, 3, 5)    // -> 5 
middleInt(1, 1, 1)    // -> 1 
middleInt(-1, 25, 10)  // -> 10

// TASK 19 First Duplicate

function firstDuplicate(array){

    for(i = 0; i < array.length; i++){
        for(j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) return array[i];
        }
    }
    return -1 ;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))     // -> 3 
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))    //  -> 5 
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))   //   -> -1 
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))   // -> 'abc' 
console.log(firstDuplicate([ 1, 2, 3]))       // -> -1 
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))    // -> -1 

// TASK 20 Find all duplicates

function getDuplicates(array){
    const container = [];
    const duplicates = [];

    for(obj of array){
        if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj);
        else container.push(obj);
    }
    console.log(duplicates);
}

getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])    //  -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])        //  -> [ ] 
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])   // -> [ 'foo', 'a’ ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])    //   -> [ ] 

// TASK 21 Count Vowels

const countVowels = (string) => console.log(string.toLowerCase().split('').filter(x => ['a', 'e', 'i', 'o', 'u'].includes(x)).length);

countVowels("Hello")     // -> 2 
countVowels("JavaScript is fun")  //  -> 5 
countVowels("")       //  -> 0


// TASK 22 reverse string words!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const reverseStringWords = (string) => console.log(string.trim().split(' ').map(x => x.split('').reverse().join('')).join(' '));

reverseStringWords("Hello World")    //  -> "olleH dlroW" 
reverseStringWords("I like JavaScript")    // -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")     //  -> "olleH" 
reverseStringWords("")       //  -> "" 
reverseStringWords(" ")      //   -> ""

// TASK 23 Count Constanants

const countConsonants = (string) => console.log(string.toLowerCase().split('').filter(x => !['a', 'i', 'e', 'o', 'u'].includes(x)).length);

countConsonants("Hello")      //   -> 3 
countConsonants("Hello World")    //   -> 8 
countConsonants("JavaScript is fun")  //   -> 12 
countConsonants("")       //  -> 0

// TASK 24 Count Multiple Words

const countMultipleWords = (array) => console.log(array.filter(x => x.trim().includes(' ')).length);

countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ])    // -> 1 
countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ])   //  -> 0 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])   //  -> 4 
countMultipleWords([ ])             //  -> 0

// TASK 25 FizzBuzz

function fizzBuzz(num1, num2){
    const fB = [];
    let greaterFizz = Math.max(num1, num2);
    let lesserFizz = Math.min(num1, num2);

    for(i = lesserFizz; i <= greaterFizz; i++){
        if(i % 3 === 0 && i % 5 === 0) fB.push('FizzBuzz');
        else if(i % 3 === 0) fB.push('Fizz');
        else if(i % 5 === 0) fB.push('Buzz');
        else fB.push(i);
    }
    console.log(fB.join(' | '));
}

fizzBuzz(13, 18)  //  -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)  //  -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
fizzBuzz(5, 5)   // -> "Buzz" 
fizzBuzz(9, 6)  //  -> "Fizz | 7 | 8 | Fizz" 


// TASK 26 Palindrome

function isPalindrome(string){
    if(string.toLowerCase().trim() === string.toLowerCase().trim().split('').reverse().join('')) return true;
    else return false; 
}


    console.log(isPalindrome("Hello"))   //-> false 
    console.log(isPalindrome("Kayak"))   //-> true 
    console.log(isPalindrome("civic"))  // -> true 
    console.log(isPalindrome("abba"))  // -> true 
    console.log(isPalindrome("ab  a"))  // -> false 
    console.log(isPalindrome("123454321")) //  -> true 
    console.log(isPalindrome("A"))  // -> true 
    console.log(isPalindrome("")) //  -> true 


// TASK 27 Prime Number

function isPrime(num){

    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false; 

    let d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d += 2; 
    }
    return true; 
}

console.log(isPrime(5))  // -> true 
console.log(isPrime(2))   //-> true 
console.log(isPrime(29))  // -> true 
console.log(isPrime(-5)) // -> false 
console.log(isPrime(0))  //-> false 
console.log(isPrime(1)) // -> false

// TASK 28 Add Two Arrays

function add(arr1, arr2){
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    return arr1.map((value, i) => value + (arr2[i] || 0));
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))       //  -> [9, 3, 2, 7, 5, 10] 
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))   //  -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))     //    -> [0, 0, 0, 0] 

// TASK 29 No Elements with A

function noA(array){
    const noAA = []; 
    for(str of array){
        if(str.toLowerCase().startsWith('a')) noAA.push('###');
        else noAA.push(str);
    }
    console.log(noAA);
}

noA(["javascript", "hello", "123", "xyz"])   //  ->  ["javascript", "hello", "123", "xyz"] 
noA(["apple", "123", "ABC", "javascript"])   //  ->  ["###", "123", "###", "javascript"] 
noA(["apple", "abc", "ABC", "Alex", "A"])    // ->  ["###", "###", "###", "###", "###"] 

// TASK 30 No elements divisible by 3 and 5

function no3and5(array){
    const no35 = [];
    
    for(num of array){
        if(num % 3 === 0 && num % 5 === 0) no35.push(101);
        else if(num % 5 === 0) no35.push(99);
        else if(num % 3 === 0) no35.push(100);
        else no35.push(num);
    }
    console.log(no35);
}

no3and5([7, 4, 11, 23, 17])       //-> [7, 4, 11, 23, 17] 
no3and5([3, 4, 5, 6])      // -> [100, 4, 99, 100] 
no3and5([10, 11, 12, 13, 14, 15])    // -> [99, 11, 100, 13, 14, 101] 

// TASK 31 No Elements equals 13

function no13(array){
    const noThirteen = [];

    for(num of array){
        if(num === 13) noThirteen.push(0);
        else noThirteen.push(num);
    }
    console.log(noThirteen);
}

no13([1, 2, 3 ,4])    //   -> [1, 2, 3 ,4]  
no13([13, 2, 3])     //  -> [0, 2, 3] 
no13([13, 13, 13 , 13, 13])  //   -> [0, 0, 0, 0, 0] 
no13([])        // -> [] 

// TASK 32 Remove Duplicates

function removeDuplicates(array){
    const container = [];
    const duplicate = [];

    for(obj of array){
        if(container.includes(obj) && !duplicate.includes(obj)) duplicate.push(obj);
        else container.push(obj);
    }

    console.log(container);
}

removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  //    -> [10, 20, 35, 60, 70] 
removeDuplicates([1, 2, 5, 2, 3])         //  -> [1, 2, 5, 3] 
removeDuplicates([0, -1, -2, -2, -1])      //   -> [0, -1, -2] 
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])// -> ["abc", "xyz", "123", "ab", "ABC"] 
removeDuplicates(["1", "2", "3", "2", "3"])        // -> ["1", "2", "3"]

// TASK 33 No Digits

const noDigit = (string) => console.log(string.split('').filter(x => x > '9' || x < '0').join(''));

noDigit("")        //   -> "" 
noDigit("Javascript")     //  -> "Javascript" 
noDigit("123Hello")       //  -> "Hello" 
noDigit("123Hello World149")   //  -> "Hello World” 
noDigit("123Tech456Global149")   //  -> "TechGlobal"

// TASK 34 No Vowel

const noVowel = (string) => console.log(string.split('').filter(x => !['a','e','i','o','u','A','E','I','O','U'].includes(x)).join(''));

noVowel("TechGlobal") //  -> "TchGlbl" 
noVowel("AEOxyz")  // -> "xyz" 
noVowel("Javascript")  // -> "Jvscrpt" 
noVowel("")  // -> "" 
noVowel("125$")  // -> "125$" 

// TASK 35 Sum of Digits

const sumOfDigits = (string) => console.log(string.split('').filter(x => x >= '0' && x <= '9').reduce((sum, num) => sum += Number(num), 0));

sumOfDigits("Javascript")      // -> 0 
sumOfDigits("John’s age is 29")   //  -> 11 
sumOfDigits("$125.0")    //   -> 8 
sumOfDigits("")       //  -> 0


// TASK 36 Array Factorial 

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
console.log(arrFactorial([]))    //   -> [] 