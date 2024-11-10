import Image from "next/image";
import React from "react";

export default function MomentosCompartilhados() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-screen-xl mx-auto container py-32 flex flex-wrap">
        <div className="max-w-screen-xl mx-auto lg:px-0  border-b border-gray-200 pb-8  ">
          <div className="block-heading w-full px-4 space-y-3 mt-6 sm:px-0 md:mt-0  ">
            <div>
              <p className="text-indigo-600 font-semibold py-2">
                O Que Nossos Hóspedes Dizem
              </p>
            </div>

            <div className="grid grid-cols-1  lg:grid-cols-2 items-start">
              <p className=" text-gray-800 text-3xl font-semibold sm:text-4xl">
                Momentos Compartilhados
              </p>
              <p className="xs:mt-3 text-gray-600">
                Confira os momentos reais e experiências incríveis de quem já se
                hospedou na Casa Boutique Ella e Nina. Siga-nos no Instagram
                para acompanhar as novidades e se inspirar para a sua próxima
                viagem!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={500}
                height={500}
                alt="Todos os detalhes, todas as cores, molduras, formato do espelho, bordado das toalhas..."
                className="w-full h-full object-cover object-center block"
                src="/midias/instagram/h-4.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={500}
                height={500}
                alt="Cada detalhe importa. Loucas, talheres e guardanapos escolhidos com carinho."
                className="w-full h-full object-cover object-center block"
                src="/midias/instagram/7.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                width={500}
                height={500}
                alt="Começar a semana assim..."
                className="w-full object-cover h-full object-center block"
                src="/midias/instagram/2.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                width={500}
                height={500}
                alt="Todos os detalhes, todas as cores, molduras, formato do espelho, bordado das toalhas..."
                className="w-full h-full object-cover object-center block"
                src="/midias/instagram/b-1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={500}
                height={500}
                alt="Todos os detalhes, todas as cores, molduras, formato do espelho, bordado das toalhas..."
                className="w-full h-full object-cover object-center block"
                src="/midias/instagram/6.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={500}
                height={500}
                alt="Cada detalhe importa. Loucas, talheres e guardanapos escolhidos com carinho."
                className="w-full h-full object-cover object-center block"
                src="/midias/instagram/h-3.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
