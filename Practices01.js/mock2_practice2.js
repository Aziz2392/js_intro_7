


// TASK 1 Get evens

function getEvens(num1, num2){
    const evens = [];
    let greaterEven = Math.max(num1, num2);
    let lesserEven = Math.min(num1, num2);

    for(i = lesserEven; i <= greaterEven; i++){
        if(i % 2 === 0) evens.push(i);
    }
    console.log(evens);
}

getEvens(2, 7)   // -> [ 2, 4, 6 ] 
getEvens(17, 5)  //  -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)  //  -> [ 4 ] 
getEvens(3, 3)  //  -> [ ] 

// TASK 2 Divisible by 5

function getMultipleOf5(num1 , num2){
    const multiplesOf5 = [];
    let greaterMul = Math.max(num1, num2);
    let lesserMul = Math.min(num1, num2);
    
    for(i = lesserMul; i <= greaterMul; i++){
        if(i % 5 === 0) multiplesOf5.push(i);
    }
    console.log(multiplesOf5);
}

getMultipleOf5(3, 17)   // -> [ 5, 10, 15] 
getMultipleOf5(23, 5)  //  -> [ 20, 15, 10, 5 ] 
getMultipleOf5(5, 5)    //  -> [ 5 ] 
getMultipleOf5(2, 4)    //  -> [ ] 

// TASK 3  count negative numbers

function countNeg(array){
    let countNegative = 0;

    for(neg of array){
        if(neg < 0) countNegative++
    }
    console.log(countNegative);
}

countNeg([-45, 0, 0, 34, 5, 67])   //  -> 1 
countNeg([-23, -4, 0, 2, 5, 90, 123])  // -> 2 
countNeg([0, -1, -2, -3])     //  -> 3

// TASK 4 Count A

function countA(string){
    let countAa = 0;
    let strArray = string.toLowerCase().split('');

    for(i = 0; i < strArray.length; i++){
        if(strArray[i].includes('a')) countAa++
    }
    console.log(countAa);
}

countA("TechGlobal is a QA bootcamp")    //   -> 4 
countA("QA stands for Quality Assurance")  //   -> 5 
countA("Cypress")         //    -> 0 

// TASK 5 CountWords

const countWords = (string) => console.log(string.trim().split(' ').length) ;

countWords("     Javascript is fun       ")      //   -> 3 
countWords("Cypress is an UI automation tool.    ")   //  -> 6  
countWords("1 2 3 4")           //  -> 4

// TASK 6 Factorial (IMPORTANT)

function factorial(number){

    let factor = number;
    let sum = 0 ;

    if(number === 0) return console.log(1);
    for(i = factor - 1 ; i >= 2; i--){
        factor *= i ;
       
    }

    console.log(factor);
}

factorial(5)   //  -> 120 
factorial(4)   // -> 24 
factorial(0)   // -> 1 
factorial(1)   // -> 1


// TASK 7 Count 3 or Less (WHY IS the LAST ONE GIVING ME 1?????)

const count3OrLess = (string) => console.log(string.split(' ').filter(x => x.length <= 3).length) ;

count3OrLess("Hello")       //  -> 0 
count3OrLess("Hi John")      //   -> 1 
count3OrLess("JavaScript is fun")     //  -> 2 
count3OrLess("My name is John Doe")   //  -> 3 
count3OrLess("")        //   -> 0

// TASK 8 Remove extra spaces

const removeExtraSpaces = (string) => console.log(string.trim().split(' ').filter(x => x.length >= 1).join(' ')); 

removeExtraSpaces("Hello")        //   -> "Hello" 
removeExtraSpaces("    Hello    World  ")    //   -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")  // -> "JavaScript is fun” 
removeExtraSpaces("")           // -> "" 

// TASK 9 Middle Number (REMEMBER to put 3 nums in an array then sort!!!!!!!!)

function middleInt(num1, num2, num3){

    let sortInt = [num1, num2, num3].sort();

    console.log(sortInt[1]);
}

middleInt(1, 2, 2)   //  -> 2 
middleInt(5, 5, 8)   //  -> 5 
middleInt(5, 3, 5)   //  -> 5 
middleInt(1, 1, 1)   //  -> 1 
middleInt(-1, 25, 10)  // -> 10

// TASK 10 First Duplicate

function firstDuplicate(array){

    for(i = 0; i < array.length; i++){
        for(j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) return array[i];
        }
        
    }
    return -1
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) )    // -> 3 
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) )    // -> 5 
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))    //  -> -1 
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))  //  -> 'abc' 
console.log(firstDuplicate([ 1, 2, 3]))       // -> -1 
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))    // -> -1


// TASK 11 Find Duplicate Elements

function getDuplicates(array){

    const container = [];
    const Duplicate = [];

    for(obj of array){
        if(container.includes(obj) && !Duplicate.includes(obj)) Duplicate.push(obj);
        else container.push(obj);
    }
    console.log(Duplicate)
}

getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])   //  -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])       // -> [ ] 
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])  //  -> [ 'foo', 'a’ ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])    //  -> [ ] 


// TASK 12 Count Vowels

const countVowels = (string) => console.log(string.split('').filter(x => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(x)).length) ;

countVowels("Hello")     //  -> 2 
countVowels("JavaScript is fun")  //  -> 5 
countVowels("")       //  -> 0

// TASK 13 REVERSE string

function reverseStringWords(string){
    let reverseStr = string.trim().split(' ');
    
    for(i = 0; i < reverseStr.length; i++){

        reverseStr[i] = reverseStr[i].split('').reverse().join('');
    }
    console.log(reverseStr.join(' ')); 
} 

reverseStringWords("Hello World")    //  -> "olleH dlroW" 
reverseStringWords("I like JavaScript")   //  -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")     //  -> "olleH" 
reverseStringWords("")       //  -> "" 
reverseStringWords(" ")       //  -> "" 

// TASK 14 Count Consonants

const countConsonants = (string) => console.log(string.split('').filter(x => !['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(x)).length); 

countConsonants("Hello")     //   -> 3 
countConsonants("Hello World")     //  -> 8 
countConsonants("JavaScript is fun")    // -> 12 
countConsonants("")       //  -> 0 

// TASK 15 Count Multiple Words (DONT FORGET .trim() when doing this!!!!!)
function countMultipleWords(array){

    let countMultiple = 0; 

    for(words of array){
        if(words.trim().split(' ').length > 1) countMultiple++
    }

    console.log(countMultiple);
}


countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ])   //  -> 1 
countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ])    // -> 0 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])   //  -> 4 
countMultipleWords([ ])             //  -> 0


// TASK 16 FIZZBUZZ

function fizzBuzz(num1 , num2){

    const fizzB = [];
    let greaterFB = Math.max(num1, num2);
    let lesserFB = Math.min(num1, num2);

    for(i = lesserFB; i <= greaterFB; i++){
        if(i % 3 === 0 && i % 5 === 0) fizzB.push('FizzBuzz');
        else if(i % 3 === 0) fizzB.push('Fizz');
        else if(i % 5 === 0) fizzB.push('Buzz');
        else fizzB.push(i) ;
    
    }
    console.log(fizzB.join(' | '));

}

fizzBuzz(13, 18) ;
fizzBuzz(12, 5) ;
fizzBuzz(5, 5) ;
fizzBuzz(9, 6);

// TASK 17 Palindrome

function isPalindrome(string){
    if(string.toLowerCase() === string.toLowerCase().split('').reverse().join('')) return true ;
    else return false ;
}


console.log(isPalindrome("Hello")); //-> false 
console.log(isPalindrome("Kayak")) //-> true 
console.log(isPalindrome("civic")) //-> true 
console.log(isPalindrome("abba")) //-> true 
console.log(isPalindrome("ab a")) // -> false 
console.log(isPalindrome("123454321")) //-> true 
console.log(isPalindrome("A")) // -> true 
console.log(isPalindrome("")) // -> true

// TASK 18 Prime Number


function isPrime(num){
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d += 2 ; // Dont know what this means
    }
    return true ;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));


// TASK 19 Add 2 Arrays (IMPORTANT BEFORE EXAM CHECK)!!!!!!!!!!!!!!!!!!!!!!!

function add(arr1, arr2){
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    console.log(arr1.map((value, i) => value + (arr2[i] || 0)));
}


add([3, 0, 0, 7, 5, 10], [6, 3, 2]) ;
add([10,3,6,3,2],[6,8,3,0,0,7,5,10,34]) ;
add([-5, 6, -3, 11], [5, -6, 3, -11]);


// TASK 20 No element STARTS with A

function noA(array){

    const noAA = [];
    for(str of array){

        

        if(str.toLowerCase().startsWith('a')) noAA.push('###');
        else noAA.push(str);
    }
    console.log(noAA);
}

noA(["javascript", "hello", "123", "xyz"]) ;
noA(["apple", "123", "ABC", "javascript"]); 
noA(["apple", "abc", "ABC", "Alex", "A"]);

// TASK 21 NO Elements Divisible by 3 and 5

function no3and5(array){
    const no35 = [];

    for(numb of array){
        if(numb % 3 === 0 && numb % 5 === 0) no35.push(101);
        else if(numb % 3 === 0) no35.push(100);
        else if(numb % 5 === 0) no35.push(99);
        else no35.push(numb);
    }

    console.log(no35);
}

no3and5([7, 4, 11, 23, 17]) ;
no3and5([3, 4, 5, 6]) ;
no3and5([10, 11, 12, 13, 14, 15]);

// TASK 22 No Elements Equal 13

function no13(array){

    const noThirteen = [];

    for(num of array){
        if(num === 13) noThirteen.push(0);
        else noThirteen.push(num);
    }

    console.log(noThirteen);
}

no13([1, 2, 3 ,4]); 
no13([13, 2, 3]);
no13([13, 13, 13 , 13, 13]); 
no13([]);

// TASK 23 Remove duplicates

function removeDuplicates(array){
    const container = [];
    const duplicate = [];

    for(obj of array){
        if(container.includes(obj) && !duplicate.includes(obj)) duplicate.push(obj);
        else container.push(obj);
    }
    console.log(container);
}

removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])
removeDuplicates([1, 2, 5, 2, 3])
removeDuplicates([0, -1, -2, -2, -1])
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 
removeDuplicates(["1", "2", "3", "2", "3"])


// TASK 24 No Digits (IMPORTANT!!!!!)

const noDigit = (string) => console.log(string.split('').filter(x => x > '9'  || x < '0').join(''));

noDigit("");
noDigit("Javascript"); 
noDigit("123Hello") ;
noDigit("123Hello World149"); 
noDigit("123Tech456Global149");


// TASK 25 No Vowel

const noVowel = (string) => console.log(string.split('').filter(x => !['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(x)).join('')) ;

noVowel("TechGlobal")// -> "TchGlbl" 
noVowel("AEOxyz")// -> "xyz" 
noVowel("Javascript") //-> "Jvscrpt" 
noVowel("") //-> ""
noVowel("125$") //-> "125$"


// TASK 26 Sum of Digits

const sumOfDigits = (string) => console.log(string.split('').filter(x => x >= '0' && x <= '9').reduce((sum, num) => sum += Number(num), 0)) ;

sumOfDigits("Javascript") 
sumOfDigits("John's age is 29") 
sumOfDigits("$125.0") 
sumOfDigits("")


// 

