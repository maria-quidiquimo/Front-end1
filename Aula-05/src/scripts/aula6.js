const inputQtd = document.querySelector('#qtd-lasanha')
const precoTexto = document.querySelector('#preco-lasanha')

if(inputQtd && precoTexto){
    inputQtd.addEventListener("input", () =>{
        const precoUnitario = 45.0
        const total = Number(inputQtd.value) * precoUnitario
        precoTexto.textContent = `R$ ${total.toFixed(2)}`

        precoTexto.computedStyleMap.color = total > 150 ? "#237ab8": "#2243e6"
    })
}

// 2. Eventos de clique para CLASS - EVENT.TARGET

document.addEventListener('click', (event) =>{
    const clicado = event.target // fazer a ação/mudança/aplicação que você quiser, mediante ao que foi clicado.
})

const massas = document.querySelector("#secao-massas")

massas.addEventListener('click', (event) =>{
    const clicado = event.target

    if(clicado.classList.contains('bt-pedido')){ //contains busca se os botões tem a classe chamada de bt-pedido.
        console.log("Você clicou em um botão de MASSAS!!")
    }
})

// 2.3 Buscar evento direto da CLASS 

const botoesPedido = document.querySelectorAll(".bt-pedido")

botoesPedido.forEach((botao)=>{
    botao.addEventListener("click", (event) => {
        botao.textContent = "✔️ Pedido enviado"
        botao.style.backgroundColor = "red"
        botao.style.cursor = "default"
        botao.disabled = true
    })
})