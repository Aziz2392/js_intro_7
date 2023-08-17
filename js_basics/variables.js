

differences between var, let and const  // this is used for variables i.e. name, age, gender etc.

let fname = "Aziz"; // string
let age = "31"; // number or int // Age is 31
let address = "Chicago"; // string // The city is Chicago

console.log("My name is " + fname); 
console.log(age);
 console.log(address);// concatenation


 var lname; // decleration

 console.log(lname); // undefined



 lname = "Doe";// assignment

 console.log(lname); // Doe

  lname = "Morgan"; // re-assignment

 console.log(lname); // Morgan



 // Differences between let and const

 let street = "S River rd";
 console.log(street);

 street = "N River rd";
 console.log(street);