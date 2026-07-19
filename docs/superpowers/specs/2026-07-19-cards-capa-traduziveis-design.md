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

- **Fundo:** gradiente navy sutil da marca (sem foto). Nada de imagem de fundo.
- **Estrutura de conteúdo:** Abordagem 1 — `card` como novo tipo de mídia no
  `galleries.js` (fonte PT) + traduções no `translations.js` existente (tGallery).
- **Conteúdo:** a IA rascunha o PT (títulos pelos nomes de seção, intro/tags
  transcritos dos prints, demais inferidos e marcados ⚠️); o usuário revisa e
  completa antes da tradução en/es.
- **Posição:** cada card segue como o **1º slide da sua seção** (mesma posição
  das imagens-capa atuais).
- **Sem badge** de ícone de mídia nos cards (não são foto/vídeo).

## Escopo

**~20 cards capa** no total (mais que os ~14 estimados inicialmente):

| # | Galeria | idx | arquivo capa (sem `-p.jpg`) | Título PT (rascunho) | Variante | Conteúdo (rascunho) | Status |
|---|---------|-----|------------------------------|----------------------|----------|---------------------|--------|
| 1 | Conheça as Casas | 0 | sobre-as-casas-1 | As Casas | **intro** | 2 parágrafos (abaixo) | ✓ transcrito |
| 2 | Conheça as Casas | 1 | entrada-capa | Entrada | title | — | ✓ transcrito |
| 3 | Conheça as Casas | 7 | sala_estar-capa | Sala de estar | **tags** | TV; Ar-condicionado; Livros e material de leitura; Sistema de som | ✓ transcrito |
| 4 | Conheça as Casas | 10 | cozinha_completa-capa | Cozinha | title | (tags? ⚠️) | ⚠️ revisar |
| 5 | Conheça as Casas | 14 | area_jantar-capa | Área de jantar | title | (tags? ⚠️) | ⚠️ revisar |
| 6 | Conheça as Casas | 20 | quarto-capa | Quarto | title | (tags? ⚠️) | ⚠️ revisar |
| 7 | Conheça as Casas | 30 | banheiro_completo-capa | Banheiro | title | (tags? ⚠️) | ⚠️ revisar |
| 8 | Conheça as Casas | 38 | lavabo-capa | Lavabo | title | — | ⚠️ revisar |
| 9 | Conheça as Casas | 40 | quintal-capa | Quintal | title | — | ⚠️ revisar |
| 10 | Conheça as Casas | 45 | patio-capa | Pátio | title | — | ⚠️ revisar |
| 11 | Conheça as Casas | 57 | piscina-capa | Piscina | title | (tags? ⚠️) | ⚠️ revisar |
| 12 | Café da Manhã | 0 | capa-cafe-da-manha | Café da Manhã | title | (intro? ⚠️) | ⚠️ revisar |
| 13 | Área de Lazer | 0 | capa | Área de Lazer | title | (intro? ⚠️) | ⚠️ revisar |
| 14 | Praias e Passeios | 0 | capa | Praias e Passeios | title | (intro? ⚠️) | ⚠️ revisar |
| 15 | Praias e Passeios | 1 | capapatacho | Praia do Patacho | title | (intro? ⚠️) | ⚠️ revisar |
| 16 | Praias e Passeios | 11 | capaPraiadalaje | Praia da Laje | title | (intro? ⚠️) | ⚠️ revisar |
| 17 | Praias e Passeios | 12 | capaPasseiosdejangada | Passeios de Jangada | title | (intro? ⚠️) | ⚠️ revisar |
| 18 | Praias e Passeios | 13 | capaVisitaSantuario | Visita ao Santuário | title | (intro? ⚠️) | ⚠️ revisar |
| 19 | Praias e Passeios | 14 | capaFarolPortoDepedras | Farol de Porto de Pedras | title | (intro? ⚠️) | ⚠️ revisar |
| 20 | Praias e Passeios | 15 | capaTatuamunha | Tatuamunha | title | (intro? ⚠️) | ⚠️ revisar |

> ⚠️ Os índices (`idx`) valem para o estado atual do `galleries.js` e serão
> reconfirmados na implementação (arquivo é a fonte da verdade).

### Conteúdo transcrito (card 1 — As Casas, intro)

Parágrafo 1: "Situada em Porto de Pedras, a Pousada Casas Boutique Ella & Nina no
Patacho oferece acomodações com Wi-Fi gratuito, ar-condicionado, área de praia
privativa e acesso a um jardim com piscina ao ar livre aberta o ano todo. A
propriedade tem vista do jardim e do pátio interno, e fica a 1,9 km da Praia do
Patacho. A acomodação oferece serviço de limpeza e check-in e check-out privativos."

Parágrafo 2: "Esta villa espaçosa dispõe de 1 quarto, 2 banheiros, roupa de cama,
toalhas, TV de tela plana com serviços de streaming, área para refeições, cozinha
totalmente equipada e varanda com vista da piscina. Esta villa também inclui uma
varanda térrea que funciona como área para refeições ao ar livre. Um closet,
serviço de lavanderia e segurança durante todo o dia também estão disponíveis."

> **Ação do usuário:** revisar títulos, decidir variante (title/intro/tags) de
> cada ⚠️ e fornecer o texto de intro/tags onde aplicável. Muitos covers da
> galeria 4 (passeios) podem ter texto descritivo embutido que a IA não viu.

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
