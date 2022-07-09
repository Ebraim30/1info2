// Lista de exercícios 1 - variáveis e operadores

export function somaInteiros(a, b) {
    /*
    Recebe dois números inteiros, e retorna a sua soma.

    Argumentos:
        a (número): 1o valor
        b (número): 2o valor

    Retorna:
        número: a soma dos dois valores.
    */
   const soma = a + b 
   return soma
}

export function metrosParaMilimetros(metros) {
    /*
    Recebe um valor em metros, e retorna o valor em milímetros,
        sabendo que 1 metro equivale a 1000 milimetros.

    Argumento:
        metros (número): um valor em metros

    Retorna:
        número: o valor convertido para milimetros.
    */
   const milimetros = metros * 1000
   return milimetros
}

export function tempoParaPercorrerUmaDistancia(distancia, velocidade) {
    /*
    Recebe uma distância e a velocidade de movimentação, e retorna
        as horas que seriam gastas para percorrer em linha reta.

    Argumentos:
        distancia (número): a distância, em kilômetros.
        velocidade (número): a velocidade, em kilômetros por hora.

    Retorna:
        número: o tempo, em horas.
    */
   const tempoParaPercorrerUmaDistancia = distancia / velocidade
   const TempoDaViagemEmMinutos = tempoParaPercorrerUmaDistancia * 60
   return TempoDaViagemEmMinutos
}

export function aumentoSalarial(salario, porcentagem) {
    /*
    Recebe um salário e sua porcentagem de aumento, e retorna
        o novo salário.

    Argumentos:
        salario (número): o salário original.
        porcentagem (número): o percentual de aumento, entre 0 e 100.

    Retorna:
        número: o novo salário, com duas casas decimais.
    */

}

export function precoComDesconto(precoOriginal, percentualDesconto) {
    /*
    Recebe um preço e sua porcentagem de desconto, e retorna
        o novo preço.

    Argumentos:
        precoOriginal (número): o preco original do produto.
        percentualDesconto (número): o percentual de desconto, entre 0 e 100.

    Retorna:
        número: o preço final, após o desconto, com duas casas decimais.
    */
   const desconto = precoOriginal * (percentualDesconto / 100)
   const valorfinal = desconto - precoOriginal
   return valorfinal 
}

export function diasParaSegundos(dias, horas, minutos, segundos) {
    /*
    Recebe uma data em dias com horas, minutos e segundos, e retorna
    a data em segundos.

    Argumentos:
        dias (número): a quantidade de dias.
        horas (número): a quantidade de horas.
        minutos (número): a quantidade de minutos.
        segundos (número): a quantidade de segundos.

    Retorna:
        número: a quantidade de segundos equivalente aos valores de dias, horas, minutos e segundos.
    */
   const dia = dias * 24 
   const somadehoras = horas + dia
   const hora = somadehoras * 60
   const horaseminutos = minutos + hora 
   const minuto = horaseminutos * 60
   const total = minuto + segundos
   return total
}

export function celsiusParaFahrenheit(celsius) {
    /*
    Recebe uma temperatura em graus Celsius, e retorna a temperatura
        em graus Fahrenheit.

    Argumento:
        celsius (número): a temperatura em graus Celsius.

    Retorna:
        número: a temperatura em graus Farenheit.

    */
   const fahrenheit = (celsius * 9/5) + 32
   return fahrenheit
}

export function fahrenheitParaCelsius(fahrenheit) {
    /*
    Recebe uma temperatura em graus Fahrenheit, e retorna a temperatura
        em graus Celsius.

    Argumento:
        farenheit (número): a temperatura em graus Fahrenheit.

    Retorna:
        número: a temperatura em graus Celsius.
    */
   const grauscelsius = (fahrenheit - 32) * 9/5
   return grauscelsius
}

export function precoAluguelCarro(dias, km) {
    /*
    Recebe uma quantidade de dias que o carro foi alugado e a
        quantidade de quilômetros rodados, e retorna o valor a ser pago.
        1 dia: 60 reais mais R$ 0,15 por km rodado.

    Argumentos:
        dias (número): quantidade de dias que o carro foi alugado.
        km (número): quantos quilômetros o carro rodou.

    Retorna:
        número: o preço do aluguel do carro, com 2 casas decimais,
                conforme a fórmula dada no enunciado.
    */
const ValorPelosDias = dias * 60
const valorPelosKM = km * 0.15
const total = ValorPelosDias + valorPelosKM
return total
}

export function diasPerdidosPorFumar(cigarrosFumadosPorDia, anosFumando) {
    /*
    Recebe uma quantidade de cigarros fumados por dia e a quantidade
        de anos que fuma, e retorna o total de dias perdidos, sabendo que
        cada cigarro reduz a vida em 10 minutos.

    Argumentos:
        cigarrosFumadosPorDia (número): a quantidade de cigarros fumados por dia.
        anosFumando (número): a quantidade de anos que a pessoa fumou.

    Retorna:
        número: a quantidade de dias que a pessoa perdeu por fumar.
    */
   const FumadosPorAno = cigarrosFumadosPorDia * 365
   const QuantosCigarrosFumados = anosFumando * FumadosPorAno
   const MinutosPerdidos = QuantosCigarrosFumados * 10
   const HorasPerdidas = MinutosPerdidos / 60
   const DiasPerdidos = HorasPerdidas / 24
   return DiasPerdidos
}
export function doisElevadoADez() {
    /*
    Calcula dois elevado a um milhão, e retorna a quantidade de
    algarismos.

    Retorna:
        número: a quantidade de algarismos que o resultado contém.
    */
   const valor = 2 ** 10
   return valor
}

export function mediaFinalAprovadoReprovado(p1, p2, ep1, ep2) {
    /*
    Recebe as notas das 2 provas e 2 exercícios de programação e retorna
        se o aluno foi ou não aprovado. As provas têm peso 7 e os exercícios
        têm peso 3. Cada parcial tem peso igual.
        Uma forma de resolver é calcular a 1a parcial, com a média ponderada entre
        p1 e ep1, depois calcular a 2a parcial, com as notas de p2 e ep2 e depois
        calcular a média aritmética entre a 1a e a 2a parcial.

    Argumentos:
        p1 (número): a nota da primeira prova.
        p2 (número): a nota da segunda prova.
        ep1 (número): a nota do 1o exercício.
        ep2 (número): a nota do 2o exercício.

    Retorna:
        bool: True ou False, dependendo da média ser maior ou igual a 7 ou não.

    */
   const mediaPonderada01 = (p1 * 7 + ep1 * 3) / 10
   const mediaPonderada02 = (p2 * 7 + ep2 * 3) / 10
   const mediaFinal = (mediaPonderada01 + mediaPonderada02) / 2
   return mediaFinal
}

export function salarioLiquido(valorHora, horasMensais) {
    /*
    Recebe quanto ganha por hora e quantas horas trabalho ao mês,
    e retorna o salário líquido.

    Descontos:
    - INSS é 8% do salário bruto
    - IR é 11% do salário bruto
    - Sindicato é 5% do salário bruto.

    Argumentos:
        valorHora (número): o valor hora pago ao funcionário.
        horasMensais (número): a quantidade de horas trabalhadas no mes.

    Retorna:
        número: o salário líquido, após todos os descontos.
    */
}

export function duziasOvos(ovos) {
    /*
    Receba o número de ovos e devolva a quantidade de dúzias
        correspondente. Considere sempre dúzias cheias, arredondando pra
        cima se necessário.

    Argumento:
        ovos (número): a quantidade de ovos.

    Retorna:
        número: a quantidade de dúzias correspondente à quantidade de ovos,
            arredondado pra cima.
    */
}

export function latasTinta(metrosPintar) {
    /*
    Recebe quantos metros quadrados precisa pintar,
        e retorna a quantidade de latas de tinta a comprar.
        A cobertura da tinta é de 3 metros por litro de tinta.
        Cada lata possui 18 litros de tinta.

    Argumento:
        metrosPintar (número): a quantidade de metros quadrados a pintar.

    Retorna:
        número: a quantidade de latas de tinta, arredondado pra cima.
    */
}

export function decomporNumero(numero) {
    /*
    Leia um número inteiro menor que 1000 e devolva a quantidade de
        centenas, dezenas e unidades do mesmo.
        Obs.: não utilize operações com strings.

    Argumento:
        numero (número): um número menor que 1000.

    Retorna:
        tupla de inteiros, com as centenas, dezenas e unidades do numero.
    */
}
