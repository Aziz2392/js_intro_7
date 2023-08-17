

let str1 = "I like apples and oranges";
let str2 = "Java is not a scripting programming language";
let str3 = "I don't like books";

//console.log(str1.slice(7, 12).toUpperCase());
//console.log(str2.slice(0,5) + " " + str2.charAt(14).toUpperCase() + str2.slice(15,20));
//console.log(str3.charAt(0) + " " + str3.slice(8,12) + " " + str3.slice(13 ,18));
//console.log(str3.replace("don't", " " ));
console.log(str3.charAt(0) + str3.slice(7));

// TASK2

//let s1 = "JavaScript";
//let s2 = "";

console.log("The length is = " + s1.length);
console.log("The first char is = " + s1.charAt(0));
console.log("The last char is = " + s1.charAt(9));
console.log(s2.endsWith("t"));

let s1 = "Javascript";
console.log(`The length is = ${s1.length}`);
console.log(`The first char = ${s1[0]}`);
console.log(`The first char = ${s1[s1.length-1]}`);

console.log(s1.includes("a") || s1.includes("e") || s1.includes("i") || s1.includes("o") || s1.includes("u") ||
s1.includes("A") || s1.includes("E") || s1.includes("I") || s1.includes("O") || s1.includes("U"));

// TASk 3

let s2 = "Viktoriya"

console.log(s2);

console.log(s2[(s2.length-1) / 2]);

// TASK 4

let s3 = "Javascript"

console.log(s3.slice(s3.length/2 -1, s3.length/2 + 1));

// TASK 5 

let s4 = "Javascript";

console.log(s4.slice(0,2));
console.log(s4.slice(s4.length-2, s4.length+1));
console.log(s4.slice(2, s4.length-2));

//TASK 6

let s5 = "12ab12"; // true
let firstTwo = s5.slice(0,2)
let lastTwo = s5.slice(s5.length-2);



console.log(firstTwo === lastTwo);

console.log(s5.startsWith(firstTwo) && s5.endsWith(firstTwo));

console.log(firstTwo.includes(lastTwo));
// TASK 7

let s6 = "orange";
let s62 = "1234";

let first = s6.slice(1, s6.length-1); 
let last = s62.slice(1,s62.length-1);

console.log(first + last);

// TASK 8

let s7 = "xxgreenxx";
let start7 = "xx";

console.log(s7.startsWith(start7) && s7.endsWith(start7));

// TASK 9 

let s8 = "After like Apple Abe";
// Apple like I

let firstWord = s8.slice(0, s8.indexOf(" "));
let lastWord = s8.slice(s8.lastIndexOf(" ") + 1);
let middleWord = s8.slice(s8.indexOf(" "), s8.lastIndexOf(" ") + 1);

let swapped = lastWord + middleWord + firstWord

console.log(swapped);

// TASK 10

let s9 = "I like Apple"; // 3

let length1 = s9.length
let length2 = s9.replaceAll(" ", "").length;

console.log(length2);
console.log(length1 - length2 +1);