
// HOMEWORK 15

// TASK 1 (Close but not there yet. It works fo two words but not more than 2 words)

function toCamelCase(string){

    const strArr = string.trim().split(' ').filter(x => x.length >= 1)
    
    
    for(let i = 1; i < strArr.length; i++){

        let firstWord = strArr[0].trim().toLowerCase()
        let upperLetter = strArr[i][0].toUpperCase()
        let letters = strArr[i].slice(1, strArr[i].length).toLowerCase() 
        
        let joined = upperLetter + letters

        return firstWord + joined;
       
    }
   
    
}

console.log(toCamelCase("first name"))	//->"firstName"
console.log(toCamelCase("last    name")) //	->"lastName"
console.log(toCamelCase("      ZIP CODE")) //	->"zipCode"
console.log(toCamelCase("I Learn Java Script"))  //	-> "iLearnJavaScript"
toCamelCase(“helloWorld”)   //​	-> “helloWorld”

// TASK 2

function toSnakeCase(string){

    const strArr = string.toLowerCase().trim().split(' ').filter(x => x.length >= 1)
    
    if(strArr.length === 1) console.log(string)  
    else console.log(strArr.join('_'))
    // console.log(strArr.join('_'))
}

toSnakeCase("first name") 	//->"first_name"
toSnakeCase("last    name") //	->"last_name"
toSnakeCase("    I love Java Script") //	->"i_love_java_script"
toSnakeCase("already_snake_case")   //-> "already_snake_case"
toSnakeCase("hello")  		//​-> "hello"

// TASK 3




// TASK 4

Not sure what this is asking. Need clarity


// TASK 5 (not sure how to convert the alphabets into positive or negative)

function isTrueOrFalse(string){

    const strArray = string.toLowerCase().trim().replaceAll(' ', '').split('')

    let positive = []
    let negative = []
    

    for(letter of strArray){
        
        if(['a','b','c','d','e','f','g','h','i','j','k','l','m'].includes(letter)) positive.push(letter)
        else negative.push(letter)

    }

    if(positive.length >= negative.length) return true
    else return false 
   
}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")) //	-> true
console.log(isTrueOrFalse("Xylophones can obtain Xenon."))  //   		->  false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")) //	-> true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")) //	-> true
console.log(isTrueOrFalse("Got stuck in the Traffic")) 	//	-> false
