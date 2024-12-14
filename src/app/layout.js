import { Fraunces, Sora } from "next/font/google";
import "../styles/globals.css";

export const metadata = {
  title: "Casas Boutique Ella & Nina - Alagoas",
  description:
    "Descubra as Casas Ella e Nina, sua casa boutique em Alagoas, com charme único e hospitalidade excepcional. Reserve já sua estadia.",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/midias/metadata/favicon.ico",
    apple: "/midias/metadata/apple-icon.png",
  },
  openGraph: {
    title: "Casas Boutique Ella & Nina - Alagoas",
    description:
      "Descubra as Casas Ella e Nina, sua casa boutique em Alagoas, com charme único e hospitalidade excepcional. Reserve já sua estadia.",
    url: "https://casa-ella-e-nina.vercel.app",
    siteName: "Casas Boutique Ella & Nina - Alagoas",
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
