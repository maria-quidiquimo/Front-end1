const corFundo = document.querySelector('#container-perfil')
const skills = document.querySelectorAll('#lista-skills')
const statusPerfil = document.querySelector('#badge-status')

corFundo.style.backgroundColor = "#eb9cff";
console.log(`O usuário possui um total de ${skills.length} skills.`);

statusPerfil.classList.add('online');
statusPerfil.textContent = "Status: Ativo";