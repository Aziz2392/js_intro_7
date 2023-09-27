


const clickBtn = document.getElementById('clickBtn');

// Adding event listner to button
clickBtn.addEventListener('click', (event) => {
    
    console.log('You clicked!', event.target);
})


// dblclick

const dblclick = document.getElementById('dblclick');

dblclick.addEventListener('dblclick', (event1) => {
    console.log('You Double clicked', event1.target);
})

// mousedown

const mousedownBtn = document.getElementById('mousedownBtn');

mousedownBtn.addEventListener('mousedown', (event2) => {
    console.log('You pressed down =>', event2.target);
})

const mouseupBtn = document.getElementById('mousedownBtn');

mouseupBtn.addEventListener('mouseup', (event3) => {
    console.log('You pressed up =>', event3.target);
})

// mousemove

const mouseMoveBtn = document.getElementById('mouseMoveBtn');

mouseMoveBtn.addEventListener('mousemove', (event4) => {
    console.log('You are moving inside button =>', event4.target);
})

// mouseout

const mouseOutBtn = document.getElementById('mouseOutBtn');

mouseOutBtn.addEventListener('mouseout', (event5) => {
    console.log('You are going out button =>', event5.target);
})


// Keyword events

const body = document.querySelector('body');

/*


// keydown

body.addEventListener('keydown', (event5) => {
    console.log('Keydown event! => ', event5.target);
});

// keyup    

body.addEventListener('keyup', (event6) => {
    console.log('Keyup event! => ', event6.target);
});

// keypress

body.addEventListener('keypress', (event6) => {
    console.log('keypress event! => ', event6.target);
});

*/

/////////////
// ///// Form events

const changeInput = document.getElementById('changeInput')

changeInput.addEventListener('change', (event7) => {
    // event.target.value => whatever user types on input (the text);
    console.log(event7.target.value);
})

// Input

const inputInput = document.getElementById('inputInput')

inputInput.addEventListener('change', (event8) => {
    // event.target.value => whatever user types on input (the text);
    console.log(event8.target.value);
})

// Focus // Input

const focusInput = document.getElementById('focusInput')

focusInput.addEventListener('focus', (event9) => {
    // event.target.value => whatever user types on input (the text);
    event9.target.style.backgroundColor = 'darkred';
    event9.target.style.color = 'white'
    
    ;
})

// blur

focusInput.addEventListener('blur' ,(event9) => {
    let element = event.target;
    element.style.backgroundColor = '';
    element.style.color ='';
})

// submit

/*
const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event10) => {
    event.preventDefault();
    console.log('Form successfully submitted!');
    console.log({
        name: 'Joe',
        email: 'joe@gmail.com'
    });
})

*/

const formEl = document.querySelector('form');

formEl.addEventListener('keypress', (event10) => {
    event.preventDefault();
    if(event10.key  === 13){
    console.log('Form successfully submitted!');
    console.log({
        name: 'Joe',
        email: 'joe@gmail.com'
    
    }
);}
})

////////
//////////// Window event


// scroll

window.getElementById('box').addEventListener('scroll', (event11) => {
    console.log('You are scrolling the page!');
    console.log(`And your coordinates are X: ${window.scrollX} and Y: ${window.scrollY}`);
})


// element.addEventListener('event type', callback);




