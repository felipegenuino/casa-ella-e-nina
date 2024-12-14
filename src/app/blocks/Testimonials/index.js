import React from "react";

import Avaliacao from "./Avaliacao";
import TestimonialsList from "./TestimonialsList";

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
        <TestimonialsList />
        <Avaliacao />
      </div>
    </section>
  );
}
