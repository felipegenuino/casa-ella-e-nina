const amenities = [
  {
    items: [
      { icon: "produto-de-limpeza.svg" },
      { icon: "sabonete-para-o-corpo.svg" },
      { icon: "chuveiro-externo.svg" },
      { icon: "agua-quente.svg" },
    ],
  },
  {
    items: [
      {
        priority: 7,
        icon: "maquina-de-lavar.svg",
      },
      {
        hasDetails: true,
        icon: "basico.svg",
      },
      { icon: "cabides.svg" },
      { icon: "roupa-de-cama.svg" },
      {
        icon: "roupas-de-cama-buddmeyer.svg",
      },
      {
        icon: "cobertores-e-travesseiros-extras.svg",
      },
      { icon: "ferro-de-passar.svg" },
      { icon: "cabides.svg" },
      { icon: "closet.svg" },
    ],
  },
  {
    items: [
      {
        priority: 6,
        icon: "tv.svg",
      },
      { icon: "sistema-som.svg" },
      { icon: "livros.svg" },
    ],
  },
  {
    items: [
      { icon: "ar-condicionado.svg" },
      { icon: "ventilador.svg" },
    ],
  },
  {
    items: [
      {
        priority: 8,
        icon: "camera.svg",
      },
      { icon: "extintor-de-incendio.svg" },
      {
        icon: "kit-de-primeiros-socorros.svg",
      },
    ],
  },
  {
    items: [{ priority: 3, icon: "wi-fi.svg" }],
  },
  {
    items: [
      {
        priority: 2,
        icon: "cozinha.svg",
        hasDetails: true,
      },

      { icon: "refrigerador.svg" },
      { icon: "microondas.svg" },
      {
        icon: "cozinha.svg",
        hasDetails: true,
      },
      {
        icon: "loucas-e-talheres.svg",
        hasDetails: true,
      },
      { icon: "freezer.svg" },
      { icon: "fogao-gas.svg" },
      { icon: "forno.svg" },
      { icon: "chaleira-de-agua-quente.svg" },
      {
        icon: "cafeteira.svg",
      },
      { icon: "tacas-vinho.svg" },
      { icon: "assadeira.svg" },
      { icon: "liquidificador.svg" },
      {
        hasDetails: true,
        icon: "churrasco.svg",
      },
      { icon: "mesa-jantar.svg" },
      { icon: "cafeteira.svg" },
    ],
  },
  {
    items: [
      {
        priority: 1,
        icon: "acesso-a-praia-compartilhado.svg",
      },
      {
        icon: "lavanderia-nas-proximidades.svg",
      },
    ],
  },
  {
    items: [
      { icon: "patio-varanda.svg" },
      {
        icon: "quintal-privado.svg",
      },
      { icon: "moveis-externo.svg" },
      { icon: "rede.svg" },
      { icon: "moveis-externo.svg" },
      { icon: "churrasco.svg" },
      { icon: "churrasco.svg" },
      {
        hasDetails: true,
      },
      {},
    ],
  },
  {
    items: [
      {
        priority: 4,
        icon: "estacionamento.svg",
      },
      { icon: "estacionamento.svg" },
      { priority: 5, icon: "piscina-privativa.svg" },
      {
        hasDetails: true,
        icon: "casa-terrea.svg",
      },
    ],
  },
  {
    items: [
      {
        hasDetails: true,
        icon: "cafe-completo.svg",
      },
      { icon: "limpeza.svg" },
      { icon: "anfitriao-chaves.svg" },
    ],
  },
  {
    items: [
      { unavailable: true, icon: "secadora.svg" },
      {
        unavailable: true,
        // priority: 10,
        icon: "detector-fumaca.svg",
      },
      {
        unavailable: true,
        // priority: 9,
        icon: "alarme-de-monoxido-de-carbono.svg",
      },
      { unavailable: true, icon: "aquecimento.svg" },
    ],
  },
];

export default amenities;
