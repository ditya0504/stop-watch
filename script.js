// creating all needed variable
var seconds = 00;
var tens = 00;
var miniute = 00;

// getting ements from the html
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendMiniute =document.getElementById("miniute");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;

// this function will run when click on Start 
function startTimer(){
    tens++;

    if(tens<9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }

    if(seconds > 60){
        miniute++;
        appendMiniute.innerHTML = "0" + miniute;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if(miniute > 9){
        appendMiniute.innerHTML = miniute;
    }
};

// adding onclick method on start button
buttonStart.onclick = function(){
    interval = setInterval(startTimer);
};


// adding onclick method on stop button
buttonStop.onclick = function(){
    clearInterval(interval);
};


// adding oncick method on reset button
buttonReset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    miniute = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
    appendMiniute.innerHTML = miniute;
}


