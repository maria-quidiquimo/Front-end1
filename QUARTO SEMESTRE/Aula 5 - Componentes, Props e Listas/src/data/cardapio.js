// Dados do cardápio. Cada prato tem 3 campos novos de verdadeiro/falso (true/false):
// vegetariano, destaque e disponivel. Eles decidem o que aparece no card.
export const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 42.9,
    categoria: "Prato principal",
    descricao: "Feijoada tradicional com arroz, farofa, couve e acompanhamentos.",
    vegetariano: false,
    destaque: true,
    disponivel: true
  },
  {
    id: 2,
    nome: "Moqueca",
    preco: 49.9,
    categoria: "Prato principal",
    descricao: "Moqueca baiana em panela com peixe, coco e sabor marcante.",
    vegetariano: false,
    destaque: false,
    disponivel: false
  },
  {
    id: 4,
    nome: "Pudim",
    preco: 15.0,
    categoria: "Sobremesa",
    descricao: "Pudim cremoso e caramelizado, servido em porção individual.",
    vegetariano: true,
    destaque: false,
    disponivel: true
  },
  {
    id: 5,
    nome: "Brigadeirão",
    preco: 13.5,
    categoria: "Sobremesa",
    descricao: "Brigadeirão de chocolate com textura macia e irresistível.",
    vegetariano: true,
    destaque: true,
    disponivel: true
  },
  {
    id: 6,
    nome: "Suco de Caju",
    preco: 9.9,
    categoria: "Bebida",
    descricao: "Suco natural de caju com sabor tropical e refrescante.",
    vegetariano: true,
    destaque: false,
    disponivel: true
  },
  {
    id: 7,
    nome: "Salada Tropical",
    preco: 18.5,
    categoria: "Entrada",
    descricao: "Mix de folhas, manga, castanha e molho cítrico, perfeito para começar.",
    vegetariano: true,
    destaque: false,
    disponivel: true
  },
];
