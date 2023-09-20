
// TASK 1 (giving me issues with the empty string)

function hasUpperCase(str1){
    for(let char of str1){
        if(char === char.toUpperCase()) return true;
        else return false;
    }
}

console.log(hasUpperCase("javascript"))
console.log(hasUpperCase("John"))
console.log(hasUpperCase("$125.0"))
console.log(hasUpperCase(""))


// TASK 2

 function noDigit(str) {
    console.log( str.split("").filter(char => isNaN(parseInt(char))).join(""));
}
noDigit("123Hello")
noDigit("123Hello World149")
noDigit("123Tech456Global149")

//TASK 3

function noVowel()


// TASK 4

function no13(arr){

  const no13Array = [];

    for(num of arr){
        if(num === 13) no13Array.push(0);
        else no13Array.push(num);
    }
    console.log(no13Array);
}

no13([1, 2, 3 ,4]) 
no13([13, 2, 3]) 
no13([13, 13, 13 , 13, 13]) 
no13([]);


// TASK 5

function middleInt(a, b, c)
{
    // Checking for b
    if ((a < b && b < c) || (c < b && b < a) || (b < a && b === c ) || (b < c && b === a))
       return b;
 
    // Checking for a
    else if ((b < a && a < c) || (c < a && a < b))
       return a;
 
    else
       return c;

}
console.log(middleInt(1,2, 2));
console.log(middleInt(8, 5, 5));



// TASK 6




// TASK 7 (incomplete)
function arrFactorial(array1){
    const factorial = [];
    
    for(let num of array1){
       for(let i = num - 1; i > 1; i--){
            array1.num *= i ;
        }
      
        return factorial.push(num);
    }
    }


console.log(arrFactorial([1, 2, 3, 4]));

// TASK 8 (tried many times but didn't have time to finish)



