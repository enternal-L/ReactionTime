let disResult = document.querySelector('.js-display-result');
let idNumber;
let idNumber2;
let timeTaken = 0;
let i = 0;
let randomizeNum;


let myArray = [];

let screenCount = 1;

disResult.addEventListener('click', () => {

    randomizeNum = Math.random();

    if (screenCount === 4){
        location.reload()
    }

    if (myArray.length === 3){ // Moves onto next page (avg) 
        screenCount = 3;
    }

    if (screenCount === 0){
        screenCount ++;
    }
    
    else if (screenCount === 1){ //Get ready
        timeTaken = 0;
        disResult.classList.add('red-screen');
        disResult.classList.remove('blue-screen');
        disResult.innerHTML = '<div><p class = get-ready>Get Ready</p></div>';
    
        idNumber2 = setTimeout(() => {
            disResult.classList.add('green-screen');
            disResult.classList.remove('red-screen');
            disResult.innerHTML = '<div><p class = click-text>Click!</p></div>';
    
            idNumber = setInterval(() => {
                timeTaken += 2.6;
            }, 1)
    
        }, (randomizeNum + 0.5) * 4500);
    
        screenCount ++;
    }
    
    else if (screenCount === 2){ //Click 
        if (timeTaken === 0){
            
            disResult.classList.add('blue-screen');
            disResult.classList.remove('green-screen');
            disResult.classList.remove('red-screen');
            disResult.innerHTML = `<div><p class = too-early>Too Early!</p></div><div><p class = click-name>Click to try again</p></div>`;
            
            
            clearInterval(idNumber2) //Stop 'Click!' page from appearing
    
            screenCount = 1;
        }
    
        else{
            clearInterval(idNumber);
            disResult.innerHTML = `<div><p class = get-ready>${Math.round(timeTaken)} ms</p></div>`;
            myArray.push(Math.round(timeTaken));
            screenCount = 1;
        }
    }
    
    else if (screenCount === 3){ // Display Average
        disResult.classList.add('blue-screen');
        disResult.classList.remove('green-screen');
        disResult.innerHTML = `<div><p class = get-ready>Your average is ${Math.round(getSum(myArray))} ms</p></div><div><p class = click-name>Click again to retake test</p></div>`;
        screenCount ++;
    }
})

getSum = (myArray) => {

    let sum = 0;

    myArray.forEach(element => {
        sum += element;
    });

    return (sum / myArray.length)
}

/* To Do List
1. Style frontend
    - Make Blue button (Welcome) screenCount 0 Done
    - Make Blue button (Start Test) screenCount 1 Done
    - Make red button (wait to click) screenCount 2 Done
    - Make green button (click) screenCount 3 Done
    - Make Blue button (result) screenCount 4 Done
    - Make Too early! Done
2. Code backend
    - Welcome -> Start Test -> Red Screen -> Green Screen. Done
    - Redscreen, start randomized setTimeout. Done
    - Once green screen start setInterval until Onclick event --> Blue screen. Done
    - If plan to do once, display value of setInterval, if plan to average, save setInterval value intoa rray then find mean. Done
    - REDESIGN SO THAT IF ELSE STATEMENT STAYS OUTSIDE OF ONCLICK. Don't need
    - Find way to revert back to Welcome page.
*/