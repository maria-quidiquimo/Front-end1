




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