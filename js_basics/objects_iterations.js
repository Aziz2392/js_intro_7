
const car = {
    color : 'red',
    year : 2023 ,
    make : 'BMW' ,
    model : 'X7' 
}

console.log(car.color);
console.log(car.year);
console.log(car.make);
console.log(car.model);


// All the keys -> [color, year, make, model]
// All the values -> [red, 2003, BMW, X7]
// All the pairs (properties) -> [[color, red], [year, 2003], [make, BMW], [model, X7]]

const allKeys = Object.keys(car);

console.log(allKeys);

const allValues = Object.values(car);

console.log(allValues);

const allPairs = Object.entries(car);

console.log(allPairs);

console.log('-----------------------------');
for(const variable of Object.values(car)){
    console.log(variable);
}

console.log('--------------------------------------')

for(const keys of Object.keys(car)){
    console.log(keys);
}

console.log('-----------------------------------')

for(const entry of Object.entries(car)){
    console.log(entry);
}

console.log('OR');

for(const [key, value] of Object.entries(car)){
    console.log(key + " : " + value);
}


///////////////





const arr = [3, 4, 5, 6, 7] ;
/*
let count = 0;

for(const number of arr){
    if(number > 5) count++;
}

console.log(count); 
*/


function more5(arr){
    let count = 0;

for(const number of arr){
    if(number > 5) count++;
}

return count; 
}

const obj1 = {};
const obj2 = new Object{};