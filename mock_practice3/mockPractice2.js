// Palindrome


const isPalindrome = (str) => {
    if(str.toLowerCase() === str.toLowerCase().split('').reverse().join('')) console.log(true)
    else console.log(false);
}

isPalindrome("Hello") // -> false 
isPalindrome("Kayak")  // -> true 
isPalindrome("civic")  // -> true 
isPalindrome("abba")  // -> true 
isPalindrome("ab  a")  // -> false 
isPalindrome("123454321")  // -> true 
isPalindrome("A")  // -> true 
isPalindrome("") //  -> true


// Factorial


function factorial(num){
    fact = num;

    if(num === 0) return 1;
    for(let i = num - 1; i > 1; i--){
        fact *= i;
    }

    return fact
}

console.log(factorial(5))   //  -> 120 
console.log(factorial(4))  // -> 24 
console.log(factorial(0))  //  -> 1 
console.log(factorial(1))  //  -> 1 

// Swap first and last words

function swapFirstLastWord(str){

    let firstWord = str.slice(0, str.indexOf(' '))
    let lastWord = str.slice(str.lastIndexOf(' '))
    let middleWord = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1)

    if(str.trim().includes(' ')) console.log(lastWord + middleWord + firstWord);
    else console.log('');
}

swapFirstLastWord("Hello World")     // -> "World Hello" 
swapFirstLastWord("I like JavaScript") //  -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")   //  -> "bar bar foo foo" 
swapFirstLastWord("")       //  -> "" 
swapFirstLastWord("  ")      //   -> "" 
swapFirstLastWord("Hello")    //    -> "" 
swapFirstLastWord("Hello   ")   //    -> ""

// Remove extra spaces 

 const removeExtraSpaces = str => console.log(str.trim().split(' ').filter(x => x.length >= 1).join(' '));
removeExtraSpaces("Hello")        //   -> "Hello" 
removeExtraSpaces("    Hello       A   World  ")   //    -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")  //  -> "JavaScript is fun” 
removeExtraSpaces("")      //       -> "" 


// First Duplicate

function firstDuplicate(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] === arr[j]) return arr[i]
            
        }
    }
    return -1


}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))  //    -> 3 
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))    //  -> 5 
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))   //   -> -1 
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))  //  -> 'abc' 
console.log(firstDuplicate([ 1, 2, 3]))     //   -> -1 
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))   //  -> -1 


// All Duplicates

const getDuplicates = arr => {

    let duplicates = [];
    let container = [];

    for(let obj of arr){
        if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj);
        else container.push(obj);
    }
    console.log(duplicates);



}

getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])  //    -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])       //   -> [ ] 
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]) //    -> [ 'foo', 'a' ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])     //  -> [ ]


// Reverse string words

const reverseStringWords = str => console.log(str.trim().split(' ').map(x => x.split('').reverse().join('')).join(' '));

reverseStringWords("Hello World")    //  -> "olleH dlroW" 
reverseStringWords("I like JavaScript")   //  -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")     //  -> "olleH" 
reverseStringWords("")       //  -> "" 
reverseStringWords(" ")      //   -> ""

// Add two arrays 

function add(arr, arr2){

    if(arr2.length > arr.length) [arr, arr2] = [arr2, arr]
    console.log(arr.map((value, i) => value + (arr2[i] || 0)))
}

add([3, 0, 0, 7, 5, 10], [6, 3, 2])     //   -> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])   //  -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])     //    -> [0, 0, 0, 0]


// Fizz Buzz

const fizzBuzz = num => {

    let fB = [];


for(i = 1; i <= num; i++){

if(i % 3 === 0 && i % 5 === 0) fB.push('FizzBuzz')
else if(i % 3 === 0) fB.push('Fizz');
else if(i % 5 === 0) fB.push('Buzz')
else fB.push(i);

}

console.log(fB);
}

fizzBuzz(3)//  -> [ 1, 2, 'Fizz' ] 
fizzBuzz(5) // -> [ 1, 2, 'Fizz', 4, 'Buzz' ] 
fizzBuzz(10) // -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ] 
fizzBuzz(15)  //-> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ] 
fizzBuzz(2)  //-> [ 1, 2 ]



// Array Factorial

const arrFactorial = arr => {
    return arr.map(num => {
         
        let factor = 1;

        for(let i = 2; i <= num; i++){

            factor *= i

        }
        return factor
    })
    
}
       
    
console.log(arrFactorial([1, 2, 3 ,4]))  //   -> [1, 2, 6, 24] 
console.log(arrFactorial([0, 5]))     //  -> [1,120] 
console.log(arrFactorial([5 , 0, 6]))  //   -> [120, 1, 720] 
console.log(arrFactorial([]))    //   -> [] 

///////////////////

const findBiggestNumber = str => console.log(str.split(/\D+/).reduce((greatest, numStr) => Number(numStr) > greatest ? Number(numStr) : greatest, 0));

findBiggestNumber("abc$") // -> 0
findBiggestNumber("a1b4c  6#") // -> 6
findBiggestNumber("ab110c045d")  //-> 110
findBiggestNumber("525") // -> 525
findBiggestNumber("3 for 10 dollars")  //-> 10


/////////////////////

const findSumNumbers = str => console.log(str.split(/\D+/).reduce((sum, numStr) => numStr ? sum + Number(numStr) : sum , 0))

findSumNumbers("abc$");            
findSumNumbers("a1b4c  6#");       
findSumNumbers("ab110c045d");      
findSumNumbers("525");             
findSumNumbers("3 for 10 dollars");


const findUniques = (arr1, arr2) => [...(new Set(arr1.concat(arr2)
    .filter(x => !(arr1.includes(x) && arr2.includes(x)))))]

    console.log(findUniques([], []))    // -> [] 
    console.log(findUniques([], [1, 2, 3, 2]))  //  -> [1, 2, 3] 
    console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])) // -> [1, 2, 5] 
    console.log(findUniques([8, 9], [9, 8, 9]))  //  -> [] 
    console.log(findUniques([-1, -2], [1, 2]))  //  -> [-1, -2, 1, 2] 



    const reverseNumber = num => console.log(num.toFixed().split('').reverse().join(''));

    reverseNumber(371)   // -> 173 
    reverseNumber(123)  //  -> 321 
    reverseNumber(12)   //  -> 21 
    reverseNumber(0)  //   -> 0 
    reverseNumber(111)  //  -> 111



    // Is Armstrong !!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!

  const isArmstrong = num => console.log(num.toFixed().split('')
  .reduce((sum, i) => sum + Math.pow(i, num.toFixed().length), 0) === num)

isArmstrong(153)   //  -> true 
isArmstrong(123)   //  -> false 
isArmstrong(1634)  //   -> true 
isArmstrong(153)    // -> true 
isArmstrong(1111)  //   -> false

