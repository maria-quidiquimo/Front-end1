const horarioAtual = new Date()

const horario = horarioAtual.getHours()

if(horario < 12){
    alert(`Bom dia, Mestre Jedi!`)
    console.log('Antes das 12')
}if(horario > 12 && horario < 18){
    alert(`Boa tarde, Mestre Jedi!`)
    console.log("Depois das 12h e antes das 18h")
}else{
    alert(`Boa noite, Mestre Jedi!`)
    console.log("Depois das 18h")
}

const promo = document.querySelectorAll("#banner-promo");

promo.forEach((promocao) =>{
    promocao.addEventListener("mouseover", () =>{
        promo.classList.add('destaque-dark')
    })
    promocao.addEventListener("mouseout", () =>{
        promo.classList.remove('destaque-dark')
    })
})

const qtdItem = document.querySelector("#qtd-item");
const precoItem = document.querySelector("#resultado-preco")

if(qtdItem && precoItem){
    qtdItem.addEventListener("input", () => {
        const precoUnitario = 85;
        const resultadoPreco = Number(qtdItem.value) * precoUnitario;
        precoItem.textContent = `R$ ${resultadoPreco.toFixed(2)}`
    })
}

const botaoAdicionar = document.querySelector('#btn-adicionar');
const nomeProduto = document.querySelector('#nome-produto');
const listaCarrinho = document.querySelector('#lista-carrinho');

botaoAdicionar.addEventListener("input", () => {
    botaoAdicionar.innerHTML = `<article class="card-carrinho"><h3>🎮 Item: ${nomeProduto} </h3></article>`
})

const botaoLimpar = document.querySelector('#btn-limpar');

botaoLimpar.addEventListener("click", () => {
    botaoLimpar.innerHTML = ``
})