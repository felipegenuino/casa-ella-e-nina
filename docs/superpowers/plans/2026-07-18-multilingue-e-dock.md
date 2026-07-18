# Casa Ella & Nina — Multilíngue + Dock — Plano de Execução

> Executado de forma autônoma (Felipe autorizou análise + execução sem checkpoints).
> Base: replicar o padrão i18n do hy-empreendimentos/leandroboeira (next-intl 4.13
> + middleware + `[locale]` + `messages/{pt,en,es}.json`).

**Goal:** casa-ella-e-nina multilíngue (pt/en/es) com dock flutuante (menu +
seletor de idioma + CTA "Reservar").

**Mudança de deploy:** sai do `output: "export"` (estático) → roda como hy/leandro
(Node/Vercel, middleware). O build deixa de gerar `out/`.

## Ciclo 1 — Infra i18n
- [ ] Instalar `next-intl`.
- [ ] `i18n/routing.js`, `i18n/request.js`, `i18n/navigation.js` (copiados do hy, em JS).
- [ ] `middleware.js` (copiado do hy: routing + reforço geo-IP).
- [ ] `next.config.mjs`: remover `output: export`, envolver com `withNextIntl`.
- [ ] `messages/{pt,en,es}.json` (iniciais, com a chave `metadata`).
- [ ] Reestruturar `app/` → `app/[locale]/`: `layout.js` (html lang, provider,
      generateStaticParams, setRequestLocale), `page.js`, `not-found.js`,
      `playlist/`, `download/`. `app/globals.css` fica em `app/` (import relativo).
- [ ] Verificar: `/pt /en /es` renderizam, `/` redireciona (middleware), build passa.

## Ciclo 2 — Conteúdo (extração + tradução)
- [ ] Extrair strings dos 12 blocos ativos → `messages/pt.json` (namespaces por bloco).
- [ ] Traduzir en + es (fiel; termos de marca preservados).
- [ ] Componentes leem via `useTranslations`/`getTranslations`.
- [ ] UI dos depoimentos traduzida; texto das avaliações (data.js) fica em pt.
- [ ] SEO por idioma (hreflang/canonical/title/description).

## Ciclo 3 — Dock (floating-toc)
- [ ] Instalar `floating-toc` via GitHub (`github:felipegenuino/floating-toc`).
- [ ] Componente do dock (client): Menu (âncoras), seletor pt/en/es (troca locale
      preservando rota), CTA "Reservar" → `#reserve`. Rótulos via i18n.
- [ ] Verificação visual desktop + mobile.

## Restrições
- pt padrão e fallback. Zero regressão visual no pt. Build verde ao fim de cada ciclo.
