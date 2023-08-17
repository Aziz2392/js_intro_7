

ran1 = Math.floor(Math.random() * 2) ;

console.log(ran1);

if (ran1 == 0){

console.log("The number is ZERO ")
}
else
{

console.log("The number is ONE ");

}
/////////////////


function getRandomNumber(start, end ){


return Math.floor(Math.random() * (end-start) + 1 ) + start;


}

//let num = getRandomNumber(0 , 1)


let num2 = getRandomNumber(1 , 10);

console.log(num2);

if(num2 % 2 == 0){
console.log("The number is EVEN");

}

else
{

console.log("The number is ODD");

}

////////////////////


function getRandomNumber(start, end ){
    return Math.floor(Math.random() * (end-start) + 1 ) + start;
     }
    num3 = getRandomNumber(-2 , 2);
    console.log(num3);

    if(num3 > 0){
        console.log("The number is POSITIVE");
    }
    else if(num3 < 0){
    console.log("The number is NEGATIVE");
    }
    else{
        console.log("The number is ZERO");
    }

    ///////////////////////