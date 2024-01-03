// HOMEWORK 17

// TASK 1 


function findMedian(arr1, arr2){

    let finalArray = arr1.concat(arr2);
    
    let sortedArray = finalArray.sort()

    if(arr1.concat(arr2).length % 2 !== 0) console.log(sortedArray[Math.floor(sortedArray.length/2)])
    else console.log(finalArray.reduce((sum, value) => sum + value , 0)/ finalArray.length)

}

findMedian([1, 3], [2]) // -> 2
findMedian([1, 2], [3, 4]) // -> 2.5
findMedian([4], [3]) // -> 3.5
findMedian([4], [])  // -> 4
findMedian([0], [0,1])  //  -> 0


// TASK 2

function calculateFactorial(num){

    let total = 1
    
    for(let i = 2; i < num; i++ ){
        


        total *= i    

       
    }
    if(num === 0) console.log(1)
    else console.log(total * num)

}
calculateFactorial(0) // -> 1
calculateFactorial(1)  //-> 1
calculateFactorial(5)  //-> 120
calculateFactorial(6)  //-> 720
calculateFactorial(10) // -> 3628800
calculateFactorial(4) // -> 24

// TASK 3
/*
function calculateGCD(a, b) {
    if (a === 0)
        return b;

    while (b !== 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}
*/
const calculateGCD = (a, b) => (!b ? a : calculateGCD(b, a % b));

console.log(calculateGCD(8, 12)) // -> 4
console.log(calculateGCD(17, 5)) //-> 1
console.log(calculateGCD(48, 18)) // -> 6
console.log(calculateGCD(0, 5))// -> 5
console.log(calculateGCD(21, 14))//  -> 7
console.log(calculateGCD(60, 48)) // -> 12


// TASK 4


const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const calculateLCM = (x, y) => (x * y) / gcd(x, y);



console.log(calculateLCM(8, 12)) // -> 24
console.log(calculateLCM(17, 5))  //-> 85
console.log(calculateLCM(48, 18)) // -> 144
console.log(calculateLCM(0, 5))  //  -> 0
console.log(calculateLCM(21, 14)) // -> 42
console.log(calculateLCM(60, 48)) // -> 240