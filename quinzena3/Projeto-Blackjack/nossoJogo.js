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
console.log("Bem vindo(a) ao jogo de Blackjack!")

const inicioJogo = confirm ("Quer iniciar uma nova jogada?")

if (inicioJogo === true){
   const CartaUsuario = comprarCarta()
   const CartaUsuario2 = comprarCarta()

   let pontuacaoFinalUsuario = CartaUsuario.valor + CartaUsuario2.valor

   console.log("Usuário: Cartas - ",CartaUsuario.texto, CartaUsuario2.texto, "- Pontuação: ", pontuacaoFinalUsuario)

   const CartaComputador = comprarCarta()
   const CartaComputador2 = comprarCarta()

   let pontuacaoFinalComputador = CartaComputador.valor + CartaComputador2.valor

   console.log("Computador: Cartas -",CartaComputador.texto, CartaComputador2.texto, "- Pontuação: ", pontuacaoFinalComputador)

   if(pontuacaoFinalComputador > pontuacaoFinalUsuario){
      console.log("O computador ganhou!")  
   } else if (pontuacaoFinalUsuario > pontuacaoFinalComputador){
      console.log("O usuário ganhou!")
   } else{
      console.log("Empate!")
   }


} else{
   console.log("O jogo acabou.")
}

