import { setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Relatório de Evolução | Casas Boutique Ella & Nina",
  description:
    "O que evoluiu no site das Casas Boutique Ella & Nina: site multilíngue, galerias, depoimentos e acabamento.",
  robots: { index: false, follow: false },
};

const stats = [
  { n: "3", l: "idiomas: PT · EN · ES" },
  { n: "16", l: "depoimentos traduzidos" },
  { n: "100%", l: "das galerias traduzíveis" },
  { n: "+", l: "acessibilidade & Google" },
];

const sections = [
  {
    num: "01",
    kicker: "O coração do projeto",
    title: "Um site em três idiomas",
    intro:
      "O grande passo: seus hóspedes do Brasil e do exterior agora navegam no próprio idioma, com troca instantânea — essencial para quem chega pelo Airbnb de outros países.",
    items: [
      "<b>Português, Inglês e Espanhol</b>, com um seletor de idioma no menu.",
      "O site <b>abre no idioma certo</b> e mantém a escolha durante a navegação.",
      "Todo o conteúdo principal traduzido: páginas, menus, botões e avisos.",
    ],
  },
  {
    num: "02",
    kicker: "Fotos & experiência",
    title: "Galerias mais ricas e nítidas",
    intro:
      "As telas de apresentação das galerias deixaram de ser imagens com texto fixo e viraram conteúdo de verdade — traduzem, ficam nítidas em qualquer tela e são fáceis de atualizar.",
    items: [
      "Capas de <b>Conheça as Casas, Café da Manhã, Área de Lazer e Praias &amp; Passeios</b> agora em texto real e traduzível.",
      "Cada ambiente com suas <b>comodidades em destaque</b> (cozinha, quarto, banheiro, quintal, piscina…).",
      "Nova seção <b>“Lugares para Conhecer”</b>: botões que levam direto à capa de cada passeio.",
      "Bloco <b>“Ambientes”</b> da página inicial também modernizado.",
    ],
  },
  {
    num: "03",
    kicker: "Confiança",
    title: "Depoimentos que todos entendem",
    intro:
      "As avaliações reais dos hóspedes agora quebram a barreira do idioma — um dos maiores fatores de confiança para quem está decidindo a reserva.",
    items: [
      "As <b>16 avaliações reais</b> podem ser lidas em inglês e espanhol.",
      "Cada tradução vem com a nota discreta <b>“Traduzido do português”</b> — transparente e honesto.",
      "O <b>texto original em português</b> dos hóspedes é sempre preservado.",
    ],
  },
  {
    num: "04",
    kicker: "Nomes & conteúdo",
    title: "Cada palavra adaptada ao visitante",
    intro:
      "Ajustes finos para que o site soe natural em cada idioma, sem perder a identidade da marca.",
    items: [
      "No inglês: <b>House Ella / House Nina</b> e <b>Patacho Beach / Laje Beach</b> (em português seguem “Casa” e “Praia”).",
      "Página das <b>playlists</b> (o jazz de Nina Simone e Ella Fitzgerald) traduzida — e a playlist da Nina atualizada.",
      "Botões, menus e o modal de comodidades totalmente traduzidos.",
    ],
  },
  {
    num: "05",
    kicker: "Alcance",
    title: "Acessibilidade e presença no Google",
    intro:
      "Melhorias que servem a todos os visitantes e ajudam o site a ser encontrado nas buscas.",
    items: [
      "Estrutura de títulos e <b>navegação por teclado</b> (atalho “Pular para o conteúdo”).",
      "<b>Descrições nas imagens</b> para leitores de tela (acessibilidade).",
      "Base mais sólida de <b>SEO</b> — melhor posicionamento nas buscas do Google.",
    ],
  },
  {
    num: "06",
    kicker: "Acabamento",
    title: "Navegação suave e visual afinado",
    intro:
      "Detalhes de experiência e polimento que deixam o site mais agradável e profissional.",
    items: [
      "Menu flutuante com <b>rolagem suave</b> até as seções e um botão <b>“Início”</b>.",
      "Espaçamentos, alinhamentos e tamanhos ajustados (galerias, topo do site, rodapé).",
      "Correções técnicas que deixaram o site <b>mais leve e estável</b>.",
    ],
  },
];

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default async function RelatorioPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <header className="relative overflow-hidden bg-indigo-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,rgba(147,51,234,0.35),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 to-indigo-950/60" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-indigo-300">
            Casas Boutique Ella &amp; Nina · Praia do Patacho
          </p>
          <h1 className="mt-5 text-4xl font-normal leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
            O seu site, agora para o mundo
          </h1>
          <p className="mt-5 max-w-[34em] text-lg leading-relaxed text-indigo-100/90 md:text-xl">
            Um site que passou a falar a língua dos seus hóspedes —{" "}
            <b className="font-semibold text-indigo-200">português, inglês e espanhol</b> — com
            galerias, avaliações e cada detalhe traduzidos, e um visual mais refinado.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-indigo-200/80">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />Relatório de evolução do site</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />Julho de 2026</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        {/* STATS */}
        <div className="relative z-10 -mt-9 grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_22px_50px_rgba(30,27,75,0.15)] sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="border-gray-100 p-5 text-center [&:not(:last-child)]:border-r [&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-b-0">
              <div className="text-3xl font-semibold text-indigo-600 md:text-4xl">{s.n}</div>
              <div className="mt-2 text-xs leading-snug text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>

        {/* SECTIONS */}
        {sections.map((sec) => (
          <section key={sec.num} className="pt-12">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-indigo-600">
              <span className="tabular-nums opacity-60">{sec.num}</span> · {sec.kicker}
            </p>
            <h2 className="mt-3 text-2xl font-normal tracking-tight text-gray-900 text-balance md:text-3xl">
              {sec.title}
            </h2>
            <p className="mt-2.5 max-w-[60ch] text-gray-500">{sec.intro}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {sec.items.map((it, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                  <Check />
                  <span className="text-gray-600" dangerouslySetInnerHTML={{ __html: it }} />
                </li>
              ))}
            </ul>
          </section>
        ))}

        <hr className="mt-12 border-gray-200" />

        {/* NEXT */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500" />
          <div className="p-7">
            <h2 className="text-2xl font-normal tracking-tight text-gray-900">A seguir</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="font-semibold text-pink-600">→</span>
                <span>
                  <b className="font-semibold text-gray-900">Alguns passeios a completar:</b> textos e
                  fotos do Santuário do Peixe-Boi e de Tatuamunha, para finalizarmos juntos.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-14 border-t border-gray-200 px-6 py-14 text-center">
        <div className="text-lg text-gray-900">Casas Boutique Ella &amp; Nina</div>
        <p className="mt-1.5 text-sm text-gray-500">
          Praia do Patacho · Porto de Pedras, Alagoas — Brasil
        </p>
      </footer>
    </div>
  );
}
