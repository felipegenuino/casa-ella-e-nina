"use client";
import Image from "next/image";
import {
  WhatsappLogo,
  ArrowDown,
  Bed,
  Users,
  HouseSimple,
} from "@phosphor-icons/react";
import HighlightsSection from "../HighlightsSection";

export default function Hero() {
  const hasVideo = true; // Altere para false para usar imagem estática
  return (
    <section className="hero relative min-h-screen flex  flex-col items-center _justify-center bg-cover bg-center">
      {/* Fundo de vídeo ou imagem */}
      {hasVideo ? (
        <video
          src="/midias/hero/background.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <Image
          src="/midias/hero/img-1.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
      )}

      {/* Camada de sobreposição com gradiente ou cor */}

      <div className="absolute inset-0 bg-indigo-600/80"></div>

      <div className="absolute h-full inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

      {/* Conteúdo do Hero */}

      <HighlightsSection />

      <div className="z-10 max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify overflow-hidden md:flex md:px-8 flex-1  bg-white/10 rounded-md mt-10">
        <div className="flex-none space-y-5 px-4  sm:max-w-lg md:px-0 lg:max-w-xl ">
          <p className="text-white font-medium">Porto de Pedras - Alagoas</p>
          <h2 className="text-4xl text-white font-extrabold md:text-5xl">
            Viva uma experiência de luxo e conforto na Praia do Patacho
          </h2>
          <div class="flex flex-wrap items-center gap-3 lg:gap-6 text-white/80 ">
            <div class="flex items-center gap-2 text-xs  lg:text-lg lg:font-medium">
              <Users
                size={28}
                class="relative shrink-0 top-0 h-5 w-5"
                aria-hidden="true"
              />
              <div>2 Hóspedes</div>
            </div>

            <div class="flex items-center gap-2 text-xs lg:text-lg lg:font-medium">
              <HouseSimple
                size={28}
                class="relative shrink-0 top-0 h-5 w-5"
                aria-hidden="true"
              />
              <div>1 Quarto</div>
            </div>

            <div class="flex items-center gap-2 text-xs lg:text-lg lg:font-medium">
              <Bed
                size={28}
                class="relative shrink-0 top-0 h-5 w-5"
                aria-hidden="true"
              />
              <div>2 camas</div>
            </div>
          </div>
          <p className="text-white/90">
            Descubra um refúgio onde o charme e a sofisticação encontram a
            natureza exuberante. Nossas casas boutique oferecem uma estadia de
            cinco estrelas, repleta de detalhes pensados para seu conforto.
            Desfrute de momentos únicos com sua família e amigos, em um ambiente
            acolhedor e totalmente equipado. Reserve agora e comece a planejar
            sua experiência memorável.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center  py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg md:inline-flex hover:shadow-none"
            >
              <ArrowDown size={32} />
              Conheça os Ambientes
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-x-2 py-2 px-4 
              text-gray-700 hover:text-gray-500 font-medium duration-150 
              bg-gray-100 active:bg-gray-100 border rounded-lg md:inline-flex"
            >
              <WhatsappLogo size={32} />
              Tire dúvidas pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <img
            src="/midias/hero/img-1.jpg"
            className=" md:rounded-tl-[108px]"
            alt=""
          />
        </div>
      </div>

      {/* Logos de Reservas */}
      <div className=" z-10 py-10 my-4 w-full text-center text-gray-100 font-semibold">
        <p className="text-sm mb-4">Escolha Onde Quer Reservar</p>
        <div className="flex justify-center items-center gap-8">
          <img
            className="h-14"
            src="/midias/brands/airbnb-white.svg"
            alt="airbnb"
          />
          <img
            className="h-10 mt-2"
            src="/midias/brands/booking-white.svg"
            alt="booking"
          />
        </div>
      </div>
    </section>
  );
}