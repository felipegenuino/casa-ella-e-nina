import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Download | Portas Abertas - Casas Ella e Nina",
  description: "Faça o download do guia Portas Abertas das Casas Ella e Nina.",
  openGraph: {
    title: "Download | Portas Abertas - Casas Ella e Nina",
    description: "Guia com detalhes exclusivos sobre as Casas Ella e Nina.",
    url: "https://seusite.com/download",
    siteName: "Casas Boutique Ella e Nina",
    images: [
      {
        url: "/midias/metadata/guia-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Guia Portas Abertas Casas Ella e Nina",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function GuideDownloadPage() {
  return (
    <div className="overflow-hidden ">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        {/* Coluna da Imagem */}
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            {/* Fundo com SVG */}
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
              <defs>
                <pattern
                  id="pattern-grid"
                  width="128"
                  height="128"
                  patternUnits="userSpaceOnUse"
                  x="100%"
                  y="100%"
                  patternTransform="translate(112 64)"
                >
                  <path
                    d="M0 128V.5H128"
                    fill="none"
                    stroke="currentColor"
                  ></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern-grid)" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            {/* Imagem de Capa */}
            <Image
              src="/downloads/guia-portas-abertas/cover.png"
              width={500}
              height={500}
              alt=""
              priority
            />
          </div>
        </div>

        {/* Cabeçalho e Botões */}
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <p className="text-indigo-600 font-light py-2">Faça o Download</p>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Guia Portas Abertas
            </h1>
            <p className="mt-4 text-xl md:text-3xl text-slate-600">
              Descubra todos os detalhes da Casa Ella e Nina e aproveite ao
              máximo sua estadia na Praia do Patacho.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Link
                href="/downloads/guia-portas-abertas/Portas-Abertas-Casas-Ella-e-Nina.pdf"
                target="_blank"
                download
                className="button-primary"
              >
                Baixar Guia
              </Link>
              <Link
                href="/"
                className="px-5 py-4 text-black   text-center border duration-200  bg-gradient-to-r  from-gray-50 to-gray-100  hover:from-white hover:to-white active:from-gray-100 active:to-gray-200    transition-all rounded-full   hover:shadow-lg   active:scale-95 active:shadow-sm"
              >
                Voltar para o Site
              </Link>
            </div>
          </div>
        </div>

        {/* block testimonial */}
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-0 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100"></div>
          <figure className="relative my-12 lg:mt-16 mx-auto max-w-md _text-center lg:mx-0 lg:text-left">
            {/* Estrelas */}
            <div className="flex justify-start text-blue-600 lg:justify-start">
              <div className="flex gap-1">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <svg
                      key={i}
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
              </div>
            </div>

            {/* Testemunho */}
            <blockquote className="mt-2">
              <p className="font-display text-md md:text-xl font-medium text-slate-900">
                “A casa é muito aconchegante e completa. Adoramos a recepção da
                Juliana, que preparava com todo carinho nosso café da manhã e
                nos deu dicas valiosas de passeios. Com certeza voltarei e
                recomendo! ”
              </p>
            </blockquote>
            <figcaption className="mt-2 text-sm text-slate-500">
              <strong className="font-semibold text-blue-600 before:content-['—_']">
                Shirley
              </strong>
              , Avaliação: 17 de fevereiro de 2024
            </figcaption>
          </figure>
        </div>
        {/* end block testimonial */}
      </div>
    </div>
  );
}
