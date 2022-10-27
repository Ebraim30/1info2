function calcula_IMC() {
    const nome = document.getElementById(`nome`).value;
    const peso = Number(document.getElementById(`peso`).value);
    const altura = Number(document.getElementById(`altura`).value);

    const IMC = ( peso / (altura * altura))
    let resposta = document.getElementById(`Calculo`)

    if (IMC < 15.99) {
        resposta = `Magreza grave`
        document.getElementById(`resultado-categoria`).className = `perigo`
        document.getElementById(`resultado-categoria`).innerHTML = `Perigo`;
    } else if (IMC >= 16  && IMC <= 16.99) {
        resposta = `Magreza moderada`
        document.getElementById(`resultado-categoria`).className = `alerta`
        document.getElementById(`resultado-categoria`).innerHTML = `Alerta`
    }else if (IMC >= 17 && IMC <= 18.5) {
        resposta = `Magreza leve`
        document.getElementById(`resultado-categoria`).className = `sem-risco-vida`
        document.getElementById(`resultado-categoria`).innerHTML = `Sem risco a vida`
    } else if(IMC >= 18.5 && IMC <= 24.9){
        resposta = `Saudável`
        document.getElementById(`resultado-categoria`).className = `Saudável`
        document.getElementById(`resultado-categoria`).innerHTML = `Saudável`
    }else if ( IMC >= 25 && IMC <= 29.9) {
        resposta = `Sobrepeso`
        document.getElementById(`resultado-categoria`).className = `sem-risco`
        document.getElementById(`resultado-categoria`).innerHTML = `Sem risco`
    }else if( IMC >= 30 && IMC <= 34.9){
        resposta = `Obesidade Grau 1`
        document.getElementById(`resultado-categoria`).className = `Alerta`
        document.getElementById(`resultado-categoria`).innerHTML = `Alerta`
    }else if (IMC >= 35 && IMC <= 39.9) {
        resposta = `Obesidade Grau 2 (Severa)`
        document.getElementById(`resultado-categoria`).className = `Perigo`
        document.getElementById(`resultado-categoria`).innerHTML = `Perigo`
    } else {
        resposta = `Obesidade Grau 3 (Mórbida)`
        document.getElementById(`resultado-categoria`).className = `procure-ajuda-médica`
        document.getElementById(`resultado-categoria`).innerHTML = `Procure ajuda médica`
    }

    document.getElementById(`resultado-IMC`).innerHTML = `Nome: ${nome} <br> IMC:${IMC.toFixed(2)} <br> `
    
}
