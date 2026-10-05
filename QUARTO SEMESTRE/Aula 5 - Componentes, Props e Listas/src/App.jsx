import { useState } from "react";
import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import { cardapio } from "./data/cardapio";
import "./App.css";

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
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
            vegetariano={prato.vegetariano}
            destaque={prato.destaque}
            disponivel={prato.disponivel}
            onAdicionar={adicionarAoPedido}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
