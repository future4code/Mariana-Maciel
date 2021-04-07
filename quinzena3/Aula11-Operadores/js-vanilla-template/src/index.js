//Interpretação de código
/* Exercício 1
a.  false
b.  false
c.  true
e.  boolean
*/

/* Exercício 2
a.  undefined
b.  null
c.  11
d.  3
e.  Array(11)
f.  9
*/

//Escrita de código

//Exercício 1
const idadeUsuario = prompt ("Qual a sua idade?")
const idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")

const qualMaiorIdade = Number(idadeUsuario) > Number(idadeMelhorAmigo)
console.log("Sua idade é maior do que a do seu melhor amigo?", qualMaiorIdade)

const diferencaIdade =  Number(idadeUsuario) - Number(idadeMelhorAmigo)
console.log(diferencaIdade)

//Exercício 2
const numeroParUsuario = prompt("Insira aqui um número par.")

const restoDivisaoPar = Number(numeroParUsuario) % 2

console.log(restoDivisaoPar)
//Todo numero par vai ser divisível por 2, assim o resto da divisão sempre será 0

//d) Se o usuário inserir um numéro ímpar haverá um resto da divisão 1

//Exercício 3
const listaDeTarefas = []
const tarefaUm = prompt("Digite aqui a primeira tarefa:")
listaDeTarefas.push(tarefaUm)

const tarefaDois = prompt("Digite aqui a segunda tarefa:")
listaDeTarefas.push(tarefaDois)

const tarefaTres = prompt("Digite aqui a terceira tarefa:")
listaDeTarefas.push(tarefaTres)

console.log(listaDeTarefas)

const indice = prompt("Coloque o indice da tarefa ja realizada:")
listaDeTarefas.splice(indice)

console.log(listaDeTarefas)


//Exercício 4
const nomeUsuario = prompt("Qual o seu nome?")
const emailUsuario = prompt("Qual o seu email?")

console.log("O e-mail ", emailUsuario, " foi cadastrado com sucesso. Seja bem vindo(a) ", nomeUsuario)