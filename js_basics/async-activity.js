


class Task{
    constructor (id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = new Date();
    }

    
    
}

const Task1 = new Task(1, "manager", "watches over employees", Date() );

console.log(Task1);

class TaskManager {
    constructor(){
        this.AllTodos = [];
    }

    createATodo(newTodo){
        setTimeout (() => {
            this.AllTodos.push(newTodo);
            callback('Successfully added new todo')
    }, 2000);
    }

};

const todoManager = new TodoManager();
todoManager.createATodo(new Todo(1, 'Watch Tv', 'On weekend and this show'))
.then((message) => {
    console.log(message);
    console.log(todoManager);
})
.catch(err => console.log(err));

///////////////
/*
Give me a random number between 10 - 20 by waiting (delay)
5 seconds and using promise
Show a message "Number is valid" if its bigger than 15
else output "Number is invalid"

*/

// get rnd number => async
const getRandomNumber = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(randomNumber);
        }, 5000);

    })
}
   // In real world => you might request https://expedia.com which might take some time to open


   // 2 assertion part


   getRandomNumber()//  Promise
   .then(num => {
    console.log(num);
    if(num > 15) console.log('Num is valid')
    else console.log('Number is invalid')
   })
   .catch(err => console.log(err));

   // Async Await

   async function resolveRandomNumber() {
    try{
        let randNum = await getRandomNumber();
        console.log(randNum);
        if(randNum > 15) console.log('Number is valid ----')
        else console.log('Number is valid----')
    }
   }
  
