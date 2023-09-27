// Create body

const bodyElemen = document.querySelector('body')

/// Create ul and li

const ulElemen = document.createElement('ul');
const liElemen = document.createElement('li');

const addTdodo = (text) => {
// Append user text liEl
liElemen.textContent = UserList;
// Append liEl inside ulEl
ulElemen.append(liElemen);

// Append ulEl inside body eleme
bodyElemen.append(ulElemen)

}

const UserList = window.prompt('Enter your todo list');


const askUserQuestion = window.confirm('Do you want to continue?');
if(askUserQuestion){
    console.log('Yes');
}
else {
    console.log('No');
}

const newElement = document.createElement('p')

