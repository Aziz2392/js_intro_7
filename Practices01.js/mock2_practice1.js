
// Homework 4 


// TASK 1

for(i = 1; i <= 100 ; i++){
    if(i % 7 === 0) console.log(i);
}

// TASK 2

for(i = 1; i <= 50; i++){
    if(i % 2 === 0 && i % 3 === 0)
    console.log(i);
}

// TASK 3

for(i = 100; i >= 50; i--){
    if(i % 5 === 0)
    console.log(i);
}

// TASK 4

for(i = 0; i <= 7; i++){
    console.log(`The square of ${i} is = ` + i * i);
}

// TASk 5

let sum = 0
for(i =1; i <= 10; i++){
     sum += i ;
}

console.log(sum);

// TASK 6

let randomNum = Math.floor((Math.random() * 10) + 1);
let factorial = randomNum ;

for(i = randomNum - 1; i > 1; i--){
    factorial *= i ;
}
if(factorial === 0) factorial = 1;

console.log(randomNum);
console.log(factorial);

// TASK 7

let ranNum = Math.floor((Math.random() * 100) + 1);
let attempts = 0 ;

while(ranNum % 5 !== 0){
    ranNum = Math.floor((Math.random() * 100) + 1);
     attempts++
}

console.log(ranNum);
console.log(attempts);

console.log(`The random number is ${ranNum} and it took ${attempts} to get that number`);

// TASK 8

const country = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(country);
console.log(country.sort());

// TASK 9

const disneyChar = ['Scooby Doo', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(disneyChar);

if(disneyChar.includes('Pluto')) console.log(true);
else console.log(false);


// TASK 10

const disneyCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(disneyCats.sort());

if(disneyCats.includes('Garfield') && disneyCats.includes('Felix')) console.log(true);
else console.log(false);

// TASK 11

const num1 = [10.5, 20.75, 70, 80, 15.75];

console.log(num1);

for(i = 0; i < num1.length ; i++){
    console.log(num1[i]);
}


// TASK 12

const schoolMat = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
console.log(schoolMat);

let countStart = 0;
let countInclude = 0;
for(mat of schoolMat){
    if(mat.toUpperCase().startsWith('P') || mat.toUpperCase().startsWith('B')) countStart++ ;
    if(mat.toLowerCase().includes('book') || mat.toLowerCase().includes('pen')) countInclude++ ;
};

console.log("Elements starting with 'B' or 'P' = " + countStart);
console.log("Elements having 'book' or 'pen' = " + countInclude);

// TASK 13

const num2 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(num2);

let greaterTen = 0;
let lessTen = 0;
let equalTen = 0;
for(num of num2){
    if(num === 10) equalTen++;
    if(num > 10 ) greaterTen++;
    if(num < 10) lessTen++;
    
}

console.log("Elements that are more than 10 = " + greaterTen);
console.log("Elemnts that are less than 10 = " + lessTen);
console.log("Elements that are 10 = " + equalTen);

// TASK 14

const arr1 = [5,8,13,1,2];
const arr2 = [9,3,67,1,0];
const maxArr = [];

console.log(arr1);
console.log(arr2);

for(i = 0; i < arr1.length; i++){
    if(arr1[i] > arr2[i]) maxArr.push(arr1[i]);
    else maxArr.push(arr2[i]);
}

console.log(maxArr);

// TASK 15

function firstDuplicate(array){
    for(i = 0; i < array.length; i++){
        for(j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) return array[i];
        }
    }
    return -1; 
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));


// TASK 16

function getDuplicates(arr){
    const container = [];
    const allDuplicate = [];
    for(let obj of arr){
        if(container.includes(obj) && !allDuplicate.includes(obj)) allDuplicate.push(obj);
        else container.push(obj);
    }
    return allDuplicate;
}




console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));

// TASK 17


function reverseString(str) {
    
    let strArr = str.trim().split(" ");

    for(let i = 0; i < strArr.length; i++) {

        strArr[i] = strArr[i].split("").reverse().join("");

    }
    return strArr.join(" ");
}

console.log(reverseString("Hello World"));


// TASK 18

function getEvens(num1, num2){

    let evens = [];
    let lesserNum = Math.min(num1, num2);
    let greaterNum = Math.max(num1, num2);

    for(let i = lesserNum; i <= greaterNum; i++){
        if(i % 2 === 0) evens.push(i);
    };
    return evens;

}

console.log(getEvens(2, 7));

// TASK 19

function getMultipleof5(num3, num4){

    let multiple5 = []
    let greaterMul = Math.max(num3, num4);
    let lesserMul = Math.min(num3, num4);

    for(i = lesserMul; i <= greaterMul; i++){
        if(i % 5 === 0) multiple5.push(i);
    }
    return multiple5
}

console.log(getMultipleof5(17, 3));


// TASK 20





///////////////////////
// HOMEWORK 5
//////////////////////

// TASK 1

const countPos = (arr) => console.log(arr.filter(p => p > 0).length);

// Second way of doing it (Filter function)
// const countPos = (arr) => {
//     let count = 0;

//     for(num of arr){
//         if(num > 0) count++;
//     }


countPos([-45, 0, 0, 34, 5, 67]);

// TASK 2

const countA = (str) => {
   let countAA = 0;
    for(s of str){
        if(s.includes('a') || s.includes('A'))  countAA++
    }
    console.log(countAA);
}

countA("TechGlobal is a QA bootcamp")

// Second way of doing it
// const countA = (str) => {
//     let count = 0;

//     for(letter of str){
//         if(letter.toLowerCase() === 'a') count++;
//     }

//     return count;
// }

// 3rd Way const countA = (str) => str.split('').filter(letter => letter.toLowerCase() === 'a').length


// TASK 3

const countVow = (str1) => {
    let countVowels = 0;
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

    for(letter of str1){
        if(vowels.includes(letter)) countVowels++
    }
    console.log(countVowels);
}

countVow("JavaScript is fun") 

// TASK 4

const countConsonants = (str2) => {
    let countConst = 0;
    let vowel = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

    for(letters of str2){
        if(!vowel.includes(letters)) countConst++
    }
    console.log(countConst);
}

countConsonants("JavaScript is fun")

// TASK 5

const countWords = (str3) => console.log(str3.trim().split(' ').length ) ;

countWords("Cypress is an UI automation tool.    ");



// TASK 6

const factorials = (number) => {

    let factor = number;

    for(let i = number - 1 ; i > 1; i-- ){
        factor *= i ;
    }
    console.log(factor);
}

factorials(1);

// TASK 7

const isPalindrome = (str4) => {
    if(str4.toLowerCase() === str4.toLowerCase().split('').reverse().join('')) console.log(true);
    else console.log(false);
}

isPalindrome("Hello")  
isPalindrome("Kayak")  
isPalindrome("civic")  
isPalindrome("abba")  
isPalindrome("ab  a")  
isPalindrome("123454321")  
isPalindrome("A")  
isPalindrome("")  

// TASK 8

const countMultipleWords = (arr2) => {
    countMult = 0;

    for(words of arr2){
        if(words.trim().split(' ').length > 1) countMult++;
    }
    console.log(countMult);

}

//way 2:
    // let count = 0;

    // arr.forEach(e => {
    //     if(e.trim().includes(' ')) count++;
    // });

countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])
countMultipleWords([ ])

// TASK 9

// const count3OrLess = (str5) => str5.trim().split(' ').filter(word => word.length > 0 && word.length <= 3).length;

const count3OrLess = (str5) => {
    let strArr = str5.trim().split(' ');
    let count3 = 0;

    for(word of strArr){
        if(word.length > 0 && word.length <= 3) count3++;
    }
    console.log(count3);
}

count3OrLess("Hello")
count3OrLess("Hi John")
count3OrLess("JavaScript is fun")
count3OrLess("My name is John Doe")
count3OrLess("")

// TASK 10

const isPrime = (number) => {
    if(number < 0) return false;
    if(number === 2 || number === 3) return true;
    if(number % 2 === 0 || number % 3 === 0) return false;

    let d = 5 ;
    while(d < number){
        if(number % d === 0) return false;
        d += 2;

    }
    return true;

}

// TASK 11

const add = (arr1, arr2) => {
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1] ;
    console.log(arr1.map((value, i) => value + (arr2[i] || 0 )));
}


add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])