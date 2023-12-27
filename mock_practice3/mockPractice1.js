// TASK 1 Swap first and last characters

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

// TASK 2 Swap First and Last words
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


// TASK 3 Factorial  having an issue with factorial(0) (IMPORTANT)

function factorial(number){
    let factor = number; 

    for(i = number - 1; i > 1; i--){
        factor *= i;

        if(factor === 0) console.log(1) ;
    }
    console.log(factor);
}

factorial(5)
factorial(4) 
factorial(0) 
factorial(1) 


// TASK 4 Remove extra spaces

function removeExtraSpaces(str3){
    console.log(str3.trim().split(' ').filter(x => x.length >= 1).join(' '))
}

removeExtraSpaces("Hello");
removeExtraSpaces("   	Hello    World  ") ;
removeExtraSpaces("  	JavaScript is     a      fun") ;
removeExtraSpaces("") ; 

// TASK 5

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

// TASK 6 Get Duplicates


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


// TASK 7 Reverse string words

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

// TASK 8 Add Two arrays

function add(arr1, arr2){
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
    console.log(arr1.map((value, i) => value + (arr2[i]|| 0)));
}

add([3, 0, 0, 7, 5, 10], [6, 3, 2])    	 	 //	-> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])    	//-> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])    	 	 //	-> [0, 0, 0, 0] 

// TASK 9 Fizz Buzz

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


// TASK 10 Palindrome

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


// TASK 11 Remove Duplicates

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


// TASK 12 Prime Number

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


// TASK 13 Array Factorial

const arrFactorial = (arr) =>{
    return arr.map(num => {
        let fac = 1;
        for(let i = 2; i <= num; i++){
            fac *= i;
        }
        return fac;
    })
    
}




// TASK 14 Find biggest number ////////////////////////////////////

const findBiggestNumber = (str) =>  str.split(/\D+/)
.reduce((greatest, numStr) => Number(numStr) > greatest? Number(numStr) : greatest, 0);


findBiggestNumber("abc$")  -> 0
findBiggestNumber("a1b4c  6#")  -> 6
findBiggestNumber("ab110c045d")  -> 110
findBiggestNumber("525")  -> 525
findBiggestNumber("3 for 10 dollars")  -> 10

// TASK 15 Find Sum Numbers  //////////////////////////////////////

const findSumNumbers = (str) =>  str.split(/\D+/).reduce((sum, numStr) => numStr? sum + Number(numStr): sum, 0);

console.log(findSumNumbers("abc$"));            
console.log(findSumNumbers("a1b4c  6#"));       
console.log(findSumNumbers("ab110c045d"));      
console.log(findSumNumbers("525"));             
console.log(findSumNumbers("3 for 10 dollars"));

// TASK 16 Is Power of 3

const isPowerOf3 = (num) => {
    for(let i = num; i > 0; i/=3){
        if(i === 1) return true
    }
    return false
}
console.log(isPowerOf3(1));     
console.log(isPowerOf3(2));     
console.log(isPowerOf3(3));     
console.log(isPowerOf3(27));    
console.log(isPowerOf3(100));   
console.log(isPowerOf3(81));    
console.log(isPowerOf3(9));

// TASK 17

const fibonacciSeries1 = (num) =>  {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let result = [0, 1];

    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}
console.log(fibonacciSeries1(3));  
console.log(fibonacciSeries1(5)); 
console.log(fibonacciSeries1(7));  
console.log(fibonacciSeries1(8)); 
console.log(fibonacciSeries1(1)); 
console.log(fibonacciSeries1(2));


// TASK 18
/*
const fibonacciSeries2 = (num) =>  {
    if (num === 1) return 0;
    if (num === 2) return 1;

    let result = [0, 1];

    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result[result.length-1];
}
*/


const fibonacciSeries2 = (num) =>  {
    if(num === 1) return 0;
    if(num === 2 || num === 3) return 1;
   else return fibonacciSeries2(num-1) + fibonacciSeries2(num-2)
    }
console.log(fibonacciSeries2(2));  
console.log(fibonacciSeries2(4)); 
console.log(fibonacciSeries2(8)); 
console.log(fibonacciSeries2(9)); 
console.log(fibonacciSeries2(1));


// TASK 19

const findUniques = (arr1, arr2) => [...(new Set(arr1.concat(arr2)
    .filter(i => !(arr1.includes(i) && arr2.includes(i)))))]

console.log(findUniques([], []));             
console.log(findUniques([], [1, 2, 3, 2]));   
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); 
console.log(findUniques([8, 9], [9, 8, 9])); 
console.log(findUniques([-1, -2], [1, 2]));  

// TASK 20 Reverse number ///////////////////////////////////

const reverseNumber = num => {
    let reversed = 0;
    for(let i = num; i > 0;  i = Math.floor(i / 10)){
        reversed = (reversed * 10) + (i % 10);
    }
    return reversed;
}

console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(21));
console.log(reverseNumber(0));
console.log(reverseNumber(111));


// TASK 21 is Armstrong

const isArmstrong = num => num.toFixed().split('')
.reduce((total, i) => total + Math.pow(i,num.toFixed().length), 0) === num

console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));


// TASK 22  Anagram

const isAnagram = (str1, str2) => {
    let modifiedStr1 = str1.toLowerCase().replaceAll(' ','').split('').sort().join('')
    let modifiedStr2 = str2.toLowerCase().replaceAll(' ','').split('').sort().join('')

    return modifiedStr1 === modifiedStr2 && str1 !== str2
}

console.log(isAnagram("App le", "Peach")); 
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("astronomer", "moon starer")); 
console.log(isAnagram("CINEMA", "iceman")); 
console.log(isAnagram("123", "1234")); 

// TASK 23

const countPalindrome = str => str.toLowerCase().split(' ')
.reduce((count, i)=>(i && i === i.split('').reverse().join('')) ? count + 1 : count, 0)

console.log(countPalindrome("Mom and Dad" ));   
console.log(countPalindrome("See you at noon")); 
console.log(countPalindrome("Kayak races attracts racecar drivers")); 
console.log(countPalindrome("")); 
console.log(countPalindrome("No palindrome here")); 

// TASK 24
//Write a function named canFormString() which takes two string arguments and returns true if the second string can be formed by rearranging the characters of first string. 
//Return false otherwise.
const canFormString = (str1, str2) => {
    let arr1 = str1.toLowerCase().split('')
    let arr2 = str2.toLowerCase().split('').filter(x => x != ' ')

    for(let i = 0; i < arr2.length; i++){
        if(arr1.includes(arr2[i])) arr1.splice(arr1.indexOf(arr2[i]),1)
        else return false;
    }
    return true
}


console.log(canFormString("Hello", "Hi")); 
console.log(canFormString("programming", "gaming")); 
console.log(canFormString("halogen", "hello")); 
console.log(canFormString("CONVERSATION", "voices rant on")); 
console.log(canFormString("12", "123"));



// TASK 25

const countOccurrence = (str1, str2) => {
    let count = 0;
    let str2Sorted = str2.toLowerCase().split('').sort().join('');

    for(let i = 0; i <= str1.length; i++){
        let sub = str1.slice(i,i+str2.length).toLowerCase().split('').sort().join('');

        if(sub === str2Sorted) {
            count++;
            i += str2.length-1
        }
    }
    return count;
}

console.log(countOccurrence("Javascript", "Java")); 
console.log(countOccurrence("Hello", "World")); 
console.log(countOccurrence("Canc I can a can", "anc")); 
console.log(countOccurrence("Hello", "l")); 
console.log(countOccurrence("IT conversations", "IT")); 
console.log(countOccurrence("ITI", "IT"));