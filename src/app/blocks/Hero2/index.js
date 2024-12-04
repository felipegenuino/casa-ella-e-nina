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
        from-black/80  
        to-black/50
        "
      ></div>

      {/* Conteúdo do Hero */}

      <HighlightsSection />

      <div className="z-10 max-w-screen-lg mx-auto text-gray-600 gap-x-12 items-center justify overflow-hidden md:flex md:px-8 flex-1  __bg-white/10 rounded-md mt-10 py-10">
        <div className="max-w-screen-lg">
          <div className="flex-none space-y-5 px-4 md:px-6  justify-center ">
            <div className="mx-auto py-40 md:py-52 px-4 md:px-6 text-center">
              <Image
                width={500}
                height={500}
                alt=""
                className="mx-auto"
                src="/midias/hero/brand-hero-light.svg"
              />
              <p className="text-white tracking-widest	mt-4 text-xl font-bold	">
                Casas Boutique
              </p>
              <p className="text-white/50 font-regular">
                Patacho . Alagoas . Brasil
              </p>
            </div>

            <div className="space-y-8 px-6  md:pb-16 lg:pb-32 xs:px-12">
              <h2
                className="
            text-4xl 
            text-white 
            md:text-center 
            font-regular 
            sm:text-5xl
            md:text-6xl
            lg:text-6xl
            "
              >
                <span className="md:block mr-2 text-indigo-300">
                  Viva uma experiência
                </span>
                de luxo e conforto
                <span className="md:block  ml-2 text-indigo-300">
                  na Praia do Patacho
                </span>
              </h2>

              <div className="flex flex-wrap md:items-center gap-3 lg:gap-6 md:justify-center text-white/80 ">
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

              <p className="text-white/90 max-w-screen-sm md:mx-auto md:text-center">
                Se você procura privacidade, conforto e uma experiência única em
                um dos destinos mais belos do litoral brasileiro, a Casa
                Boutique é o lugar perfeito. Ideal para casais, nossa casa
                acomoda até duas pessoas adultas e oferece um refúgio exclusivo
                em meio à natureza exuberante de Porto de Pedras.
              </p>
              <div className="md:items-center md:justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="
                flex items-center justify-center 
                text-lg py-3 px-4 
                text-center text-white 
                font-light  
                duration-150 
                bg-gradient-to-r 
                from-purple-700 to-pink-700
                hover:from-indigo-600 hover:to-indigo-700  
                 active:from-indigo-700 active:to-indigo-700  
                 rounded-lg shadow-lg md:inline-flex   
             hover:shadow-xl 
              active:scale-95 active:shadow-sm transition-all 
              "
                >
                  {/* <ArrowDown size={32} /> */}
                  Conferir disponibilidade
                </a>

                {/* <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center justify-center 
                text-lg py-3 px-4 
                text-center text-white 
                font-light  
                duration-150 
                bg-gradient-to-r 
                
                hover:from-gray-700 hover:to-gray-700  
                from-green-700 to-green-600  
                active:from-green-700 active:to-green-700 
                rounded-lg shadow-lg md:inline-flex  
                hover:shadow-xl active:scale-95 active:shadow-sm transition-all 
              "
                >
                
                  Fale com Anfitrião
                </a> */}
              </div>
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
      <div className=" z-10 py-10 my-4 w-full text-center ">
        <p className="text-sm mb-4 text-indigo-200 font-regular">
          Escolha Onde Quer Reservar
        </p>
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
