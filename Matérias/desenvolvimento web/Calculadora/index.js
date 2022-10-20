
let visor = document.getElementById('visor');


let btnNumeros = document.getElementsByClassName('botao-numero');


for (let botao of btnNumeros){

    botao.addEventListener('click', clicou_numero);
}

function clicou_numero(event) {
    visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    
}



