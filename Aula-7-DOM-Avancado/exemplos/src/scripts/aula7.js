// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// 2. INTERATIVIDADE NOS CARDS (Feedback visual)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

// 3. delegação de eventos

const main = document.querySelector("main")

main.addEventListener("click", (event) => {

    const clicado = event.target

    // Quantidade de Itens + ou - 
    if(clicado.classList.contains("btn-menos")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent)
        spanQtd.textContent = Math.max(1, valorAtual - 1)
        atualizarPrecoCard(box)
        return
    }

    if(clicado.classList.contains("btn-mais")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        spanQtd.textContent = Number(spanQtd.textContent) + 1
        atualizarPrecoCard(box)
        return
    }

    // Ação do btn-pedido 

    if (clicado.classList.contains("btn-pedido")){
        event.preventDefault()

        const card = clicado.parentElement
        const nomePrato = card.querySelector("h3").textContent
        const quantidade = card.querySelector(".qtd-valor").textContent
        const precoExibido = card.querySelector(".preco").textContent

        // Efeito visual quando clicado "Pedir Agora"

        clicado.textContent = "✓ Adicionado"
        clicado.style.backgroundColor = "#27ae60"
        clicado.disable = true // o clique fica inativo

        setTimeout(() => {
            clicado.textContent = "Pedir Agora"
            clicado.style.backgroundColor = ""
            clicado.disable = false // deixa o botão desabilibtado
        }, 1500) // é 1,5 segundos, está em milissegundos

        if(!card.querySelector(".badge-adicionado")){
            card.insertAdjacentHTML(
                "beforeend", "<span class='badge-adicionado'> ✓ no resumo </span>"
            )
        }

        adicionarItemnAoResumo(nomePrato, quantidade, precoExibido, card)

    }
}) // acabou o main ouvinte de click

// 4. As funções de atualizar preço e inserir produto ao resumo

function atualizarPrecoCard(box){
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)
    const total = precoUnitario * quantidade
    spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",")// replace substitui algo que você queira
    spanPreco.style.color = total > 150 ? "#cc0d0d" : "#ea5d2a"
}

