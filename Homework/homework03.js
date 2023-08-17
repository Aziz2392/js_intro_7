

// TASK 1

function getRandomNumber(start , end){
    return Math.floor(Math.random() * (end - start + 1) + start);
}

let num1 = getRandomNumber(1, 100);
let num2 = getRandomNumber(1, 100);
let num3 = getRandomNumber(1, 100);
let avg = (num1 + num2 + num3) / 3

console.log(num1)
console.log(num2)
console.log(num3)
console.log(avg)

if(avg >= 50){
    return console.log("true");
}
else{
    console.log("false");
}

// TASK 2

function getRandomNumber(start , end){
    return Math.floor(Math.random() * (end - start + 1) + start);
}

let match0 = getRandomNumber(1, 3);
let match1 = getRandomNumber(1, 3);
let match2 = getRandomNumber(1, 3);

console.log(match0);
console.log(match1);
console.log(match2);

if(match0 == match1 && match1 == match2 && match0 == match2){
    return console.log("TRIPLE MATCH");
}
else if(match0 == match1 || match1 == match2 || match0 == match2){
    return console.log("DOUBLE MATCH");
}
else{
    return console.log("NO MATCH");
}

// TASK 3

function hasA(incA){
     {
        if(incA.includes("a")){
           return console.log("true");
        }    
        else if(incA.includes("A")){
           return console.log("true");
        }
        else{
           return console.log("false");
        }
    }
}

let incA1 = hasA("ChelseA");
let incA2 = hasA("Liverpool");

//console.log(incA1);
//console.log(incA2);

// TASK 4

function doubleOrTripleWord(str){
    {
        if(str.length % 2 == 0){
            return console.log(str + str + str);
        }
        else if(str.length % 2 !== 0){
            return console.log(str + str);
        }
    }
}

let str1 = doubleOrTripleWord("22");
let str2 = doubleOrTripleWord("Apple");

// TASK 5

function firstWord(first1){
    if(first1.includes(" ")){
   return console.log(first1.slice(0, first1.indexOf(" ")));
    }
    else{
      return  console.log(first1);
    }
}

let sentence = firstWord("Hello World");
let sentence2 = firstWord("I like JavaScript");
let sentence3 = firstWord("Hi");

// TASK 6

function lastWord(last1){
    if(last1.includes(" ")){
        return console.log(last1.slice(last1.lastIndexOf(" ")));
    }
    else{
        return console.log(last1)
    }
}

let last1 = lastWord("Hello");

// TASK 7

//function firstLastWord(f1 , l1){


function firstLastWord(sentence0){
    if(sentence0.includes(" ")){
        return console.log((sentence0.slice(0 , sentence0.indexOf(" "))) + (sentence0.slice(sentence0.lastIndexOf(" "))));
    }
    else{
        return console.log(sentence0);
    }
}



let sentence0 = firstLastWord("I like Javascript");

// (f1.slice(0 , f1.indexOf(" "))) + (l1.slice(l1.lastIndexOf(" ")))

// TASK 8

function startVowel(vow1){
    if(vow1.charAt(0).includes("a")){
        return console.log("true")
    }
    else if(vow1.charAt(0).includes("e")){
        return console.log("true")
    }
    else if(vow1.charAt(0).includes("i")){
        return console.log("true")
    }
    else if(vow1.charAt(0).includes("o")){
        return console.log("true")
    }
    else if(vow1.charAt(0).includes("u")){
        return console.log("true")
    }
    else if(vow1.charAt(0).includes("A")){
        return console.log("true")
    }
    else if(vow1.charAt(0).includes("E")){
        return console.log("true")
    }
    else if(vow1.charAt(0).includes("I")){
        return console.log("true")
    }
    else if(vow1.charAt(0).includes("O")){
        return console.log("true")
    }
    else if(vow1.charAt(0).includes("U")){
        return console.log("true")
    }
    else{
        return console.log("false")
    }
}

let vow1 = startVowel("Apple");

// TASK 9


/*
let word1 = "JavaSeeeecript" ;
let first4 = word1.slice(0, 4);
let last4 = word1.slice(word1.length - 4);
let middle = word1.slice(4, word1.length - 4);

console.log(middle);
console.log(first4);
console.log(last4);
console.log (last4 + middle + first4);
*/



function swap4(word1){
    if(word1.length >= 8){
return console.log((word1.slice(word1.length - 4)) + (word1.slice(4, word1.length - 4)) + (word1.slice(0, 4)));
    }
    else{
        return console.log("");
    }
}
let word1 = swap4("JavaScript") ;


// TASK 10



function swapFirstLastWord(w){
    if(w.indexOf(" ")){
        return console.log(w.slice(w.lastIndexOf(" ")) + " " + w.slice(w.indexOf(" ") + 1 , w.lastIndexOf(" ")) + " " + w.slice(0, w.indexOf(" ")));
    }
    else{
        return console.log(" ");
        }
    }
let w = swapFirstLastWord("Javascript love very much I");
 