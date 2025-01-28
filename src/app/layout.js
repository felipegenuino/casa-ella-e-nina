import { Fraunces, Sora } from "next/font/google";
import "../styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://casasboutiquepatacho.com.br"),
  title: "Casa Boutique na Praia do Patacho | Casas Ella & Nina - Alagoas",
  description:
    "A Casa Ella & Nina é uma casa boutique exclusiva na Praia do Patacho, Alagoas. Desfrute de conforto, privacidade e um refúgio perfeito. Reserve agora e viva essa experiência única!",
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e1b4be6",

  icons: {
    icon: "/favicon.ico",
    apple: "/midias/metadata/apple-icon.png",
    shortcut: "/favicon.ico",
    apple: [
      { rel: "apple-touch-icon", sizes: "57x57", url: "/midias/metadata/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", url: "/midias/metadata/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", url: "/midias/metadata/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", url: "/midias/metadata/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", url: "/midias/metadata/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", url: "/midias/metadata/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", url: "/midias/metadata/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", url: "/midias/metadata/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/midias/metadata/apple-icon-180x180.png" },
    ],
  },

  openGraph: {
    title: "Casa Boutique na Praia do Patacho - Casa Ella & Nina",
    description: "Uma experiência exclusiva em Alagoas. Casa boutique na Praia do Patacho, perfeita para casais que buscam conforto e privacidade.",
    url: "https://casa-ella-e-nina.vercel.app",
    siteName: "Casa Boutique na Praia do Patacho - Casa Ella & Nina",
    images: [
      {
        url: "https://casa-ella-e-nina.vercel.app/midias/metadata/open-graph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Boutique Ella & Nina",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@seuPerfil",
    title: "Casa Boutique na Praia do Patacho | Casa Ella & Nina",
    description: "Experiência exclusiva na Praia do Patacho, Alagoas. Reserve sua estadia e desfrute do melhor da hospedagem boutique.",
    images: ["https://casa-ella-e-nina.vercel.app/midias/metadata/open-graph-image.jpg"],
  },
};

// Configurando as fontes Fraunces (títulos) e Sora (corpo)
const fontTitle = Fraunces({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "700"], // Use os pesos que deseja para os títulos
  display: "swap", // Para melhor performance na troca de fontes
});
const fontBody = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"], // Use os pesos que deseja para o corpo de texto
  display: "swap", // Para melhor performance na troca de fontes
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${fontTitle.variable} ${fontBody.variable} antialiased w-100`}
      >
        <div id="__next">{children}</div>
      </body>
    </html>
  );
}
