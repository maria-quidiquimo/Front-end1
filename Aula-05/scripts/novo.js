// --- SELEÇÃO COM QUERY SELECTOR (O padrão moderno) ---

// 1. Especificidade total: Buscando o h3 apenas dentro de um ID específico
// Isso evita pegar o h3 da Lasanha por engano.
const tituloMacarrao = document.querySelector('#card-macarrao h3');

// 2. Selecionando múltiplos elementos: Todos os botões que têm a classe .btn-pedido
// Diferente do getElementsByClassName, este retorna uma NodeList (mais moderna que HTMLCollection)
const botoesCompra = document.querySelectorAll('.bt-pedido');

// 3. Selecionando por atributo (Ex: pegar a imagem pelo 'alt')
const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

// 4. Selecionando o checkbox do menu pelo ID (Sintaxe de CSS #)
const checkMenu = document.querySelector('#bt_menu');


// --- EXEMPLOS PRÁTICOS PARA MOSTRAR AOS ALUNOS ---

console.log("=== TESTES COM QUERY SELECTOR ===");

// 5. Verificando o texto do elemento específico
if (tituloMacarrao) {
    console.log("Título capturado:", tituloMacarrao.innerText);
}

// 6. Manipulando a lista de botões (querySelectorAll)
// Podemos ver quantos botões existem na página
console.log("Quantidade de botões de pedido:", botoesCompra.length);

// 7. Pegando o primeiro botão da lista e mudando o texto via JS
if (botoesCompra.length > 0) {
    botoesCompra[0].textContent = "Comprar Agora!";
    console.log("Texto do primeiro botão alterado com sucesso.");
}

// 8. Seleção combinada (Descendente)
// Pega o preço (span) que está dentro do card de lasanha
const precoLasanha = document.querySelector('.card .preco');
console.log("Preço da Lasanha:", precoLasanha.innerText);

// 9. Verificando se o seletor falhou (Segurança para o código)
const elementoInexistente = document.querySelector('.classe-que-nao-existe');
console.log("Resultado de seletor inexistente:", elementoInexistente); // Retorna null

tituloMacarrao.style.color = "#e67e22"

card_lasanha.classList.add('.em-promocao')

