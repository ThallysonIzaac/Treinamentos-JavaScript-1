const turnOnOff = document.getElementById("turnOnOff");
const lamp = document.getElementById("lamp");
const breakLamp = document.getElementById("lamp");

function isLampBroken(){
    return lamp.src.indexOf("quebrada")>-1
}
function lampOn(){
    if (!isLampBroken()){
        lamp.src = "./imgs/ligada.jpg";
    }  
}
function lampOff(){
    if (!isLampBroken()){
        lamp.src = "./imgs/desligada.jpg";
    }
}
function brokeLamp(){
    if (!isLampBroken()){
        lamp.src = "./imgs/quebrada.jpg";
    }
}
function lampOnOff(){
    if(!isLampBroken()){
        if(turnOnOff.textContent =="Ligar"){
            lampOn();
            turnOnOff.textContent = "Desligar";
        }else{
            lampOff();
            turnOnOff.textContent = "Ligar";
        }
    }
}

turnOnOff.addEventListener("click",lampOnOff);
breakLamp.addEventListener("dblclick",brokeLamp);
lamp.addEventListener("mouseover",lampOn)
lamp.addEventListener("mouseleave",lampOff)
