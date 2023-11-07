

//  TASK 10 Find Even Numbers


function getEvens(num1, num2){
    const evens  = [];
    let greaterEven = Math.max(num1, num2);
    let lesserEven = Math.min(num1, num2);

    for(let i = lesserEven; i < greaterEven; i++){
        if(i % 2 === 0) evens.push(i);
    }
    console.log(evens);
}

getEvens(2, 7);
getEvens(17, 5);


// TASK 11 Multiples of 5

function getMultipleOf5(num1, num2){
    const five = [];
    let greaterFive = Math.max(num1, num2);
    let lesserFive = Math.min(num1, num2);

    for(let i = lesserFive; i <= greaterFive; i++){
        if(i % 5 === 0) five.push(i);
    }
    console.log(five);
}

getMultipleOf5(3, 17) ;  	
getMultipleOf5(23, 5)  ; 
getMultipleOf5(5, 5) ;
getMultipleOf5(2, 4) ;

// TASK 12  Count A

const countA = (str) => console.log(str.split('').filter(x => x.toLowerCase() === 'a').length);

countA("TechGlobal is a QA bootcamp");
countA("QA stands for Quality Assurance"); 
countA("Cypress");  

// TASK 13 Count Words

const countWords = (str1) => console.log(str1.trim().split(' ').length); 

countWords("     Javascript is fun       ");
countWords("Cypress is an UI automation tool.    "); 
countWords("1 2 3 4");

// TASK 14 Factorial  having an issue with factorial(0) (IMPORTANT)

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


// TASK 15 count string with 3 or less characters. Having  problem with empty; (IMPORTANT)

const count3OrLess = (str2) => console.log(str2.split(' ').filter(x => x.length <= 3).length);

count3OrLess("Hello");
count3OrLess("Hi John"); 
count3OrLess("JavaScript is fun"); 
count3OrLess("My name is John Doe"); 
count3OrLess(""); 


// TASK 16 Remove extra spaces (IMPORTANT)

function removeExtraSpaces(str3){
    console.log(str3.trim().split(' ').filter(x => x.length >= 1).join(' '))
}

removeExtraSpaces("Hello");
removeExtraSpaces("   	Hello    World  ") ;
removeExtraSpaces("  	JavaScript is     a      fun") ;
removeExtraSpaces("") ; 


// TASK 17 Middle integer

function middleInt(n1, n2, n3){
  sortInt = [n1, n2, n3].sort();

  console.log(sortInt[1]);

}

middleInt(1, 2, 2);
middleInt(5, 5, 8);
middleInt(5, 3, 5);
middleInt(1, 1, 1);
middleInt(-1, 25, 10);

// TASK 18 IMPORTANT

function firstDuplicate(array){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) return array[i];
          
        }
    }
    return -1 ;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));

// TASK 19 Find ALL Duplicates   IMPORTANT

function getDuplicates(arr){
    const duplicate = [];
    const container = [];

    for(obj of arr){
        if(container.includes(obj) && !duplicate.includes(obj)) duplicate.push(obj);
        else container.push(obj);
    }

    console.log(duplicate);
}

getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) 
getDuplicates([ 1, 2, 5, 0, 7 ]) 
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])  
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) 

// TASK 20 count Vowels

const countVowels = (string) => console.log(string.split('').filter(x => ['a', 'e', 'i', 'o', 'u', 'A','E', 'I','O','U'].includes(x)).length);

countVowels("Hello")
countVowels("JavaScript is fun")
countVowels("")


// TASK 21 Reverse string words

const reverseStringWords = (string1) => {
   let arrayString = string1.trim().split(' ');

    for(i = 0; i < arrayString.length; i++){
        arrayString[i] = arrayString[i].split('').reverse().join('');
    }
    console.log(arrayString.join(' '));
}

reverseStringWords("Hello World") 
reverseStringWords("I like JavaScript")  
reverseStringWords("Hello") 
reverseStringWords("") 
reverseStringWords(" ") 

// TASK 22 count Consonants

const countConsonants = (string2) => console.log(string2.split('').filter(x => !['a', 'e', 'i', 'o', 'u', 'A','E', 'I','O','U'].includes(x)).length)

countConsonants("Hello")
countConsonants("Hello World")
countConsonants("JavaScript is fun")
countConsonants("")


// TASK 23 Count Multiple words (complete)


function countMultipleWords(array){


    let countWords = 0;
    for(words of array){

        if(words.trim().split(' ').length >= 2) countWords++
    }
    console.log(countWords); 
}
countMultipleWords([ "foo", "", " 	", "foo bar", "  foo" ]) 
countMultipleWords([ "foo", "bar", "foobar", "  	foobar   " ]) 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 
countMultipleWords([ ])  

// TASK 24  FIZZ BUZZ

function fizzBuzz(num1, num2){
    const arr = [];

    for(i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
        if(i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz');
        else if(i % 5 === 0) arr.push('Buzz');
        else if(i % 3 === 0) arr.push('Fizz');
       
        else arr.push(i);
    }

    console.log(arr.join(' | '));
}

fizzBuzz(13, 18)   //	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)   //	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
fizzBuzz(5, 5)   	// -> "Buzz" 
fizzBuzz(9, 6)   	// -> "Fizz | 7 | 8 | Fizz" 



// TASK 25 Palindrome

function isPalindrome(string){
    if(string.toLowerCase() === string.toLowerCase().split('').reverse().join('')) return true;
    else return false;
}

console.log(isPalindrome("Hello") ) // -> false 
console.log(isPalindrome("Kayak")  )// -> true 
console.log(isPalindrome("civic")  )// -> true 
console.log(isPalindrome("abba")   )//-> true 
console.log(isPalindrome("ab  a")  )// -> false 
console.log(isPalindrome("123454321"))  // -> true 
console.log(isPalindrome("A") )  //-> true 
console.log(isPalindrome(""))//-> true 



// TASK 26 PRIME NUMBERS (IMPORTANT)

const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d+=2;
    }

    return true;

}

console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))


// TASK 27 ADD TWO ARRAYS 

const add = (arr1, arr2) => {
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    return arr1.map((value, i) => value + (arr2[i] || 0))
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));  // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));  // [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));  // [0, 0, 0, 0]

// TASK 28 No Elements with A

function noA(array){
    const arrayNoA = [];

    for(word of array){
        if(word.startsWith('a') || word.startsWith('A')) arrayNoA.push('###');
        else arrayNoA.push(word);
    }
    return arrayNoA;
}

console.log(noA(["javascript", "hello", "123", "xyz"]))    //	->  ["javascript", "hello", "123", "xyz"] 
console.log(noA(["apple", "123", "ABC", "javascript"]))   // ->  ["###", "123", "###", "javascript"] 
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))    //	->  ["###", "###", "###", "###", "###"] 


// TASK 29 no 3 and 5 (complete)

function no3and5(array){

    const array35 = [];

    for(num of array){
        if(num % 5 === 0 && num % 3 === 0) array35.push(101);
        else if(num % 3 === 0) array35.push(100);
        else if(num % 5 === 0) array35.push(99);
        else array35.push(num);
    }
    console.log(array35);
}

no3and5([7, 4, 11, 23, 17])     	//-> [7, 4, 11, 23, 17] 
no3and5([3, 4, 5, 6])    	 //	-> [100, 4, 99, 100] 
no3and5([10, 11, 12, 13, 14, 15])   // -> [99, 11, 100, 13, 14, 101] 

// TASK 30 (complete)

function no13(array){
    const noThirteen = [];

    for(num of array){
        if(num === 13) noThirteen.push(0);
        else noThirteen.push(num);
    }
    console.log(noThirteen);
}

no13([1, 2, 3 ,4])    	 //	-> [1, 2, 3 ,4]  
no13([13, 2, 3])    	 //	-> [0, 2, 3] 
no13([13, 13, 13 , 13, 13])  //  -> [0, 0, 0, 0, 0] 
no13([])    	 	// 	-> [] 

// TASK 31 (same as get duplicates)

function removeDuplicates(array){
    const duplicates = [];
    const container = [];

    for(obj of array){
        if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj);
        else container.push(obj);
    }
    console.log(container);
}

removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])    //	-> [10, 20, 35, 60, 70] 
removeDuplicates([1, 2, 5, 2, 3])    	 	 	 	//-> [1, 2, 5, 3] 
removeDuplicates([0, -1, -2, -2, -1])    	 	 	//-> [0, -1, -2] 
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) //-> ["abc", "xyz", "123", "ab", "ABC"] 
removeDuplicates(["1", "2", "3", "2", "3"])     	 	//-> ["1", "2", "3"] 

// TASK 32 No Digits    (Work on this)!!!!

//const noDigit = (string) => console.log(string.toLowerCase().split('').filter(x => x >= 'a' && x <= 'z').join(''));

const noDigit = (str) => console.log(str.split('').filter(i => i < '0' || i > '9').join(''));

noDigit("")    	 	 	 //	-> "" 
noDigit("Javascript")    	 	//-> "Javascript" 
noDigit("123Hello")     	 //	-> "Hello" 
noDigit("123Hello World149")    	//-> "Hello World” 
noDigit("123Tech456Global149")   // -> "TechGlobal" 


//TASK 33 No Vowel (complete)

const noVowel = (string) => console.log(string.split('').filter(x => !['a', 'e', 'i', 'o', 'u', 'A','E', 'I','O','U'].includes(x)).join(''))

noVowel("TechGlobal")  // -> "TchGlbl" 
noVowel("AEOxyz")  // -> "xyz" 
noVowel("Javascript")  // -> "Jvscrpt" 
noVowel("")  // -> "" 
noVowel("125$")  // -> "125$" 

// TASK 34 Sum of Digits (IMPORTANT)

const sumOfDigits = (str) => str.split('').filter(i => i >= '0' && i <= '9').reduce((sum, num) => sum += Number(num), 0)
    
console.log(sumOfDigits("Javascript"));     
console.log(sumOfDigits("John's age is 29")); 
console.log(sumOfDigits("$125.0"));         
console.log(sumOfDigits("")); 


// TASK 35 Array Factorial (IMPORTANT)

const arrFactorial = (arr) =>{
    return arr.map(num => {
        let fac = 1;
        for(let i = 2; i <= num; i++){
            fac *= i;
        }
        return fac;
    })
    
}

console.log(arrFactorial([1, 2, 3, 4])); 
console.log(arrFactorial([0, 5]));       
console.log(arrFactorial([5, 0, 6]));    
console.log(arrFactorial([]));