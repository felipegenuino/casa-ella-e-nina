# Deploy — Casa Ella & Nina

> Documento de planejamento. **O deploy ainda NÃO está configurado** para a
> arquitetura atual. Este doc registra o plano; a execução fica para depois
> (prioridade atual: cards capa traduzíveis).

## Situação atual (⚠️ inconsistente)

- O **README.md** descreve deploy por **export estático** (`pnpm build` → `out/`
  → `tar` → FTP/SFTP → `public_html/`). **Essa doc está desatualizada.**
- Após a migração multilíngue (18/07), o projeto virou **Next.js dinâmico**:
  - `next.config.mjs` **não tem** `output: "export"`.
  - Existe `src/middleware.js` (roteamento de idioma `/` → `/pt`, geo-IP).
  - `pnpm build` gera build de servidor (`.next`), **não** gera mais `out/`.
- Consequência: **não dá pra subir estático pro HostGator** como o README diz —
  o middleware não rodaria e o `/` não redirecionaria pro `/pt`.
- A pasta `out/` versionada é resíduo da fase antiga.

## Padrão de referência: rtamundi (`rta-brasil-sudeste-2026`)

O outro projeto do Felipe já resolve deploy em shared hosting:

- **Host:** HostGator (Apache/LiteSpeed), site em `public_html/<domínio>/`.
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`) — em `push` na `main`:
  build → **upload via FTPS** com `SamKirkland/FTP-Deploy-Action@v4.3.5`,
  secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
- **`.htaccess`:** HTTPS forçado, `www` → sem-www, headers de segurança,
  compressão, cache, `ErrorDocument 404`.
- rtamundi é **estático** (build custom → `dist/`), por isso cabe no HostGator
  (que **não roda Node.js**).

## Plano para o Casa Ella & Nina (espelhar o rtamundi)

Para deployar no HostGator via GitHub Actions FTPS, o site precisa voltar a ser
**estático**. Passos:

1. **Reativar export estático** no `next.config.mjs`:
   ```js
   const nextConfig = {
     output: "export",
     images: { unoptimized: true }, // já está assim
     // ...
   };
   ```
   - `next-intl` funciona em static export via o `generateStaticParams` que já
     existe em `[locale]/layout.js` + `setRequestLocale`.
   - `pnpm build` volta a gerar `out/` (pastas `pt/ en/ es/` + assets).

2. **Redirect `/` → `/pt` sem middleware** (middleware não roda em hosting
   estático). Opções:
   - Regra no `.htaccess`: `RewriteRule ^$ /pt/ [R=302,L]`, ou
   - `index.html` na raiz com redirect.
   - Trade-off: perde-se o geo-IP; todo mundo cai no `/pt` e troca no seletor
     de idioma (aceitável).

3. **`.htaccess`** — adaptar o do rtamundi (HTTPS, www→sem-www, headers, cache,
   404) + a regra de redirect do passo 2. Colocar em `public/.htaccess` para
   ser copiado ao `out/` no build (confirmar que o export inclui).

4. **GitHub Actions** — criar `.github/workflows/deploy.yml` espelhando o do
   rtamundi:
   - build: `pnpm install` + `pnpm build` (gera `out/`).
   - deploy: `SamKirkland/FTP-Deploy-Action`, `local-dir: ./out/`,
     `server-dir: ./public_html/casasboutiquepatacho.com.br/`,
     `protocol: ftps`.
   - Secrets no repo GitHub: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
     (⚠️ configurar em Settings → Secrets, nunca no código).

5. **Verificar antes de publicar:**
   - Todos os componentes client (swiper, react-modal, framer-motion,
     react-scroll, next-intl) funcionam em static export.
   - `/pt /en /es` abrem; `/` redireciona; galerias/modal e dock OK nos 3 idiomas.
   - `next/image` já está `unoptimized` (necessário p/ export).
   - Limpar a pasta `out/` versionada antiga (passar a ser artefato de build).

## Alternativa: Vercel

Se preferir manter a arquitetura dinâmica (middleware, geo-IP real), deployar na
**Vercel** (grátis nesse porte, deploy via Git, middleware nativo) — sem HostGator
e sem tornar estático. Não segue o padrão rtamundi, mas é o "modo Next" natural.

## Villa Canuí 118 (futuro)

O projeto será **duplicado** para um segundo site — "Villa Canuí 118" (nova casa,
conteúdo específico). O mesmo padrão de deploy se aplica: cada site tem seu
próprio repo/Action, domínio, `server-dir` (`public_html/<domínio-canui>/`) e
secrets FTP. Vale deixar o `deploy.yml` e o `.htaccess` parametrizáveis para
facilitar a duplicação.
