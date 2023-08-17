

console.log(Math.ceil(Math.random() * 51 * 5));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));
console.log(Math.ceil(Math.random() * 51 ));

let randNum = Math.ceil(Math.random() * 51);

console.log("The random number = " + randNum )
console.log("The random number * 5 = " + randNum * 5);


let randomNumber1 = Math.ceil(Math.random() * 10 );
let randomNumber2 = Math.ceil(Math.random() * 10 );

//let min = Math.min(randomNumber1, randomNumber2);
//et max = Math.max(randomNumber1, randomNumber2);
//let diff = max - min; 

console.log(randomNumber1, randomNumber2);

//onsole.log("Min number = " + min);
//console.log("Max number = " + max);
//console.log("Difference = " + diff);




////

let randNum1 = Math.floor(Math.random() * 51) + 50;

console.log(randNum1);
console.log(randNum1 % 10);
console.log("The random number % 10 = " + randNum1 % 10);






console.log(Math.floor(Math.random() * 51 + 49));
console.log(Math.floor(Math.random() * 51 + 49));
console.log(Math.floor(Math.random() * 51 + 49));
console.log(Math.floor(Math.random() * 51 + 49));
console.log(Math.floor(Math.random() * 51 + 49));
console.log(Math.floor(Math.random() * 51 + 49));
console.log(Math.floor(Math.random() * 51 + 49));
console.log(Math.floor(Math.random() * 51 + 49));
console.log(Math.floor(Math.random() * 51 + 49));
console.log(Math.floor(Math.random() * 51 + 49));

console.log(Math.ceil(Math.random() * 10) * 5);
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));

let num1 = Math.ceil(Math.random() * 10) * 5;
let num2 = Math.ceil(Math.random() * 10) * 4;
let num3 = Math.ceil(Math.random() * 10) * 3;
let num4 = Math.ceil(Math.random() * 10) * 2;
let num5 = Math.ceil(Math.random() * 10) * 1;

// let numberss = console.log(num1, num2, num3, num4, num5);

let results = console.log(num1 * 5 + num2 * 4 + num3 * 3 + num4 * 2 + num5 * 1);

console.log(numberss)
console.log(results)



///////////


let number1 = Math.ceil(Math.random() * 25); 
let number2 = Math.ceil(Math.random() * 25) + 25;
let number3 = Math.ceil(Math.random() * 25) + 50;
let number4 = Math.ceil(Math.random() * 25) + 75;

//let diffMaxMin = Console.log(Math.max(number1, number2, number3, number4));
//let add = (number1 + number2 + number3 + number4);
console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)
console.log("Difference max and min = " + (number4 - number1)); 
console.log("The average = " + (number1 + number2 + number3 + number4) / 4);


/////////////
let n1 = Math.ceil(Math.random() * 100);

console.log(n1);
console.log(n1 >= 50);

//////////////

let n2 = Math.ceil(Math.random() * 10);
let n3 = Math.ceil(Math.random() * 10);
let n4 = Math.ceil(Math.random() * 10);

console.log(n2);
console.log(n3);
console.log(n4);
console.log(Math.max(n2 , n3, n4));

///////////////

//let w1 = "Chelsea";
let w2 = "Liv";

if(w1.length > w2.length){
    console.log(w1);
}
else{
    console.log(w2);
}

//////////////

let r1 = Math.ceil(Math.random() * 50);

if(r1 % 5 == 0){
    console.log("true");
}
else{
    console.log("false");
}

console.log(r1)

////////////////

let a1 = Math.ceil(Math.random() * 10);
let a2 = Math.ceil(Math.random() * 10);
let a3 = Math.ceil(Math.random() * 10);
let max = Math.max(a1 , a2, a3);
let min = Math.min(a1 , a2, a3);

console.log(a1);
console.log(a2);
console.log(a3);
console.log(Math.abs(max - min));



function lastTwoCharacters(b1){
    if(b1.length >= 2){
        return console.log(b1.slice(b1.length - 2));
    }
    else{
        return console.log(b1);
    }
}

let b1 = lastTwoCharacters("1");

///////////////
/*
function middle(m1){
    if(m1.length % 2 == 0){
        return console.log(m1.slice(m1.length/2 - 1 , m1.length/2 + 1));
    }
    else{
        return console.log(m1.charAt((m1.length -1) / 2));
    }
}

let m1 = middle("Global")

*/


let add1 = 5;
let add2 = 5;

if((add1 + add2) % 2 == 0){
    return console.log("true");
}
else{
    return console.log("false");
}

/////

function middle(w1){
    if(w1.length % 2 == 0){
            console.log(w1.slice(w1.length/2 -1 , w1.length/2 +1));
}
    else if(w1.length % 2 !== 0){
             console.log(w1.charAt((w1.length - 1) /2));
}
       else{
                console.log(w1);
    }}


    let w1 = middle(" ")


    let rand1 = Math.ceil(Math.random() * 10);
let rand2 = Math.ceil(Math.random() * 10);


console.log(rand1);
console.log(rand2);
console.log(Math.min(rand1 , rand2));





function shorter(str1 , str2){
    if(str2.length <= str1.length){
   return console.log(str2);
}
else{
  return  console.log(str1);
}}

let str1 = "Hello"
let str2 = "World"
console.log(shorter(str1 , str2));

function shorter(t1 , t2){
    if(t2.length <= t1){
    return console.log(t2)
    }
    else{
    return console.log(t1)
    }
    }
    let t1 = "Tech";
    let t2 = "Global";
    console.log(shorter(t1, t2));





//////////



let st1 = "Hello";
let st2 = "World";

if(st2.length <= st1.length){
    console.log(st2);
}
else{
    console.log(st1);
}


function lastCharacter(i1){
    if(i1.length >= 1){
        return console.log(i1.charAt(i1.length - 1));
}
else{
         return console.log(i1);
}}

let i1 = lastCharacter("123");


let mile1 = 5;

console.log(mile1 * 1.6);



let numm1 = Math.ceil(Math.random() * 10);
let numm2 = Math.ceil(Math.random() * 10);

console.log(numm1);
console.log(numm2);
console.log(Math.min(numm1 , numm2));


function firstLast(u1){
    return console.log(u1.charAt(0) + u1.charAt(u1.length -1))
}

let u1 = firstLast("abcde");




let s = Math.ceil(Math.random() * 10);
let s2 = Math.ceil(Math.random() * 10);
console.log(s);
console.log(s2);

if((s * s2) % 2!== 0){
    console.log("true")
    }
    else{
    console.log("false")
    }
    