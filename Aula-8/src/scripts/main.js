document.addEventListener("DOMContentLoaded", function(){
    inicializarHoverCards()
    inicializarVitrine()
})

function inicializarHoverCards(){
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
}

function inicializarVitrine(){
    // 3. delegação de eventos
    const main = document.querySelector("main")

    if(!main) return 

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
        const preco = card.querySelector(".preco").textContent

        // Efeito visual quando clicado "Pedir Agora"

        clicado.textContent = "✓ Adicionado"
        clicado.style.backgroundColor = "#27ae60"
        clicado.disable = true // o clique fica inativo

        setTimeout(() => {
            clicado.textContent = "Pedir Agora"
            clicado.style.backgroundColor = ""
            clicado.disabled = false // deixa o botão desabilibtado
        }, 1500) // é 1,5 segundos, está em milissegundos

       const badgeExistente = card.querySelector(".badge-adicionado")
       
       if(badgeExistente) badgeExistente.remove()
            card.insertAdjacentHTML("beforeend", "<span class='badge-adicionado'> ✓ no resumo </span>")

       setTimeout(function(){
        const badge = card.querySelector(".badge-adicionado")
        if(badge) badge.remove()
       }, 2000)

       // resetar a quantidade de itens - novo
       const box = card.querySelector(".quantidade-box")
       if(box){
        box.querySelector(".qtd-valor").textContent = "1"
        atualizarPrecoCard(box)
       }

        // Acionar ação de salvar pedido
        salvarPedido({nome: nomePrato, preco: preco, qtd: quantidade})
        // esses dois vão trabalhar
        atualizarContadorPedidos() 
    }
}) // acabou o main ouvinte de click
}

function atualizarPrecoCard(box){
    // 4. As funções de atualizar preço e inserir produto ao resumo
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)
    const total = precoUnitario * quantidade
    spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",")// replace substitui algo que você queira
    spanPreco.style.color = total > 150 ? "#cc0d0d" : "#ea5d2a"
}

function salvarPedido(pedido){
    //Leu
    const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]" )// techfood_pedidos vai ser o guia para chamar os itens.

    //Modificou
    pedido.subtotal = pedido.preco * pedido.qtd

    lista.push(pedido)

    //Salvou
    localStorage.setItem("techfood_pedidos", JSON.stringify(lista)) // vai procurar produto existente. Mesmo sem nada ele vai pegar alguma informação.
}
 
function atualizarContadorPedidos(){
    // continua...
}
