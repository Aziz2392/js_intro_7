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
/*
function removeExtraSpaces(str4){
  console.log(str4.replace(/\s+/g, ' ').trim())
}

removeExtraSpaces("     Hello      World    ");
*/


////////
const removeExtraSpaces = (str4) => {
    const str4Arr = str4.trim().split(' '); // str4.trim().split(' ').filter(s => s.length > 0).join('');
    let result =''

    for(s of str4Arr){
        if(s !== '') result += s 
    }
     return result.slice(0, -1)
} 

removeExtraSpaces()

// TASK 13 (Having a hard time with this one)


// TASK 14 (incomplete but close maybe?)
/*
function isEmailValid(email){
    char = ''
    if(email[0] !== '@' && email.includes('@') && email.slice(email.length - 4).includes('.com') && email.slice(email.indexOf('@'), email.indexOf('.')) === char ) console.log('true');
    else console.log('false');
}

isEmailValid("aziz@.com");
*/
/////////////

const isEmailValid = (email) => {
    if(email.includes(' ')) return false;  // Has no spaces
    if(email.split('@').length !== 2) return false; // This checks if there are 2 indexes (1 before and 1 after the @). 

    const beginning = email.split('@')[0]
    const middle = email.split('@')[1].split('.')[0]
    const end = email.split('@')[1].split('.')[1]

    if(beginning === undefined || middle === undefined || end === undefined );

   return beginning.length >= 2 && middle.length >= 2 && end.length >= 2 ;
}


console.log(isEmailValid("hello@gmail.com"))

//////

const isDateFormatValid = (date) => {
if(date.split('/') !== 3) return false;

const beginningDate = date.split('/')[0];
const middleDate = date.slice(date.indexOf('/') + 1 , date.lastIndexOf('/'));
const endDate = date.slice(date.lastIndexOf('/') + 1);

if(beginningDate === undefined || middleDate === undefined || endDate === undefined);
return beginningDate.length === 2 && middleDate.length === 2 & endDate.length === 4 ;

}

console.log(isDateFormatValid("")) ; 			
console.log(isDateFormatValid("15/30/2020")) ;		
console.log(isDateFormatValid("10-30-2020 ")); 		
console.log(isDateFormatValid("10.30.2020")) ; 		
console.log(isDateFormatValid("5/30/2020")) 	;	
console.log(isDateFormatValid("05/30/2020")) ;		
console.log(isDateFormatValid("10/2/2020")) ; 		
console.log(isDateFormatValid("10/02/2020")) ;


/*
let d = "10/12/2020"

const beginningDate = d.split('/')[0];

//const middleDate = d.split('/')[1];
const lastDate = d.slice(d.lastIndexOf('/') + 1);
const middleDD = d.slice(d.indexOf('/') + 1 , d.lastIndexOf('/'));
const check = d.split('/').length !== 3 ;

console.log(beginningDate);
console.log(middleDD);
//console.log(middleDate);
console.log(lastDate);
console.log(check);
*/

// TASK15 (special character, lowercase, uppercase issue)

function isPasswordValid(pasString){
    if(pasString.length >= 8 && pasString.length <= 16 && pasString.includes(pasString.charCodeAt === 33)) console.log('true');
    else console.log('false');
}


isPasswordValid("aziz%elmahb!");





