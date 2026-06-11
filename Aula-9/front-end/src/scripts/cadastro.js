document.getElementById("cadastro").addEventListener("submit", async function(event) {
   const nomePrato = document.getElementById("nomePrato").value;
   const descricao = document.getElementById("descricao").value; 
   const preco = document.getElementById("preco").value;
   const categoria = document.getElementById("categoria").value;
   const disponivel = document.getElementById('input[name="disponivel"]:checked')?.value;

   const prato = {
    nomePrato,
    descricao,
    preco: parseFloat(preco),
    categoria,
    disponivel: disponivel === "Sim"
   };

   try{
    const response = await fetch("http://localhost:3000/pratos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(prato)
    });
    if (response.ok) {
        alert("Prato cadastrado com sucesso!");
        document.getElementById("cadastro").reset();
    } else{
        alert("Erro ao cadastrar prato.");
    }
   } catch (error){
    alert("Falha na conexão com a API.")
   }
})