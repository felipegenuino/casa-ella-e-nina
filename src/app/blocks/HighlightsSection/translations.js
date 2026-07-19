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

  // ── Cards capa (Figma) ──
  "As Casas": { en: "The Houses", es: "Las Casas" },
  "Na Praia do Patacho, em Porto de Pedras, a casa boutique Ella & Nina oferece Wi-Fi, ar-condicionado, praia privativa e jardim com piscina aberta o ano todo — a 1,9 km da praia.": { en: "In Praia do Patacho, Porto de Pedras, the Ella & Nina boutique house offers Wi-Fi, air conditioning, a private beach and a garden with a pool open year-round — 1.9 km from the beach.", es: "En Praia do Patacho, Porto de Pedras, la casa boutique Ella & Nina ofrece Wi-Fi, aire acondicionado, playa privada y un jardín con piscina abierta todo el año — a 1,9 km de la playa." },
  "A villa tem 1 quarto, 2 banheiros, cozinha completa, TV com streaming, área de refeições e varanda com vista da piscina. Também conta com closet, lavanderia e segurança 24h.": { en: "The villa has 1 bedroom, 2 bathrooms, a full kitchen, a TV with streaming, a dining area and a balcony overlooking the pool. It also features a closet, laundry and 24-hour security.", es: "La villa tiene 1 habitación, 2 baños, cocina completa, TV con streaming, área de comidas y balcón con vista a la piscina. También cuenta con clóset, lavandería y seguridad 24 h." },
  "Entrada": { en: "Entrance", es: "Entrada" },
  "Sala de estar": { en: "Living room", es: "Sala de estar" },
  "Quarto": { en: "Bedroom", es: "Habitación" },
  "Banheiro Completo": { en: "Full bathroom", es: "Baño completo" },
  "Lavabo": { en: "Washroom", es: "Aseo" },
  "Quintal": { en: "Backyard", es: "Patio trasero" },
  "Pátio": { en: "Patio", es: "Patio" },
  "Piscina": { en: "Pool", es: "Piscina" },
  "Lugares para Conhecer": { en: "Places to Explore", es: "Lugares para Conocer" },
  "Praia do Patacho": { en: "Praia do Patacho", es: "Praia do Patacho" },
  "Praia da Laje": { en: "Praia da Laje", es: "Praia da Laje" },
  "Passeios de Jangada": { en: "Raft rides", es: "Paseos en jangada" },
  "Visita ao Santuário": { en: "Sanctuary visit", es: "Visita al santuario" },
  "Visita ao Santuário do Peixe-Boi": { en: "Manatee Sanctuary visit", es: "Visita al Santuario del Manatí" },
  "Farol de Porto de Pedras": { en: "Porto de Pedras Lighthouse", es: "Faro de Porto de Pedras" },
  "Tatuamunha": { en: "Tatuamunha", es: "Tatuamunha" },
  "Opções de café da manhã à la carte e continental com pratos quentes, itens de confeitaria frescos e frutas estão disponíveis diariamente na villa.": { en: "À la carte and continental breakfast options with hot dishes, fresh pastries and fruit are available daily at the villa.", es: "Opciones de desayuno a la carta y continental con platos calientes, panadería fresca y frutas están disponibles a diario en la villa." },
  "Você pode aproveitar o clima quente com a churrasqueira da propriedade, economizando uma viagem ao supermercado, solicitando entrega de supermercado.": { en: "You can enjoy the warm weather with the property's barbecue grill, and save a trip to the store by requesting grocery delivery.", es: "Puedes aprovechar el clima cálido con la parrilla de la propiedad, ahorrándote un viaje al supermercado al solicitar entrega de compras." },
  "Eleita uma das praias mais bonitas do Brasil, bandeira azul.": { en: "Voted one of the most beautiful beaches in Brazil, Blue Flag.", es: "Elegida una de las playas más bonitas de Brasil, bandera azul." },
  "Conhecida pelas águas cristalinas e tranquilidade.": { en: "Known for its crystal-clear waters and tranquility.", es: "Conocida por sus aguas cristalinas y tranquilidad." },
  "Passeio imperdível.": { en: "A must-do tour.", es: "Un paseo imperdible." },
  "Uma vista incrível do alto entre Rio Manguaba e a praia.": { en: "An incredible view from above, between the Manguaba River and the beach.", es: "Una vista increíble desde lo alto, entre el río Manguaba y la playa." },
  "Encontro do Rio com Mar.": { en: "Where the river meets the sea.", es: "Donde el río se encuentra con el mar." },
  "TV": { en: "TV", es: "TV" },
  "Ar-condicionado": { en: "Air conditioning", es: "Aire acondicionado" },
  "Livros e material de leitura": { en: "Books and reading material", es: "Libros y material de lectura" },
  "Sistema de som": { en: "Sound system", es: "Sistema de sonido" },
  "Assadeira": { en: "Baking tray", es: "Bandeja para hornear" },
  "Cafeteira": { en: "Coffee maker", es: "Cafetera" },
  "Forno": { en: "Oven", es: "Horno" },
  "Livros de culinária": { en: "Cookbooks", es: "Libros de cocina" },
  "Café": { en: "Coffee", es: "Café" },
  "Chaleira de água quente": { en: "Hot water kettle", es: "Hervidor de agua" },
  "Freezer": { en: "Freezer", es: "Congelador" },
  "Itens básicos de cozinha": { en: "Basic kitchen items", es: "Utensilios básicos de cocina" },
  "Fogão": { en: "Stove", es: "Estufa" },
  "Taças de vinho": { en: "Wine glasses", es: "Copas de vino" },
  "Microondas": { en: "Microwave", es: "Microondas" },
  "Refrigerador": { en: "Refrigerator", es: "Refrigerador" },
  "Louças e talheres": { en: "Dishes and cutlery", es: "Vajilla y cubiertos" },
  "Utensílios para churrasco": { en: "Barbecue utensils", es: "Utensilios para asado" },
  "Liquidificador": { en: "Blender", es: "Licuadora" },
  "Mesa de jantar": { en: "Dining table", es: "Mesa de comedor" },
  "Cama king": { en: "King bed", es: "Cama king" },
  "Aquecimento": { en: "Heating", es: "Calefacción" },
  "Cabides": { en: "Hangers", es: "Perchas" },
  "Cobertores e travesseiros extras": { en: "Extra blankets and pillows", es: "Mantas y almohadas extra" },
  "Roupa de cama": { en: "Bed linen", es: "Ropa de cama" },
  "Ferro de passar": { en: "Iron", es: "Plancha" },
  "Local para guardar as roupas": { en: "Space to store clothes", es: "Espacio para guardar la ropa" },
  "Água quente": { en: "Hot water", es: "Agua caliente" },
  "Produtos de limpeza": { en: "Cleaning products", es: "Productos de limpieza" },
  "Sabonete para o corpo": { en: "Body soap", es: "Jabón corporal" },
  "Cadeira espreguiçadeira": { en: "Lounge chair", es: "Tumbona" },
  "Área de jantar externa": { en: "Outdoor dining area", es: "Comedor exterior" },
  "Móveis externos": { en: "Outdoor furniture", es: "Muebles de exterior" },
  "Chuveiro externo": { en: "Outdoor shower", es: "Ducha exterior" },
  "Churrasqueira": { en: "Barbecue grill", es: "Parrilla" },
  "Rede": { en: "Hammock", es: "Hamaca" },
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
