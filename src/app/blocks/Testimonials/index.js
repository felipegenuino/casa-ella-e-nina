import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Marcio",
    time: "7 anos no Airbnb",
    date: "2 semanas atrás",
    stayDuration: "Ficou algumas noites",
    rating: 5,
    comment:
      "O espaço é excelente. A casa tem uma beleza única e muito aconchegante. Equipado com tudo que é necessário, inclusive a cozinha. A Mariângela foi muito solícita e bastante...",
    image: "/midias/testimonials/marcio.webp",
  },
  {
    id: 2,
    name: "Ana",
    time: "3 anos no Airbnb",
    date: "1 mês atrás",
    stayDuration: "Ficou algumas noites",
    rating: 5,
    comment:
      "Saímos apaixonados pelo local! A casa é linda, muito confortável e o café da manhã da Juliana é um show a parte. Sem dúvidas voltaremos!",
    image: "/midias/testimonials/julia.webp",
  },
  {
    id: 3,
    name: "João Felipe",
    time: "5 anos no Airbnb",
    date: "3 semanas atrás",
    stayDuration: "Ficou algumas noites",
    rating: 5,
    comment:
      "O espaço é muito bem pensado e muito bem executado. Bom espaço para descansar e curtir com privacidade. Juliana e Val (funcionários do estabelecimento) garantem um suporte rápido, deixando a estadia melhor ainda.",
    image: "/midias/testimonials/joao-felipe.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gray-100 ">
      <div className="max-w-screen-xl mx-auto  px-8  md:px-8 ">
        <div className="max-w-screen-xl mx-auto  px-8  lg:px-0  border-b border-gray-200 pb-8  ">
          <div className="block-heading w-full px-4 space-y-3 mt-6 sm:px-0 md:mt-0  ">
            <div>
              <p className="text-indigo-600 font-semibold py-2">
                O Que Nossos Hóspedes Dizem
              </p>
            </div>

            <div className="grid grid-cols-2 items-start">
              <p className=" text-gray-800 text-3xl font-semibold sm:text-4xl">
                Histórias de experiências memoráveis na Casa Ella e Nina
              </p>
              {/* <p className="xs:mt-3 text-gray-600">
                Nossas casas boutique oferecem ambientes projetados com conforto
                e elegância. Aproveite áreas de lazer privativas e quartos
                aconchegantes que combinam estilo artesanal e modernidade. Tudo
                pensado para proporcionar momentos únicos e relaxantes enquanto
                você aprecia a beleza natural de Alagoas
              </p> */}
            </div>
          </div>
        </div>

        <div className="block-heading w-full px-4 space-y-3 mt-6 sm:px-0 md:mt-0 grid grid-cols-2 ">
          <div> </div>
        </div>

        <div className=" grid max-w-2xl grid-cols-1  gap-x-12 lg:gap-x-18 gap-y-16  mt-4 mb-8 pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex max-w-xl flex-col items-start justify-between even:bg-white odd:bg-slate-50 p-5 rounded-xl"
            >
              <div className="p-0 flex  gap-y-0 text-xs flex-col  h-full">
                <div className="relative flex flex-col gap-x-4">
                  <Image
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-lg bg-gray-50"
                  />

                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-600">{testimonial.time}</p>
                  </div>
                </div>

                {/* <p className="text-xs text-gray-500 mt-2">
                  · {testimonial.date}·{" "}
                  <span className="text-xs">{testimonial.stayDuration}</span>
                </p> */}
                <p className="mt-4 mb-2 text-gray-700 text-lg">
                  {testimonial.comment}
                </p>
                <p className="mt-auto">
                  <span className="text-black text-xl ">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
