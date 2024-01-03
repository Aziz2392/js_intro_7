// Homework 14

// TASK 1
const repeatingX = (str) => console.log(str.toLowerCase().includes('xx'));

repeatingX("xTechxGlobalx") // -> false
repeatingX("Hello Xx World") // -> true
repeatingX("x x") // -> false
repeatingX("") // -> false
repeatingX("xxxxx") // -> true

// TASK 2

const isPerfectSquare = num => console.log(Math.sqrt(num) % 1 === 0)

isPerfectSquare(25) //-> true
isPerfectSquare(24)// -> false
isPerfectSquare(0) // -> true
isPerfectSquare(1) // -> true
isPerfectSquare(-1) // -> false
isPerfectSquare(144) // -> true


// TASK 3

function convertTemperature(num, str){

    if(str === 'Celsius'){
        console.log((num * 9)/5 + 32)
    }
    else console.log((num - 32) * 5/9)
}

convertTemperature(100, 'Celsius') // -> 212
convertTemperature(32, 'Fahrenheit') // -> 0
convertTemperature(0, 'Celsius') // -> 32
convertTemperature(212, 'Fahrenheit') // -> 100
convertTemperature(-40, 'Celsius') // -> -40
convertTemperature(-40, 'Fahrenheit') // -> -40

// TASK 4

const sumOfEvenNumbers = arr =>  console.log(arr.filter(x => x % 2 === 0).reduce((sum, x) => sum + x , 0));


sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) // -> 30
sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ) // -> 110
sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) // -> 0
sumOfEvenNumbers( [ ] ) // -> 0
sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ) // -> 6
sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ) // -> 150


// TASK 5

const capsOdds = (arr) =>   console.log(arr.map((str, i) =>  i % 2 !== 0 ? str.toUpperCase() : str));

capsOdds(["Hello", "World"]) // -> ["Hello", "WORLD"]
capsOdds(["Jan", "Feb", "Mar", "Apr"]) // -> ["Jan", "FEB", "Mar", "APR"]
capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])//  -> ["Apple", "BANANA", "123", "456", "Peach", "KIWI"]
capsOdds([ ]) // -> [ ]
capsOdds(["John !@#$%", "^&*() Doe"]) //-> ["John !@#$%", "^&*() DOE"]
    


