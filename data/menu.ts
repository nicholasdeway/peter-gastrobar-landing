export interface MenuItem {
  name: string
  price: number
  description?: string
}

export interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: 'entradas',
    name: 'Entradas',
    items: [
      { name: 'Batata Frita', price: 20 },
      { name: 'Torresmo', price: 25 },
      { name: 'Dadinho de Tapioca (10 unidades)', price: 30 },
      { name: 'Bolinho de Bacalhau (10 unidades)', price: 48 },
      { name: 'Bolinho de Salmão (10 unidades)', price: 49 },
      { name: 'Bolinho de Provolone (8 unidades)', price: 40 },
      { name: 'Croquete de Cupim (5 unidades)', price: 45 },
      { name: 'Caldinho de Mocotó', price: 25 },
      { name: 'Caldinho de Siri', price: 29 },
      { name: 'Caldinho de Feijoada', price: 25 },
      { name: 'Bobó de Camarão', price: 30 },
      { name: 'Polenta Frita c/ Queijo Gratinado', price: 49 },
      { name: 'Pastelzinho (6 unidades)', price: 45 },
      { name: 'Casquinha de Siri (1 unidade)', price: 12 },
      { name: 'Escondidinho de Camarão', price: 40 },
      { name: 'Escondidinho de Carne Seca', price: 38 },
      { name: 'Escondidinho de Frango', price: 35 },
      { name: 'Trio Brusqueta (3 do mesmo sabor)', price: 49 },
    ],
  },
  {
    id: 'petiscos',
    name: 'Petiscos',
    items: [
      { name: 'Costelinha Suína', price: 110 },
      { name: 'Aipim com Carne Seca', price: 89 },
      { name: 'Fonduta de Pão Italiano', price: 95 },
      { name: 'Camarão Empanado Premium', price: 89 },
      { name: 'Isca de Peixe', price: 69 },
      { name: 'Torresmo de Rolo', price: 59 },
      { name: 'Linguiça Caracol', price: 59 },
      { name: 'Prime Rib', price: 189 },
    ],
  },
  {
    id: 'osteria',
    name: 'Osteria dell\'Peter (Massas e Risotos)',
    items: [
      { name: 'Risoto de Queijo', price: 90 },
      { name: 'Risoto de Moqueca', price: 90 },
      { name: 'Papardelle com Fonduta de Queijo', price: 89 },
      { name: 'Talharim feito com molho pomodoro', price: 79 },
      { name: 'Lasanha Alla Bolognese', price: 69 },
    ],
  },
  {
    id: 'pratos-dois',
    name: 'Pratos para Dois',
    items: [
      { name: 'Risoto de Moqueca', price: 189 },
      { name: 'Moqueca de Peixe', price: 149 },
      { name: 'Lombo de Salmão', price: 179 },
      { name: 'Ancho', price: 159 },
      { name: 'Escalopinho ao Molho Madeira', price: 159 },
      { name: 'Posta de Peixe Frito', price: 159 },
    ],
  },
  {
    id: 'bebidas-nao-alcoolicas',
    name: 'Bebidas Não Alcoólicas',
    items: [
      { name: 'FYS', price: 8 },
      { name: 'Refrigerante', price: 8 },
      { name: 'H2O', price: 9 },
      { name: 'Guaraviton', price: 9 },
      { name: 'Mamba com Gás', price: 6 },
      { name: 'Mamba sem Gás', price: 5 },
      { name: 'Soda Italiana', price: 22 },
    ],
  },
  {
    id: 'sucos',
    name: 'Sucos Naturais',
    items: [
      { name: 'Abacaxi', price: 12 },
      { name: 'Maracujá', price: 15 },
      { name: 'Limonada Suíça', price: 12 },
    ],
  },
  {
    id: 'cervejas',
    name: 'Cervejas',
    items: [
      { name: 'Baden Baden', price: 22 },
      { name: 'Praya Witbier (355ml)', price: 19 },
      { name: 'Heineken (600ml)', price: 17 },
      { name: 'Heineken (Long Neck)', price: 12 },
      { name: 'Corona (Long Neck)', price: 14 },
      { name: 'Heineken Zero (330ml)', price: 11 },
      { name: 'Amstel (600ml)', price: 14 },
      { name: 'Amstel Ultra (Long Neck)', price: 12 },
      { name: 'Brahma (600ml)', price: 14 },
      { name: 'Antarctica Original (600ml)', price: 14 },
      { name: 'Stella (Long Neck)', price: 12 },
    ],
  },
  {
    id: 'drinks-tradicionais',
    name: 'Drinks Tradicionais',
    items: [
      { name: 'Caipirinha & Caipvodka', price: 30 },
      { name: 'Margarita', price: 32 },
      { name: 'Piña Colada', price: 32 },
      { name: 'Mojito', price: 25 },
    ],
  },
  {
    id: 'drinks-peter',
    name: 'Drinks do Peter',
    items: [
      { name: 'Cosmopolitan', price: 30 },
      { name: 'Aperol Spritz', price: 35 },
      { name: 'Infusion (Melancia)', price: 28 },
      { name: 'Infusion (Maracujá)', price: 28 },
      { name: 'Gin Tônica', price: 30 },
      { name: 'Negroni', price: 38 },
      { name: 'Sex on the Beach', price: 30 },
      { name: 'Citrus Sunset', price: 35 },
      { name: 'Old Fashioned', price: 38 },
      { name: 'Moscow Mule', price: 35 },
      { name: 'Alexander', price: 34 },
    ],
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    items: [
      { name: 'Mudinha de Cacau', price: 35 },
      { name: 'Mousse de Chocolate', price: 38 },
      { name: 'Petit Gateau de Doce de Leite', price: 28 },
      { name: 'Brownie de Chocolate', price: 30 },
      { name: 'Sorvete', price: 22 },
    ],
  },
]
