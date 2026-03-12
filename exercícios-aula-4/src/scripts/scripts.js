// Exercício 1 - Personalizador de acesso

// const nomeUsuario = prompt("digite seu primeiro nome: ")

// const sobrenomeUsuario = prompt("digite seu sobrenome: ")

// let nomeFormatado = nomeUsuario.trim().toLowerCase() +' '+ sobrenomeUsuario.trim().toLowerCase()

// alert(`Olá, ${nomeFormatado}.`)

// alert(`Seu nome possui ${nomeFormatado.length} caracteres.`)

//----------------------------------------------------------------

// Exercício 2 - Calculadora de divisão de conta

// const valorConta = prompt("Digite o valor da sua conta: ")
// const quantPessoas = prompt("Quantas pessoas estam na mesa?: ")

// let valor =  valorConta / quantPessoas
// alert(`Cada amigo deve pagar R$ ${valor.toFixed(2)}.`)

//-----------------------------------------------------------------------

//Exercício 3 - Validador de Promoção

// const valorConta = prompt("Qual o valor da sua compra?:")
// const cupom = prompt("Você possui um cupom?")

// if(cupom == "sim" || valorConta >= 150){
//     alert("Você ganhou frete grátis!")
// }else{
//     alert("Você ainda tem que pagar o frete!")
// }

//-----------------------------------------------------------------------

// Exercício 4 - Sorteador de brindes

// const escolher = prompt("escolha um número de 1 a 10: ")
// const numero = Math.random() * 10

// if(escolher == numero){
//     alert(`Parabéns, você ganhou um brinde!`)
// }else{
//     alert(`Que pena, o número sorteado foi ${numero.toFixed()}.`)
// }

//------------------------------------------------------------------------

//Exercício 5 - Gestão de frota

class Veiculo{
    constructor(modelo, marca, ano){
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    idadeVeiculo(anoAtual){
        const idadeCarro = anoAtual - this.ano
        alert(`A idade do carro ${modelo} é ${idadeCarro}`)
    }
}

const carro = new Veiculo(Corolla, Tal, 2020)
const anoAtual = prompt("Em que ano estamos?:")