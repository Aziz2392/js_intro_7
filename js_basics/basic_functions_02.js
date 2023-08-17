// Write a functions called product3 that takes 3 arguments and returns the multiplication

function product3(arg0,arg1, arg2){

return arg0 * arg1 * arg2;

}

console.log(product3(1 ,2 ,3));
console.log(product3(2 ,3, 4));

console.log(product3("2" , "5" , "3"));

// TASK 2 Write a function called isOdd that takes an argument and return true if the arg is odd, false otherwise.

function isOdd(num1){

return num1 % 2 !== 0 ; 

}

console.log(isOdd(5));

// For even


function isEven(evenNum){


    return evenNum % 2 === 0;
}


console.log(isEven(2));
console.log(isEven(6));
console.log(isEven(7));
console.log(isEven(9));
console.log(isEven(-6));