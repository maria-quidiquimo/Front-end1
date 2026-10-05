import Header from "./components/Header"
import CardPrato from "./components/CardPrato"
import Footer from "./components/Rodape"
import {cardapio} from "./data/cardapio"
import "./App.css"
import { useState } from "react"


function App() {
  const [totalItens, setTotalItens] = useState(0)

  function adicionarAoPedido(quantidade) {
    setTotalItens((valorAnterior) => valorAnterior + quantidade)
  }

  return (
    <main className="app">
      <Header totalItens={totalItens} tagline="O melhor sabor com o toque da tecnologia e da educação!" />

      <h2>Nosso Menu</h2>
      <p className="total-itens">Cardápio com {cardapio.length} itens</p>

      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
            onAdicionar={adicionarAoPedido}
          />
        ))}
      </section>
      <Footer />
    </main>
  )
}

export default App