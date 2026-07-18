# Casa Ella & Nina — Multilíngue (pt/en/es) + Dock flutuante

**Data:** 2026-07-18 · **Status:** aprovado (conversa com Felipe)

## Objetivo

Tornar o site multilíngue (pt/en/es) com roteamento por idioma e adicionar um
dock flutuante de navegação (menu + seletor de idioma + CTA "Reservar") no
estilo do rtamundi, reusando o pacote próprio `floating-toc`.

## Contexto atual

- Next.js 14 (App Router), rota única `/` (`app/page.js`), sem lib de i18n.
- 13 blocos em `src/app/blocks/` com **texto fixo em pt-BR**: BannerTop, Hero,
  Ambientes, Comodidades (Amenities), Testimonials, MomentosCompartilhados,
  Reserve, Faq, FaleComAnfitria, Footer, HighlightsSection, RefugioLuxo, Impact.
  (Impact é boilerplate morto e pode ficar fora do i18n.)
- Header no topo (`components/Header.jsx`) com nav (Casa Ella / Casa Nina /
  Sobre).
- Seções com `id` já definidos: `hero`, `ambientes`, `comodidades`,
  `historias`, `momentos-compartilhados`, `reserve`, `faq`,
  `fale-com-anfitria`, `footer-section`.

## Decomposição em 3 ciclos (nesta ordem)

Cada ciclo entrega software funcionando e é testável isoladamente. Terão
specs/planos próprios quando entrarem em implementação; este documento é o
guarda-chuva.

### Ciclo 1 — Infra de i18n (next-intl + rotas)

- Adicionar `next-intl`.
- Reestruturar `app/page.js` → `app/[locale]/page.js`; demais rotas
  (`download/...`, `playlist`) idem sob `[locale]`.
- `middleware.ts`: detecção de idioma pelo navegador + redirect `/` → `/{locale}`;
  **pt como padrão e fallback**. Locales suportados: `pt`, `en`, `es`.
- `i18n/routing.ts` (locales, defaultLocale) e config do provider no
  `app/[locale]/layout.js`.
- `messages/pt.json` criado (mesmo que ainda com poucas chaves); en/es podem
  começar como cópia e serem preenchidos no Ciclo 2.
- `<html lang>` dinâmico por locale; metadata base mantida.
- **Critério:** site abre em `/pt`, `/en`, `/es` sem erro; `/` redireciona;
  build de produção passa. Conteúdo ainda em pt (tradução é o Ciclo 2).

### Ciclo 2 — Conteúdo (extração + tradução)

- Extrair **todas as strings** dos 12 blocos ativos para `messages/*.json`
  (chaves por bloco, ex.: `hero.titulo`, `comodidades.item1`…). Inclui os
  **UI** do bloco Testimonials (títulos, "Preferido dos hóspedes", rótulos de
  categoria, frase-guia dos links, labels do painel) é traduzida. Já o **texto
  das avaliações** em `Testimonials/data.js` **permanece em pt** (conteúdo real
  dos hóspedes — não traduzir).
- Traduzir para **en** e **es**, fiéis ao tom (hospitalidade, casa boutique).
  Sem inventar; onde houver termo de marca (Casa Ella, Nina, Rota dos
  Milagres), manter.
- Componentes passam a ler via `useTranslations`/`getTranslations`.
- SEO por idioma: `alternates`/`hreflang` e `canonical` por locale; title e
  description traduzidos.
- **Critério:** trocar o locale muda todo o conteúdo visível; nenhuma chave
  faltando (fallback pt aceitável só como rede de segurança, não como regra);
  build passa.

### Ciclo 3 — Dock flutuante (floating-toc)

- **Dependência:** publicar `floating-toc@0.2.0` no npm (a 0.1.1 não tem os
  fixes de contenção/temas). Alternativa temporária: instalar via git. O
  casa-ella deve consumir a versão com os fixes.
- Instalar `floating-toc` e montar um dock cliente no estilo rtamundi:
  - **Menu**: âncoras das seções (Ambientes `#ambientes`, Comodidades
    `#comodidades`, Avaliações `#historias`, Reserva `#reserve`, FAQ `#faq`,
    Contato `#fale-com-anfitria`).
  - **Seletor de idioma**: pt/en/es com bandeira; troca o locale **preservando
    a rota atual** (ex.: `/en/...` ↔ `/pt/...`).
  - **CTA "Reservar"**: rola suave até a seção `#reserve`.
- Rótulos do dock também vêm do i18n (Menu/Reservar traduzidos).
- **Header atual:** mantido por ora (marca/logo). Navegação principal
  consolidada no dock; simplificação do header fica fora deste escopo.
- **Critério:** dock aparece fixo, troca de idioma funciona preservando a
  rota, CTA rola até Reserve, âncoras do menu funcionam; verificação visual
  desktop + mobile.

## Fora de escopo

- Traduzir depoimentos de hóspedes (conteúdo real em pt).
- Redesenhar/retirar o Header atual.
- Reescrever o bloco Impact (boilerplate morto) — apenas não entra no i18n.
- Novas páginas ou seções de conteúdo.

## Restrições globais

- pt é o idioma padrão e fallback.
- Zero regressão visual no layout pt existente.
- `floating-toc` consumido na versão com os fixes (≥0.2.0).
- Build de produção (`next build`) verde ao fim de cada ciclo.
