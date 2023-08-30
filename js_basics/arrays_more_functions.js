const arr = ['Grapes', 'Kiwi', 'Apple', 'Orange'];


const sub_array_1 = arr.slice();
const sub_array_2 = arr.slice(0);
const sub_array_3 = arr.slice(1);
console.log(sub_array_1);
console.log(sub_array_2);
console.log(sub_array_3);


arr.splice(1, 0, 'Pineaplle');
console.log(arr);


let str = 'Tech';
let arrstr = str.split("");


const arr1 = arrstr
console.log(arrstr);

// '1-2-3-4-5-6'


let numarr = '1-2-3-4-5-6'
const data_numarr = numarr.split('-')

let data_numarr_string = data_numarr.join(' 000 ')
console.log(data_numarr_string);

// OR

console.log('1-2-3-4-5-6'.split('-').join(' 000 '));

//////////

let sentence = 'Well, arrays does not look that easy but I will do it!'
console.log(sentence.split(' ').length);