// Recebe o total de itens do pedido (quem guarda esse estado é o App).
function Header({ totalItens, totalValor = 0, onLimparPedido }) {
  const totalFormatado = totalValor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <header className="header">
      <h1>TechFood — Sabor & Saber</h1>
      <p>O sabor que ensina</p>

      <div className="pedido-resumo">
        <p className="carrinho">Itens no pedido: {totalItens}</p>
        <p className="carrinho">Total: {totalFormatado}</p>
      </div>

      {onLimparPedido && (
        <button type="button" className="btn-limpar" onClick={onLimparPedido}>
          Limpar pedido
        </button>
      )}
    </header>
  );
}

export default Header;
