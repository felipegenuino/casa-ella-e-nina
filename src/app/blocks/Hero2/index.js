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

      <div className="absolute inset-0 bg-indigo-600/70"></div>

      <div
        className="
        absolute 
        h-full
        inset-0
        bg-gradient-to-b 
        from-black/70  
        to-black/30
        "
      ></div>

      {/* Conteúdo do Hero */}

      <HighlightsSection />

      <div className="z-10 max-w-screen-lg mx-auto text-gray-600 gap-x-12 items-center justify overflow-hidden md:flex md:px-8 flex-1  __bg-white/10 rounded-md mt-10 py-10">
        <div className="max-w-screen-lg">
          <div className="flex-none space-y-5 px-4 md:px-0 text-center justify-center ">
            <div className="mx-auto space-y-5 py-24">
              <Image
                width={500}
                height={500}
                alt=""
                className="mx-auto"
                src="/midias/hero/brand-hero-light.svg"
              />
              <p className="text-white tracking-widest	text-xl font-bold	">
                Casas Boutique
              </p>
              <p className="text-white font-medium">
                Patacho . Alagoas . Brasil
              </p>
            </div>
            <h2 className="text-4xl text-white font-extrabold md:text-5xl">
              Viva uma experiência de luxo e conforto na Praia do Patacho
            </h2>
            <div className="flex flex-wrap items-center gap-3 lg:gap-6 justify-center text-white/80 ">
              <div
                className="flex items-center gap-2 text-xs  lg:text-lg 
              lg:font-medium"
              >
                <Users
                  size={28}
                  className="relative shrink-0 top-0 h-5 w-5"
                  aria-hidden="true"
                />
                <div>2 Hóspedes</div>
              </div>

              <div className="flex items-center gap-2 text-xs lg:text-lg lg:font-medium">
                <HouseSimple
                  size={28}
                  className="relative shrink-0 top-0 h-5 w-5"
                  aria-hidden="true"
                />
                <div>1 Quarto</div>
              </div>

              <div className="flex items-center gap-2 text-xs lg:text-lg lg:font-medium">
                <Bed
                  size={28}
                  className="relative shrink-0 top-0 h-5 w-5"
                  aria-hidden="true"
                />
                <div>2 camas</div>
              </div>
            </div>
            <p className="text-white/90 max-w-screen-sm mx-auto">
              Se você procura privacidade, conforto e uma experiência única em
              um dos destinos mais belos do litoral brasileiro, a Casa Boutique
              é o lugar perfeito. Ideal para casais, nossa casa acomoda até duas
              pessoas adultas e oferece um refúgio exclusivo em meio à natureza
              exuberante de Porto de Pedras.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center text-xl h-[64px] py-3 px-4 text-center text-white font-medium  duration-150 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg md:inline-flex   
              hover:from-pink-500 hover:to-purple-500 hover:shadow-xl 
              active:scale-95 active:shadow-sm 
              "
              >
                {/* <ArrowDown size={32} /> */}
                Conferir disponibilidade
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center text-xl h-[64px] py-3 px-4 text-center text-white font-medium duration-150 border border-2 border-white rounded-lg shadow-lg md:inline-flex  
              hover:bg-purple-50 hover:text-purple-700 hover:shadow-md
              active:bg-purple-100 active:scale-95 active:shadow-sm
              gap-2
              "
              >
                <WhatsappLogo size={32} weight="fill" />
                Fale com Anfitrião
              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <Image
            src="/midias/hero/img-1.jpg"
            className=" md:rounded-tl-[108px]"
            alt=""
            width={700}
            height={500}
          />
        </div> */}
      </div>

      {/* Logos de Reservas */}
      <div className=" z-10 py-10 my-4 w-full text-center text-gray-100 font-semibold">
        <p className="text-sm mb-4">Escolha Onde Quer Reservar</p>
        <div className="flex justify-center items-center px-4 gap-8">
          <Image
            // className="h-14"
            src="/midias/brands/airbnb-white.svg"
            alt="airbnb"
            width={175}
            height={56}
          />
          <Image
            // className="h-10 mt-2"
            width={222}
            height={40}
            src="/midias/brands/booking-white.svg"
            alt="booking"
          />
        </div>
      </div>
    </section>
  );
}
