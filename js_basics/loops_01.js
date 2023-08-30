// Write a code that outputs "Hello" to the console 

/* 
start point
condition - termination
update



for(start; termination condition; update){
    //my code to execute
}
*/

let number = 1;

number++;
number++;

console.log(number);


/* for (let number = 2; number <= 6; number++){         -- increase by 2
    console.log(number++);
}
*/



/*
for (let i = 25; i >= 5 ; i--){                 ---- Decrease
    console.log(i);
}
*/

console.log('end of the program');
/*
for (let i = 0; i <= 10 ; i++){     -- least favorable
    if(i % 2 == 0){
    console.log(i++);
}
}

OR 

for(let i = 0; i <= 10; i += 2){    -- best and easiest
    console.log(i);
}

OR

for(let i = 0; i <= 5; i++){            -- best but hardest
    console.log(i * 2);
}


*/

// If i is divisible by 5
for (i = 1; i <= 50; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}

// whrite a program that finds the sum of numbers from 1 to 5  // 1 + 2 + 3 + 4 + 5 = 15
let sum = 0;

for (i =1 ; i <= 5 ; i++){
    sum += i;
}

console.log(sum);

let sum = 0;

for(i = 10; i <= 15; i++){
    sum += i;
}

console.log(sum);


////// program that generate

let random = Math.ceil(Math.random() * 10);

for (i = 1; i <= random; i++){
    if(i % 2 !== 0) {console.log(i)
}}

console.log(random);


///////// print all the numbers between 2 random numbers in the range of 1 to 10
let random1 = Math.ceil(Math.random() * 10);
let random2 = Math.ceil(Math.random() * 10);
let randoMax = Math.max(random1 , random2);
let randoMin = Math.min(random1 , random2);
for(i = randoMin ; i <= randoMax ; i++){
    console.log(randoMin++)
}


/////

let str = "TechGlobal School"
let count = 0
for(i = 0; i <= str.length - 1; i++){
    if (str[i].toLowerCase() === 'o'){
        count++;
    }       
}

console.log(count);


console.log(count(str))




