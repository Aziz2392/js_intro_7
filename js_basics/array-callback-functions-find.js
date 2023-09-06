
const numbers = [0, 10, -4, 5, 2, -3];
/*
console.log(numbers.find(num => num > 0));
console.log(numbers.find(num => num < 0));
console.log(numbers.find(num => num % 2 === 0));
console.log(numbers.find(num => num % 2 !== 0));
console.log(numbers.findIndex(num => num > 0));
console.log(numbers.findIndex(num => num < 0));
console.log(numbers.findIndex(num => num % 2 === 0));
console.log(numbers.findIndex(num => num % 2 !== 0));
console.log(numbers.findIndex(num => num > 100));
*/

/*
console.log(numbers.findIndex(num => {
    if(num > 100) console.log(num);
    else{
        console.log('-1');
    }
}))

console.log(numbers.findLast(num => num > 0));
console.log(numbers.findLast(num => num < 0));
console.log(numbers.findLast(num => num % 2 === 0));
console.log(numbers.findLast(num => num % 2 !== 0));
console.log(numbers.findLastIndex(num => num > 0));
console.log(numbers.findLastIndex(num => num < 0));
console.log(numbers.findLastIndex(num => num % 2 === 0));
console.log(numbers.findLastIndex(num => num % 2 !== 0));




// First positive -> 10
// first negative -> -4
// first even     -> 0
// first odd      -> 5

// Last positive -> 2
// last negative -> -3
// last even     -> 2
// last odd      -> -3

*/

////////////////////////////////////////////////////////////////////


const things = ['Knife', 'Spoon', 'Fork', 'Pan', 'Mug'];

const resultMap = things.map((v, i) => {
    return{
        value: v,
        index: i
    }
}).find(obj => obj.value.length === 3);

console.log(resultMap);

/*
// ALTERNATIVE
for(let i = 0; i < things.length; i++){
    if(things[i].length === 3) {
        const result = {
            value: things[i],
            index: i
        }
        console.log(result);
        break;
    }
}
*/


// Find first element that has 3 letters with its index

console.log(things.find(t => t.length === 3))
console.log(things.findIndex(t => t.length === 3))

const el = things.find(t => t.length === 3) ;
const i = things.findIndex(t => t.length === 3);

const result = {
    value: el,
    index: i
};

// Or PREFERRED way


const result1 = {
    value: things.find(t => t.length === 3),
    index: things.findIndex(t => t.length === 3)
}

console.log(result);
console.log(result1);