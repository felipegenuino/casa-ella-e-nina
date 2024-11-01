import localFont from "next/font/local";
import "../styles/globals.css";
//  import {Header} from './components/Header';
import {Footer} from './components/Footer';


const fontTitle = localFont({
  src: "../../public/fonts/FrauncesVariable.woff",
  variable: "--font-title",
  weight: "100 900",
});
const fontBody = localFont({
  src: "../../public/fonts/PlusJakartaSans-VariableFont_wght.woff",
  variable: "--font-body",
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
        className={`${fontTitle.variable} ${fontBody.variable} antialiased w-100`}
      >
        {/* <Header/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
