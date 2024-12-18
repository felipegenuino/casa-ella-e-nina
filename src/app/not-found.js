export const metadata = {
  metadataBase: new URL("https://casasboutiquepatacho.com.br"),
  title: "Página não encontrada | Casa Ella e Nina",
  description:
    "Ops! A página que você está procurando não existe. Volte para a página inicial e explore mais sobre a Casa Ella e Nina.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#ffffff",
  robots: {
    index: false, // Não indexar a página 404
    follow: false,
  },
  openGraph: {
    title: "Página não encontrada | Casa Ella e Nina",
    description:
      "A página que você está procurando não foi encontrada. Volte para a página inicial.",
    url: "https://casasboutiquepatacho.com.br/404",
    type: "website",
    images: [
      {
        url: "/midias/metadata/guia-cover.jpg", // Substitua pela imagem apropriada
        width: 1200,
        height: 630,
        alt: "Página não encontrada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Página não encontrada | Casa Ella e Nina",
    description:
      "Ops! A página não foi encontrada. Volte para a página inicial.",
    images: ["/midias/metadata/guia-cover.jpg"],
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Página não encontrada
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        Opa! Parece que você tentou acessar algo que não existe ou foi movido.
        Volte para a página inicial ou explore outros links no site.
      </p>
      <a href="/" className="button-primary">
        Voltar para a página inicial
      </a>
    </div>
  );
}
