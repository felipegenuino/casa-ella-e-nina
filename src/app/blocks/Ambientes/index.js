import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Modal from "react-modal";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";
import slides from "./slides"; // Importa slides de slides.js
import { ArrowSquareOut } from "@phosphor-icons/react";

import ModalWithMotion from "@/app/components/ModalWithMotion";

export default function Ambientes() {
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Pré-carregar imagens
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve) => {
          const img = new window.Image(); // Garante o uso da API nativa
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = resolve; // Continua mesmo se alguma imagem falhar
        });
      });

      await Promise.all(imagePromises);
      setIsSwiperReady(true); // Ativa o Swiper somente quando todas as imagens estiverem carregadas
    };

    preloadImages();
  }, []);

  return (
    <section className="py-32 min-h-screen lg:px-8 flex flex-col  bg-white overflow-x-hidden">
      <div className="max-w-screen-xl w-full  mx-auto lg:px-8 md:px-8 px-6">
        <p className="text-indigo-600 font-light py-2">Experiência Única</p>
        <div className="space-y-5">
          <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl">
            <span className="md:block">Viva momentos </span> de conforto e
            exclusividade
          </h2>

          <p className="text-gray-500  space-y-1  ">
            <span className="lg:flex">
              Nossas casas boutique oferecem ambientes projetados com conforto e
              elegância.
            </span>
            <span className="text-gray-800 mx-2 lg:flex lg:mx-0">
              Aproveite áreas de lazer privativas e quartos aconchegantes que
              combinam estilo artesanal e modernidade.
            </span>
            <span className="lg:flex">
              Tudo pensado para proporcionar momentos únicos e relaxantes
              enquanto você aprecia a beleza natural de Alagoas.
            </span>
          </p>
        </div>

        <button
          onClick={openModal}
          aria-label="Mostrar mais sobre este lugar"
          className="mt-6 flex gap-2 px-6 py-2 
          min-h-[46px]  
          content-center 
          items-center 
          justify-center 
          border 
          duration-200 
          rounded-full
          transition-all 
          text-white  
          bg-gradient-to-r 
           from-purple-500 to-pink-500  
           hover:from-indigo-500 hover:to-indigo-400  
           active:from-indigo-600 active:to-indigo-600 
           hover:shadow-xl 
           active:scale-95 
           active:shadow-sm 
              "
        >
          <span> Mostrar Mais</span>
          <ArrowSquareOut size={24} className=" hidden md:flex" />
        </button>
      </div>

      <div
        className="lg:mx-auto w-full xxx-max-w-6xl relative mt-8  pl-6 md:px-6 pt-8 pb-12"
        role="region"
        aria-label="Carrossel de imagens das casas"
      >
        {/* Exibe um loader enquanto as imagens carregam */}
        {!isSwiperReady && (
          <div className="flex justify-center items-center h-[300px]">
            <p>Carregando imagens...</p>
          </div>
        )}

        {isSwiperReady && (
          <Swiper
            spaceBetween={24}
            slidesPerView={1.5}
            grabCursor={true}
            loop
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span className="${className}"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
            modules={[Autoplay, Pagination]}
            className="rounded-lg overflow-hidden"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center relative mb-10"
                aria-hidden={index !== 0}
              >
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  width={300}
                  height={450}
                  className="object-cover rounded-lg bg-gray-300"
                />
                <p className="mt-2 text-xs text-gray-700 ">{slide.caption}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <ModalWithMotion
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Sobre este espaço"
      >
        {/* Conteúdo do modal */}
        <div className=" space-y-4">
          <p>
            Se você procura privacidade, conforto e uma experiência única em um
            dos destinos mais belos do litoral brasileiro, a Casa Boutique é o
            lugar perfeito. Ideal para casais, nossa casa acomoda até duas
            pessoas adultas e oferece um refúgio exclusivo em meio à natureza
            exuberante de Porto de Pedras.
          </p>
        </div>
        <div className=" space-y-4">
          <h3 className="text-lg font-semibold">O espaço</h3>
          <p>
            Nossas casas boutique oferecem ambientes projetados com conforto e
            elegância. Aproveite áreas de lazer privativas e quartos
            aconchegantes que combinam estilo artesanal e modernidade. Tudo
            pensado para proporcionar momentos únicos e relaxantes enquanto você
            aprecia a beleza natural de Alagoas.
          </p>
          <p>
            Com duas edificações charmosas e exclusivas, esta propriedade
            recém-inaugurada foi pensada para oferecer o máximo em privacidade,
            conforto e estilo. Na primeira edificação, você desfrutará de uma
            luxuosa suíte master, equipada com banheiro de chuveiro duplo,
            closet e uma acolhedora sala de estar.
          </p>
          <p>
            A segunda edificação, separada da suíte, garante ainda mais
            privacidade e abriga uma cozinha completa e moderna, perfeita para
            preparar suas refeições com tranquilidade, além de contar com um
            lavabo para sua conveniência.
          </p>
          <p>
            Entre as duas edificações, um verdadeiro oásis espera por você: uma
            piscina privativa para duas pessoas, rodeada por um jardim
            exuberante com espreguiçadeiras e uma mesa ideal para refeições ao
            ar livre. Aqui, o luxo e a praticidade se encontram para criar uma
            estadia inesquecível em um ambiente completamente exclusivo e
            acolhedor.
          </p>
        </div>

        <div className=" space-y-4">
          <h3 className="text-lg font-semibold">Acesso do hóspede</h3>
          <p>
            Na Casa Boutique, nossos hóspedes são recebidos pela nossa
            recepcionista Juliana, que estará à disposição para garantir uma
            estadia tranquila e confortável.
          </p>
        </div>
        <div className=" space-y-4">
          <h3 className="text-lg font-semibold">Outras observações</h3>
          <p>Consulte-nos sobre pets de pequeno porte.</p>
        </div>
        {/* end Conteúdo do modal */}
      </ModalWithMotion>
    </section>
  );
}
