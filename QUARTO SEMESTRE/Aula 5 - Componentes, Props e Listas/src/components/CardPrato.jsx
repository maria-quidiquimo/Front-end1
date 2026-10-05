import { useState } from "react"

function CardPrato({ nome, preco, categoria, vegetariano = false, destaque = false, onAdicionar, descricao }) {

    const [quantidade, setQuantidade] = useState(1)

    const precoFormatado = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    function diminuir() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1)
        }
    }

    function aumentar() {
        setQuantidade(quantidade + 1)
    }

    function adicionar() {
        onAdicionar(quantidade)
        setQuantidade(1)
    }

    return (
        <article className="card-prato">
            <span className="categoria">{categoria}</span>
            <h2>
              {categoria === "Sobremesa" ? "🍰" : ""}
              {nome}</h2>

              {/*SELOS */}
              <div className="selos">
                {destaque && <Selo texto="Destaque" tipo="destaque"/>}
                {vegetariano && <Selo texto="Vegetariano" tipo="vegetariano"/>}
              </div>
            <p className="preco">{precoFormatado}</p>
            <p className="descricao">{descricao}</p>
            <div className="quantidade">
                <button type="button" onClick={diminuir} aria-label={`Diminuir quantidade de ${nome}`}>-</button>
                <span>{quantidade}</span>
                <button type="button" onClick={aumentar} aria-label={`Aumentar quantidade de ${nome}`}>+</button>
            </div>
            <button type="button" className="btn-adicionar" onClick={adicionar}> Adicionar ao Pedido </button>
        </article>
    )
}

export default CardPrato