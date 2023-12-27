
// HOMEWORK 16

// TASK 1

function toInitials(string){

   let firstInitial = string[0];
   let lastInitial = string.slice(string.indexOf(" "), string.indexOf(" ") + 2)

    console.log(firstInitial + '.' + ' ' + lastInitial + '.')

}

toInitials( "Joe Doe") //	-> "J. D."
toInitials( "Alex Reyes") //	-> "A. R."
toInitials( "Tom Cruise") //	-> "T. C."
toInitials( "Bruce Willis") 	//-> "B. W."
toInitials( "Ja Le") //	-> "J. L."


// TASK 2

const hasNumbers = string => console.log(string.trim().split('').filter(x => ['0', '1','2','3','4','5','6','7','8','9'].includes(x)) ? true : false )


function hasNumbers(string){


    //if(string.trim().split('').filter(x => ['0', '1','2','3','4','5','6','7','8','9'].includes(x))) return true
    //else return false

    if(string.includes('0') || string.includes('1') || string.includes('2') || string.includes('3') || string.includes('4')
    || string.includes('5') || string.includes('6') || string.includes('7') || string.includes('8') || string.includes('9')) return true
    else return false
}

console.log(hasNumbers("")) 		//-> false
console.log(hasNumbers("John is 34 years old")) //	-> true
console.log(hasNumbers("Hello 3")) 	//	-> true
console.log(hasNumbers("125$")) 		//-> true
console.log(hasNumbers("  a   ")) 	//	-> false
console.log(hasNumbers("      ")) 	//	-> false
console.log(hasNumbers("!@#$%^&*()_+")) //	-> false


// TASK 3

function elementLength(array){

    const length = [];
    
    for(word of array){
        let wordLength = word.trim().length;
    
        if(wordLength === 0) length.push(0)
       else if(wordLength > 1) length.push(wordLength) 
    }
    
    console.log(length)

}

elementLength( [ "Hello", "World" ] ) 		//	-> [ 5, 5 ]
elementLength( [ "Apple", "Banana", "Orange", "Pear" ] ) //	-> [ 5, 6, 6, 4 ]
elementLength( ["BMW", "Mercedes", "Audi" ] ) 	//	-> [ 3, 8, 4 ]
elementLength( [ ] ) 		//		-> [ ]
elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] ) //	-> [ 10, 0, 6, 10 ]

// TASK 4

function isArraySumEvenOrOdd(array){

    let sumArray = array.reduce((sum, value) => sum + value , 0)

    if(sumArray % 2 === 0) console.log('even')
    else console.log('odd')
}

isArraySumEvenOrOdd( [ ] ) //	-> "even"
isArraySumEvenOrOdd( [ 0,-1,-5 ] ) // -> "even"
isArraySumEvenOrOdd( [ 7,1, 8,1 ] ) // ->  "odd”
isArraySumEvenOrOdd( [ 0,0 ] ) //	->  "even"
isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )  //   ->  "odd”



// TASK 5

function reverse(string){

    const strArray = string.trim().split(' ')

    for(i = 0; i < strArray.length; i++){

        strArray[i] = strArray[i].split('').reverse().join('');

    }

    console.log(strArray.reverse().join(' '));

}


reverse("Hello World") 	//	-> "dlroW olleH"
reverse("TechGlobal") 		//-> "labolGhceT"
reverse("Basketball is fun") 	//-> "nuf si llabteksaB"
reverse("") 		//	-> ""
reverse("Apples 456") 	//	-> "654 selppA"

// TASK 6

function reverseWords(string){

    const strArray = string.trim().split(' ')

    for(i = 0; i < strArray.length; i++){

        strArray[i] = strArray[i].split('').reverse().join('');

    }

    console.log(strArray.join(' '));

}


reverseWords("Hello World") 	//	-> "dlroW olleH"
reverseWords("TechGlobal") 		//-> "labolGhceT"
reverseWords("Basketball is fun") 	//-> "nuf si llabteksaB"
reverseWords("") 		//	-> ""
reverseWords("Apples 456") 	//	-> "654 selppA"


