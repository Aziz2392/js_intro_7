
// HOMEWORK 8


// TASK 1 (it works but I want to shorten the function)

function hasLowerCase(str){
 if(str.includes('a')|| str.includes('b')|| str.includes('c')|| str.includes('d')|| str.includes('e')|| str.includes('f')|| str.includes('g')|| str.includes('h')|| str.includes('i')
 || str.includes('j')|| str.includes('k')|| str.includes('l')|| str.includes('m')|| str.includes('n')|| str.includes('o')|| str.includes('p')|| str.includes('q')|| str.includes('r')
 || str.includes('s')|| str.includes('t')|| str.includes('u')|| str.includes('v')|| str.includes('w')|| str.includes('x')|| str.includes('y')|| str.includes('z')) console.log(true);
 else console.log(false);
   
    
}

hasLowerCase("") 
hasLowerCase("JAVASCRIPT")  
hasLowerCase("hello") 
hasLowerCase("125$")  
hasLowerCase("   a   ")  

// TASK 2 (complete)

function noZero(arrNum){
    const containerZ = [];
    const noZ = [];

    for(num of arrNum){
        if(num === 0) containerZ.push(num);
        else noZ.push(num);
    }
    console.log(noZ);
}

noZero([1]) ;
noZero( [1, 1, 10] );   
noZero([0, 1, 10]);  
noZero([0, 0, 0]);  
noZero([10, 100, 0]); 


// TASK 3 (almost there but not in the format that I would like)

function numberAndSquare(arrSquare){
    const arrSq = [];
    const arrSqua = [arrSq];

    for(numb of arrSquare){
        let squared = numb * numb;
        arrSq.push(numb, squared );
        arrSqua.push(arrSq)
    }
    console.log(arrSqua);
}

numberAndSquare([1, 2, 3]); 

// TASK 4 (complete)

const containsValue = (array, value) => {
   if(array.includes(value)) console.log(true);
   else console.log(false);
}

containsValue(["abc", "foo", "javascript"], "hello");
containsValue(["abc", "def", "123"], "Abc");
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123");

// TASK 5 (did you want me to capitalize the first letter in the outcome?)

const reverseSentence = (sentence) => {
    if(sentence.split(' ').length < 2) console.log('There is not enough words!')
    else console.log(sentence.split(' ').reverse().join(' '));
}

reverseSentence("Hello");
reverseSentence('javascript is fun');
reverseSentence("This is a sentence");

// TASK 6 (need more time to work on making sure the outcome has spaces)

const removeStringSpecialsDigits = (str) => console.log(str.toLowerCase().split('').filter(i => i >= 'a' && i <= 'z').join(''));


//console.log(str.toLowerCase().split('').filter(i => i >= 'a' && i <= 'z').join(' '));



removeStringSpecialsDigits('123Javascript #$%is fun');



// TASK 7 (I tried this a few times and would need more time to come up with an answer. Will look at solution when you relase it)



// TASK 8 (complete)

const getCommons = (arr1, arr2) =>  {

    const comm = [];

    for(i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]) comm.push(arr1[i]);
    }
    console.log(comm);
}


getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] );

getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) ;