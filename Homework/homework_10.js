
// homework 10

// TASK 1 calculateTotalPrice1


const calculateTotalPrice1 = items => {

    const menu = {
        apple : 2.00,
        orange : 3.29,
        mango : 4.99,
        pineapple : 5.25
    }

    let total = 0;

    for(let item in items){
       //  console.log(items[item]) -- pulls items number value (i.e apple 3, mango 1)
       // console.log(menu[item]) -- pulls menu item value (i.e apple 2.00, mango 4.99)
        total += menu[item] * items[item]
    }


    return console.log(total); 
}


calculateTotalPrice1({ apple: 3, mango: 1 }) 			//-> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }) 		//-> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }) 		//-> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 }) 	//-> 12.24

// TASK 2

const calculateTotalPrice2 = items => {

    const prices = {
        Apple : 2.00,
        Orange : 3.29,
        Mango : 4.99,
        Pineapple : 5.25
    };

    let total = 0; 

    for(let item in items){
      //  console.log(items[item])
        const noSale = items[item] * prices[item];
        let sale = 0;
      if(item === 'Apple') sale = (Math.floor(items[item] /2)  * prices[item]) /2 
      //total += noSale - sale
      else if(item === 'Mango') sale = Math.floor(items[item] /4 ) * prices[item]
        //total += noSale - sale;
      total += noSale - sale;
    }

    return total === 0 ? total : total.toFixed(2);
}

console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })) 			//-> 24.96
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })) 		//-> 45.81
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })) 		//-> 0
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })) 	//-> 29.51

// TASK 3

/*
const nthWord = (str, num) => {
   let words = str.split(' ');
   
   return words[num - 1] || ''

}
*/
// OR

const nthWord = (str, num) => str.split(' ')[num - 1] || ''

console.log(nthWord("I like programming languages", 2)) 	
console.log(nthWord("QA stands for Quality Assurance", 4))	
console.log(nthWord("Hello World", 3)) 		
console.log(nthWord("Javascript", 1)) 		
console.log(nthWord("", 1)) 			

// TASK 4





// TASK 5 reverse number

const reverseNumber = (num) => console.log(num.toString().split('').reverse().join(''));

reverseNumber(371) //	-> 173
reverseNumber(123) 	//-> 321
reverseNumber(12) 	//-> 21
reverseNumber(0) 	//-> 0
reverseNumber(111) //	-> 111


// TASK 6 doubleorTriple

function doubleOrTriple(arr, boolean){


    if(boolean === true){
        for(i = 0; i < arr.length ; i++){
            ;
        }
       return ;
    }
}


console.log(doubleOrTriple([1, 5, 10], true) );
