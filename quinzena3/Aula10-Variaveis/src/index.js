/*
1 - 10
    10 5

2- 10 10 10
*/

let nome
let idade
console.log(typeof nome, typeof idade)
// Foi impresso undefined porque nenhum valor foi definido para as variáveis

nome = prompt("Qual o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log(typeof nome, typeof idade)
// Ambas são strings

console.log("Olá", nome, "você tem", idade, "anos.")

let cidadeUsuario = prompt("Qual cidade você mora?")
console.log(cidadeUsuario)

let livroFavorito = prompt("Qual seu livro favorito?")
console.log(livroFavorito)

let bandaFavorita = prompt("Qual sua banda favorita?")
console.log(bandaFavorita)

let musicaFavorita = prompt("E sua musica favorita, qual é?")
console.log(musicaFavorita)

let passatempoUsuario = prompt("Me conta qual é o seu passatempo favorito?")
console.log(passatempoUsuario)


let comidaFavorita = ["Pizza", "Brigadeiro", "Strogonoff", "Sorvetone", "Hamburguer"]
console.log(comidaFavorita)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidaFavorita[0])
console.log(comidaFavorita[1])
console.log(comidaFavorita[2])
console.log(comidaFavorita[3])
console.log(comidaFavorita[4])

let comidaFavoritaUsuario = prompt("Qual a sua comida favorita?")
comidaFavorita[1] = comidaFavoritaUsuario

console.log(comidaFavorita)

let perguntaUsuario = ["Você dorme tarde todos os dias?", "Você gosta de ouvir musica?", "Você faz terapia?"]
let respostaUsuario = [true, true, false]

console.log(perguntaUsuario[0], respostaUsuario[0])
console.log(perguntaUsuario[1], respostaUsuario[1])
console.log(perguntaUsuario[2], respostaUsuario[2])