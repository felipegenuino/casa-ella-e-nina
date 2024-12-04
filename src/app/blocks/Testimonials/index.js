import React from "react";
import Image from "next/image";
import Avaliacao from "../Avaliacao";

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
  {
    id: 4,
    name: "Sandro Groisman",
    time: "Comentário via Google Place",
    date: "3 semanas atrás",
    stayDuration: "Ficou algumas noites",
    rating: 5,
    comment:
      "Minha estadia na Casa Boutique Nina foi excelente. A casa é linda, bem decorada, com uma iluminação aconchegante e perfeita para relaxar. O lugar é super tranquilo, cercado de verde, com muitas janelas que deixam entrar uma brisa maravilhosa. A piscina privativa estava sempre limpa, e a privacidade do local tornou tudo ainda melhor. Dormimos super bem, o ambiente é muito confortável. E o café da manhã preparado pela Juliana foi delicioso! Ela é muito atenciosa, sempre cuidando de cada detalhe. Sem dúvida, um lugar perfeito para descansar e desconectar. Com certeza, vou querer voltar!",
    image: "/midias/testimonials/sandro-groisman.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-gray-100 ">
      <div className="max-w-screen-xl mx-auto lg:px-8 md:px-8">
        <div className=" px-6 md:px-0 mb-8 w-full _bg-red-300">
          <p className="text-indigo-600 font-light py-2">
            O Que Nossos Hóspedes Dizem
          </p>
          <div className="space-y-5">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Histórias de experiências
              <span className="md:flex"> memoráveis na Casa Ella e Nina</span>
            </h2>

            <div className="text-gray-500  ">
              <p class="xs:mt-3 text-gray-600">
                Veja algumas das comodidades disponíveis neste local.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  lg:gap-x-6  lg:gap-y-16 mt-4 mb-8 pt-2  lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex w-full flex-col items-start justify-between even:bg-white odd:bg-slate-50 p-5 py-12  lg:rounded-xl"
            >
              <div className="p-0 flex gap-y-0 text-xs flex-col md:flex-row lg:flex-col h-full md:items-start">
                <div className="relative flex md:flex-col lg:flex-col  gap-x-4 md:px-4 lg:px-0 ">
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

                <p className="mt-4 md:mt-0 lg:mt-4 mb-2 text-gray-700 text-lg md:flex-1">
                  {testimonial.comment}
                </p>
                <p className="mt-auto md:mt-0 lg:mt-auto md:px-4 lg:px-0 ">
                  <span className="text-black text-xl ">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <Avaliacao />
      </div>
    </section>
  );
}
