import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Modal from "react-modal";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";
import slides from "./slides"; // Importa slides de slides.js

export default function Ambientes() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModalButtonRef = useRef(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (modalIsOpen && closeModalButtonRef.current) {
      closeModalButtonRef.current.focus();
    }
  }, [modalIsOpen]);

  return (
    <section className="py-32 min-h-screen px-8 flex flex-col justify-center bg-white">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-0 border-b border-gray-200 pb-8">
        <div className="block-heading w-full px-4 space-y-3 mt-6 sm:px-0 md:mt-0">
          <div>
            <p className="text-indigo-600 font-semibold py-2">
              Experiência Única
            </p>
          </div>
          <div className="grid grid-cols-2 items-start">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              <span className="lg:block">Viva momentos de conforto</span> e
              exclusividade
            </p>
            <div className="space-y-3">
              <p className="xs:mt-3 text-gray-600">
                Nossas casas boutique oferecem ambientes projetados com conforto
                e elegância. Aproveite áreas de lazer privativas e quartos
                aconchegantes que combinam estilo artesanal e modernidade. Tudo
                pensado para proporcionar momentos únicos e relaxantes enquanto
                você aprecia a beleza natural de Alagoas.
              </p>
              <button
                onClick={openModal}
                aria-label="Mostrar mais sobre este lugar"
                className="text-indigo-600 font-medium hover:underline"
              >
                Mostrar mais
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto w-full xxx-max-w-6xl relative mt-8 mb-8 pt-8 lg:mx-0"
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
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
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
                className="w-full h-auto rounded-lg object-cover"
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="fixed inset-0 flex items-center justify-center  bg-black/[.06] bg-opacity-80 p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-10"
        contentLabel="Sobre este espaço"
      >
        <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[80vh]">
          <button
            onClick={closeModal}
            ref={closeModalButtonRef}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            aria-label="Fechar modal"
          >
            <Cross1Icon />
          </button>
          <h2 className="text-2xl font-bold mb-4">Sobre este espaço</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Se você procura privacidade, conforto e uma experiência única em
              um dos destinos mais belos do litoral brasileiro, a Casa Boutique
              é o lugar perfeito. Ideal para casais, nossa casa acomoda até duas
              pessoas adultas e oferece um refúgio exclusivo em meio à natureza
              exuberante de Porto de Pedras.
            </p>
            <h3 className="text-lg font-semibold">O espaço</h3>
            <p>
              Nossas casas boutique oferecem ambientes projetados com conforto e
              elegância. Aproveite áreas de lazer privativas e quartos
              aconchegantes que combinam estilo artesanal e modernidade. Tudo
              pensado para proporcionar momentos únicos e relaxantes enquanto
              você aprecia a beleza natural de Alagoas.
            </p>
            <p>
              Com duas edificações charmosas e exclusivas, esta propriedade
              recém-inaugurada foi pensada para oferecer o máximo em
              privacidade, conforto e estilo. Na primeira edificação, você
              desfrutará de uma luxuosa suíte master, equipada com banheiro de
              chuveiro duplo, closet e uma acolhedora sala de estar.
            </p>
            <p>
              A segunda edificação, separada da suíte, garante ainda mais
              privacidade e abriga uma cozinha completa e moderna, perfeita para
              preparar suas refeições com tranquilidade, além de contar com um
              lavabo para sua conveniência.
            </p>
            <p>
              Entre as duas edificações, um verdadeiro oásis espera por você:
              uma piscina privativa para duas pessoas, rodeada por um jardim
              exuberante com espreguiçadeiras e uma mesa ideal para refeições ao
              ar livre. Aqui, o luxo e a praticidade se encontram para criar uma
              estadia inesquecível em um ambiente completamente exclusivo e
              acolhedor.
            </p>
            <h3 className="text-lg font-semibold">Acesso do hóspede</h3>
            <p>
              Na Casa Boutique, nossos hóspedes são recebidos pela nossa
              recepcionista Juliana, que estará à disposição para garantir uma
              estadia tranquila e confortável.
            </p>
            <h3 className="text-lg font-semibold">Outras observações</h3>
            <p>Consulte-nos sobre pets de pequeno porte.</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}
