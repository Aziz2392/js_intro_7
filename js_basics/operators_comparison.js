
let num1 = 3, num2 = 5, num3 = 3, num4 = "3", num5 = "5";


console.log(num1 == num2); // False
console.log(num1 == num3); // True
console.log(num1 == num4); // True
console.log(num1 === num4); // False both value and data type have to be equal


console.log(num1 != num3); // False
console.log(num1 !== num3); // False
console.log(num2 > num5); // False
console.log(num1 <= num3); // True

console.log(num1 + num5 < 2 * num4); // False cannot run string with a number

console.log(num4 * num5 != num3); // true

console.log(typeof (num4 * num5)); // number

console.log("abc" * "5"); // NaN (Not a Number)
console.log(typeof NaN); // number


console.log("3" + "5" < 20); // False
console.log("3" * "5" + 10 ===25);  // True


//tab and space

console.log("\tJavaScript is a high-level programming language primarily used to\nbuild web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js."
);

// or

console.log(`\tJavaScript is a high-level programming language primarily used to
build web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js.`
);

