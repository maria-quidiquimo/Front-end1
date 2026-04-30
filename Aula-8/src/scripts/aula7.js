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
            clicado.disabled = false // deixa o botão desabilibtado
        }, 1500) // é 1,5 segundos, está em milissegundos

        if(!card.querySelector(".badge-adicionado")){
            card.insertAdjacentHTML(
                "beforeend", "<span class='badge-adicionado'> ✓ no resumo </span>"
            )
        }

        adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)

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

function adicionarItemAoResumo(nome, qtd, preco, cardOrigem){
    
    const secaoResumo = document.querySelector("#secao-resumo")
    const listaResumo = document.querySelector("#lista-resumo")
    
    if(!secaoResumo || !listaResumo) return

    //exibindo a seção resumo
    secaoResumo.style.display = "block"

    //criando um item na lista 
    const itemLi = document.createElement("li")
    itemLi.classList.add("item-resumo")
    
    // Informações - TEXTO
    const textoSpan = document.createElement("span")
    textoSpan.textContent = qtd + "x " + nome + " - " + preco

    // Criando botão para remover prato da lista de resumo !!
    const btnRemover = document.createElement("button")
    btnRemover.textContent = "✖️"
    btnRemover.classList.add("btn-remover")

    // Ação de remover o botão, o anterior é a criação dele
    btnRemover.addEventListener("click", () =>{
        itemLi.remove()

        const badge = cardOrigem.querySelector(".badge-adicionado")

        if(badge) badge.remove() // vai sumir uma caixa, onde não tem mais os pratos dentro dela.

        if(listaResumo.children.length === 0){ //dono da caixa onde tem os pratos, verifica se tem filhos
            secaoResumo.style.display = "none" // sem nenhum prato adicionado
        } 
    }) // fim do RemoverItem

    // é aqui que é inserido realmente na página (parte visual!!)
    itemLi.appendChild(textoSpan) // textoSpan é o prato e suas informações
    itemLi.appendChild(btnRemover)
    listaResumo.appendChild(itemLi)
} // fim da função AdiconarItemAoResumo


const btnLimpar = document.querySelector("#btn-limpar")

if(btnLimpar){ // verifica se botao existe
    btnLimpar.addEventListener("click", () =>{
        const listaResumo = document.querySelector("#lista-resumo")
        const secaoResumo = document.querySelector("#secao-resumo")

        // remove os badge que criamos do js (não tem no html) linha 74
        document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove()) // remove todos os pratos em alguma posição, se tiver posição com elemento, ele passa e apaga.

        // REMOVER os filhos dessa lista
        while(listaResumo.firstElementChild){
            listaResumo.firstElementChild.remove()
        }

        secaoResumo.style.display = "none" // os códigos anteriores a esse apagam tudo, ou seja, apaga as informações, e esse apaga só o visual.


    })
}