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

class Bebida {
    constructor(nome, preco, volume, categoria = "Bebida") {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
        this.categoria = categoria;
    }

    formatarPreco() {
        return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
    }

    descricao() {
        return `${this.nome} · ${this.volume}ml`;
    }

    emLitros() {
        const litros = this.volume / 1000;
        return `${litros.toFixed(2)}L`;
    }

    aplicarDesconto(percentual) {
        this.preco = this.preco * (1 - percentual / 100);
    }
}

const listaBebidas = [
    new Bebida("Coca-Cola", 10.00, 600, "Refrigerante"),
    new Bebida("Suco Del Valle", 6.00, 300, "Suco"),
    new Bebida("Água Mineral", 4.50, 520, "Água"),
    new Bebida("Soda Italiana", 12.00, 500, "Refresco"),
    new Bebida("Guaraná Antartica", 8.00, 320, "Refrigerante")
];

console.log("=== Bebidas Criadas ===");
listaBebidas.forEach(bebida => {
    console.log(`${bebida.nome} -> ${bebida.formatarPreco()}`);
});

const containerBebidas = document.querySelector("#listaBebidas");

function criarCardBebida(bebida) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${bebida.nome}</h3>
        <span class="categoria">${bebida.categoria}</span>
        <div class="info">${bebida.descricao()} · ${bebida.emLitros()}</div>
        <div class="preco">${bebida.formatarPreco()}</div>
    `;

    card.addEventListener("click", () => {
        alert(
            `🥤 ${bebida.nome}\n\n` +
            `Categoria: ${bebida.categoria}\n` +
            `Volume: ${bebida.emLitros()}\n` +
            `Preço: ${bebida.formatarPreco()}`
        );
    });

    return card;
}

function renderizarBebidas() {
    if (!containerBebidas) return;

    containerBebidas.innerHTML = "";

    listaBebidas.forEach(bebida => {
        const card = criarCardBebida(bebida);
        containerBebidas.appendChild(card);
    });
}

renderizarBebidas();

listaBebidas[0].aplicarDesconto(10);
renderizarBebidas();