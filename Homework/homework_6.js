
// TASK 1 (complete)


const noSpace = (str1) => {
    return console.log(str1.trim().split(' ').filter(s => s.length > 0).join(''));
}


noSpace("    Hello    World   ");


// TASK 2 (complete)

const replaceFirstLast = (str2) => {
    let lastChar = str2[str2.length -1];
let firstChar = str2[0];
let middle = str2.slice(1, str2.length - 1);
    if(str2.length < 2) return "" ;
    return console.log(lastChar + middle + firstChar);
}

replaceFirstLast("Tech Global");

/*
let str3 = "Hello World";
let lastChar = str3[str3.length -1];
let firstChar = str3[0];
let middle = str3.slice(1, str3.length - 1);

console.log(lastChar);
console.log(firstChar);
console.log(middle);
console.log(lastChar + middle + firstChar);
*/

// TASK 3 (complete)

const hasVowel = (str3) => {
   //const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

    if(str3.toLowerCase().includes('a') || str3.toLowerCase().includes('e') || str3.toLowerCase().includes('i') || str3.toLowerCase().includes('o') 
    || str3.toLowerCase().includes('u')) return console.log(true);
    else return console.log(false) ;
}

hasVowel("");
hasVowel("Tech Global");
hasVowel("Javascript");
hasVowel("1234");
hasVowel("ABC");

// TASK 4 (complete)

const checkAge = (number) => {
let year = new Date().getFullYear();
if((year - number) > 120 || (year - number) < 1) return console.log("AGE IS NOT VALID");
else if((year - number) < 16) return console.log("AGE IS NOT ALLOWED");
else if((year - number) >= 16) return console.log("AGE IS ALLOWED");
}

checkAge(2015);
checkAge(2007);
checkAge(2050);
checkAge(1920);
checkAge(1800);

// TASK 5 (complete)

const averageOfEdges = (n1, n2, n3) => {
    let max = Math.max(n1, n2, n3);
    let min = Math.min(n1, n2, n3);

    return console.log((max + min)/2) ;
}

averageOfEdges(0, 0, 0);
averageOfEdges(0, 0, 6);
averageOfEdges(-2, -2, 10);
averageOfEdges(-3, 15, -3);
averageOfEdges(10, 13, 20);

// TASK 6 (complete)

const noA = (arr1) => {
    const newArray = [];
    for(str4 of arr1){
        if(str4.toLowerCase().includes('a')) newArray.push("###");
        else newArray.push(str4);
    }
    return console.log(newArray) ;
    
}

noA(["javascript", "hello", "123", "xyz"]);
noA(["apple", "123", "ABC", "javascript"]);
noA(["apple", "abc", "ABC", "Alex", "A"]);

// TASK 7 (complete)

const no3and5 = (arr3) => {
    const NewArray3 = [];

    for(num3 of arr3){
        if(num3 % 3 === 0 && num3 % 5 === 0) NewArray3.push(101);
        else if(num3 % 5 === 0) NewArray3.push(99);
        else if(num3 % 3 === 0) NewArray3.push(100);
        else NewArray3.push(num3);
    }
    return console.log(NewArray3);
}

no3and5([7, 4, 11, 23, 17]) ; 
no3and5([3, 4, 5, 6]) ;
no3and5([10, 11, 12, 13, 14, 15]) ;


// TASK 8
/*
const isPrime = (num) => {{
    if(num < 2) return false;
    if (num === 2 || num === 3 || num === 5 || num === 7) return true;
    if(num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0
    || num % 9 === 0) return false;
    }

    return true;
}

console.log(isPrime(101));
console.log(isPrime(7));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));
*/

const countPrimes = (arr2) => {
    let count_P = 0 ;
for(num of arr2){
     
    if (num === 2 || num === 3 || num === 5 || num === 7) count_P++;
    if (num % 2 !== 0  && num % 3 !== 0 &&  num % 5 !== 0 && num % 7 !== 0 && 
         num % 9 !== 0 && num > 2 & num !== 4) count_P++ ;
  
}
    return console.log(count_P);
}

countPrimes([-10, -3, 0, 1]) 
countPrimes([7, 4, 11, 23, 17]) 
countPrimes([41, 53, 19, 47, 67]) 




// TASK 9

function removeDuplicates(array) {
    const container = [];
    const duplicates = [];

    for(let obj of array){
        if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
        else container.push(obj)
    }
    return console.log(container);



};

removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) 
removeDuplicates([1, 2, 5, 2, 3]) 
removeDuplicates([0, -1, -2, -2, -1]) 
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 
removeDuplicates(["1", "2", "3", "2", "3"]) 

// TASK 10 (off but not sure where)


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

    // TASK 11 (complete)


function secondMax(arr) {
  let max = -Infinity, result = -Infinity;

  for (const value of arr) {
    const nr = Number(value)

    if (nr > max) {
      [result, max] = [max, nr] // save previous max
    } else if (nr < max && nr > result) {
      result = nr; // new second biggest
    }
  }

  return console.log(result);
}

secondMax([7, 4, 4, 4, 23, 23, 23]) ;



    // TASK 12
    function secondMin(arr) {
        let min = Infinity, result = Infinity;
      
        for (const value of arr) {
          const nr = Number(value)
      
          if (nr < min) {
            [result, min] = [min, nr] // save previous max
          } else if (nr > min && nr < result) {
            result = nr; // new second biggest
          }
        }
      
        return console.log(result);
      }
      
      secondMin([7, 4, 4, 4, 23, 23, 23]) ;
    

    // TASK 13

    function getDuplicates(array) {    
        const container = [];
        const duplicates = [];
    
        for(let obj of array){
            if(container.includes(obj) && !duplicates.includes(obj)) duplicates.push(obj)
            else container.push(obj)
        }
        return container;
    
    
    
    };
    
    console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
    console.log(getDuplicates([1, 2, 5, 0, 7]));
    console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo']));
    console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));





