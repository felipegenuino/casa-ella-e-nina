"use client";

import Image from "next/image";

// src/app/page.js
import Hero from "./blocks/Hero";
import RefugioLuxo from "./blocks/RefugioLuxo";
import Impact from "./blocks/Impact";
import Footer from "./blocks/Footer";
import Testimonials from "./blocks/Testimonials";
import Ambientes from "./blocks/Ambientes";

export default function HomePage() {
  return (
    <main className="w-100">
      <Hero />

      {/* <RefugioLuxo /> */}

      <Ambientes />
      <Testimonials />

      <section className="text-gray-600 body-font">
        <div className="max-w-screen-xl mx-auto container px-5 py-32 flex flex-wrap">
          <div className="max-w-screen-xl mx-auto  px-8  lg:px-0  border-b border-gray-200 pb-8  ">
            <div className="block-heading w-full px-4 space-y-3 mt-6 sm:px-0 md:mt-0  ">
              <div>
                <p className="text-indigo-600 font-semibold py-2">
                  O Que Nossos Hóspedes Dizem
                </p>
              </div>

              <div className="grid grid-cols-2 items-start">
                <p className=" text-gray-800 text-3xl font-semibold sm:text-4xl">
                  Momentos Compartilhados
                </p>
                <p className="xs:mt-3 text-gray-600">
                  Confira os momentos reais e experiências incríveis de quem já
                  se hospedou na Casa Boutique Ella e Nina. Siga-nos no
                  Instagram para acompanhar as novidades e se inspirar para a
                  sua próxima viagem!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="Todos os detalhes, todas as cores, molduras, formato do espelho, bordado das toalhas..."
                  className="w-full h-full object-cover object-center block"
                  src="/midias/instagram/h-4.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="Cada detalhe importa. Loucas, talheres e guardanapos escolhidos com carinho."
                  className="w-full h-full object-cover object-center block"
                  src="/midias/instagram/7.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="Começar a semana assim..."
                  className="w-full object-cover h-full object-center block"
                  src="/midias/instagram/2.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="Todos os detalhes, todas as cores, molduras, formato do espelho, bordado das toalhas..."
                  className="w-full h-full object-cover object-center block"
                  src="/midias/instagram/b-1.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="Todos os detalhes, todas as cores, molduras, formato do espelho, bordado das toalhas..."
                  className="w-full h-full object-cover object-center block"
                  src="/midias/instagram/6.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="Cada detalhe importa. Loucas, talheres e guardanapos escolhidos com carinho."
                  className="w-full h-full object-cover object-center block"
                  src="/midias/instagram/h-3.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-regular sm:text-4xl">
              Reserve sua estadia perfeita
            </h3>
            <p className="mt-3 text-gray-600">
              Escolha a melhor plataforma para garantir uma experiência
              inesquecível na Praia do Patacho. Faça sua reserva de forma rápida
              e segura com nossos parceiros de confiança.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-4 md:justify-center">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-block py-2 px-4 text-white font-medium bg-[#E61E4D] duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
              aria-label="Reservar no Airbnb"
            >
              <img
                className="h-8"
                aria-hidden="true"
                src="/midias/brands/airbnb-white.svg"
                alt="airbnb"
                w
              />
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-block py-3 px-4 text-white font-medium bg-[#003B95] duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
              aria-label="Reservar no Booking.com"
            >
              <img
                className="h-6"
                aria-hidden="true"
                src="/midias/brands/booking-white.svg"
                alt="booking.com"
              />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
