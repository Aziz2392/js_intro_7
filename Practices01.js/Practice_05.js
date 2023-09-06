

/*

function firstPos(array){
let firstPos = null;

for(const pos of array){
    if(pos > 0) return pos;
   
   
}
    return firstPos;
}

console.log(firstPos([0, 3, -9, 5, 8]));

////////

function lastNeg(array){
  for(const number of array.reverse()){
    if(number < 0) return number;
  }
}

console.log(lastNeg([-2, 0, -7, 10, -5]));

*/



/*

function firstLongest(array){

    let firstLongest = '';

    for(const long of array){
        if(long.length > firstLongest.length) firstLongest = long ;
        
    }
    return firstLongest ;
}

console.log(firstLongest(["red", "blue", "yellow", "white"]));


function lastShortest(array){
    let lastShortest = array[0];
    for(const short of array){
        if(short.length <=lastShortest.length) lastShortest = short
    }
    return lastShortest;
}

console.log(lastShortest(["blue", "red","yellow", "white"]));

*/

function max(array){
    let max = -Infinity;

    for(const x of array){
        if(x > max) max = x;
     
    }
    return max;
}

// OR

function max(array){
    let max = null;
    let min = -Infinity;

    for(const x of array){
        if(x > min)
        max = x;
        min = max;
    }
    return max ; 
}



/*

function min(array){
    let max = Infinity;

    for(const y of array){
        if(y < max) min = y;
        max = min;
    }
    return min
}

console.log(min([1, 2, 3, -7,  15]));


*/

function commonElements(array , array2){

const commonElements = [] ; 

for(const x of array ){
    if(array2.includes(x)) commonElements.push(x) ;

}

    return commonElements ;
}

console.log(commonElements([10, 20, 30, 50, 70 ] , [20, 50, 70]));
















console.log(max([1, 2, 3, -2]));


function firstDuplicate(array){
    let firstDuplacate ;

    for(const str of array.toString()){
        if(str == str) firstDuplicate = str;
    }

    return firstDuplicate
}

console.log(firstDuplicate([bc, re, "abcd", "re"]));



// const newArr = numbers.map(x => x % 2 === 0);

// const evenNumbers = numbers.filter(x => x % 2 === 0);


// const evenNumbers = numbers.filter(x => x % 2 === 0).map(x => x * 2); This filters then maps each number multiplied by 5 in an array






