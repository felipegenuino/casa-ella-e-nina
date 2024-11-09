import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Ambientes() {
  const slides = [
    {
      image: "/midias/ambientes/1-0.jpg",
      caption: "Fachada da casa com a praia ao fundo",
    },
    {
      image: "/midias/ambientes/1-1.jpg",
      caption: "Vista da piscina privativa ao entardecer",
    },
    {
      image: "/midias/ambientes/1-2.jpg",
      caption: "Área de estar com detalhes artesanais",
    },
    {
      image: "/midias/ambientes/2.jpg",
      caption: "Quarto decorado com toque acolhedor",
    },
    {
      image: "/midias/ambientes/3.jpg",
      caption: "Café da manhã com itens regionais",
    },
    {
      image: "/midias/ambientes/4.jpg",
      caption: "Fachada da casa com a praia ao fundo",
    },
    {
      image: "/midias/ambientes/5.jpg",
      caption: "Fachada da casa com a praia ao fundo",
    },
    {
      image: "/midias/ambientes/6.jpg",
      caption: "Vista da piscina privativa ao entardecer",
    },
    // { image: '/midias/ambientes/7.jpg', caption: 'Área de estar com detalhes artesanais' },
    {
      image: "/midias/ambientes/8.jpg",
      caption: "Quarto decorado com toque acolhedor",
    },
    {
      image: "/midias/ambientes/9.jpg",
      caption: "Café da manhã com itens regionais",
    },
    {
      image: "/midias/ambientes/10.jpg",
      caption: "Fachada da casa com a praia ao fundo",
    },
    {
      image: "/midias/ambientes/11.jpg",
      caption: "Vista da piscina privativa ao entardecer",
    },
    {
      image: "/midias/ambientes/12.jpg",
      caption: "Área de estar com detalhes artesanais",
    },
    {
      image: "/midias/ambientes/13.jpg",
      caption: "Quarto decorado com toque acolhedor",
    },
    {
      image: "/midias/ambientes/14.jpg",
      caption: "Café da manhã com itens regionais",
    },

    {
      image: "/midias/ambientes/j-1.jpg",
      caption: "Vista da piscina privativa ao entardecer",
    },
    {
      image: "/midias/ambientes/j-2.jpg",
      caption: "Área de estar com detalhes artesanais",
    },

    {
      image: "/midias/ambientes/q-1.jpg",
      caption: "Quarto decorado com toque acolhedor",
    },
    {
      image: "/midias/ambientes/q-2.jpg",
      caption: "Café da manhã com itens regionais",
    },
    {
      image: "/midias/ambientes/q-4.jpg",
      caption: "Fachada da casa com a praia ao fundo",
    },
    {
      image: "/midias/ambientes/q-5.jpg",
      caption: "Café da manhã com itens regionais",
    },

    {
      image: "/midias/ambientes/s-1.jpg",
      caption: "Fachada da casa com a praia ao fundo",
    },
  ];

  return (
    <section className="py-32 min-h-screen px-8 flex flex-col justify-center bg-white-0	">
      <div className="max-w-screen-xl mx-auto  px-8  lg:px-0  border-b border-gray-200 pb-8  ">
        <div className="block-heading w-full px-4 space-y-3 mt-6 sm:px-0 md:mt-0  ">
          <div>
            <p className="text-indigo-600 font-semibold py-2">
              Experiência Única
            </p>
          </div>

          <div className="grid grid-cols-2 items-start">
            <p className=" text-gray-800 text-3xl font-semibold sm:text-4xl">
              <span className="lg:block">Viva momentos de conforto </span>e
              exclusividade
            </p>
            <p className="xs:mt-3 text-gray-600">
              Nossas casas boutique oferecem ambientes projetados com conforto e
              elegância. Aproveite áreas de lazer privativas e quartos
              aconchegantes que combinam estilo artesanal e modernidade. Tudo
              pensado para proporcionar momentos únicos e relaxantes enquanto
              você aprecia a beleza natural de Alagoas
            </p>
          </div>
        </div>
      </div>

      <div
        className="mx-auto w-full xxx-max-w-6xl relative   mt-8 mb-8 pt-8 lg:mx-0"
        role="region"
        aria-label="Carrossel de imagens das casas"
      >
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
            1536: { slidesPerView: 7 },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 6000, // Define o tempo de espera entre as transições (em milissegundos)
            disableOnInteraction: true, // Continua o autoplay mesmo após interação do usuário
          }}
          modules={[Autoplay]} // Adiciona o módulo de autoplay
          className="rounded-lg overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center relative"
              aria-hidden={index !== 0}
            >
              <Image
                src={slide.image}
                alt={slide.caption}
                width={100}
                height={100}
                className="w-full w-f h-auto rounded-lg object-cover"
              />
              <p className="mt-2 text-xs text-gray-700">{slide.caption}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="swiper-button-prev"
          aria-label="Slide anterior"
        ></button>
        <button
          className="swiper-button-next"
          aria-label="Próximo slide"
        ></button>
      </div>
    </section>
  );
}
