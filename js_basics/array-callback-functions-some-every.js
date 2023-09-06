
const numbers = [-5, 0, 5, 10, 23, -10];

console.log(numbers.some(num => num % 5 === 0));


const data = [true, 'str', true];

console.log(data.every(d => d === true || d === false));

const cities = ['Rome', 'Kyiv', 'Paris', 'Milan'];

// Check if every city has 4 or 5 letters ->

console.log(cities.every(city => city.length === 4 || city.length === 5));