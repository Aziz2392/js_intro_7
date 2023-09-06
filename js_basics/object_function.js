
const student = {
    fName : 'Alex',
    lName : 'Smith',
    age : 30 ,
    fullName : function (){
       return `${this.fName} ${this.lName}`;
    },
    info : function (){
        return ` ${this.fullName()}'s age is ${this.age}.`;
    }
};

console.log(student.fullName())
console.log(student.info());