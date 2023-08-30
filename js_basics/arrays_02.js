
// TASK 1 : retrieve Igor and retrieve Aziz in capitals
const names = ["Yuliia", "Alex", "Bali", "Igor", "Ramez", "Aziz"];

console.log(names[3]);
console.log(names[5].toUpperCase());


const rand = []

rand[0] = Math.ceil(Math.random() * 10);
rand[1] = Math.ceil(Math.random() * 10);
rand[2] = Math.ceil(Math.random() * 10);
rand[3] = Math.ceil(Math.random() * 10);
rand[4] = Math.ceil(Math.random() * 10);

console.log(rand);
console.log(rand[0], rand[rand.length - 1]);
console.log((rand[0] + rand[1] + rand[2] + rand[3] + rand[4]) / 5);
//console.log(Math.avg(rand));