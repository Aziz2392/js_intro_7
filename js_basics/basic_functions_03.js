
// Write a function that takes an argument and returns true if the arg is positive, and false otherwise.

function isPositive(num1){

return num1 > 0;

}

console.log(isPositive(5));
console.log(isPositive(99));
console.log(isPositive(-2));
console.log(isPositive(-99));


function isNegative(num1){

    return num1 < 0;
    
    }
    
    console.log(isNegative(5));
    console.log(isNegative(99));
    console.log(isNegative(-2));
    console.log(isNegative(-99));


    function getFirstChar(arg1){

     return arg1.charAt(0); 

    }

    console.log(getFirstChar("Aziz"));
    console.log(getFirstChar("Let"));
    console.log(getFirstChar("&^%$%"));
    console.log(getFirstChar("$$&&*"));

    function getFirstChar(str){


        return str[0]

    }


    function getFirstLastChar(arg2){


        return arg2.charAt(0) + arg2.charAt(arg2.length - 1);


    }


    console.log(getFirstLastChar("Hello"));



function getRandomNumber(start, end ){


    return Math.floor(Math.random() * (end-start) + 1 ) + start;


}

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(21, 30));





// function average5 that takes 5 arguments and returns their average


function average5(n1, n2, n3, n4, n5){


    return ((n1 + n2 + n3 + n4 + n5) / 5);

}

console.log(average5(1,2,3,4,5));
console.log(average5(2,3,4,5,6));
console.log(average5(3,4,5,6,7));
