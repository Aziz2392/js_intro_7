
const numbers = [5, 10, 100];

console.log(numbers.reduce((max, number) => Math.max(max,number), null));


// Find summ of these numbers => 115


console.log(numbers.reduce((sum, first) => sum + first));

// Find sum of even numbers


console.log(numbers.reduce((sum, curr) => {
    if(curr % 2 === 0) return sum + curr;
    else return sum;
    
}, 0));

// OR

const sumEvens = numbers.filter(x => x % 2 === 0).reduce((sum, curr) => sum + curr, 0);
console.log(sumEvens)

//////////////////////////////////////////////////