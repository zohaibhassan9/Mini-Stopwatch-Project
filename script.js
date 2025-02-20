let timer;
let minutes= 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;



function startStopwatch(){
if(!isRunning){
isRunning = true;
timer = setInterval(updateTime, 10);
}
}


function stopStopwatch(){
isRunning = false;
clearInterval(timer);
}


function resetStopwatch(){
isRunning = false;
clearInterval(timer);
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
    updateDisplay();

}

function updateDisplay(){

    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('milliseconds').textContent = formatTime(milliseconds / 10);

}

function formatTime(time){
return time < 10 ? "0" + time:time;

}