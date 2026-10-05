import { useState } from "react";
import Selo from "./Selo";

function CardPrato({
  nome,
  preco,
  categoria,
  vegetariano = false,
  destaque = false,
  disponivel = true,
  onAdicionar,
  descricao,
}) {
  const [quantidade, setQuantidade] = useState(1);
  const [curtidas, setCurtidas] = useState(12);
  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function diminuir() {
    setQuantidade((prev) => Math.max(prev - 1, 1));
  }

  function aumentar() {
    setQuantidade((prev) => Math.min(prev + 1, 10));
  }

  function adicionar() {
    if (!disponivel) return;
    onAdicionar(quantidade, preco);
    setQuantidade(1);
  }

  function curtir() {
    setCurtidas((prev) => prev + 1);
  }

  return (
    <article className="card-prato">
      <span className="categoria">{categoria}</span>
      <h2>
        {categoria === "Sobremesa" ? "🍰" : ""}
        {nome}
      </h2>

      <div className="selos">
        {destaque && <Selo texto="Destaque" tipo="destaque" />}
        {vegetariano && <Selo texto="Vegetariano" tipo="veg" />}
      </div>

      <p className="preco">{precoFormatado}</p>

      <div className="acoes-prato">
        <button type="button" className="btn-curtir" onClick={curtir} aria-label={`Curtir ${nome}`}>
          ❤ {curtidas}
        </button>
        <button
          type="button"
          className="btn-descricao"
          onClick={() => setMostrarDescricao((prev) => !prev)}
        >
          {mostrarDescricao ? "Esconder descrição" : "Mostrar descrição"}
        </button>
      </div>

      {mostrarDescricao && <p className="descricao">{descricao}</p>}

      <div className="quantidade">
        <button type="button" onClick={diminuir} aria-label={`Diminuir quantidade de ${nome}`}>
          -
        </button>
        <span>{quantidade}</span>
        <button type="button" onClick={aumentar} aria-label={`Aumentar quantidade de ${nome}`}>
          +
        </button>
      </div>

      <button
        type="button"
        className={`btn-adicionar ${!disponivel ? "btn-indisponivel" : ""}`}
        onClick={adicionar}
        disabled={!disponivel}
      >
        {disponivel ? "Adicionar ao Pedido" : "Indisponível"}
      </button>
    </article>
  );
}

export default CardPrato;