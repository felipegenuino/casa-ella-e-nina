# Cards capa traduzíveis — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Converter os slides "capa" das galerias do modal (texto embutido em imagem) em cards HTML traduzíveis (variantes title/intro/tags/nav), fundo navy, conteúdo em pt/en/es.

**Architecture:** Novo componente presentacional `CardSlide` (4 variantes). `galleries.js` (fonte PT) passa a ter itens `{ type: "card", ... }` no lugar das imagens-capa. `ModalContent` ganha um ramo para `type:"card"`, um mapa `slug→índice` e um callback `onNavigate` (âncoras do carrossel). Traduções en/es no `translations.js` existente via `tGallery`.

**Tech Stack:** Next.js 14 (App Router, client components), Tailwind, Swiper 11, next-intl. Sem test runner — verificação por `pnpm lint`, asserts em node e checagem visual no browser.

## Global Constraints

- Fundo dos cards: **navy sem foto** — base `#254174` + overlay `bg-indigo-600/70` + gradiente `from-black/80 to-black/50` (mesma pilha do hero, sem imagem).
- Título: fonte `--font-title` (Fraunces) via classe global `.heading`; cor `#f0fdf4`.
- Pill/tag e botão nav: `bg-[#1e345d]/30 rounded px-3.5 py-2`, texto `#a5b4fc` (Sora / `--font-body`).
- `galleries.js` é a **fonte PT**; en/es só em `translations.js` (dicionário por string PT via `tGallery`).
- Depoimentos/avaliações do site são reais — não afeta este plano (cards são conteúdo descritivo do imóvel).
- Não deletar os `.jpg` capa antigos (ficam sem referência).
- "Ambientes - Galeria 0" foi removida pela cliente — não existe no `galleries.js`, ignorar.
- Rodar `source "$HOME/.cargo/env"` não é necessário aqui. Dev server: `pnpm dev` (porta 3000).

---

## File Structure

- **Create:** `src/app/blocks/HighlightsSection/CardSlide.js` — componente presentacional, 4 variantes.
- **Modify:** `src/app/blocks/HighlightsSection/ModalContent.js` — importar CardSlide, montar `slugIndex`, ramo `type:"card"` com `onNavigate`, sem badge de ícone.
- **Modify:** `src/app/blocks/HighlightsSection/galleries.js` — trocar ~20 imagens-capa por itens `card`; adicionar `slug` nas capas-alvo do nav.
- **Modify:** `src/app/blocks/HighlightsSection/translations.js` — acrescentar en/es de todos os títulos/intros/tags/labels novos.
- **Não muda:** `ImageSlide.js`, `VideoSlide.js`, `GalleryList.js`.

---

## Task 1: Componente CardSlide + fiação no ModalContent (smoke test com "As Casas")

**Files:**
- Create: `src/app/blocks/HighlightsSection/CardSlide.js`
- Modify: `src/app/blocks/HighlightsSection/ModalContent.js`
- Modify: `src/app/blocks/HighlightsSection/galleries.js` (só o 1º item da galeria 1)

**Interfaces:**
- Produces: `CardSlide({ variant, title, intro=[], tags=[], links=[], onNavigate })` — default export.
- Produces (data): item de mídia `{ type:"card", variant:"title"|"intro"|"tags"|"nav", title, intro?, tags?, slug?, links? }`.

- [ ] **Step 1: Criar o componente `CardSlide.js`**

```jsx
import React from "react";

// Card capa (navy, sem foto). Variantes: title | intro | tags | nav.
export default function CardSlide({
  variant,
  title,
  intro = [],
  tags = [],
  links = [],
  onNavigate,
}) {
  const pill =
    "rounded bg-[#1e345d]/30 px-3.5 py-2 text-[15px] leading-none text-[#a5b4fc]";
  return (
    <div
      role="img"
      aria-label={title}
      className="relative h-full w-full overflow-hidden rounded-lg bg-[#254174]"
    >
      <div className="absolute inset-0 bg-indigo-600/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50" />

      <div className="relative z-10 flex h-full flex-col gap-8 px-8 py-14 md:px-10 md:py-16">
        <div className="heading text-4xl md:text-5xl text-[#f0fdf4]">{title}</div>

        {variant === "intro" && intro.length > 0 && (
          <div className="space-y-4 text-white/80">
            {intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {variant === "tags" && tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {tags.map((t, i) => (
              <span key={i} className={pill}>
                {t}
              </span>
            ))}
          </div>
        )}

        {variant === "nav" && links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((l, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate?.(l.target);
                }}
                className={`${pill} cursor-pointer transition-colors hover:bg-[#1e345d]/70 hover:text-white`}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Importar CardSlide e montar `slugIndex` no ModalContent**

Em `src/app/blocks/HighlightsSection/ModalContent.js`, adicionar o import junto aos outros:

```jsx
import CardSlide from "./CardSlide";
```

Logo após a linha `const galleryDescription = tGallery(gallery.description, locale);` (dentro do componente, antes do `return`), adicionar:

```jsx
  const slugIndex = {};
  gallery.media.forEach((m, i) => {
    if (m.slug) slugIndex[m.slug] = i;
  });
```

- [ ] **Step 3: Adicionar o ramo `type:"card"` no map dos slides**

No `gallery.media.map(...)`, a estrutura atual é `media.type === "video" ? (…) : (…imagem…)`. Trocar para incluir o card ANTES do vídeo, e o card NÃO leva o badge de ícone. Substituir todo o corpo interno do `<SwiperSlide>` por:

```jsx
              {media.type === "card" ? (
                <CardSlide
                  variant={media.variant}
                  title={tGallery(media.title, locale)}
                  intro={(media.intro || []).map((p) => tGallery(p, locale))}
                  tags={(media.tags || []).map((t) => tGallery(t, locale))}
                  links={(media.links || []).map((l) => ({
                    target: l.target,
                    label: tGallery(l.label, locale),
                  }))}
                  onNavigate={(target) => {
                    const i = slugIndex[target];
                    if (i != null) swiperInstance?.slideTo(i);
                  }}
                />
              ) : media.type === "video" ? (
                <>
                  <VideoSlide
                    media={media}
                    galleryId={gallery.id}
                    index={index}
                    description={tGallery(media.description, locale)}
                  />
                  <div className="absolute top-8 right-6 bg-slate-700 bg-opacity-50_ p-1 rounded">
                    <VideoIcon className="w-5 h-5 text-white" />
                  </div>
                </>
              ) : (
                <>
                  <ImageSlide
                    src={media.url}
                    description={tGallery(media.description, locale)}
                    fallbackAlt={t("imageFallbackAlt")}
                  />
                  <div className="absolute top-8 right-6 bg-slate-700 bg-opacity-50_ p-1 rounded">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
                </>
              )}
```

- [ ] **Step 4: Converter só o 1º card (As Casas) no galleries.js**

Em `src/app/blocks/HighlightsSection/galleries.js`, na galeria `id: 1`, localizar o **primeiro** item de mídia (o que tem `url` terminando em `sobre-as-casas-1-p.jpg`) e substituir o objeto inteiro por:

```js
      {
        type: "card",
        variant: "intro",
        title: "As Casas",
        intro: [
          "Situada em Porto de Pedras, a Pousada Casas Boutique Ella & Nina no Patacho oferece acomodações com Wi-Fi gratuito, ar-condicionado, área de praia privativa e acesso a um jardim com piscina ao ar livre aberta o ano todo. A propriedade tem vista do jardim e do pátio interno, e fica a 1,9 km da Praia do Patacho. A acomodação oferece serviço de limpeza e check-in e check-out privativos.",
          "Esta villa espaçosa dispõe de 1 quarto, 2 banheiros, roupa de cama, toalhas, TV de tela plana com serviços de streaming, área para refeições, cozinha totalmente equipada e varanda com vista da piscina. Esta villa também inclui uma varanda térrea que funciona como área para refeições ao ar livre. Um closet, serviço de lavanderia e segurança durante todo o dia também estão disponíveis.",
        ],
      },
```

- [ ] **Step 5: Lint**

Run: `cd ~/Developer/casa-ella-e-nina && pnpm lint`
Expected: `✔ No ESLint warnings or errors`

- [ ] **Step 6: Verificação visual (browser)**

Garantir o dev server: `pnpm dev` (porta 3000). Abrir `http://localhost:3000/pt`, clicar no 1º círculo ("Conheça as Casas") e conferir: o **primeiro slide** do modal é um **card navy** com título "As Casas" (serif) e os 2 parágrafos. Console sem erros (hidratação/undefined). Fechar com "Fechar".

- [ ] **Step 7: Commit**

```bash
cd ~/Developer/casa-ella-e-nina
git add src/app/blocks/HighlightsSection/CardSlide.js src/app/blocks/HighlightsSection/ModalContent.js src/app/blocks/HighlightsSection/galleries.js
git commit -m "feat(cards): CardSlide + fiação no ModalContent (As Casas)

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Converter as demais capas da Galeria 1 (cards 2–11)

**Files:**
- Modify: `src/app/blocks/HighlightsSection/galleries.js`

**Interfaces:**
- Consumes: `CardSlide` + ramo `type:"card"` do ModalContent (Task 1).

- [ ] **Step 1: Substituir cada imagem-capa da galeria 1 pelo card correspondente**

Na galeria `id: 1`, localizar cada item de mídia pelo final da `url` e substituir o objeto inteiro pelo card abaixo. (Manter a ordem/posição atual de cada um.)

`entrada-capa-p.jpg` →
```js
      { type: "card", variant: "title", title: "Entrada" },
```

`sala_estar-capa-p.jpg` →
```js
      { type: "card", variant: "tags", title: "Sala de estar",
        tags: ["TV", "Ar-condicionado", "Livros e material de leitura", "Sistema de som"] },
```

`cozinha_completa-capa-p.jpg` →
```js
      { type: "card", variant: "tags", title: "Cozinha Completa",
        tags: ["Assadeira", "Cafeteira", "Forno", "Livros de culinária", "Café", "Chaleira de água quente", "Freezer", "Itens básicos de cozinha", "Fogão", "Taças de vinho", "Microondas", "Refrigerador", "Louças e talheres", "Utensílios para churrasco", "Liquidificador"] },
```

`area_jantar-capa-p.jpg` →
```js
      { type: "card", variant: "tags", title: "Área de Jantar",
        tags: ["Taças de vinho", "Mesa de jantar"] },
```

`quarto-capa-p.jpg` →
```js
      { type: "card", variant: "tags", title: "Quarto",
        tags: ["Cama king", "Ar-condicionado", "Aquecimento", "TV", "Cabides", "Cobertores e travesseiros extras", "Roupa de cama", "Ferro de passar", "Local para guardar as roupas"] },
```

`banheiro_completo-capa-p.jpg` →
```js
      { type: "card", variant: "tags", title: "Banheiro Completo",
        tags: ["Água quente", "Produtos de limpeza", "Sabonete para o corpo"] },
```

`lavabo-capa-p.jpg` →
```js
      { type: "card", variant: "tags", title: "Lavabo",
        tags: ["Produtos de limpeza"] },
```

`quintal-capa-p.jpg` →
```js
      { type: "card", variant: "tags", title: "Quintal",
        tags: ["Cadeira espreguiçadeira", "Área de jantar externa", "Móveis externos", "Chuveiro externo", "Churrasqueira", "Rede"] },
```

`patio-capa-p.jpg` →
```js
      { type: "card", variant: "tags", title: "Pátio",
        tags: ["Iluminação noturna"] },
```

`piscina-capa-p.jpg` →
```js
      { type: "card", variant: "tags", title: "Piscina",
        tags: ["Cadeira espreguiçadeira", "Rede"] },
```

- [ ] **Step 2: Assert de estrutura (node)**

Run:
```bash
cd ~/Developer/casa-ella-e-nina && node -e '
const fs=require("fs");const s=fs.readFileSync("src/app/blocks/HighlightsSection/galleries.js","utf8");
eval(s.replace("export default galleries;","").replace("const galleries","globalThis.g"));
const g1=globalThis.g[0];
const cards=g1.media.filter(m=>m.type==="card");
console.log("cards na galeria 1:",cards.length);
console.log("títulos:",cards.map(c=>c.title).join(" | "));
if(cards.length!==11) throw new Error("esperado 11 cards");
'
```
Expected: `cards na galeria 1: 11` e a lista de títulos (As Casas … Piscina).

- [ ] **Step 3: Lint**

Run: `pnpm lint` → Expected: `✔ No ESLint warnings or errors`

- [ ] **Step 4: Verificação visual**

Abrir `/pt`, abrir o modal "Conheça as Casas" e passar pelos slides: as capas de seção agora são cards navy (Entrada = só título; Sala de estar/Cozinha/Quarto/etc = título + pills). Console limpo.

- [ ] **Step 5: Commit**

```bash
git add src/app/blocks/HighlightsSection/galleries.js
git commit -m "feat(cards): converte capas da Galeria 1 em cards

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Converter Galerias 2, 3, 4 + card `nav` (âncoras) + slugs

**Files:**
- Modify: `src/app/blocks/HighlightsSection/galleries.js`

**Interfaces:**
- Consumes: `slugIndex`/`onNavigate` do ModalContent (Task 1). O `nav.links[].target` casa com o `slug` das capas-alvo.

- [ ] **Step 1: Galeria 2 (Café da Manhã) — substituir `capa-cafe-da-manha-p.jpg`**

```js
      { type: "card", variant: "intro", title: "Café da Manhã",
        intro: [
          "Opções de café da manhã à la carte e continental com pratos quentes, itens de confeitaria frescos e frutas estão disponíveis diariamente na villa.",
          "Você pode aproveitar o clima quente com a churrasqueira da propriedade, economizando uma viagem ao supermercado, solicitando entrega de supermercado.",
        ] },
```

- [ ] **Step 2: Galeria 3 (Área de Lazer) — substituir o `capa-p.jpg` (1º item)**

```js
      { type: "card", variant: "title", title: "Área de Lazer" },
```

- [ ] **Step 3: Galeria 4 (Praias e Passeios) — substituir as capas**

`capa-p.jpg` (1º item, o cover geral) → card **nav** com 6 âncoras:
```js
      { type: "card", variant: "nav", title: "Praias e Passeios",
        links: [
          { label: "Praia do Patacho", target: "patacho" },
          { label: "Praia da Laje", target: "praia-da-laje" },
          { label: "Passeios de Jangada", target: "passeios-jangada" },
          { label: "Visita ao Santuário", target: "visita-santuario" },
          { label: "Farol de Porto de Pedras", target: "farol" },
          { label: "Tatuamunha", target: "tatuamunha" },
        ] },
```

`capapatacho-p.jpg` →
```js
      { type: "card", variant: "intro", title: "Praia do Patacho", slug: "patacho",
        intro: ["Eleita uma das praias mais bonitas do Brasil, bandeira azul."] },
```

`capaPraiadalaje-p.jpg` →
```js
      { type: "card", variant: "intro", title: "Praia da Laje", slug: "praia-da-laje",
        intro: ["Conhecida pelas águas cristalinas e tranquilidade."] },
```

`capaPasseiosdejangada-p.jpg` →
```js
      { type: "card", variant: "intro", title: "Passeios de Jangada", slug: "passeios-jangada",
        intro: ["Passeio imperdível."] },
```

`capaVisitaSantuario-p.jpg` →
```js
      { type: "card", variant: "title", title: "Visita ao Santuário", slug: "visita-santuario" },
```

`capaFarolPortoDepedras-p.jpg` →
```js
      { type: "card", variant: "intro", title: "Farol de Porto de Pedras", slug: "farol",
        intro: ["Uma vista incrível do alto entre Rio Manguaba e a praia."] },
```

`capaTatuamunha-p.jpg` →
```js
      { type: "card", variant: "title", title: "Tatuamunha", slug: "tatuamunha" },
```

- [ ] **Step 4: Assert de estrutura (node) — nav targets casam com slugs**

Run:
```bash
cd ~/Developer/casa-ella-e-nina && node -e '
const fs=require("fs");const s=fs.readFileSync("src/app/blocks/HighlightsSection/galleries.js","utf8");
eval(s.replace("export default galleries;","").replace("const galleries","globalThis.g"));
const g4=globalThis.g[3];
const slugs=new Set(g4.media.filter(m=>m.slug).map(m=>m.slug));
const nav=g4.media.find(m=>m.variant==="nav");
const missing=nav.links.map(l=>l.target).filter(t=>!slugs.has(t));
console.log("slugs:",[...slugs].join(", "));
console.log("targets sem slug:",missing);
if(missing.length) throw new Error("nav target sem slug correspondente: "+missing);
console.log("OK: todos os targets do nav casam com um slug");
'
```
Expected: `OK: todos os targets do nav casam com um slug`.

- [ ] **Step 5: Lint**

Run: `pnpm lint` → Expected: sem erros.

- [ ] **Step 6: Verificação visual (nav)**

Abrir `/pt` → modal "Praias e Passeios". 1º slide = card nav com 6 botões. Clicar em "Farol de Porto de Pedras" → o carrossel navega até a capa do Farol. Conferir Café da Manhã (intro) e Área de Lazer (título). Console limpo.

- [ ] **Step 7: Commit**

```bash
git add src/app/blocks/HighlightsSection/galleries.js
git commit -m "feat(cards): galerias 2-4 + card nav com âncoras (slideTo por slug)

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Traduções en/es + checagem de cobertura

**Files:**
- Modify: `src/app/blocks/HighlightsSection/translations.js`

**Interfaces:**
- Consumes: strings PT dos cards (Tasks 2–3). `tGallery(text, locale)` já resolve por string.

- [ ] **Step 1: Acrescentar entradas no dicionário `galleryTranslations`**

Em `src/app/blocks/HighlightsSection/translations.js`, dentro do objeto `galleryTranslations` (antes do `}` de fechamento e da função `tGallery`), acrescentar. (Entradas que já existirem — ex.: "Ar-condicionado", títulos de galeria — NÃO duplicar; o parser da Step 3 acusa qualquer falta.)

```js
  // ── Cards capa: títulos de seção ──
  "As Casas": { en: "The Houses", es: "Las Casas" },
  Entrada: { en: "Entrance", es: "Entrada" },
  "Sala de estar": { en: "Living room", es: "Sala de estar" },
  Quarto: { en: "Bedroom", es: "Habitación" },
  "Banheiro Completo": { en: "Full bathroom", es: "Baño completo" },
  Lavabo: { en: "Washroom", es: "Aseo" },
  Quintal: { en: "Backyard", es: "Patio trasero" },
  Pátio: { en: "Patio", es: "Patio" },
  Piscina: { en: "Pool", es: "Piscina" },

  // ── Cards capa: intros ──
  "Situada em Porto de Pedras, a Pousada Casas Boutique Ella & Nina no Patacho oferece acomodações com Wi-Fi gratuito, ar-condicionado, área de praia privativa e acesso a um jardim com piscina ao ar livre aberta o ano todo. A propriedade tem vista do jardim e do pátio interno, e fica a 1,9 km da Praia do Patacho. A acomodação oferece serviço de limpeza e check-in e check-out privativos.":
    {
      en: "Located in Porto de Pedras, Casas Boutique Ella & Nina at Patacho offers accommodations with free Wi-Fi, air conditioning, a private beach area and access to a garden with an outdoor pool open year-round. The property has garden and inner-courtyard views and sits 1.9 km from Praia do Patacho. The accommodation offers cleaning service and private check-in and check-out.",
      es: "Ubicada en Porto de Pedras, la Posada Casas Boutique Ella & Nina en Patacho ofrece alojamientos con Wi-Fi gratuito, aire acondicionado, área de playa privada y acceso a un jardín con piscina al aire libre abierta todo el año. La propiedad tiene vista al jardín y al patio interno, y está a 1,9 km de la Praia do Patacho. El alojamiento ofrece servicio de limpieza y check-in y check-out privados.",
    },
  "Esta villa espaçosa dispõe de 1 quarto, 2 banheiros, roupa de cama, toalhas, TV de tela plana com serviços de streaming, área para refeições, cozinha totalmente equipada e varanda com vista da piscina. Esta villa também inclui uma varanda térrea que funciona como área para refeições ao ar livre. Um closet, serviço de lavanderia e segurança durante todo o dia também estão disponíveis.":
    {
      en: "This spacious villa has 1 bedroom, 2 bathrooms, bed linen, towels, a flat-screen TV with streaming services, a dining area, a fully equipped kitchen and a balcony overlooking the pool. This villa also includes a ground-floor veranda that serves as an outdoor dining area. A closet, laundry service and round-the-clock security are also available.",
      es: "Esta villa espaciosa dispone de 1 habitación, 2 baños, ropa de cama, toallas, TV de pantalla plana con servicios de streaming, área de comidas, cocina totalmente equipada y balcón con vista a la piscina. Esta villa también incluye una galería en planta baja que funciona como área de comidas al aire libre. Un clóset, servicio de lavandería y seguridad las 24 horas también están disponibles.",
    },
  "Opções de café da manhã à la carte e continental com pratos quentes, itens de confeitaria frescos e frutas estão disponíveis diariamente na villa.":
    {
      en: "À la carte and continental breakfast options with hot dishes, fresh pastries and fruit are available daily at the villa.",
      es: "Opciones de desayuno a la carta y continental con platos calientes, panadería fresca y frutas están disponibles a diario en la villa.",
    },
  "Você pode aproveitar o clima quente com a churrasqueira da propriedade, economizando uma viagem ao supermercado, solicitando entrega de supermercado.":
    {
      en: "You can enjoy the warm weather with the property's barbecue grill, and save a trip to the store by requesting grocery delivery.",
      es: "Puedes aprovechar el clima cálido con la parrilla de la propiedad, ahorrándote un viaje al supermercado al solicitar entrega de compras.",
    },
  "Eleita uma das praias mais bonitas do Brasil, bandeira azul.":
    { en: "Voted one of the most beautiful beaches in Brazil, Blue Flag.", es: "Elegida una de las playas más bonitas de Brasil, bandera azul." },
  "Conhecida pelas águas cristalinas e tranquilidade.":
    { en: "Known for its crystal-clear waters and tranquility.", es: "Conocida por sus aguas cristalinas y tranquilidad." },
  "Passeio imperdível.":
    { en: "A must-do tour.", es: "Un paseo imperdible." },
  "Uma vista incrível do alto entre Rio Manguaba e a praia.":
    { en: "An incredible view from above, between the Manguaba River and the beach.", es: "Una vista increíble desde lo alto, entre el río Manguaba y la playa." },

  // ── Cards capa: tags ──
  Assadeira: { en: "Baking tray", es: "Bandeja para hornear" },
  Cafeteira: { en: "Coffee maker", es: "Cafetera" },
  Forno: { en: "Oven", es: "Horno" },
  "Livros de culinária": { en: "Cookbooks", es: "Libros de cocina" },
  Café: { en: "Coffee", es: "Café" },
  "Chaleira de água quente": { en: "Hot water kettle", es: "Hervidor de agua" },
  Freezer: { en: "Freezer", es: "Congelador" },
  "Itens básicos de cozinha": { en: "Basic kitchen items", es: "Utensilios básicos de cocina" },
  Fogão: { en: "Stove", es: "Cocina (fogón)" },
  "Taças de vinho": { en: "Wine glasses", es: "Copas de vino" },
  Microondas: { en: "Microwave", es: "Microondas" },
  Refrigerador: { en: "Refrigerator", es: "Refrigerador" },
  "Louças e talheres": { en: "Dishes and cutlery", es: "Vajilla y cubiertos" },
  "Utensílios para churrasco": { en: "Barbecue utensils", es: "Utensilios para asado" },
  Liquidificador: { en: "Blender", es: "Licuadora" },
  "Sistema de som": { en: "Sound system", es: "Sistema de sonido" },
  "Mesa de jantar": { en: "Dining table", es: "Mesa de comedor" },
  "Cama king": { en: "King bed", es: "Cama king" },
  Aquecimento: { en: "Heating", es: "Calefacción" },
  Cabides: { en: "Hangers", es: "Perchas" },
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
  Churrasqueira: { en: "Barbecue grill", es: "Parrilla" },
  Rede: { en: "Hammock", es: "Hamaca" },

  // ── Cards capa: títulos de passeios (nav + capas) ──
  "Praia do Patacho": { en: "Praia do Patacho", es: "Praia do Patacho" },
  "Praia da Laje": { en: "Praia da Laje", es: "Praia da Laje" },
  "Passeios de Jangada": { en: "Raft rides", es: "Paseos en jangada" },
  "Visita ao Santuário": { en: "Sanctuary visit", es: "Visita al santuario" },
  "Farol de Porto de Pedras": { en: "Porto de Pedras Lighthouse", es: "Faro de Porto de Pedras" },
  Tatuamunha: { en: "Tatuamunha", es: "Tatuamunha" },
```

> Nota: estas 4 chaves **já existem** no dicionário (dos stories) e **NÃO** foram
> incluídas acima — não readicionar: `Cozinha Completa`, `Área de Jantar`,
> `Iluminação noturna`, `Praias e Passeios`. As chaves acima já foram verificadas
> como ausentes. `eslint` (regra `no-dupe-keys`) acusa se algo repetir.

- [ ] **Step 2: Lint (pega chave duplicada de objeto se houver)**

Run: `pnpm lint` → Expected: sem erros. (Se acusar duplicata, remover a repetida.)

- [ ] **Step 3: Checagem de cobertura (toda string de card tem en/es)**

Run:
```bash
cd ~/Developer/casa-ella-e-nina && node -e '
const fs=require("fs");
const gs=fs.readFileSync("src/app/blocks/HighlightsSection/galleries.js","utf8");
eval(gs.replace("export default galleries;","").replace("const galleries","globalThis.g"));
const ts=fs.readFileSync("src/app/blocks/HighlightsSection/translations.js","utf8");
const m={exports:{}};
new Function("module","exports",ts.replace(/export function/,"module.exports.tGallery = function").replace("export default galleryTranslations;","module.exports.dict = galleryTranslations;"))(m,m.exports);
const dict=m.exports.dict;
const need=new Set();
for(const gal of globalThis.g) for(const md of gal.media){
  if(md.type!=="card") continue;
  if(md.title) need.add(md.title);
  (md.intro||[]).forEach(p=>need.add(p));
  (md.tags||[]).forEach(t=>need.add(t));
  (md.links||[]).forEach(l=>need.add(l.label));
}
const miss=[...need].filter(s=>!(s in dict) || !dict[s].en || !dict[s].es);
console.log("strings de card:",need.size,"| faltando en/es:",miss.length);
miss.forEach(s=>console.log("  ❌",JSON.stringify(s).slice(0,80)));
if(miss.length) throw new Error("faltam traduções");
console.log("OK: cobertura 100%");
'
```
Expected: `OK: cobertura 100%`.

- [ ] **Step 4: Verificação visual (en/es)**

Abrir `/en` e `/es`, abrir os modais das galerias e conferir que os cards aparecem traduzidos (títulos, intros, tags, botões do nav). Console limpo (sem `MISSING_MESSAGE` nem hidratação). Reiniciar o dev server se aparecer erro fantasma de cache (`rm -rf .next && pnpm dev`).

- [ ] **Step 5: Commit**

```bash
git add src/app/blocks/HighlightsSection/translations.js
git commit -m "i18n(cards): traduções en/es dos cards capa + cobertura

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Verificação final cross-locale + limpeza da doc

**Files:**
- Modify: `README.md` (mencionar que capas são cards; opcional)

- [ ] **Step 1: Passe final nos 3 idiomas**

Para `pt`, `en`, `es`: abrir cada uma das 4 galerias, percorrer os slides, conferir que **nenhuma capa antiga com texto embutido** aparece (todas viraram cards navy) e que o texto está no idioma certo. Testar o nav (âncoras) em cada idioma.

- [ ] **Step 2: Console e lint limpos**

Run: `pnpm lint` → sem erros. No browser, `read_console_messages` (onlyErrors) → nenhum erro de hidratação/`MISSING_MESSAGE`.

- [ ] **Step 3: Confirmar que os `.jpg` capa antigos ficaram só sem referência (não deletados)**

Run:
```bash
cd ~/Developer/casa-ella-e-nina && grep -c "capa\|sobre-as-casas" src/app/blocks/HighlightsSection/galleries.js
```
Expected: `0` (nenhuma referência às imagens-capa no galleries.js). Os arquivos em `public/midias/gallery/**` permanecem no disco.

- [ ] **Step 4: Commit (se houve ajuste de doc)**

```bash
git add -A
git commit -m "docs(cards): nota de que as capas são cards HTML

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Self-review (cobertura do spec)

- Variantes title/intro/tags/nav → Tasks 1–3 ✓
- Fundo navy + tokens → Task 1 (CardSlide) ✓
- ~20 cards convertidos → Tasks 1–3 ✓
- Âncoras (slug/onNavigate/slideTo) → Tasks 1 (fiação) + 3 (dados) ✓
- Traduções en/es + cobertura → Task 4 ✓
- Santuário/Tatuamunha como title (intro pendente da cliente) → Task 3 ✓
- Não deletar assets antigos → Task 5 Step 3 ✓
