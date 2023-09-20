








// Solution

// Ask user a name
const userName = window.prompt('What is your name')
console.log(userName);



if(userName || userName.length > 0){
    console.log('success')
    window.alert(`Hi ${userName}. Welcome to our webpage`);

    // Confirm if user wants to continue
    const doesUserWantToContinue = window.confirm('Do you want to continue browsing our webpage?');
    if(doesUserWantToContinue){
        alert('You have chosen to continue');
    }
    else{
        alert('You caneled the action');
    }
}
else {
        console.log('didnt provide name')
}

// Log user device dimensions

const userInnerHeight = window.innerHeight;
const userInnerWidth = window.innerWidth;
console.log(`Your device dimension are height: ${userInnerHeight} and Width: ${userInnerWidth}`);

// Warn user that page is going to reload
console.log('Webpage will reloaded in 10 seconds');

const doesUserWantToRedirect = window.confirm('Do you want to go to google.com?')
if(doesUserWantToRedirect){
    setTimeout(() => {
        window.open('https://google.com');
    }, 10000)
}
else{
    // Reload the page and start again
setTimeout(() => {
    window.location.reload();
}, 10000);
}