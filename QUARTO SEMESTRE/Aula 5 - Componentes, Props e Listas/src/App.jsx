import { useState } from "react";
import Header from "./components/Header";
import SecaoCardapio from "./components/SecaoCardapio";
import { cardapio } from "./data/cardapio";
import "./App.css";

const categorias = ["Prato principal", "Sobremesa", "Bebida"]

function App() {
  const [totalItens, setTotalItens] = useState(0);
  const [totalValor, setTotalValor] = useState(0);

  function adicionarAoPedido(quantidade, preco) {
    setTotalItens((prev) => prev + quantidade);
    setTotalValor((prev) => prev + quantidade * preco);
  }

  function limparPedido() {
    setTotalItens(0);
    setTotalValor(0);
  }

  return (
    <main className="app">
      <Header totalItens={totalItens} totalValor={totalValor} onLimparPedido={limparPedido} />
      <p className="contador">Cardápio com {cardapio.length} itens</p>
      
      {categorias.map((categoria) => (
        <SecaoCardapio
        key={categoria}
        titulo={categoria}
        pratos={cardapio.filter((prato) => prato.categoria === categoria)}
        onAdicionar={adicionarAoPedido}
        />
      ))}
    </main>
  );
}

export default App;
