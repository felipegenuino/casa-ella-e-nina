import localFont from "next/font/local";
import "../styles/globals.css";
 import {Header} from './components/Header';
import {Footer} from './components/Footer';


const geistSans = localFont({
  src: "../../public/fonts/FrauncesVariable.woff",
  variable: "--font-title-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Casa Ella e Nina",
  description: "Adicionar texto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} antialiased flex justify-center`}
      >
        {/* <Header/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
