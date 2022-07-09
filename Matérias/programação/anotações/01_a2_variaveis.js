// Variáveis e Operadores

// Atribuindo o valor 1 à variável
const valor = 1

// Imprimindo o valor da variável
valor

// Imprimindo o valor da variável
console.log(valor)

// Não podemos utilizar uma variável que não foi definida. Veja a mensagem de erro.
const valor2
valor = 2
valor
typeof(valor)
valor = 9.5
typeof(valor)
x = 1
x

// Declaração Múltipla
typeof "5.0"
typeof "5"

// Operações e conversão entre tipos

// Soma com tipos diferentes
20 + 3
"20" + 3
20 + "3"
"20" + "3"

// Multiplicação com tipos diferentes
20 * 3
"20" * 3
20 * "3"


// Pode-se usar letras, números e underline (mas não se pode começar com números)
const x1 = 50
x1
const mediaFinal2020 = 9.5
console.log(mediaFinal2020)
mediaFinal2020 = 9.1
console.log(mediaFinal2020)

// Mensagem de erro, pois o JavaScript não permite nomes de variáveis que iniciem com números
const 1aprova = 9.5
const prova1 = 9.5

// Não se pode usar palavras reservadas como nome de variável
const class = 0

// Variáveis atribuídas a outras variáveis e ordem dos operadores
const largura = 2
const altura = 4
const area = largura * altura
area

const perimetro = 2 * largura + 2 * altura
perimetro

// A ordem dos operadores é a mesma seguida na Matemática
perimetro = 2 * (largura + 2)  * altura
perimetro

perimetro = (2 * largura) + (2  * altura)
perimetro

// Problemas com ordem de operadores
const  p1 = 8
const p2 = 10
media = p1 + p2 / 2
console.log(media)

media = (p1 + p2) / 2
console.log(media)

// Operações com variáveis//
const idade1 = 25
const idade2 = 35
idade1 + idade2
idade2 - idade1
idade2 * idade1
idade2 / idade1
idade2 % idade1

// Concatenação de Variáveis//
const nome = "Steve"
const sobrenome = "Jobs"
const fullName = nome + " " + sobrenome
fullName
