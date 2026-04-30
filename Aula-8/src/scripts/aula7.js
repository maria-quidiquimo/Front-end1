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