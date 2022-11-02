const calcular = document.getElementById("calcular");

function imc (){

    //pegando os elementos por seus ids
    const nome = document.getElementById('nome');
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
    var resultado = document.getElementById("resultado");

    //validando se os campos foram preenchidos e fazendo o cálculo
    if(nome.value ==""){
        resultado.textContent = "insira seu nome para continuar."
    }else if(altura.value ==""){
        resultado.textContent = "insira sua altura para continuar."
    }else if(peso.value ==""){
        resultado.textContent = "insira seu peso para continuar."
    }else if(nome.value !== "" && altura.value !== "" && peso.value !== ""){
        
        const valorIMC = (peso.value / (altura.value * altura.value)).toFixed(2);

        //classificando tipo de imc
        let classificaçao = "";

        if (valorIMC < 18.5){
            classificaçao = "abaixo do peso";
        }else if(valorIMC < 25){
            classificaçao = "com o peso ideal"
        }else if(valorIMC < 30){
            classificaçao = "levemente acima do peso"
        }else if(valorIMC < 35){
            classificaçao = "com obesidade grau I"
        }else if(valorIMC < 40){
            classificaçao = "com obesidade grau II"
        }else{
            classificaçao = "com obesidade grau III. Cuidado"
        }

        resultado.textContent = `${nome.value}, o seu IMC é ${valorIMC}, e 
        você está ${classificaçao}!`

    }
    
}

calcular.addEventListener("click", imc);