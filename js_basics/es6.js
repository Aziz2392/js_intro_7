Write a function that takes an array of numbers and a function as parameters. 
The function paremeter should do something to a numbers (increment, double, decrement, etc) 
and return the result. Your function should return the array that results from applying the 
function parameter to each element in the number array.

Ex: Input: [1,2,3] function(num){return num * 2*} Output: [2,4,6]

Input: [1,2,3] function(num){return num + 1} Output: [2,3,4]

Input: [1,2,3] function(num) {return num /2} Output: [.5, 1. 1.5]

Input: [1,2,3] function(num) {return num - 2} Output: [-1, 0, 1]


function double() { 

}
function addOne() { 

}
function ab(arr, cb) {
    for(let number of arr){
        const newNum= cb(number);
        let idx = arr.indexOf(number);
        arr[idx] = newNum;
    }
    // does something 
    // also using cb function
}

const arr = [1,2, 3];

const double = (num) => num * 2;
const increment = (num) => num + 1;

console.log(map(arr, double));
console.log(map(arr, increment));


ab([1,2,3], double) // [2,4,6] => double
ab([1,2,3], addOne) // [2,3,4] => add +1



/////
function getCityName() {
    const cityName = "Des Plaines";
    return cityName ;
}
function showAddress() {
    return "2860 River Rd" + getCityName();
}
function getStateName() {
    return showAddress() + "IL"
}

console.log(getStateName());


console.log("foo", foo);
console.log("bar", bar);
var foo = 'foo'




////////////
hello();
//bye();

function hello(){
    bye();
    console.log('Hello');
    bye();
    function bye(){
        console.log('Bye');
    }
    //bye();
}

///////// bind()


let nameObj = {
    name: "Tony"
}
  
let PrintName = {
    name: "steve",
    sayHi: function () {
  
        // Here "this" points to nameObj
        console.log(this.name); 
    }
}

PrintName.sayHi();

const sayHiBind= PrintName.sayHi.bind(nameObj);
sayHiBind();


console.log(PrintName.name);
console.log(nameObj.name);




