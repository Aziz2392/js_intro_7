// TASK 1 (complete)

for (i = 1; i <= 100; i++){
    if(i % 7 === 0){
        console.log(i);
    }
}

// TASK 2 (complete)

for ( i = 1; i <= 50; i++){
    if(i % 2 === 0 && i % 3 === 0){
        console.log(i);
    }
}

// TASK 3 (complete)

for (i = 100; i >= 50; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}

// TASK 4 (complete)
for (i = 0; i <= 7; i++){
    console.log(`The square of ${i} is = ` + i * i);
}

// TASK 5 (complete)

let sum = 0

for(i = 1; i <=10; i++){
    sum += i;
}

console.log(sum);

// TASK 6 (complete)

let r1 = Math.ceil(Math.random() * 10);
let total = 1;

for (i = 0; i < r1; i++){
    total = total * (r1- i);
}

console.log(r1+ '! = ' + total);

// TASK 7 (complete)

let randomNum;
let count = 0

while(randomNum % 5 !== 0){
    randomNum = Math.ceil(Math.random() * 100);
    console.log(randomNum);
    count++ ; 
}

console.log(randomNum);
console.log(count);

// TASK 8 (complete)

const arrCountry = ["Germany", "Argentina", "Ukraine", "Romania"]

console.log(arrCountry);

console.log(arrCountry.sort());

// TASK 9 (complete)

const arrDog = ["Scooby Doo", "Snoopy", "Blue", "Pluto", "Dino", "Sparky"]

console.log(arrDog);

console.log(arrDog.includes("Pluto"));

// TASK 10 (complete)


const arr = ["Garfield" , "Tom" , "Sylvester" , "Azrael" ]

console.log(arr)

console.log(arr.sort());

console.log(arr.includes("Garfield") && arr.includes("Felix"));

// TASK 11 (complete)

const arrNum = [10.5, 20.75, 70, 80, 15.75]

console.log(arrNum)

console.log(arrNum.join("\n"));

// TASK 12 (complete)

const arrSchool = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let countSchool = 0 ;
let countBookPen = 0 ;
for(const school of arrSchool){
    if(school.toUpperCase().charAt(0).includes('P') || school.toUpperCase().charAt(0).includes('B')) countSchool++ ;
    if(school.toLowerCase().includes('book') || school.toLowerCase().includes('pen'))  countBookPen++ ; 
}

console.log(arrSchool);
console.log("Elements starting with 'B' or 'P' =  " + countSchool);
console.log("Elements starting with 'book' or 'pen' = " + countBookPen);


// TASK 13 (complete)

const arr1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
const result = arr1.filter((arr1) => arr1 > 10);
const result1 = arr1.filter((arr1) => arr1 < 10);
const result2 = arr1.filter((arr1) => arr1 === 10);
console.log(arr1);
console.log("Elements that are more than 10 = " + result.length);
console.log("Elements that are less than 10 = " + result1.length);
console.log("Elements that are 10 = " + result2.length);


// TASK 14 (complete)

const ar1 = [5, 8, 13, 1, 2 ];
const ar2 = [9, 3, 67, 1, 0];
const ar3 = [];

for(let i = 0; i < ar1.length && ar2.length; i++){
    Math.max(ar1[i] , ar2[i]);
    ar3.push(Math.max(ar1[i] , ar2[i]));
  
}

console.log("1st array is = " , ar1);
console.log("2nd array is = " , ar2);
console.log("3rd array is = " , ar3);

// TASK 15 (incomplete)


function firstDuplicates() {
    let arry = [5, 3, 7, 4 ];
    let toMap = {};
    let resultToReturn = false;
    for (let i = 0; i < arry.length; i++) {

        if (toMap[arry[i]]) {
            console.log(arry[i]);
            // terminate the loop
            break;
        }

        toMap[arry[i]] = true;
    }

    if (resultToReturn) {
        'Duplicate elements exist';
        }
        else {
            console.log('-1');
            }
        }

        firstDuplicates( 5, 3, 7, 4  );

        
    

// TASK 16 (incomplete)



// TASK 17 (complete)

function reverseString(str1){
 return console.log(str1.split('').reverse().join('').split(' ').reverse().join(' '));

}
reverseString("I like JavaScript");



// TASK 18 (almost done but incomplete)



function getEvens(x , y){
    
for(i = Math.min(x , y); i <= Math.max(x, y); i++){

    if(i % 2 === 0){
        console.log(i);
    }
}
}


getEvens(17, 5);



// TASK 19 (almost done but incomplete)

function getMultipleOf5(a , z){
    
    for(i = a; i >= z; i--){
    
        if(i % 5 === 0){
            console.log(i);
        }
    }
    }
    
    
    getMultipleOf5(23, 5);


// TASK 20 (almost done but incomplete)



function fizzBuzz(a , b){

const fizzBuzz1 = [];

    for(i = a; i <= b; i++){
       if(i % 3 === 0 && i % 5 === 0){
        console.log(fizzBuzz.push('FizzBuzz'));
       }
       else if(i % 3 === 0){
        console.log(fizzBuzz.push('Fizz'));
       }
       else if(i % 5 === 0){
        console.log('Buzz')
       }
       else{
        console.log(i);
       }
    }
    
}

fizzBuzz(13 , 18);





