const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
var colorIndex = 0;
var intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = ()=> {
    if(colorIndex < 2){
        ++colorIndex;
    }else{
        colorIndex = 0;
    }
    
}

const changeColor = ()=>{
    const colors = ['red','yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = ()=> {
    clearInterval(intervalId);
}

const turnOn = {
    'red': ()=> img.src = "./imgs/vermelho.png",
    'yellow': ()=> img.src = "./imgs/amarelo.png",
    'green': ()=> img.src = "./imgs/verde.png",
    'automatic': ()=> intervalId = setInterval(changeColor,2000)
}

buttons.addEventListener('click', trafficLight );