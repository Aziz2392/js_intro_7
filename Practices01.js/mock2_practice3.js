
// TASK 1 Double Triple the Word

function doubleOrTripleWord(string){
    if(string.length % 2 === 0) console.log(string + string + string);
    else console.log(string + string);
}

doubleOrTripleWord("Tech") 
doubleOrTripleWord("Apple") 
doubleOrTripleWord("") 
doubleOrTripleWord(" ") 
doubleOrTripleWord("1") 
doubleOrTripleWord("22")

// TASK 2 First and Last Word (IMPORTANT!!!!)

function firstLastWord(string){
    if(string.trim().includes(' ')) console.log(string.slice(0 , string.indexOf(' ')) + string.slice(string.lastIndexOf(' ') + 1));
    else console.log(string + string);
}

firstLastWord("Hello World") 
firstLastWord("I like JavaScript") 
firstLastWord("Hello") 
firstLastWord("")
firstLastWord("     ")


// TASK 3 Has Vowel

function hasVowel(string){
   if(string.toLowerCase().includes('a') || string.toLowerCase().includes('e') || string.toLowerCase().includes('i') ||
   string.toLowerCase().includes('o') || string.toLowerCase().includes('u') ) console.log(true);
   else console.log(false); 
}

hasVowel("") 
hasVowel("Javascript") 
hasVowel("Tech Global") 
hasVowel("1234") 
hasVowel("ABC")

// TASK 4 Start Vowel

function startVowel(string){
    if(string.toLowerCase().startsWith('a') || string.toLowerCase().startsWith('e') || string.toLowerCase().startsWith('i') ||
    string.toLowerCase().startsWith('o') || string.toLowerCase().startsWith('u') ) console.log(true);
    else console.log(false);
}

startVowel("Hello") 
startVowel("Apple") 
startVowel("orange") 
startVowel("") 
startVowel(" ") 
startVowel("123")

// TASK 5 Average of Edges

function averageOfEdges(num1, num2, num3){
    let maxNum = Math.max(num1, num2, num3);
    let minNum = Math.min(num1, num2, num3);

    console.log((maxNum + minNum) / 2);
}

averageOfEdges(0, 0, 0) 
averageOfEdges(0, 0, 6) 
averageOfEdges(-2, -2, 10) 
averageOfEdges(-3, 15, -3) 
averageOfEdges(10, 13, 20)


// TASK 6 Swap first and last characters (IMPORTANT)

function replaceFirstLast(string){
   let lastChar = string[string.length - 1];
   let firstChar = string[0];
    let middle = string.slice(1, string.length -1);

    if(string.trim().length < 2) console.log('');
    else console.log(lastChar + middle + firstChar);
}

replaceFirstLast("") 
replaceFirstLast("Hello") 
replaceFirstLast("Tech Global") 
replaceFirstLast("A") 
replaceFirstLast(" A ")

// TASK 7 Swap first and last four characters (Important)

function swap4(string){
    let first4 = string.slice(0, 4);
    let last4 = string.slice(string.length - 4);
    let middle4 = string.slice(4, string.length - 4);

    if(string.trim().length < 8) console.log('');
    else console.log(last4 + middle4 + first4);
}

swap4("abc") 
swap4("JavaScript") 
swap4("TechGlobal") 
swap4("")
swap4(" ") 
swap4("Apple")

// TASK 8 Swap first and last Words (Need HELP!!!!!!) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function swapFirstLastWord(string){
    let firstWord = string.slice(0, string.indexOf(' '));
    let lastWord = string.slice(string.lastIndexOf(' '));
    let middleWord = string.slice(string.indexOf(' '), string.lastIndexOf(' ') + 1 ); 

    if(string.trim().includes(' ')) console.log(lastWord + middleWord + firstWord);
    else console.log('');
}

swapFirstLastWord("Hello World") 
swapFirstLastWord("I like JavaScript") 
swapFirstLastWord("foo bar foo bar") 
swapFirstLastWord("") 
swapFirstLastWord(" ") 
swapFirstLastWord("Hello") 
swapFirstLastWord("Hello")

/*
let word = "Hello A World";

console.log(word.slice(0, word.indexOf(' ')));
console.log(word.slice(word.lastIndexOf(' ') + 1));
console.log(word.slice(word.indexOf(' '), word.lastIndexOf(' ')));

console.log(word.slice(word.lastIndexOf(' ') + 1) + word.slice(word.indexOf(' '), word.lastIndexOf(' ') + 1) + word.slice(0, word.indexOf(' ')));
*/

// TASK 9 Count Positive Numbers

const countPos = (array) => console.log(array.filter(x => x > 0).length);

countPos([-45, 0, 0, 34, 5, 67]) 
countPos([-23, -4, 0, 2, 5, 90, 123]) 
countPos([0, -1, -2, -3])

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

getEvens(2, 7) 
getEvens(17, 5) 
getEvens(4, 4) 
getEvens(3, 3)

// TASK 11 Numbers Divisible by 5

function getMultipleOf5(num1, num2){
    let greaterMul = Math.max(num1, num2);
    let lesserMul = Math.min(num1, num2);
    const multiple5 = [];

    for(i = lesserMul; i <= greaterMul; i++){
        if(i % 5 === 0) multiple5.push(i);
    }
    console.log(multiple5);
}

getMultipleOf5(3, 17) 
getMultipleOf5(23, 5) 
getMultipleOf5(5, 5) 
getMultipleOf5(2, 4)

// TASK 12 Count Negatives

const countNeg = (array) => console.log(array.filter(x => x < 0).length);

countNeg([-45, 0, 0, 34, 5, 67]) 
countNeg([-23, -4, 0, 2, 5, 90, 123]) 
countNeg([0, -1, -2, -3])

// TASK 13 Count A

function countA(string){
    let count = 0;
    for(letter of string){
        if(letter.toLowerCase().includes('a')) count++;
    }
    console.log(count);
}

countA("TechGlobal is a QA bootcamp") 
countA("QA stands for Quality Assurance") 
countA("Cypress")

// TASK 14 count words

const countWords = (string) => console.log(string.trim().split(' ').length);

countWords(" Javascript is fun ") 
countWords("Cypress is an UI automation tool. ") 
countWords("1 2 3 4")

// TASK 15 Factorial

function factorial(number){
    let factor = number;
    if(number === 0) return console.log(1);
    for(i = factor - 1; i >= 2; i--){
        factor *= i;
    }
    console.log(factor);
}

factorial(5)
factorial(4)
factorial(0)
factorial(1)

// TASK 16 Count 3 or Less

const count3OrLess = (string) => console.log(string.trim().split(' ').filter(x => x.length <= 3 && x.length >= 1).length);

count3OrLess("Hello") 
count3OrLess("Hi John")
count3OrLess("JavaScript is fun") 
count3OrLess("My name is John Doe") 
count3OrLess("")


// TASK 17 Remove extra spaces!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const removeExtraSpaces = (string) => console.log(string.trim().split(' ').filter(x => x.length >= 1).join(' '));

removeExtraSpaces("Hello")        //   -> "Hello" 
removeExtraSpaces("    Hello    World  ")    //   -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")  // -> "JavaScript is fun” 
removeExtraSpaces("")           // -> "" 

// TASK 18 Middle Number

function middleInt(num1, num2, num3){
    let sortInt = [num1, num2, num3].sort();

    console.log(sortInt[1]);
}

middleInt(1, 2, 2) 
middleInt(5, 5, 8) 
middleInt(5, 3, 5) 
middleInt(1, 1, 1) 
middleInt(-1, 25, 10)

// TASK 19 First Duplicate

function firstDuplicate(array){

    for(i = 0; i < array.length; i++){
        for(j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) return array[i];

        }
       
    }
    return -1
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])) 
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ])) 
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])) 
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))

// TASK 20 Find all Duplicate

function getDuplicates(array){
    const container = [];
    const duplicate = [];

    for(obj of array){
        if(container.includes(obj) && !duplicate.includes(obj)) duplicate.push(obj);
        else container.push(obj);
    }
    console.log(duplicate);
}

getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) 
getDuplicates([ 1, 2, 5, 0, 7 ])
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]) 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])

// TASK 21 Count Vowels

const countVowels = (string)  => console.log(string.toLowerCase().split('').filter(x => ['a', 'e', 'i', 'o', 'u'].includes(x)).length);

countVowels("Hello") 
countVowels("JavaScript is fun") 
countVowels("")

// TASK 22 Reverse string!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function reverseStringWords(string){
    let strArray = string.trim().split(' ');

    for(i = 0; i < strArray.length; i++){

        strArray[i] = strArray[i].split('').reverse().join('');
    }

    console.log(strArray.join(' '));
}

reverseStringWords("Hello World") 
reverseStringWords("I like JavaScript") 
reverseStringWords("Hello") 
reverseStringWords("") 
reverseStringWords(" ")

// TASK 23 Count Cononants

const countConsonants = (string) => console.log(string.toLowerCase().split('').filter(x => !['a', 'e', 'i', 'o', 'u'].includes(x)).length);

countConsonants("Hello") 
countConsonants("Hello World") 
countConsonants("JavaScript is fun") 
countConsonants("")

// TASK 24 Count Multiple words

function countMultipleWords(array){
    let countMult = 0;

    for(word of array){
        if(word.trim().split(' ').length > 1) countMult++
    }
    console.log(countMult);
}

countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ])   //  -> 1 
countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ])    // -> 0 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])   //  -> 4 
countMultipleWords([ ])             //  -> 0

// TASK 25 FizzBuzz

function fizzBuzz(num1, num2){
    let greaterFizz = Math.max(num1, num2);
    let lesserFizz = Math.min(num1, num2);
    const fB = [];

    for(i = lesserFizz; i <= greaterFizz; i++){
        if(i % 3 === 0 && i % 5 === 0) fB.push('FizzBuzz');
        else if(i % 3 === 0) fB.push('Fizz');
        else if(i % 5 === 0) fB.push('Buzz');
        else fB.push(i);
    }

    console.log(fB.join(' | '));
}

fizzBuzz(13, 18) 
fizzBuzz(12, 5) 
fizzBuzz(5, 5) 
fizzBuzz(9, 6)

// TASK 26
function isPalindrome(string){
    if(string.toLowerCase() === string.toLowerCase().split('').reverse().join('')) console.log(true);
    else console.log(false);
}

isPalindrome("Hello")  // -> false 
isPalindrome("Kayak")  // -> true 
isPalindrome("civic")  // -> true 
isPalindrome("abba")  // -> true 
isPalindrome("ab  a") //  -> false 
isPalindrome("123454321") // -> true 
isPalindrome("A")  // -> true 
isPalindrome("")  // -> true 


// TASK 27

function isPrime(num){
    if(num < 2) return false;
    else if(num === 2 || num === 3) return true;
    else if(num % 2 === 0 || num % 3 === 0) return false;

    d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d += 2;
    }

    return true; 
}

console.log(isPrime(5))  // -> true 
console.log(isPrime(2))  // -> true 
console.log(isPrime(29))  // -> true 
console.log(isPrime(-5)) // -> false 
console.log(isPrime(0)) // -> false 
console.log(isPrime(1)) // -> false 

// TASK 28

function add(arr1, arr2){
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    console.log(arr1.map((value, i) => value + (arr2[i]|| 0)));
}

add([3, 0, 0, 7, 5, 10], [6, 3, 2])    	 	 //	-> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])    	//-> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])    	 	 //	-> [0, 0, 0, 0] 



// TASK 29

function noA(array){

    const noAA = [];

    for(word of array){
        if(word.toLowerCase().startsWith('a')) noAA.push('###');
        else noAA.push(word);
    }
    console.log(noAA);
}

noA(["javascript", "hello", "123", "xyz"])    //	->  ["javascript", "hello", "123", "xyz"] 
noA(["apple", "123", "ABC", "javascript"])  //  ->  ["###", "123", "###", "javascript"] 
noA(["apple", "abc", "ABC", "Alex", "A"])    	//->  ["###", "###", "###", "###", "###"] 


// TASK 30

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

no3and5([7, 4, 11, 23, 17])     //	-> [7, 4, 11, 23, 17] 
no3and5([3, 4, 5, 6])    	 	//-> [100, 4, 99, 100] 
no3and5([10, 11, 12, 13, 14, 15])   // -> [99, 11, 100, 13, 14, 101] 



// TASK 31



// TASK 35

const sumOfDigits = (string) => console.log(string.split('').filter(x => x >= '0' && x <= '9').reduce((sum, num)=> sum += Number(num), 0));

sumOfDigits("Javascript")     //	-> 0 
sumOfDigits("John's age is 29")    //	-> 11 
sumOfDigits("$125.0")    	 //	-> 8 
sumOfDigits("")    	 	 //	-> 0 

// TASK 36  ARRAY FACTORIAL

const arrFactorial = (array) => {
    return array.map(num => {
        factor = 1;
        for(i = 2; i <= num; i++){
            factor *= i;
        }
        return factor; 
    })
}

console.log(arrFactorial([1, 2, 3, 4])); 
console.log(arrFactorial([0, 5]));       
console.log(arrFactorial([5, 0, 6]));    
console.log(arrFactorial([]));

//////////

