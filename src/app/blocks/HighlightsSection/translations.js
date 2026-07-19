// Traduções (en/es) do conteúdo das galerias do HighlightsSection.
// `galleries.js` continua sendo a fonte da verdade em PT; aqui ficam só en/es,
// indexados pela string PT original. `tGallery` faz o lookup em runtime.

const galleryTranslations = {
  // Títulos (rótulos dos "stories")
  "Conheça as Casas": { en: "Meet the Houses", es: "Conozca las Casas" },
  "Café da Manhã": { en: "Breakfast", es: "Desayuno" },
  "Área de Lazer": { en: "Leisure Area", es: "Área de Ocio" },
  "Praias e Passeios": { en: "Beaches & Tours", es: "Playas y Paseos" },

  // Descrições das galerias (intro do modal)
  "Descubra o equilíbrio perfeito entre charme, conforto e exclusividade. Nossa casa boutique foi projetada para proporcionar uma experiência inesquecível em cada detalhe.":
    {
      en: "Discover the perfect balance of charm, comfort and exclusivity. Our boutique house was designed to deliver an unforgettable experience in every detail.",
      es: "Descubra el equilibrio perfecto entre encanto, confort y exclusividad. Nuestra casa boutique fue diseñada para brindar una experiencia inolvidable en cada detalle.",
    },
  "Ambientes aconchegantes e funcionais que combinam estilo e modernidade. Viva momentos únicos em cada espaço cuidadosamente planejado.":
    {
      en: "Cozy and functional spaces that blend style and modernity. Live unique moments in every carefully planned space.",
      es: "Ambientes acogedores y funcionales que combinan estilo y modernidad. Viva momentos únicos en cada espacio cuidadosamente planificado.",
    },
  "Relaxe e se divirta em nossa área de lazer privativa, projetada para oferecer momentos de descanso com vista para a beleza natural ao seu redor.":
    {
      en: "Relax and have fun in our private leisure area, designed to offer moments of rest with a view of the natural beauty around you.",
      es: "Relájese y diviértase en nuestra área de ocio privada, diseñada para ofrecer momentos de descanso con vista a la belleza natural a su alrededor.",
    },
  "Desfrute de momentos únicos ao redor da mesa. Nossa cozinha e espaço para refeições foram pensados para criar memórias saborosas.":
    {
      en: "Enjoy unique moments around the table. Our kitchen and dining space were designed to create flavorful memories.",
      es: "Disfrute de momentos únicos alrededor de la mesa. Nuestra cocina y espacio para comidas fueron pensados para crear recuerdos sabrosos.",
    },

  // Legendas das imagens
  "Conheça as casas": { en: "Meet the houses", es: "Conozca las casas" },
  "Casa Ella à esquerda. (Entrada individual)": {
    en: "Casa Ella on the left. (Individual entrance)",
    es: "Casa Ella a la izquierda. (Entrada individual)",
  },
  "Casa Nina à direita. (Entrada individual)": {
    en: "Casa Nina on the right. (Individual entrance)",
    es: "Casa Nina a la derecha. (Entrada individual)",
  },
  "Vista para entrada": { en: "Entrance view", es: "Vista de la entrada" },
  "Vista para piscina": { en: "Pool view", es: "Vista a la piscina" },
  "espaço para dançar, fazer alongamento, descansar, apreciar...": {
    en: "space to dance, stretch, relax, enjoy...",
    es: "espacio para bailar, estirarse, descansar, disfrutar...",
  },
  "Rede para descansar": { en: "Hammock to relax", es: "Hamaca para descansar" },
  "Cozinha Completa": { en: "Fully equipped kitchen", es: "Cocina completa" },
  "Área de Jantar": { en: "Dining area", es: "Área de comedor" },
  "Mesa refeições no jardim": {
    en: "Dining table in the garden",
    es: "Mesa de comidas en el jardín",
  },
  "Nossa cama king": { en: "Our king bed", es: "Nuestra cama king" },
  "Ver TV de qualquer canto da casa": {
    en: "Watch TV from anywhere in the house",
    es: "Ver la TV desde cualquier rincón de la casa",
  },
  "Detalhe da cabeceira, artesanato brasileiro.": {
    en: "Headboard detail, Brazilian craftsmanship.",
    es: "Detalle del cabecero, artesanía brasileña.",
  },
  "Na suíte uma área de descanso na rede": {
    en: "In the suite, a resting area with a hammock",
    es: "En la suite, un área de descanso con hamaca",
  },
  "Banheiro completo": { en: "Full bathroom", es: "Baño completo" },
  "Lavabo da piscina": { en: "Poolside washroom", es: "Aseo junto a la piscina" },
  "Vista da piscina com área gourmet": {
    en: "Pool view with gourmet area",
    es: "Vista de la piscina con área gourmet",
  },
  "Iluminação noturna": { en: "Nighttime lighting", es: "Iluminación nocturna" },
  "Área de sol com espreguiçadeiras e rede. Sombra e água fresca": {
    en: "Sun deck with loungers and a hammock. Shade and cool water",
    es: "Área de sol con tumbonas y hamaca. Sombra y agua fresca",
  },
  Fundos: { en: "Backyard", es: "Parte trasera" },
  "Vista da suíte (ou casa principal)": {
    en: "Suite view (or main house)",
    es: "Vista de la suite (o casa principal)",
  },
  "Churrasqueira e utensílios para preparar aquele churrasco": {
    en: "Barbecue grill and utensils to prepare a great cookout",
    es: "Parrilla y utensilios para preparar un buen asado",
  },
  "No closet, roupões personalizados": {
    en: "Personalized robes in the closet",
    es: "Batas personalizadas en el clóset",
  },
  Closet: { en: "Closet", es: "Clóset" },
};

/**
 * Traduz uma string de conteúdo de galeria para o locale atual.
 * PT (fonte) e strings sem tradução retornam o texto original.
 */
export function tGallery(text, locale) {
  if (!text || locale === "pt") return text;
  return galleryTranslations[text]?.[locale] ?? text;
}

export default galleryTranslations;
