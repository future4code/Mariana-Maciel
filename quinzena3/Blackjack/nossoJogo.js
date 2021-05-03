/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindx ao jogo de Blackjack!")

const inicioJogo = confirm("Quer iniciar uma nova rodada?")

if(inicioJogo === true){
   const cartaUsuario = comprarCarta()
   const cartaUsuario2 = comprarCarta()

   const pontuacaoFinalUsuario = cartaUsuario.valor + cartaUsuario2.valor

   console.log("Usuário: Cartas - ", cartaUsuario.texto, cartaUsuario2.texto, " - Pontuação: ", pontuacaoFinalUsuario)

   const cartaComputador = comprarCarta()
   const cartaComputador2 = comprarCarta()

   const pontuacaoFinalComputador = cartaComputador.valor + cartaComputador2.valor

   console.log("Computador: Cartas - ", cartaComputador.texto, cartaComputador2.texto, " - Pontuação: ", pontuacaoFinalComputador)

   if(pontuacaoFinalComputador > pontuacaoFinalUsuario){
      console.log("O Computador ganhou!")
   } else if(pontuacaoFinalComputador < pontuacaoFinalUsuario){
      console.log("O Usuário ganhou!")
   } else{
      console.log("Empate!")
   }
} else {
   console.log("O jogo acabou!")
}