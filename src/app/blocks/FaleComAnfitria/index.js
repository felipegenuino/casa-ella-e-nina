import Image from "next/image";
import Link from "next/link";

export default function FaleComAnfitria() {
  return (
    <section
      id="fale-com-anfitria"
      className="relative 
    bg-gradient-to-b  from-white to-yellow-50 
    border-b border-yellow-200
    py-16
    lg:py-0
    "
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Imagem da anfitriã */}
          <div className="relative">
            <div
              className="rounded-xl _shadow-2xl overflow-hidden 
            border-b border-yellow-200 lg:border-0

            "
            >
              <Image
                src="/midias/host/anfitria.png"
                alt="Mariangela, anfitriã da Casa Boutique Ella e Nina"
                width={500}
                height={500}
                className="lg:object-cover "
              />
            </div>
          </div>

          {/* Conteúdo da seção */}
          <div className="space-y-6 mt-8 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl font-regular text-gray-800 sm:text-4xl">
              Fale com a Anfitriã
            </h2>
            <p className="text-lg text-gray-600">
              Olá! Sou Mariangela, sua anfitriã na Casa Boutique Ella e Nina.
              Estou à disposição para responder suas dúvidas e ajudá-lo a
              planejar uma estadia incrível.
            </p>
            <div
              className="
              flex 
              flex-col 
              md:flex-row 
              lg:flex-col 
              xl:flex-row
              items-center 
            space-y-2 
            md:space-x-4
            lg:space-x-0
            xl:space-y-0
            xl:space-x-6
            
            
            "
            >
              <Link
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full md:w-auto lg:w-full inline-flex items-center justify-center px-6 py-3 border border-green-600 text-base font-medium rounded-full text-white 
                bg-green-500 hover:bg-green-600 
                shadow-lg 
                transition-all
                hover:shadow-xl 
                active:scale-95 
                active:shadow-sm "
              >
                Enviar Mensagem no WhatsApp
              </Link>
              <Link
                href="mailto:anfitria@ellaninacasas.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full md:w-auto lg:w-full  flex gap-2 px-6 py-3  
          content-center 
          items-center 
          justify-center 
          border 
          duration-200 
          rounded-full 
          transition-all 
          text-white  
          bg-gradient-to-r 
           from-purple-500 to-pink-500  
           hover:from-indigo-500 hover:to-indigo-400  
           active:from-indigo-600 active:to-indigo-600 
           hover:shadow-xl 
           active:scale-95 
           active:shadow-sm "
              >
                Enviar Email
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Respondemos em até 24 horas. Estamos prontos para tornar sua
              experiência inesquecível!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
