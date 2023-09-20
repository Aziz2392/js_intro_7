
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



