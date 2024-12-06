import { Fraunces, Sora } from "next/font/google";
import "../styles/globals.css";

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

export const metadata = {
  title: "Casa Ella e Nina | Casas Boutique - Alagoas",
  description:
    "Descubra a Casa Ella e Nina, uma casa boutique em Alagoas, com charme único e hospitalidade excepcional. Reserve já sua estadia.",
};

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
