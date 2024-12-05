import Image from "next/image";
import Link from "next/link";

export default function FaleComAnfitria() {
  return (
    <section className="relative bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Imagem da anfitriã */}
          <div className="relative">
            <div className="rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="/midias/host/anfitria.jpg"
                alt="Mariangela, anfitriã da Casa Boutique Ella e Nina"
                width={500}
                height={500}
                className="object-cover w-full"
              />
            </div>
          </div>

          {/* Conteúdo da seção */}
          <div className="space-y-6 mt-8 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Fale com a Anfitriã
            </h2>
            <p className="text-lg text-gray-600">
              Olá! Sou Mariangela, sua anfitriã na Casa Boutique Ella e Nina.
              Estou à disposição para responder suas dúvidas e ajudá-lo a
              planejar uma estadia incrível.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 shadow-lg transition-all"
              >
                Enviar Mensagem no WhatsApp
              </Link>
              <Link
                href="mailto:anfitria@ellaninacasas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 shadow-lg transition-all"
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
