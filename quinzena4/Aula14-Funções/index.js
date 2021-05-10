// Exercícios de interpretação de código

/*
Exercício 1
a) Vai ser impresso os valores 10 e 50
b) Nada apareceria no console, estaria somente invocando a função no código.

Exercício 2
a) "Darvas" e "Caio"
b) "Amanda" e "Caio"

Exercício 3

*/

//Exercícios de escrita de código

//Exercício 4
//a)
function informacoesSobreMim(){
  console.log("Eu sou Mariana, tenho 24 anos, moro em Belo Horizonte e sou estudante.")
}

//b)
function informacoesDoUsuario(nome, idade, endereco, estudanteSim){
  let mensagemEstudante = ""
  if(estudanteSim){
    mensagemEstudante = "sou"
  }else{
    mensagemEstudante = "não sou"
  }
  console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${mensagemEstudante} estudante.`)
}

//Exercício 5
//a)
let somaNumeros = function(a, b){
  return a + b
}
console.log(somaNumeros(35, 87))

//b)
const maiorNumero = function(x, z){
  if(x >= z){
    return true
  } else{
    return false
  }
}
console.log(maiorNumero(35, 22))

//c)
const imprimirMensagem = function(string){
  for(let i = 0; i < 10; i++){
    console.log(string)
  }
}
imprimirMensagem("Olá mundo!")

//Exercício 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//a)
const arrayQuantidade = function(array){
  return array.length
}

//b)
const numeroPar = function(a){
  if(a % 2 === 0){
    return true
  } else{
    return false
  }
}

//c)
const quantidadeNumerosPares = function(array){
  let quantidadePares = 0
  for(numero of array){
    if(numero % 2 === 0){
      quantidadePares += 1
    }
  }
  return quantidadePares
}

//d)
const quantidadeNumerosPares2 = function(array){
  let quantidadePares = 0
  for(numero of array){
    if(numeroPar(numero)){
      quantidadePares2 += 1
    }
  }
  return quantidadePares2
}


// Desafio //
//Exercício 1
//a)

const funcaoParametro = () =>{
  console.log("Parâmetro da função")
}
funcaoParametro()