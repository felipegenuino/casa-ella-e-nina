import { Fraunces, Sora } from "next/font/google";

import "../styles/globals.css";

//  import {Header} from './components/Header';

// Configurando as fontes Fraunces (títulos) e Bellota (corpo)
const fontTitle = Fraunces({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "700"], // Use os pesos que deseja para os títulos
});
const fontBody = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"], // Use os pesos que deseja para o corpo de texto
});

export const metadata = {
  title: "Casa Ella e Nina | Casas Boutique - Alagoas",
  description: "Adicionar texto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${fontTitle.variable} ${fontBody.variable} antialiased w-100`}
      >
        {children}
      </body>
    </html>
  );
}
