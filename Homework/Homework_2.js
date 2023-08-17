
// TASK 1

let str1 = Number("5");
let str2 = Number("2");

console.log("The sum of 5 and 2 is = " + (str1 + str2));
console.log("The product of 5 and 2 is = " + (str1 * str2));
console.log("The division of 5 and 2 is = " + (str1 / str2));
console.log("The subtraction of 5 and 2 is = " + (str1 - str2));
console.log("The remainder of 5 and 2 is = " + (str1 % str2));
console.log("The exponentiation of 5 and 2 is = " + (str1 ** str2));

// TASK 2

let s1 = Number("200");
let s2 = Number("-50");

console.log("The greatest value is = " + Math.max(s1,s2));
console.log("The smallest value is = " + Math.min(s1,s2));
console.log("The average is = " + (s1 + s2) / 2 );
console.log("The greatest value is = " + Math.abs(s1 - s2));

// TASK 3

let ran1 = Math.ceil(Math.random() * 50);
let ran2 = Math.ceil(Math.random() * 50);
console.log("The absolute difference between numbers is = " + Math.abs(ran1 - ran2));


// TASK 4

let random1 = Math.ceil(Math.random() * 50);
let random2 = Math.ceil(Math.random() * 50);
let random3 = Math.ceil(Math.random() * 50);
let random4 = Math.ceil(Math.random() * 50);
let random5 = Math.ceil(Math.random() * 50);


console.log("The max value = " + Math.max(random1 , random2 , random3 , random4 , random5) );
console.log("The max value = " + Math.min(random1 , random2 , random3 , random4 , random5) );

// TASK 5

let number1 = (Math.ceil(Math.random() * 50) + 50);
let number2 = (Math.ceil(Math.random() * 50) + 50);
let number3 = (Math.ceil(Math.random() * 50) + 50);

console.log("The number 1 = " + number1);
console.log("The number 2 = " + number2);
console.log("The number 3 = " + number3);

console.log("The sum of numbers is = " + (number1 + number2 + number3));

// TASK 6

let num1 = Math.ceil(Math.random() * 100);
let num2 = Math.ceil(Math.random() * 100);
let num3 = Math.ceil(Math.random() * 100);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num1 >25 && num2 >25 && num3 >25);


// TASK 7

let name = "David";

console.log("The length of the name is = " + name.length);
console.log("The first character in the name is = " + name.charAt(0));
console.log("The last character in the name is = " + name.charAt(4));
console.log("The first 3 characters in the name are = " + name.slice(0,3));
console.log("The last 3 characters in the name are = " + name.slice(2));


