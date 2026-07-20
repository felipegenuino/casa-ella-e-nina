# Deploy — Casa Ella & Nina

> ✅ **Deploy configurado** (20/07/2026). Espelha o rtamundi
> (`rta-brasil-sudeste-2026`): site estático + GitHub Actions → FTPS pro HostGator.
> A única diferença é o `server-dir` (diretório do projeto no servidor).

## Como funciona

- **Host:** HostGator (Apache/LiteSpeed) — **não roda Node.js**, por isso o site
  é publicado como **estático**.
- **Build:** `next build` com `output: "export"` → gera `./out/` com
  `pt/ en/ es/` (páginas + assets). `trailingSlash: true` gera `pasta/index.html`,
  que o Apache serve sem depender de MultiViews.
- **CI/CD:** `.github/workflows/deploy.yml` — a cada `push` na `main` (ou disparo
  manual em *Actions*): `pnpm install` → `pnpm build` → upload via FTPS com
  `SamKirkland/FTP-Deploy-Action@v4.3.5`.
- **`.htaccess`** (`public/.htaccess`, copiado ao `out/` no build): HTTPS forçado,
  `www` → sem-www, headers de segurança, compressão, cache, `ErrorDocument 404`
  e o redirect da raiz `^$ /pt/ [R=302,L]`.

### Redirect da raiz (`/` → `/pt/`)

O middleware (roteamento de idioma + geo-IP) **não roda** em hosting estático —
`next build` só emite um aviso e o ignora. O geo-IP dependia de headers da Vercel
de qualquer forma. Então a home cai em **pt** via `.htaccess`; o visitante troca
no seletor de idioma do menu. Páginas `/pt /en /es` são estáticas
(`generateStaticParams` no `[locale]/layout.js`).

## Configuração no GitHub (feita uma vez)

Em **Settings → Secrets and variables → Actions → New repository secret**, criar:

| Secret         | Valor (do painel/FTP do HostGator)        |
| -------------- | ----------------------------------------- |
| `FTP_SERVER`   | host FTP (ex.: `ftp.casasboutiquepatacho.com.br` ou o IP/host do cPanel) |
| `FTP_USERNAME` | usuário FTP                               |
| `FTP_PASSWORD` | senha FTP                                 |

⚠️ **Nunca** commitar credenciais — só nos Secrets do repo.

- **Destino no servidor (`server-dir`):** `./public_html/casasboutiquepatacho.com.br/`
- **Protocolo:** `ftps` (se der erro de conexão, trocar para `ftp` no `deploy.yml`).

## Publicar

1. Configurar os 3 Secrets acima (uma vez).
2. `git push origin main` → a Action builda e sobe sozinha.
3. Acompanhar em **Actions**. Ao terminar, conferir https://casasboutiquepatacho.com.br
   (raiz → `/pt/`, trocar idioma, galerias/modal/dock nos 3 idiomas).

Disparo manual: aba **Actions → Deploy via FTP → Run workflow**.

## Villa Canuí 118 (futuro)

O projeto será **duplicado** para um segundo site — "Villa Canuí 118". Mesmo
padrão: repo próprio, seus Secrets FTP e `server-dir`
(`public_html/<domínio-canui>/`). Basta copiar `deploy.yml` + `public/.htaccess`
e trocar o `server-dir` e o domínio.
