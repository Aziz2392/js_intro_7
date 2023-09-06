// TASK 1 (complete)



function countPos(arr1){

    let count = 0 ;
    for(const num of arr1){
      if(num > 0) count++ ;
    }
   return console.log(count); 
}


countPos([0, -1, -2, -3]);


// TASK 2 (complete)


function countA(str1){
   let countAy = 0 ;
    for(const x of str1){
        if(x.toLowerCase().charAt(x) === 'a') countAy++ ;
    }

    return console.log(countAy);
}


countA('TechGlobal is a QA bootcamp');

// TASK 3 (complete)

function countVowels(str2){
    let countVow = 0 ;
    for(const vow of str2){
        if(vow.toLowerCase().charAt(vow) === 'a' || vow.toLowerCase().charAt(vow) === 'e' || vow.toLowerCase().charAt(vow) === 'i' || 
        vow.toLowerCase().charAt(vow) === 'o' || vow.toLowerCase().charAt(vow) === 'u') countVow++
    }
    return console.log(countVow);
}

countVowels("JavaScript is fun");

// TASK 4 (complete)

function countConsonants(str3){
    let countCon = 0 ;
    for(const con of str3){
        if(con.toLowerCase().charAt(con) !== 'a' && con.toLowerCase().charAt(con) !== 'e' && con.toLowerCase().charAt(con) !== 'i' && 
        con.toLowerCase().charAt(con) !== 'o' && con.toLowerCase().charAt(con) !== 'u') countCon++
    }
    return console.log(countCon);
}


countConsonants("JavaScript is fun");


// TASK 5 (complete)

function countWord(str1) { 
    return str1.trimStart().trimEnd().split(" ").length;
  }
  
  console.log(countWord("      1 2 3 4     "));


// TASK 6 (complete)


function factorial(n){

    let r1 = n;
    let total = 1;

for (i = 0; i < r1; i++){
    total = total * (r1- i);
}
return total;
}

console.log(factorial(3));



// TASK 7 (complete except for "ab a")

function isPalindrome(str){

    let rstr = str.toLowerCase().split().reverse().join();
    if(str === rstr) console.log('true');
    else{
        console.log('false');
    }
}

isPalindrome('Hello');


// TASK 8 (complete)

function countMultipleWords(arr){
    let countMultiple = 0;

    for(const word of arr){
        if(word.trimEnd().trimStart().split(" ").length >= 2) countMultiple++ ;
    }
    return console.log(countMultiple);
}

countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]);

// TASK 9 (complete)

let count3 = 0 ;

function count3OrLess(str3){

    for(const s of str3.split(" ")){
        if(s.length <= 3) count3++ ;
    }
    return console.log(count3);
}

count3OrLess("Hello Wor Hi");

// TASK 10 (complete)

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}


console.log(isPrime(6));

// TASK 11 (incomplete syntax error)

/*

    function add(ar1, ar2){
        let sum = 0 ;
        const ar3 = [];
        
    for( const n of ar1 ){

        sum = ar1[n] + ar2[n];
        returnconsole.log(ar3.push(sum));
    }
    }
   */
  
    const add = (ar1, ar2) => {
        for(const n of ar1) console.log(ar1[n] + ar2[n]);
    }

    add([3, 0, 0, 7, 5, 10] , [6, 3, 2]);

  



// TASK 12 (complete)

function removeExtraSpaces(str4){
  console.log(str4.replace(/\s+/g, ' ').trim())
}

removeExtraSpaces("     Hello      World    ");

// TASK 13 (Having a hard time with this one)


// TASK 14 (incomplete but close maybe?)

function isEmailValid(email){
    char = ''
    if(email[0] !== '@' && email.includes('@') && email.slice(email.length - 4).includes('.com') && email.slice(email.indexOf('@'), email.indexOf('.')) === char ) console.log('true');
    else console.log('false');
}

isEmailValid("aziz@.com");



// TASK15 (special character, lowercase, uppercase issue)

function isPasswordValid(pasString){
    if(pasString.length >= 8 && pasString.length <= 16 && pasString.includes(pasString.charCodeAt === 33)) console.log('true');
    else console.log('false');
}


isPasswordValid("aziz%elmahb!");





