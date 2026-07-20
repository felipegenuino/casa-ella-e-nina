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
  manual em *Actions*): `pnpm install` → `pnpm build` → upload via **SFTP** com
  `wlixcc/SFTP-Deploy-Action@v1.2.5` (porta **2222** na HostGator shared).
  > **Por que SFTP e não FTPS:** o FTPS da HostGator derruba a conexão no meio de
  > uploads grandes (`SSL alert 50 / tlsv1 alert decode error` no socket de dados)
  > — falhou 3× em pontos diferentes. SFTP (sobre SSH) é criptografado e estável.
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

**Pré-requisito:** SSH/SFTP habilitado no cPanel da HostGator (cPanel → **SSH Access**;
em alguns planos precisa pedir ativação ao suporte).

Em **Settings → Secrets and variables → Actions → New repository secret**, criar:

| Secret         | Valor                                              |
| -------------- | -------------------------------------------------- |
| `SSH_HOST`     | host SSH (ex.: `br36.hostgator.com.br` ou o domínio) |
| `SSH_USERNAME` | usuário SSH/cPanel                                  |
| `SSH_PASSWORD` | senha SSH (ou usar chave via `ssh_private_key`)     |

⚠️ **Nunca** commitar credenciais — só nos Secrets do repo.

- **Porta:** `2222` (HostGator shared; já fixa no `deploy.yml`).
- **Destino (`remote_path`):** `./public_html/casasboutiquepatacho.com.br` (relativo à home).
- Se a HostGator recusar login por senha via SSH, trocar para **chave**: gerar par,
  registrar a pública no cPanel (SSH Access → Manage Keys) e pôr a privada no secret
  `SSH_PRIVATE_KEY`, ajustando o `deploy.yml` para `ssh_private_key: ${{ secrets.SSH_PRIVATE_KEY }}`.

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
