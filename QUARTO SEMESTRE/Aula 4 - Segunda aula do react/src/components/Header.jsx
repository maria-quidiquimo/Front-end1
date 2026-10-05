function Header({totalItens}){
    return (
        <header className="header" style={{color: 'purple'}}>
            <h1>TechFood - Sabor e Saber</h1>
            <p>O sabor que ensina! :D</p>
            <p className="carrinho">Itens no Pedido: {totalItens} </p>
        </header>
    )
}

export default Header