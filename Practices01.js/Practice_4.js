

let num = 39

 if(num < 50){
     console.log("1st half");
    {
        if(num <= 25){
             console.log("1st Quarter");}
            else if(num > 25 && num <= 50){
               console.log("2nd Quarter");
            }
        }
    }

    if(num > 50){
        console.log("2nd half");
      { if(num > 50 && num < 76){
           console.log("3rd Quarter");}
           else if(num >= 76 && num <= 100){
                console.log("4th Quarter")
           }
        }
       }
/////////////////////////////////////////////////////////////////////
    
       let num1 = 59; // 1, 100
// WAY-1
if(num1 <= 25) {
    console.log(`${num1} is in the 1st half\n${num1} is in the 1st quarter`);
}
else if(num1 <= 50) {
    console.log(`${num1} is in the 1st half\n${num1} is in the 2nd quarter`);
}
else if(num1 <= 75) {
    console.log(`${num1} is in the 2nd half\n${num1} is in the 3rd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half\n${num1} is in the 4th quarter`);
}
// WAY-2
if(num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
}
else {
    console.log(`${num1} is in the 2nd half`);
}
if(num1 <= 25) {
    console.log(`${num1} is in the 1st quarter`);
}
else if(num1 <= 50) {
    console.log(`${num1} is in the 2nd quarter`);
}
else if(num1 <= 75) {
    console.log(`${num1} is in the 3rd quarter`);
}
else {
    console.log(`${num1} is in the 4th quarter`);
}
// WAY-3
if(num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    if(num1 <= 25) {
        console.log(`${num1} is in the 1st quarter`);
    }
    else {
        console.log(`${num1} is in the 2nd quarter`);
    }
}
else {
    console.log(`${num1} is in the 2nd half`);
    if(num1 <= 75) {
        console.log(`${num1} is in the 3rd quarter`);
    }
    else {
        console.log(`${num1} is in the 4th quarter`);
    }
}
// SHORT for WAY-3
if(num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    if(num1 <= 25) console.log(`${num1} is in the 1st quarter`);
    else console.log(`${num1} is in the 2nd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half`);
    if(num1 <= 75) console.log(`${num1} is in the 3rd quarter`);
    else console.log(`${num1} is in the 4th quarter`);
}
// TERNARY for WAY-3
if(num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    console.log(num1 <= 25 ? `${num1} is in the 1st quarter` : `${num1} is in the 2nd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half`);
    console.log(num1 <= 75 ? `${num1} is in the 3rd quarter` : `${num1} is in the 4th quarter`)
}


//////////////////////////////////

let num21 = 3 ;
let num22 = 2;

if(num21 === num22){
    console.log("true");
}
else{
    console.log("false");
}






let num23 = 2 , num24 = 3 ;

num23 === num24 ? console.log("true") : console.log("false");


/////////////////////////////////////////////

let n1 = 2, n2 = 4 , n3 = 7 ;

n1 % 2 == 0 && n2 % 2 == 0 && n3 %2 == 0 ? console.log("true") : console.log("false");




let n1 = 2, n2 = 4 , n3 = 8 ;

console.log(n1 % 2 == 0 && n2 % 2 == 0 && n3 %2 == 0 ? "true" : "false");



/////////////////////////

let var4 = "5";
console.log(var4.charCodeAt(0));
if(48 <= var4.charCodeAt(0) && var4.charCodeAt(0) <= 57) console.log(`"${var4}" is a digit`);
else console.log(`"${var4}" is a letter`);
if("0123456789".includes(var4)) console.log(`"${var4}" is a digit`);
else console.log(`"${var4}" is a letter`);

/*

charCodeAt() -> returing ASCII decimal representation of characters
0-127
32 means the character is space
48 - 57 (both inclusive) means the character is digit [0-9]
65 - 90 (both inclusive) means the character is uppercase letter [A-Z]
97 - 122 (both inclusive) means the character is lowercase letter [a-z]


*/

///////////////////////
let var1 = "$";

if(var1.charCodeAt(0) > 90 && var1.charCodeAt(0) < 97 && var1.charCodeAt(0) !== 0 && var1.charCodeAt(0) > 32 && var1.charCodeAt(0) < 58) console.log(`${var1} is a special character`)
else {console.log(`${var1} is not a special character`) ;
}
///////////////////////
let a1 = "C";

if(a1.charCodeAt() >= 65 && a1.charCodeAt() <=90){
    console.log(`${a1} is a uppercase letter`)
}
else if(a1.charCodeAt() >= 97 && a1.charCodeAt() <= 122){
    console.log(`${a1} is a lowercase letter`)
}
else{
    console.log("INVALID INPUT");
}

/////////////////
let var7 = "6"

if(var7.charCodeAt(0) >= 65 && var7.charCodeAt(0) <=90 || var7.charCodeAt(0) >= 97 && var7.charCodeAt(0) <= 122){
    if(var7.includes("a") || var7.includes("e") || var7.includes("i") || var7.includes("o") || var7.includes("u") || var7.includes("A") || var7.includes("E") || var7.includes("I") || var7.includes("O") || var7.includes("U")){
        console.log(`${var7} is a vowel`)}
        else{
            console.log(`${var7} is not a vowel`)
        }
    }
    else {
        console.log("Invalid Input");
    }



//ORRRRR





//////////////////// vowels

//let var7 = "A";

if(var7.charCodeAt() >= 65 && var7.charCodeAt() <=90){

}


///////////////////////////////////////////
//let var8 = "%"


if(var8.charCodeAt(0) >= 65 && var8.charCodeAt(0) <=90 || var8.charCodeAt(0) >= 97 && var8.charCodeAt(0) <= 122){
    console.log(`${var8} is a letter`);
}
else if(var8.charCodeAt(0) >= 48 && var8.charCodeAt(0) <= 57){
    console.log(`${var8} is a digit`);
}
else if(var8.charCodeAt(0) = 32){
    console.log(`${var8} is a whitespace`);
}
else{
    console.log("Special character")
}

let var8 = " ";

if(var8.charCodeAt(0) === 32){
    console.log(`${var8} is a whitespace`);
}
else if(var8.charCodeAt(0) >= 48 && var8.charCodeAt(0) <= 57){
    console.log(`${var8} is a digit`);
}
else if(var8.charCodeAt(0) >= 65 && var8.charCodeAt(0) <=90 || var8.charCodeAt(0) >= 97 && var8.charCodeAt(0) <= 122){
    console.log(`${var8} is a letter`);
}
else{
    console.log(`${var8} Special character`)
}




for (i = 0; i <= 7; i++){
    console.log(`The square of ${i} is = ` + i * i);
}