# Cards capa traduzíveis (HighlightsSection) — Design

> Data: 2026-07-19
> Contexto: os slides "capa" das galerias do modal (HighlightsSection) têm o
> texto (título/intro/tags) **embutido na imagem** (exportado do Figma), então
> não são traduzíveis nem editáveis. Este spec descreve a conversão desses covers
> para **cards estruturados em HTML/CSS**.

## Problema

Cada seção dentro das galerias do modal começa por um slide "capa" que é uma
imagem `.jpg` com texto renderizado dentro dela. Três formatos existem hoje:

- **intro** — título + parágrafo(s) de descrição (ex.: "As Casas").
- **title** — só o título (ex.: "Entrada").
- **title + tags** — título + lista de tags/pills (ex.: "Sala de estar": TV,
  Ar-condicionado, Livros e material de leitura, Sistema de som).

Como o texto está dentro do `.jpg`, ele: (1) fica em PT em qualquer idioma;
(2) só muda reexportando imagem do Figma.

## Objetivo

Converter os cards capa em **cards HTML/CSS**, com o texto como conteúdo real —
**traduzível** (pt/en/es, junto com o resto do site) e **editável** sem
reexportar imagem.

## Decisões (confirmadas com o usuário)

- **Fundo:** ~~gradiente navy sutil (sem foto)~~ → **⚠️ REABRIR.** Ao ler o
  Figma, descobri que os cards são **desenhados com foto de fundo** (mesmo
  overlay/gradiente do hero) e o `get_design_context` entrega a **URL da foto
  limpa**. Ou seja, manter a foto virou fácil. Decisão pendente do usuário:
  (a) manter a foto do Figma (fiel ao design) ou (b) navy sólido/gradiente.
  A arquitetura do `CardSlide` suporta os dois (foto é opcional).
- **Estrutura de conteúdo:** Abordagem 1 — `card` como novo tipo de mídia no
  `galleries.js` (fonte PT) + traduções no `translations.js` existente (tGallery).
- **Conteúdo:** extraído direto do Figma (ver tabela). O usuário só revisa/completa
  os poucos itens ⚠️.
- **Posição:** cada card segue como o **1º slide da sua seção** (mesma posição
  das imagens-capa atuais).
- **Sem badge** de ícone de mídia nos cards (não são foto/vídeo).

## Design (tokens exatos do Figma)

Todos os cards capa compartilham o mesmo layout (frame 480×852, `rounded-[12px]`):

- **Fundo:** `#254174` (navy) + [foto opcional] + Overlay `rgba(79,70,229,.7)`
  (= `bg-indigo-600/70`, igual ao hero) + Gradiente `from-black/80 to-black/50`
  (igual ao hero).
- **Content:** `flex flex-col gap-[40px] px-[40px] py-[80px]`, itens à esquerda.
- **Título:** Fraunces (`--font-title`), `~60px`, cor **`#F0FDF4`** (Feta),
  `tracking -2.4px`. (No app: escalar responsivo, ex. `text-4xl md:text-5xl`.)
- **Tag (pill):** `bg-[rgba(30,52,93,.3)]`, `rounded-[4px]`, `px-[14px] py-[8px]`,
  `h-[42px]`; texto Sora (`--font-body`) `~20px` cor **`#A5B4FC`** (Melrose).
- **Tags:** `flex flex-wrap gap-[24px]` (listas longas quebram; curtas empilham).
- **Intro:** parágrafos abaixo do título, fonte corpo, branco/claro, `gap` entre.

## Escopo

**~20 cards capa** (conteúdo extraído do Figma; ⚠️ = pendente do usuário).
"Ambientes - Galeria 0" foi **removida a pedido da cliente** → ignorada.

| # | Galeria | frame (Figma) | Título | Variante | Status |
|---|---------|---------------|--------|----------|--------|
| 1 | Conheça as Casas | sobre-as-casas-1 | As Casas | intro | ✓ Figma |
| 2 | Conheça as Casas | entrada-capa | Entrada | title | ✓ Figma |
| 3 | Conheça as Casas | sala_estar-capa | Sala de estar | tags | ✓ print |
| 4 | Conheça as Casas | cozinha_completa-capa | Cozinha Completa | tags | ✓ Figma ⚠️ (2 tags estranhas) |
| 5 | Conheça as Casas | area_jantar-capa | Área de Jantar | tags | ✓ Figma |
| 6 | Conheça as Casas | quarto-capa | Quarto | tags | ✓ Figma |
| 7 | Conheça as Casas | banheiro_completo-capa | Banheiro Completo | tags | ✓ Figma |
| 8 | Conheça as Casas | lavabo-capa | Lavabo | tags | ✓ Figma |
| 9 | Conheça as Casas | quintal-capa | Quintal | tags | ✓ Figma |
| 10 | Conheça as Casas | patio-capa | Pátio | tags | ✓ Figma ⚠️ (confirmar) |
| 11 | Conheça as Casas | piscina-capa | Piscina | tags | ✓ Figma |
| 12 | Café da Manhã | capa-cafe-da-manha | Café da Manhã | intro | ✓ Figma |
| 13 | Área de Lazer | capa | Área de Lazer | intro? | ⚠️ falta conteúdo |
| 14 | Praias e Passeios | capa | Praias e Passeios | especial? | ⚠️ 6 botões (layout?) |
| 15 | Praias e Passeios | capapatacho | Praia do Patacho | intro | ✓ Figma |
| 16 | Praias e Passeios | capaPraiadalaje | Praia da Laje | intro | ✓ Figma |
| 17 | Praias e Passeios | capaPasseiosdejangada | Passeios de Jangada | intro | ✓ Figma |
| 18 | Praias e Passeios | capaVisitaSantuario | Visita ao Santuário | title? | ⚠️ falta conteúdo |
| 19 | Praias e Passeios | capaFarolPortoDepedras | Farol de Porto de Pedras | intro | ✓ Figma |
| 20 | Praias e Passeios | capaTatuamunha | Tatuamunha | intro | ⚠️ texto = dup do Farol |

### Conteúdo PT extraído do Figma

**1. As Casas** (intro, 2 parágrafos):
> "Situada em Porto de Pedras, a Pousada Casas Boutique Ella & Nina no Patacho oferece acomodações com Wi-Fi gratuito, ar-condicionado, área de praia privativa e acesso a um jardim com piscina ao ar livre aberta o ano todo. A propriedade tem vista do jardim e do pátio interno, e fica a 1,9 km da Praia do Patacho. A acomodação oferece serviço de limpeza e check-in e check-out privativos."
>
> "Esta villa espaçosa dispõe de 1 quarto, 2 banheiros, roupa de cama, toalhas, TV de tela plana com serviços de streaming, área para refeições, cozinha totalmente equipada e varanda com vista da piscina. Esta villa também inclui uma varanda térrea que funciona como área para refeições ao ar livre. Um closet, serviço de lavanderia e segurança durante todo o dia também estão disponíveis."

**2. Entrada** — title (só título).

**3. Sala de estar** — tags: TV · Ar-condicionado · Livros e material de leitura · Sistema de som.

**4. Cozinha Completa** — tags: Assadeira · Cafeteira · Forno · Chaleira de água quente · Freezer · Itens básicos de cozinha · Fogão · Taças de vinho · Microondas · Refrigerador · Louças e talheres · Utensílios para churrasco · Liquidificador · ⚠️~~Livros e material de leitura~~ · ⚠️~~Café~~ *(essas 2 parecem resíduo de outro card — confirmar remoção)*.

**5. Área de Jantar** — tags: Taças de vinho · Mesa de jantar.

**6. Quarto** — tags: Cama king · Ar-condicionado · Aquecimento · TV · Cabides · Cobertores e travesseiros extras · Roupa de cama · Ferro de passar · Local para guardar as roupas.

**7. Banheiro Completo** — tags: Água quente · Produtos de limpeza · Sabonete para o corpo.

**8. Lavabo** — tags: Produtos de limpeza.

**9. Quintal** — tags: Cadeira espreguiçadeira · Área de jantar externa · Móveis externos · Chuveiro externo · Churrasqueira · Rede.

**10. Pátio** — tags: Iluminação noturna. ⚠️ *(só 1 tag; confirmar se é isso ou title-only)*

**11. Piscina** — tags: Cadeira espreguiçadeira · Rede.

**12. Café da Manhã** (intro, 2 parágrafos):
> "Opções de café da manhã à la carte e continental com pratos quentes, itens de confeitaria frescos e frutas estão disponíveis diariamente na villa."
>
> "Você pode aproveitar o clima quente com a churrasqueira da propriedade, economizando uma viagem ao supermercado, solicitando entrega de supermercado."

**13. Área de Lazer** — ⚠️ no Figma as camadas estão como "Descrição" (placeholder). **Falta o conteúdo real** (intro? tags?).

**14. Praias e Passeios (capa)** — ⚠️ tem **6 "Button Text"** — parece um cover especial (botões/navegação p/ os passeios), não um card simples. **Definir layout/conteúdo.**

**15. Praia do Patacho** — intro: "Eleita uma das praias mais bonitas do Brasil, bandeira azul."

**16. Praia da Laje** — intro: "Conhecida pelas águas cristalinas e tranquilidade."

**17. Passeios de Jangada** — intro: "Passeio imperdível".

**18. Visita ao Santuário** — ⚠️ sem texto capturado. **Falta conteúdo** (título/intro).

**19. Farol de Porto de Pedras** — intro: "Uma vista incrível do alto entre Rio Manguaba e a praia."

**20. Tatuamunha** — ⚠️ no Figma está com o **mesmo texto do Farol** ("Uma vista incrível…") — provável copy-paste. **Fornecer o texto correto.**

> **Pendências do usuário (⚠️):** (4) confirmar remoção de 2 tags da cozinha ·
> (10) confirmar Pátio · (13) conteúdo da Área de Lazer · (14) layout/conteúdo
> do cover de Praias · (18) conteúdo do Santuário · (20) texto de Tatuamunha ·
> **+ decisão foto de fundo vs. navy** (topo do doc).

## Modelo de dados (`galleries.js` — fonte PT)

Cada card capa deixa de ser `{ type:"image", url, blurUrl, description }` e passa a:

```js
// variante intro
{ type: "card", variant: "intro", title: "As Casas",
  intro: ["Situada em Porto de Pedras…", "Esta villa espaçosa dispõe de…"] }

// variante title
{ type: "card", variant: "title", title: "Entrada" }

// variante tags
{ type: "card", variant: "tags", title: "Sala de estar",
  tags: ["TV", "Ar-condicionado", "Livros e material de leitura", "Sistema de som"] }
```

- `intro` é um array de parágrafos (0..n).
- `tags` é um array de strings.
- `title` sempre presente.

## Componente `CardSlide` (novo)

Arquivo: `src/app/blocks/HighlightsSection/CardSlide.js`.

- Mesmo container/proporção dos slides atuais (rounded-lg, mesma altura) para
  consistência com `ImageSlide`/`VideoSlide` no carrossel.
- **Fundo:** gradiente navy sutil da marca (ex.: `bg-gradient-to-b from-indigo-950
  to-slate-900`), afinado na implementação.
- **Título:** Fraunces (serif, `--font-title`), grande, branco, no topo.
- **Variantes:**
  - `title`: só o título.
  - `intro`: título + parágrafos (fonte corpo, `text-white/80`, `space-y-*`).
  - `tags`: título + pills empilhadas — cada pill `rounded`, `bg-white/10`,
    borda sutil, `text-white/85`, alinhadas à esquerda (igual ao print).
- **A11y:** `role="img"` + `aria-label` com o título (e resumo p/ tags), como o
  `ImageSlide`.
- Sem badge de ícone (diferente de foto/vídeo).

## Integração (`ModalContent.js`)

No `map` das mídias, novo ramo antes de image/video:

```jsx
media.type === "card" ? (
  <CardSlide
    variant={media.variant}
    title={tGallery(media.title, locale)}
    intro={(media.intro || []).map((p) => tGallery(p, locale))}
    tags={(media.tags || []).map((tag) => tGallery(tag, locale))}
  />
) : media.type === "video" ? ( … ) : ( … )
```

## Tradução (`translations.js` — tGallery)

Estender o dicionário existente (PT → {en, es}) com:

- Títulos novos das seções (Entrada, Sala de estar, Cozinha, Área de jantar,
  Quarto, Banheiro, Lavabo, Quintal, Pátio, Piscina, Praia do Patacho, etc.).
- Parágrafos de intro (As Casas + os que o usuário fornecer).
- Cada tag única (TV, Ar-condicionado, Livros e material de leitura, Sistema de som, …).

`tGallery(text, locale)` já resolve tudo por string; PT retorna o original.

## Migração

- Substituir os ~20 itens de imagem-capa no `galleries.js` pelos itens `card`
  correspondentes (mesma posição/índice).
- **Não deletar** os `.jpg` capa antigos — ficam sem referência (limpeza opcional
  num passo futuro).
- `ImageSlide`/`VideoSlide` não mudam.

## Fora de escopo

- Legendas de rodapé das fotos normais (já traduzidas via tGallery).
- Reexportar/editar imagens no Figma.
- Deletar assets antigos.
- Cards com foto de fundo (decisão: navy sólido/gradiente).

## Verificação

- `/pt /en /es`: abrir o modal de cada galeria, conferir que os cards capa
  renderizam nas 3 variantes, traduzidos, sem regressão visual grosseira.
- Sem erros de console (hidratação / MISSING_MESSAGE).
- `pnpm lint` limpo.
- Cobertura: toda string de card em `galleries.js` tem entrada en/es no dicionário
  (script de checagem, como no i18n dos stories).
