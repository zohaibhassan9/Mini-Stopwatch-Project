let timer;
let minutes= 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;



function startStopwatch(){
if(isRunning){
isRunning = true;
timer = setInterval(updateStopwatch, 10);
}
}


function stopStopwatch(){
if(isRunning){
isRunning = false;
clearInterval(timer);
}
}


function resetStopwatch(){
stopStopwatch();
minutes = 0;
seconds = 0;
milliseconds = 0;
updateDisplay();

}


function updateTime(){
    milliseconds += 10;
    if(milliseconds >= 1000){
        milliseconds = 0;
        seconds++;
    }
    if(seconds>=60){
        seconds = 0;
        minutes++;
    }

}
