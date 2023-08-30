// TASK 1

let num1 = Math.ceil(Math.random() * 10);

if(num1 % 2 == 0){
    console.log("true");
}
else{
    console.log("false");
}

console.log(num1);

// TASK 2

let num2 = Math.ceil(Math.random() * 10);

if(num2 % 2 !== 0){
    console.log("true");
}
else{
    console.log("false");
}

console.log(num2);

// TASK 3

let num3 = Math.floor(Math.random() * (5 - (-5) + 1)) + (-5);

if(num3 > 0){
    console.log("true");
}
else{
    console.log("false");
}

console.log(num3);

// ?TASK 4

num4 = Math.floor(Math.random() * (5 - (-5) + 1)) + (-5);

if(num4 < 0){
    console.log("true");
}
else{
    console.log("false");
}

console.log(num4);

// TASK 5

let num5 = Math.ceil(Math.random() * 50);

if(num5 % 5 == 0){
    console.log("true");
}
else{
    console.log("false");
}

console.log(num5);

// TASK 6

let num6 = Math.ceil(Math.random() * 50);

if(num6 % 7 == 0){
    console.log("true");
}
else{
    console.log("false");
}

console.log(num6);

// TASK 7

let numOne = Math.ceil(Math.random() * 10);
let numTwo = Math.ceil(Math.random() * 10);

console.log(numOne);
console.log(numTwo);
console.log(numOne + numTwo);

// TASK 8

let num7 = Math.ceil(Math.random() * 10);
let num8 = Math.ceil(Math.random() * 10);
let max = Math.max(num7 , num8);
let min = Math.min(num7, num8);


console.log(num7);
console.log(num8);
console.log(Math.abs(max - min));

// TASK 9

let num9 = Math.ceil(Math.random() * 10);
let num10 = Math.ceil(Math.random() * 10);

console.log(num9);
console.log(num10);
console.log(num9 * num10);

// TASK 10

let num11 = Math.ceil(Math.random() * 10);

console.log(num11);
console.log(num11 * num11);

// TASK 11

let num12 = Math.ceil(Math.random() * 10);

console.log(num12);
console.log(num12 * num12 * num12);

// TASK 12

let n1 = Math.ceil(Math.random() * 10);
let n2 = Math.ceil(Math.random() * 10);

if((n1 + n2) % 2 == 0){
    console.log("true")
}
else{
    console.log("false");
}

// TASK 13

function rectangleArea(x , y){
    return console.log(x * y);
}

rectangleArea(2 , 4);

// TASK 14

function doubleWord(str1){
    return console.log(str1 + str1);
}

doubleWord("Aziz");

// TASK 15

function firstCharacter(str2){
    return console.log(str2[0] + str2[str2.length -1]);
}

firstCharacter("Zziz");

// TASK 16

function firstTwoCharacters(str3){
    return console.log(str3.slice(0,2));
}

firstTwoCharacters("Aziz");


// TASK 17

function lastCharacter(str4){
    return console.log(str4[str4.length -1]);
}

lastCharacter("Aziz");

// TASK 18

function lastTwoCharacters(str5){
    return console.log(str5.slice(str5.length - 2));
}

lastTwoCharacters("i");

// TASk 19

function hasFive(str6){
    if(str6.length >= 5){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

hasFive("Azizz");

// TASK 20

function Middle(str7){
    if(str7.length % 2 == 0){
        console.log(str7.slice(str7.length/2 -1 , str7.length/2 + 1));
    }
    else{
        console.log(str7[(str7.length - 1) / 2]);
    }
}

Middle("Azizz");

// TASK 21

function startsVowel(str8){
    if(str8[0] === "a" || str8[0] === "e" || str8[0] === "e" || str8[0] === "i" || str8[0] === "o" || str8[0] === "u" || str8[0] === "A" || str8[0] === "E" || str8[0] === "I" || str8[0] === "O"|| str8[0] === "U"  ){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

startsVowel("Aziz");
startsVowel("Izzzz");
startsVowel("zzzzIbbbb");
startsVowel("Tech");
startsVowel("Apple");
startsVowel("abc");


// TASK 22

function longer(s1 , s2){
    if(s1.length >= s2.length){
        console.log(s1);
    }
    else{
        console.log(s2);
    }
}

longer("Tech", "Global");
longer("Hello", "Hi");
longer("Hello", "World");


// TASK 23

function shorter(s3 , s4){
    if(s4.length <= s3.length){
        console.log(s4);
    }
    else{
        console.log(s3);
    }
}

shorter("Tech", "Global");
shorter("Hello", "Hi");
shorter("Hello", "World");


