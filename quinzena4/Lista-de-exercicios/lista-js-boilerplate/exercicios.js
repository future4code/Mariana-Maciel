//Exercício 1

function inverteArray(array) {
  let arrayInvertido = []
  for(let i = array.length -1; i >= 0; i--){
     arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let arrayNumeros = []
   for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
         arrayNumeros.push(array[i] * array[i])
      }
   }
   return arrayNumeros
}

//Exercício 3

function retornaNumerosPares (array) {
   let arrayNovo = []
   for( let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
         arrayNovo.push (array[i])
      }
   }
   return arrayNovo
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = 0

   for(let i = 0; i < array.length; i++){
      if(array[i] > maiorNumero){
         maiorNumero = array[i]
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const respostaDoArray = [false, false, true, true, true]
   return respostaDoArray
}

//Exercício 7

function retornaNNumerosPares(n) {
   const arrayPares = [];
   for (let i = 0; arrayPares.length < n; i++){
      if(i % 2 === 0){
         arrayPares.push(i)
      }
   }
   return arrayPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if(a === b && b === c){
   return 'Equilátero'
  } else if(a !== b && b !== c){
   return 'Escaleno'
  }else{
   return 'Isósceles'
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2){
   let maiorNumero
   let menorNumero
   if(num1 > num2){
      maiorNumero = num1
      menorNumero = num2
   }else{
      maiorNumero = num2
      menorNumero = num1
   }

   let maiorDivisivelporMenor = maiorNumero % menorNumero === 0
   
   let diferenca = maiorNumero - menorNumero

   const objetoParaReturn = {
      maiorNumero : maiorNumero,
      maiorDivisivelporMenor : maiorDivisivelporMenor,
      diferenca : diferenca
   }
   return objetoParaReturn
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   const novoFilme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return novoFilme
}

// Exercício 13

function imprimeChamada() {
   
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   let meuRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 *(lado1 + lado2),
      area: (lado1 * lado2)
   }
   return meuRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   const novaPessoa = {
      ...pessoa,
      nome: 'ANÔNIMO'
   }
   return novaPessoa
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const arrayAdultos = arrayDePessoas.filter((pessoa) =>{
      return pessoa.idade >= 18
   })
   return arrayAdultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const arrayAdolescentes = arrayDePessoas.filter((pessoa) =>{
      return pessoa.idade < 18
   })
   return arrayAdolescentes
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   let arrayMultiplicado = array.map((numero) =>{
      return numero * 2
   })
   return arrayMultiplicado
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   const arrayIdadePar = array.map((numero) => {
      if(numero % 2 === 0) {
         return `${numero} é par`
      } 
      return `${numero} é impar`
   })
   
   return arrayIdadePar
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const podeEntrar = [];
   for(const pessoaAutorizada of pessoas){
      if(pessoaAutorizada.altura >= 1.5 && pessoaAutorizada.idade >=14 && pessoaAutorizada.idade <= 60){
         podeEntrar.push(pessoaAutorizada)
      }
   }
   return podeEntrar
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const naoPodeEntrar = [];
   for(const pessoaNaoAutorizada of pessoas){
      if(pessoaNaoAutorizada.altura < 1.5 || pessoaNaoAutorizada.idade < 14 || pessoaNaoAutorizada.idade > 60){
         naoPodeEntrar.push(pessoaNaoAutorizada)
      }
   }
   return naoPodeEntrar
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}