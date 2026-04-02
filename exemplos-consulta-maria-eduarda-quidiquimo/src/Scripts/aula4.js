class Prato{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    exibirReais(total){
        return "R$ " + total.toFixed(2)
    }

}

const lasanha = new Prato("Lasanha a bolonhesa", 17.89)


alert("Seja bem vindo ao restaurante Sabor e Saber!")

console.log("Teste")

const cliente = prompt("Bem vindo, cliente. Para um atendimento personalizado, digite seu nome: ")

let nomeFormatado = cliente.trim().toUpperCase()
alert(`Bem vindo(a), ${nomeFormatado}`)

const horaAgora = new Date()

const hora = horaAgora.getHours()

if(hora < 11){
    alert(`Bom dia, ${nomeFormatado}! Aproveite as delícias do café da manhã!😍😁`)
    console.log("Antes das 11")
}else{
    alert(`Boa Tarde, ${nomeFormatado}! Aproveite as iguarias do almoço!😍😁`)
    console.log("Depois das 11")
}

const querPrato = confirm(`Fala meu querido/minha querida ${nomeFormatado}, vai querer um prato?`)

if(querPrato){
    let quantidade = prompt("Hoje temos Lasanha a bolonhesa, quantas você quer?")
    let total = lasanha.preco * quantidade
    // alert(total)
    alert(`Banaca, o seu total se ${lasanha.nome} é de: ${lasanha.exibirReais(total)}`)
}else{
    alert(`Ok, obrigada pela visita, volte sempre!😁`)
}