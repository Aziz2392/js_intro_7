
const numbers = [25, 27, 7, 100, 7];

// includes() function

console.log(numbers.includes(7));



// indexOf() function
console.log(numbers.indexOf(5)); // -1
console.log(numbers.indexOf(7)); // 2
console.log(numbers.indexOf(numbers[3])); // 3  because numbers [3] is 100 and the index of 100 is 3.

// lastIndexOf() function
console.log(numbers.lastIndexOf(7)); // 4
console.log(numbers.lastIndexOf(101))


const student = ['Abdullah', 'Aziz', 'Alex', 'Bali', 'Ihar', 'Ramez', 'Ivan', 'Yuliia', 'Yunus', 'Yurii', 'Yazan'];

random_index = Math.floor(Math.random() * student.length);

console.log(`LUCKY STUDENT IS ${students[random_index]}`);