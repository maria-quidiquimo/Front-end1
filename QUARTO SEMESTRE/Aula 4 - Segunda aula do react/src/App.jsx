import Header from "./components/Header"
import CardPrato from "./components/CardPrato"
import Rodape from "./components/Rodape"

const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 42.90,
    categoria: "Prato Principal",
    descricao: "Bem completa e se pedir duas vem com brinde"
  },

  {
    id: 2,
    nome: "Moqueca",
    preco: 49.90,
    categoria: "Prato Principal",
    descricao: "Deliciosa"
  },

  {
    id: 3,
    nome: "Pudim",
    preco: 15.00,
    categoria: "Sobremesa",
    descricao: "Com bastante calda e cremoso"
  },
  {
    id: 4,
    nome: "Brownie",
    preco: 18.00,
    categoria: "Sobremesa",
    descricao: "Casquinha em cima e macio por dentro"
  },
  {
    id: 5,
    nome: "Soda Italiana",
    preco: 16.00,
    categoria: "Bebida",
    descricao: "Bebida refrescante para acompanhar sua refeição."
  },
]

function App() {
  return (
    <main className="app">
    <Header />
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
          />
        ))}
      </section>
    <Rodape />
    </main>
    
  )
}

export default App