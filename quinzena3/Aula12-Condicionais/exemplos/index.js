/* Interpretação de código
Exercício 1

O código pede ao usuário um número e verifica se o número é par ou não. 
Se for par ele imprime "Passou no teste", e caso não ele imprime "Não passou no teste".

Exercício 2

a) O código serve para verificar várias condições de uma mesma variável.
b) O preço da fruta Maçã é R$ 2.25
c) O preço da fruta Maçã é R$ 5

Exercício 3

a) A primeira linha pede ao usuário que digite um número e já faz o cast da resposta para Number.
b) Dá erro em ambos os casos
c) A variável 'mensagem' foi criada dentro do bloco if, o que impede de chamar a mesma em um escopo diferente.
*/

// Escrita de código //

//Exercício 4
const idadeDoUsuario = Number(prompt("Qual sua idade?"))

if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir, vai de Uber!")
}


//Exercício 5

const turnoDeEstudo = prompt("Qual turno você estuda? (M - manhã, V - vespertino ou N - noturno.")

if (turnoDeEstudo === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
}


//Exercício 6

const turnoEstudo = prompt("Qual turno você estuda? (M - manhã, V - vespertino ou N - noturno.")

switch (turnoEstudo) {
    case "M":
        console.log("Bom dia!")
    break

    case "V":
        console.log("Bom tarde!")
    break

    case "N":
        console.log("Bom noite!")
    break
}


//Exercício 7 

const generoFilme = prompt("Qual gênero de filme vão assistir?")
let precoIngresso = Number(prompt("Qual o preço máximo do ingresso?"))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
