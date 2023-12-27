
// TASK 1

function replaceFirstLast(str){

    let firstChar = str[0];
    let lastChar = str[str.length - 1];
    let middle = str.slice(1, str.length - 1)

    if(str.trim().length < 2) console.log('');
    else console.log(lastChar + middle + firstChar);

}

replaceFirstLast("")     //    ->  "" 
replaceFirstLast("Hello")    //   ->  "oellH" 
replaceFirstLast("Tech Global")   //  -> "lech GlobaT" 
replaceFirstLast("A")   //    -> "" 
replaceFirstLast("    A      ")  //    -> ""

// TASK 2

function swapFirstLastWord(str){

    let firstWord = str.slice(0, str.indexOf(' '));
    let lastWord = str.slice(str.lastIndexOf(' '));
    let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);

    if(str.trim().split(' ').length < 2) console.log('')
    else console.log(lastWord + middle + firstWord);
}

swapFirstLastWord("Hello World")    //  -> "World Hello" 
swapFirstLastWord("I like JavaScript")  // -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")   //  -> "bar bar foo foo" 
swapFirstLastWord("")      //   -> "" 
swapFirstLastWord("  ")     //    -> "" 
swapFirstLastWord("Hello")    //    -> "" 
swapFirstLastWord("Hello   ")   //    -> ""

// TASK 3 

function factorial(num){

    let factor = 1;

    for(let i = 2; i <= num; i++){

        factor *= i; 
    }
    console.log(factor);

}

factorial(5)   //  -> 120 
factorial(4)   // -> 24 
factorial(0)   // -> 1 
factorial(1)   // -> 1


// TASK 4

const removeExtraSpaces = str => console.log(str.trim().split(' ').filter(x => x.length >= 1).join(' '));

removeExtraSpaces("Hello")       //    -> "Hello" 
removeExtraSpaces("    Hello    World  ")     //  -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")  //  -> "JavaScript is fun” 
removeExtraSpaces("")      //       -> "" 


// TASK 5

function firstDuplicate(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]) return arr[i];
        }
    }
    return -1 ;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))  //    -> 3 
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))    //  -> 5 
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))   //   -> -1 
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))  //  -> 'abc' 
console.log(firstDuplicate([ 1, 2, 3]))     //   -> -1 
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))   //  -> -1 

// TASK 6

function getDuplicates(arr){

    let duplicates = [];
    let container = [];

    for(let obj of arr){

        if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
        else container.push(obj);
    }
    console.log(duplicates);
}


getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])  //    -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])       //   -> [ ] 
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]) //    -> [ 'foo', 'a' ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])     //  -> [ ]


// TASK 7 

const reverseStringWords = str => {
    
    let strArray = str.trim().split(' ');

    for(let i = 0; i < strArray.length; i++){

        strArray[i] = strArray[i].split('').reverse().join('')

    }
    console.log(strArray.join(' '));
}

reverseStringWords("Hello World") 
reverseStringWords("I like JavaScript") 
reverseStringWords("Hello") 
reverseStringWords("") 
reverseStringWords(" ")


// TASK 8

function add(arr1, arr2){

    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]

    console.log(arr1.map((value , i) => value + (arr2[i] || 0)));


}

add([3, 0, 0, 7, 5, 10], [6, 3, 2])    	 	 //	-> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])    	//-> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])    	 	 //	-> [0, 0, 0, 0] 


// TASK 9

function fizzBuzz(num){
    
    let fB = []


    for(let i = 1; i <= num; i++){

        if(i % 3 === 0 && i % 5 === 0) fB.push('FizzBuzz')
        else if(i % 3 === 0) fB.push('Fizz')
        else if(i % 5 === 0) fB.push('Buzz')
        else fB.push(i)


    }
    console.log(fB);

}

fizzBuzz(3)//  -> [ 1, 2, 'Fizz' ] 
fizzBuzz(5) // -> [ 1, 2, 'Fizz', 4, 'Buzz' ] 
fizzBuzz(10) // -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ] 
fizzBuzz(15)  //-> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ] 
fizzBuzz(2)  //-> [ 1, 2 ]


// TASK 10

function Palindrome(str){

if(str.toLowerCase().trim() === str.toLowerCase().trim().split('').reverse().join('')) console.log(true)
else console.log(false);
}

// TASK 11

function removeDuplicates(arr){

    let duplicates = [];
    let container = [];

    for(let obj of arr){

        if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj);
        else container.push(obj);

    }
    console.log(container);

}


// TASK 12

function isPrime(num){

if(num < 2) return false
else if(num === 2 || num === 3) return true
else if(num % 2 === 0 || num % 3 === 0) return false


let d = 5;
while(d < num){
    if(num % d === 0) return false

    d+=2
}
return true


}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

// TASK 13

const arrFactorial = arr => {

    return arr.map(num => {

        let fact = 1;

        for(let i = 2; i <= num; i++){

            fact *= i ;

        }

        return fact
    })
}

console.log(arrFactorial([1, 2, 3 ,4]))  //   -> [1, 2, 6, 24] 
console.log(arrFactorial([0, 5]))     //  -> [1,120] 
console.log(arrFactorial([5 , 0, 6]))   //  -> [120, 1, 720] 
console.log(arrFactorial([]))      // -> []


// TASK 14

const findBiggestNumber = str => console.log(str.split(/\D+/).reduce((greatest, numStr) => Number(numStr) > greatest ? Number(numStr) : greatest, 0));

findBiggestNumber("abc$") // -> 0
findBiggestNumber("a1b4c  6#") // -> 6
findBiggestNumber("ab110c045d") // -> 110
findBiggestNumber("525") // -> 525
findBiggestNumber("3 for 10 dollars") // -> 10

// TASK 15

const findSumNumbers = str => str.split(/\D+/).reduce((sum, numStr) => numStr ? sum + Number(numStr) : sum, 0);

console.log(findSumNumbers("abc$"));            
console.log(findSumNumbers("a1b4c  6#"));       
console.log(findSumNumbers("ab110c045d"));      
console.log(findSumNumbers("525"));             
console.log(findSumNumbers("3 for 10 dollars"));


// TASK 16

function isPowerOf3(num){

for(let i = num; i > 0; i/=3){

    if(i === 1) return true
}

return false;

}

console.log(isPowerOf3(1))     //-> true 
console.log(isPowerOf3(2))   //  -> false 
console.log(isPowerOf3(3))    // -> true 
console.log(isPowerOf3(27))  //  -> true 
console.log(isPowerOf3(100))  //  -> false 
console.log(isPowerOf3(81))   // -> true 
console.log(isPowerOf3(9))   //  -> true

// TASK 17

const fibonacciSeries1 = num => {

    if(num === 1) return [0];
    if(num === 2) return [0, 1];

    let result = [0, 1];


    for(let i = 2; i < num; i++){

        result.push(result[i - 1] + result[i - 2])
    }
    return result
}


// TASK 18

const findUniques = (arr1, arr2) => [... (new Set(arr1.concat(arr2)
    .filter(x => !(arr1.includes(x) && arr2.includes(x)))))];

console.log(findUniques([], []));             
console.log(findUniques([], [1, 2, 3, 2]));   
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); 
console.log(findUniques([8, 9], [9, 8, 9])); 
console.log(findUniques([-1, -2], [1, 2])); 

// TASK 19

const reverseNumber = num => num.toFixed().split('').reverse().join('');

console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(12));
console.log(reverseNumber(0));
console.log(reverseNumber(111));

// TASK 20

const isArmstrong = num => {

    return num.toFixed().split('').reduce((sum , i) => sum + Math.pow(i, num.toFixed().length), 0 ) === num;
}

console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));

// TASK 21

const isAnagram = (str1, str2) => {

let modStr1 = str1.trim().toLowerCase().replaceAll(' ', '').split('').sort().join('');
let modStr2 = str2.trim().toLowerCase().replaceAll(' ', '').split('').sort().join('');


return modStr1 === modStr2 && str1 !== str2;

}