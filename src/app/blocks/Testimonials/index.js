import React from "react";
import Link from "next/link";

import Avaliacao from "./Avaliacao";
import TestimonialsCarousel from "./TestimonialsCarousel";

const airbnbLinks = [
  {
    label: "Casa Ella no Airbnb",
    href: "https://www.airbnb.com.br/rooms/987771438493887391/reviews",
  },
  {
    label: "Casa Nina no Airbnb",
    href: "https://www.airbnb.com.br/rooms/1049859270366355530/reviews",
  },
];

export default function Testimonials() {
  return (
    <section id="historias" className="pt-24 lg:pt-32">
      <div className="_max-w-screen-xl mx-auto lg:px-8 md:px-8">
        <div className=" max-w-screen-xl  mx-auto  px-6 md:px-0 mb-8 w-full _bg-red-300">
          <p className="text-indigo-600 font-light py-2">
            O Que Nossos Hóspedes Dizem
          </p>
          <div className="space-y-5">
            <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl">
              Histórias de Experiências
              <span className="md:flex"> Memoráveis na Casa Ella e Nina</span>
            </h2>

            <div className="text-gray-500  ">
              <p className="xs:mt-3 text-gray-600">
                Cada experiência é única e cheia de momentos especiais.
              </p>
            </div>
          </div>
        </div>
        <Avaliacao />
        <div className="max-w-screen-xl mx-auto px-6 md:px-0">
          <TestimonialsCarousel />
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-x-8 gap-y-3 py-4 mb-6">
          {airbnbLinks.map((l) => (
            <Link
              key={l.href}
              title="Abre em outra janela"
              target="_blank"
              className="text-lg lg:text-base transition-colors duration-300 text-indigo-600 underline underline-offset-4 hover:no-underline active:scale-95"
              href={l.href}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
