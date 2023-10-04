

// TASK 1

function fizzBuzz1(number){
    if(number % 5 === 0 && number % 3 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
}

fizzBuzz1(0)  
fizzBuzz1(1)  
fizzBuzz1(3)  
fizzBuzz1(5) 
fizzBuzz1(30) 
fizzBuzz1(10)
fizzBuzz1(15) 
fizzBuzz1(-15) 


// TASK 2

function fizzBuzz2(number){
    const fB = []

    for(i = 1; i <= number; i++){
        if(i % 3 === 0 && i % 5 === 0) fB.push('Fizz Buzz');
        else if(i % 5 === 0) fB.push('Buzz');
        else if(i % 3 === 0) fB.push('Fizz');
        else fB.push(i);
    }
    console.log(fB);
}

fizzBuzz2(3);
fizzBuzz2(5);
fizzBuzz2(10);
fizzBuzz2(15);
fizzBuzz2(2);

// TASK 3

function findSumNumbers(string){
    const letters = [];
for(let i = 0; i < string.length; i++){
    if(string[i] >= 0 && string[i].toLowerCase() <= Infinity) letters.push(string[i]);
}

const numArray = (letters.map(x => Number(x)));
let sum = 0; 
for(let j = 0; j < numArray.length; j++){
   sum  += numArray[j];
}
console.log(sum);
}


findSumNumbers("abc$") 
findSumNumbers("a1b4c  6#") 
findSumNumbers("ab110c045d") 
findSumNumbers("525") 
findSumNumbers("3 for 10 dollars")

// TASk 4 (have been struggling to retain the biggest number. Looking forward to the solution)



// TASK 5 (incomplete)

function countOccurrencesOfCharacters(string){

    const stringArray = [] 
    let countChar = 0; 
    for(let i = 0; i < string.length; i++){
        for(let j = i + 1; j < string.length; i++)
        if(string[i] === string[j]) stringArray.push(string[i]);
    }
    console.log(stringArray);
}

countOccurrencesOfCharacters("abca") 



// TASK 6 (missing last step to put into an array)

function fibonacciSeries1(number){
    let fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21];
    const series = [];

    for(let i = 0; i < number; i++){
        console.log(fibo[i]);
    }
    
}

fibonacciSeries1(8);


// TASK 7 (once I know how to put it in an array my thinking is that I will return the last element of the array.length to get the right result)

function fibonacciSeries2(number){
    let fiboS = [0, 1, 1, 2, 3, 5, 8, 13, 21];

    for(let i = 0; i < number; i++){
        console.log(fiboS[i]);
    }
    
}

fibonacciSeries2(8);

// TASK 8 (incomplete and didn't have time complete)

function findUniques(arr1, arr2){
    const unique = [];

    for(i = 0; i < arr1.length; i++){
        for(j = i + 1; j < arr2.length; j++)

        if(arr1[i] !== arr2[j] && !arr1.includes(arr1[i])) unique.push(arr1[i]);

    }

    if(arr1.length === 0 && arr2.length === 0) console.log([]);
    if(arr1.length === 0 || arr2.length === 0) 
}


// TASK 9 (complete)

function isPowerOf3(number){
    if(number === 1 || number === 3) return true;
    if(number % 3 === 0 && number % 9 === 0) return true;
    else return false ;
}

console.log(isPowerOf3(1)) 
console.log(isPowerOf3(2)) 
console.log(isPowerOf3(3)) 
console.log(isPowerOf3(27)) 
console.log(isPowerOf3(100)) 
console.log(isPowerOf3(81))  
console.log(isPowerOf3(9))  