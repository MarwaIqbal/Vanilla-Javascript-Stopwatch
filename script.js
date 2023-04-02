var seconds=00;
var tens=00;
var appendtens= document.getElementById("tens");
var appendseconds= document.getElementById("seconds");

var buttonstart= document.getElementById("startbutton");
var buttonstop= document.getElementById("stopbutton");
var buttonreset= document.getElementById("resetbutton");
var interval; 

function startTimer(){
    tens++;
    
    if(tens<9){
        appendtens.innerHTML="0"+tens;
    }
     if(tens>9){
        appendtens.innerHTML=tens;
    }
     if(tens>99){
        seconds++;
         appendseconds.innerHTML="0"+seconds;
         tens=0;
         appendtens.innerHTML="0"+0;
    }
    
  if(seconds>9){
        appendseconds.innerHTML=seconds;
    }   
    
}
buttonstart.onclick=function(){
    interval=setInterval(startTimer);
}
buttonstop.onclick=function(){
    clearInterval(interval);
}
buttonreset.onclick=function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendseconds.innerHTML=seconds;
    appendtens.innerHTML=tens;
}