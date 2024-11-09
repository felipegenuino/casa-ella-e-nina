const amenities = [
  {
    category: "Banheiro",
    items: [
      { name: "Produtos de limpeza", icon: "produto-de-limpeza.svg" },
      { name: "Sabonete para o corpo", icon: "sabonete-para-o-corpo.svg" },
      { name: "Chuveiro externo", icon: "chuveiro-externo.svg" },
      { name: "Água quente", icon: "agua-quente.svg" },
    ],
  },
  {
    category: "Quarto e lavanderia",
    items: [
      {
        name: "Máquina de lavar na acomodação por Gratuito",
        priority: 7,
        icon: "maquina-de-lavar.svg",
      },
      {
        name: "Básico",
        details: "Toalhas, lençóis, sabonete e papel higiênico",
        icon: "basico.svg",
      },
      { name: "Cabides", icon: "cabides.svg" },
      { name: "Roupa de cama", icon: "roupa-de-cama.svg" },
      {
        name: "Roupas de cama de algodão egípcio da Buddmeyer",
        icon: "roupas-de-cama-buddmeyer.svg",
      },
      {
        name: "Cobertores e travesseiros extras",
        icon: "cobertores-e-travesseiros-extras.svg",
      },
      { name: "Ferro de passar", icon: "ferro-de-passar.svg" },
      { name: "Varal para secar roupas", icon: "cabides.svg" },
      { name: "Local para guardar as roupas: closet", icon: "closet.svg" },
    ],
  },
  {
    category: "Entretenimento",
    items: [
      {
        name: "TV de alta definição de 50 polegadas com Netflix, Roku",
        priority: 6,
        icon: "tv.svg",
      },
      { name: "Sistema de som", icon: "sistema-som.svg" },
      { name: "Livros e material de leitura", icon: "livros.svg" },
    ],
  },
  {
    category: "Climatização",
    items: [
      { name: "Ar-condicionado", icon: "ar-condicionado.svg" },
      { name: "Ventiladores portáteis", icon: "ventilador.svg" },
    ],
  },
  {
    category: "Segurança doméstica",
    items: [
      {
        name: "Câmeras de segurança na parte externa da propriedade",
        priority: 8,
        icon: "camera.svg",
      },
      { name: "Extintor de incêndio", icon: "extintor-de-incendio.svg" },
      {
        name: "Kit de primeiros socorros",
        icon: "kit-de-primeiros-socorros.svg",
      },
    ],
  },
  {
    category: "Internet e escritório",
    items: [{ name: "Wi-Fi", priority: 3, icon: "wi-fi.svg" }],
  },
  {
    category: "Cozinha e sala de jantar",
    items: [
      {
        name: "Cozinha",
        priority: 2,
        icon: "cozinha.svg",
        details:
          "Espaço onde os hóspedes podem preparar suas próprias refeições",
      },

      { name: "Refrigerador", icon: "refrigerador.svg" },
      { name: "Microondas", icon: "microondas.svg" },
      {
        name: "Itens básicos de cozinha",
        icon: "cozinha.svg",
        details: "Vasilhas, panelas, óleo, sal e pimenta",
      },
      {
        name: "Louças e talheres",
        icon: "loucas-e-talheres.svg",
        details: "Tigelas, hashi, pratos, copos, etc.",
      },
      { name: "Freezer", icon: "freezer.svg" },
      { name: "Fogão a gás Atlas de aço inoxidável", icon: "fogao-gas.svg" },
      { name: "Forno normal Atlas de aço inoxidável", icon: "forno.svg" },
      { name: "Chaleira de água quente", icon: "chaleira-de-agua-quente.svg" },
      {
        name: "Cafeteira: cafeteira elétrica",
        icon: "cafeteira.svg",
      },
      { name: "Taças de vinho", icon: "tacas-vinho.svg" },
      { name: "Assadeira", icon: "assadeira.svg" },
      { name: "Liquidificador", icon: "liquidificador.svg" },
      {
        name: "Utensílios para churrasco",
        details: "Grelha e espetos",
        icon: "churrasco.svg",
      },
      { name: "Mesa de jantar", icon: "mesa-jantar.svg" },
      { name: "Café", icon: "cafeteira.svg" },
    ],
  },
  {
    category: "Características da localização",
    items: [
      {
        name: "Acesso à praia compartilhado",
        priority: 1,
        icon: "acesso-a-praia-compartilhado.svg",
      },
      {
        name: "Lavanderia nas proximidades",
        icon: "lavanderia-nas-proximidades.svg",
      },
    ],
  },
  {
    category: "Ar livre",
    items: [
      { name: "Pátio ou varanda (Privativa)", icon: "patio-varanda.svg" },
      {
        name: "Quintal privado — totalmente cercado",
        icon: "quintal-privado.svg",
      },
      { name: "Móveis externos", icon: "moveis-externo.svg" },
      { name: "Rede", icon: "rede.svg" },
      { name: "Área de jantar externa", icon: "moveis-externo.svg" },
      { name: "Cozinha ao ar livre", icon: "churrasco.svg" },
      { name: "Churrasqueira", icon: "churrasco.svg" },
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
      {
        name: "Estacionamento incluído",
        priority: 4,
        icon: "estacionamento.svg",
      },
      { name: "Estacionamento gratuito na rua", icon: "estacionamento.svg" },
      { name: "Piscina privativa", priority: 5, icon: "piscina-privativa.svg" },
      {
        name: "Casa térrea",
        details: "Não há escadas na casa",
        icon: "casa-terrea.svg",
      },
    ],
  },
  {
    category: "Serviços",
    items: [
      {
        name: "Café da Manhã",
        details: "O café da manhã é fornecido",
        icon: "cafe-completo.svg",
      },
      { name: "Limpeza disponível durante a estadia", icon: "limpeza.svg" },
      { name: "O anfitrião recebe você", icon: "anfitriao-chaves.svg" },
    ],
  },
  {
    category: "Não incluso",
    items: [
      { name: "Secadora", unavailable: true, icon: "secadora.svg" },
      {
        name: "Detector de fumaça",
        unavailable: true,
        priority: 10,
        icon: "detector-fumaca.svg",
      },
      {
        name: "Alarme de monóxido de carbono",
        unavailable: true,
        priority: 9,
        icon: "alarme-de-monoxido-de-carbono.svg",
      },
      { name: "Aquecimento", unavailable: true, icon: "aquecimento.svg" },
    ],
  },
];

export default amenities;
