
// TASK 21 is Armstrong

const isArmstrong = num => num.toFixed().split('')
.reduce((total, i) => total + Math.pow(i, num.toFixed().length), 0) === num; 

// TASK 22 is Anagram

const isAnagram = (str1, str2) => {

    let str1Mod = str1.toLowerCase().replaceAll(' ', '').split('').sort().join('');
    let str2Mod = str2.toLowerCase().replaceAll(' ', '').split('').sort().join('');
 
    return str1Mod === str2Mod && str1 !== str2 ;


}


// TASK 25 

const countOccurrence = (str1, str2) => { 

    let count = 0;
    let str2Sorted = str2.toLowerCase().split('').sort().join('');

    for(let i = 0; i <= str1.length; i++){

        let sub = str1.slice(i, i + str2.length).toLowerCase().split('').sort().join('');

        if(sub === str2Sorted){
            count++; 
            i += str2.length -1;
        }
    }
    return count;
}