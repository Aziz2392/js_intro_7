

//  TASK 10 Find Even Numbers


function getEvens(num1, num2){
    const evens  = [];
    let greaterEven = Math.max(num1, num2);
    let lesserEven = Math.min(num1, num2);

    for(let i = lesserEven; i < greaterEven; i++){
        if(i % 2 === 0) evens.push(i);
    }
    console.log(evens);
}

getEvens(2, 7);
getEvens(17, 5);


// TASK 11 Multiples of 5

function getMultipleOf5(num1, num2){
    const five = [];
    let greaterFive = Math.max(num1, num2);
    let lesserFive = Math.min(num1, num2);

    for(let i = lesserFive; i <= greaterFive; i++){
        if(i % 5 === 0) five.push(i);
    }
    console.log(five);
}

getMultipleOf5(3, 17) ;  	
getMultipleOf5(23, 5)  ; 
getMultipleOf5(5, 5) ;
getMultipleOf5(2, 4) ;

// TASK 12  Count A

const countA = (str) => console.log(str.split('').filter(x => x.toLowerCase() === 'a').length);

countA("TechGlobal is a QA bootcamp");
countA("QA stands for Quality Assurance"); 
countA("Cypress");  

// TASK 13 Count Words

const countWords = (str1) => console.log(str1.trim().split(' ').length); 

countWords("     Javascript is fun       ");
countWords("Cypress is an UI automation tool.    "); 
countWords("1 2 3 4");

// TASK 14 Factorial  having an issue with factorial(0)

function factorial(number){
    let factor = number; 

    for(i = number - 1; i > 1; i--){
        factor *= i;

        if(factor === 0) console.log(1) ;
    }
    console.log(factor);
}

factorial(5)
factorial(4) 
factorial(0) 
factorial(1) 


// TASK 15 count string with 3 or less characters. Having  problem with empty;

const count3OrLess = (str2) => console.log(str2.split(' ').filter(x => x.length <= 3).length);

count3OrLess("Hello");
count3OrLess("Hi John"); 
count3OrLess("JavaScript is fun"); 
count3OrLess("My name is John Doe"); 
count3OrLess(""); 


// TASK 16 Remove extra spaces

function removeExtraSpaces(str3){
    console.log(str3.trim().split(' ').filter(x => x.length >= 1).join(' '))
}

removeExtraSpaces("Hello");
removeExtraSpaces("   	Hello    World  ") ;
removeExtraSpaces("  	JavaScript is     a      fun") ;
removeExtraSpaces("") ; 


// TASK 17 Middle integer

function middleInt(n1, n2, n3){
  sortInt = [n1, n2, n3].sort();

  console.log(sortInt[1]);

}

middleInt(1, 2, 2);
middleInt(5, 5, 8);
middleInt(5, 3, 5);
middleInt(1, 1, 1);
middleInt(-1, 25, 10);

// TASK 18 IMPORTANT

function firstDuplicate(array){
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) return array[i];
          
        }
    }
    return -1 ;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));

// TASK 19 Find ALL Duplicates   IMPORTANT

function getDuplicates(arr){
    const duplicate = [];
    const container = [];

    for(obj of arr){
        if(container.includes(obj) && !duplicate.includes(obj)) duplicate.push(obj);
        else container.push(obj);
    }

    console.log(duplicate);
}

getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) 
getDuplicates([ 1, 2, 5, 0, 7 ]) 
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])  
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) 

// TASK 20 count Vowels

const countVowels = (string) => console.log(string.split('').filter(x => ['a', 'e', 'i', 'o', 'u', 'A','E', 'I','O','U'].includes(x)).length);

countVowels("Hello")
countVowels("JavaScript is fun")
countVowels("")


// TASK 21 Reverse string words

const reverseStringWords = (string1) => {
   let arrayString = string1.trim().split(' ');

    for(i = 0; i < arrayString.length; i++){
        arrayString[i] = arrayString[i].split('').reverse().join('');
    }
    console.log(arrayString.join(' '));
}

reverseStringWords("Hello World") 
reverseStringWords("I like JavaScript")  
reverseStringWords("Hello") 
reverseStringWords("") 
reverseStringWords(" ") 

// TASK 22 count Consonants

const countConsonants = (string2) => console.log(string2.split('').filter(x => !['a', 'e', 'i', 'o', 'u', 'A','E', 'I','O','U'].includes(x)).length)

countConsonants("Hello")
countConsonants("Hello World")
countConsonants("JavaScript is fun")
countConsonants("")


// TASK 23

