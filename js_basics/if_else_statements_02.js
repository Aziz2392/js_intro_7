
function getRandomNumber(start, end ){
    return Math.floor(Math.random() * (end-start) + 1 ) + start;
    }


  let num = getRandomNumber(0 , 6);
    console.log(num);

 //  or use if(num === 0 || num === 6){ console.log("WEEKEND")     }   
if(num == 0){
    console.log("WEEKEND");
}
else if(num == 6){
    console.log("WEEKEND");
}
else{
    console.log("WEEKDAY");
}


//////////////////////


function getRandomNumber(start, end ){
    return Math.floor(Math.random() * (end-start) + 1 ) + start;
    }

    let ran1 = getRandomNumber(1, 100);
    let points = 1 ;
    console.log(ran1);
     if(ran1 % 10 === 0){
        console.log(points * 6);
    }
    else if(ran1 % 2 == 0 ){
        console.log(points * 2);
    }
    else if(ran1 == 7){
        console.log(points * 7);
    }
    else{
        console.log(points);
    }

////////////////////////////

function getRandomNumber(start, end ){
    return Math.floor(Math.random() * (end-start) + 1 ) + start;
    }
    let day = getRandomNumber(0 , 6);


    if(day === 0){
        console.log("RED");
        console.log("VACATION");
    }
    else if(day === 6){
        console.log("GREEN");
        console.log("VACATION");
    }
    else{
        console.log("BLACK");
        console.log("WORK")
    }


    //////////

    function getRandomNumber(start, end ){
        return Math.floor(Math.random() * (end-start) + 1 ) + start;
        }
        let day = getRandomNumber(0 , 6);
        console.log(day);
   
    if(day === 0 || day === 6){
        console.log("VACATION");
        if (day === 0){
            console.log("RED");
        }
        else {
            console.log("GREEN");
        }
    }
    else{
        console.log("BLACK");
        console.log("WORK")
    }
