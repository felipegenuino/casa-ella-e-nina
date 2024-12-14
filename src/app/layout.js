import { Fraunces, Sora } from "next/font/google";
import "../styles/globals.css";

export const metadata = {
  title: "Casas Boutique Ella & Nina | Patacho, Alagoas - Brasil",
  description:
    "Descubra a Casa Ella e Nina, uma casa boutique em Alagoas, com charme único e hospitalidade excepcional. Reserve já sua estadia.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "57x57", url: "/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", url: "/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", url: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", url: "/apple-icon-76x76.png" },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        url: "/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        url: "/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        url: "/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        url: "/apple-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-icon-180x180.png",
      },
    ],
  },
  themeColor: "#ffffff",

  openGraph: {
    title: "Casas Boutique Ella & Nina | Patacho, Alagoas - Brasil",
    description:
      "Descubra as Casas Ella e Nina, sua casa boutique em Alagoas, com charme único e hospitalidade excepcional. Reserve já sua estadia.",
    url: "https://casa-ella-e-nina.vercel.app",
    siteName: "Casas Boutique Ella & Nina | Patacho, Alagoas - Brasil",
    images: [
      {
        url: "https://casa-ella-e-nina.vercel.app/midias/metadata/open-graph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casas Boutique Ella & Nina",
      },
    ],
    locale: "pt-BR",
    type: "website",
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
