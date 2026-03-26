const botaoCurtir = document.querySelector('.card-acao')

botaoCurtir.addEventListener('click', (event) =>{
    const clicado = event.target

    if(clicado.classList.contains('contador')){
        console.log("Você clicou em um botão de Curtir!")
    }
})