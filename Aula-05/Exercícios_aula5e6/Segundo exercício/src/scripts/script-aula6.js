const btn = document.querySelector('#btn-curtir')
const contadorUsuario = document.querySelector('#contador')

let totalCurtidas = 0

btn.addEventListener('click', function() {
    totalCurtidas++
    contadorUsuario.textContent = totalCurtidas
})

const escritaUsuario = document.querySelector('#campo-texto')
const previaUsuario = document.querySelector('#preview-texto')

escritaUsuario.addEventListener('input', function() {
    if(escritaUsuario.value === "") {
        previaUsuario.textContent = 'Digitando: ...'
    } else {
        previaUsuario.textContent = `Digitando: ${escritaUsuario.value}`
    }
})

const corCaixa = document.querySelector('#caixa-cor')
corCaixa.addEventListener('mouseover', function() {
    corCaixa.style.backgroundColor = '#6b8abd'
})

corCaixa.addEventListener('mouseout', function() {
    corCaixa.style.backgroundColor = '#95a5a6'
})

const botaoReset = document.querySelector('#btn-reset')
botaoReset.addEventListener('click', function() {
    escritaUsuario.value = ''
    previaUsuario.textContent = 'Digitando: ...'
    totalCurtidas = 0
    contadorUsuario.textContent = '0'
})