const amenities = [
  {
    category: "Banheiro",
    items: [
      { name: "Produtos de limpeza" },
      { name: "Sabonete para o corpo" },
      { name: "Chuveiro externo" },
      { name: "Água quente" },
    ],
  },
  {
    category: "Quarto e lavanderia",
    items: [
      { name: "Máquina de lavar na acomodação por Gratuito", priority: 7 },
      {
        name: "Básico",
        details: "Toalhas, lençóis, sabonete e papel higiênico",
      },
      { name: "Cabides" },
      { name: "Roupa de cama" },
      { name: "Roupas de cama de algodão egípcio da Buddmeyer" },
      { name: "Cobertores e travesseiros extras" },
      { name: "Ferro de passar" },
      { name: "Varal para secar roupas" },
      { name: "Local para guardar as roupas: closet" },
    ],
  },
  {
    category: "Entretenimento",
    items: [
      {
        name: "TV de alta definição de 50 polegadas com Netflix, Roku",
        priority: 6,
      },
      { name: "Sistema de som" },
      { name: "Livros e material de leitura" },
    ],
  },
  {
    category: "Climatização",
    items: [{ name: "Ar-condicionado" }, { name: "Ventiladores portáteis" }],
  },
  {
    category: "Segurança doméstica",
    items: [
      {
        name: "Câmeras de segurança na parte externa da propriedade",
        priority: 8,
      },
      { name: "Extintor de incêndio" },
      { name: "Kit de primeiros socorros" },
    ],
  },
  {
    category: "Internet e escritório",
    items: [{ name: "Wi-Fi", priority: 3 }],
  },
  {
    category: "Cozinha e sala de jantar",
    items: [
      { name: "Cozinha", priority: 2 },
      {
        name: "Espaço onde os hóspedes podem preparar suas próprias refeições",
      },
      { name: "Refrigerador" },
      { name: "Microondas" },
      {
        name: "Itens básicos de cozinha",
        details: "Vasilhas, panelas, óleo, sal e pimenta",
      },
      {
        name: "Louças e talheres",
        details: "Tigelas, hashi, pratos, copos, etc.",
      },
      { name: "Freezer" },
      { name: "Fogão a gás Atlas de aço inoxidável" },
      { name: "Forno normal Atlas de aço inoxidável" },
      { name: "Chaleira de água quente" },
      { name: "Cafeteira: cafeteira elétrica" },
      { name: "Taças de vinho" },
      { name: "Assadeira" },
      { name: "Liquidificador" },
      { name: "Utensílios para churrasco", details: "Grelha e espetos" },
      { name: "Mesa de jantar" },
      { name: "Café" },
    ],
  },
  {
    category: "Características da localização",
    items: [
      { name: "Acesso à praia compartilhado", priority: 1 },
      { name: "Lavanderia nas proximidades" },
    ],
  },
  {
    category: "Ar livre",
    items: [
      { name: "Pátio ou varanda (Privativa)" },
      { name: "Quintal privado — totalmente cercado" },
      { name: "Móveis externos" },
      { name: "Rede" },
      { name: "Área de jantar externa" },
      { name: "Cozinha ao ar livre" },
      { name: "Churrasqueira" },
      {
        name: "Itens básicos de praia",
        details:
          "Toalhas de praia, guarda-sol, esteira, equipamento de mergulho",
      },
      { name: "Cadeira espreguiçadeira" },
    ],
  },
  {
    category: "Estacionamento e instalações",
    items: [
      { name: "Estacionamento incluído", priority: 4 },
      { name: "Estacionamento gratuito na rua" },
      { name: "Piscina privativa", priority: 5 },
      { name: "Casa térrea", details: "Não há escadas na casa" },
    ],
  },
  {
    category: "Serviços",
    items: [
      { name: "Café da Manhã", details: "O café da manhã é fornecido" },
      { name: "Limpeza disponível durante a estadia" },
      { name: "O anfitrião recebe você" },
    ],
  },
  {
    category: "Não incluso",
    items: [
      { name: "Secadora", unavailable: true },
      { name: "Detector de fumaça", unavailable: true, priority: 10 },
      { name: "Alarme de monóxido de carbono", unavailable: true, priority: 9 },
      { name: "Aquecimento", unavailable: true },
    ],
  },
];

export default amenities;
