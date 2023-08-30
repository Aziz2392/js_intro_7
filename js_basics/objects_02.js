
const student = {
    firstName : 'Alex',
    lastName : 'Smith' , 
    hobbies : ['Soccer' , 'Watching movies'],
    examScores : { 
        midterm : 60 ,
        final : 90 
    }
}

console.log(student);

console.log(student.hobbies);
console.log(student.examScores);
console.log(student.hobbies[0]);
console.log((student.examScores.midterm + student.examScores.final) / 2);

/////////

const books = {
    bookName : 'Amok',
    authorName : {
        fName : 'Stefan',
        lName : 'Zweig'
    } ,
    genre : 'Novella'
}

console.log(books);





const bookInfo = [
    {
        bookName : 'Amok',
        authorName : {
            fName : 'Stefan',
            lName : 'Zweig'
        } ,
        genre : 'Novella'   
    },
    {
        bookName : 'Harry Potter',
        authorName : {
            fName : 'J. K',
            lName : 'Rowling'
        } ,
        genre : 'Fiction'  
    },
    {
    bookName : '1984',
    authorName : {
        fName : 'George',
        lName : 'Orwell'
    } ,
    genre : 'Dystopian Literature' 
}
]

let count = 0

for(const book of bookInfo){
    if(book.authorName.fName.includes('a')) count++
}

console.log(count);

console.log(bookInfo);

