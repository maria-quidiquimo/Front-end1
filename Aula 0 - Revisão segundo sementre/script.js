// PARTE DE ORIENTAÇÃO A OBJETO

class Prato{

    constructor(nome, preco, categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    formatarPreco(){
        return `R$ ${this.preco.toFixed(2).replace(".", ",")}`
    }

    aplicarDesconto(percentual){
        this.preco = this.preco * (1 - percentual / 100)
    }

} // fim da class

const cardapio = [
    new Prato("Feijoada Completa", 42.90, "Prato Principal"),
    new Prato("Moqueca de Peixe", 58.00, "Prato Principal"),
    new Prato("Coxinha Artesanal", 8.50, "Petisco"),
    new Prato("Brigadeiro Gourmet", 6.00, "Sobremesa"),
    new Prato("Suco de Maracujá", 12.00, "Bebidas"),
]

console.log("=== Pratos Criados ===")
cardapio.forEach(p =>{
    console.log(`${p.nome} -> ${p.formatarPreco()}`)
})

// PARTE DO DOM

const containerCardapio = document.querySelector("#cardapio")

function criarCardPrato(prato){
    const card = document.createElement("div")
    card.className = 'card' // O elemento div vai ter uma class agora

    card.innerHTML = `
     <h3>${prato.nome}</h3>
     <span class="categoria"></span>
     <div class="preco">${prato.formatarPreco()}</div>
    `

    card.addEventListener('click', () =>{
        alert(
            `🍽️ ${prato.nome} \n\n`+ // '\n' pula linha
            `Categoria: ${prato.categoria} \n\n` +
            `Preco: R$ ${prato.formatarPreco()}`
        )
    }) // vai aparecer um pop-up

    return card

} // fim função criarCardPrato


function renderizarCardapio(){
    containerCardapio.innerHTML = ""

    cardapio.forEach(prato =>{
        const card = criarCardPrato(prato)
        containerCardapio.appendChild(card)
    })
}

renderizarCardapio()

cardapio[1].aplicarDesconto(20)

renderizarCardapio() // vai ter q renderizar de novo depois de um modificação / nova parte de código.

// CLASSE BEBIDAS

class Bebida{
    constructor(nome, preco, volume){
        this.nome = nome;
        this.preco = preco;
        this.volume = volume
    }
    descricao(){
        return `${this.nome} - ${this.volume} - R$ ${this.preco.toFixed(2)}`
    }
    emLitros(){
        const litros = this.volume / 1000;
        return `${litros.toFixed(2)}L`;
    }
}

const coca = new Bebida ("Coca-cola", 10.00, 600);
const suco = new Bebida ("Suco DelValle", 6.00, 300);
const agua = new Bebida ("Água Mineral com ou sem gás", 4.50, 520);

console.log("=== Bebidas (descrição) ===");
console.log(coca.descricao());
console.log(suco.descricao());
console.log(agua.descricao());

console.log("=== Bebida (em Litros) ===")
console.log(`${coca.nome} -> ${coca.emLitros()} - ${coca.preco}`)
console.log(`${suco.nome} -> ${suco.emLitros()} - ${suco.preco}`)
console.log(`${agua.nome} -> ${agua.emLitros()} - ${agua.preco}`)

const listaBebidas = [coca, suco, agua]

const container = document.querySelector("#listaBebidas");

function criarCardBebida(bebida) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h3>${bebida.nome}</h3>
    <div class="info">${bebida.descricao()}</div>
  `;
}
card.addEventListener('click', () => {
    alert(`🥤 ${bebida.nome}\nVolume em litros: ${bebida.emLitros()}`);
  });

return card;