import React, { useState, useRef, useEffect } from "react";
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
    <section className="py-32 min-h-screen lg:px-8 flex flex-col justify-center bg-white overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto lg:px-0 border-b border-gray-200 pb-8">
        <div className="block-heading w-full mx-4 space-y-3 mt-6 sm:px-0 md:mt-0">
          <div>
            <p className="text-indigo-600 font-semibold py-2">
              Experiência Única
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start space-y-3">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              <span className="md:block">Viva momentos </span> de conforto e
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
                className="mt-6 flex gap-2 px-4 py-2 border duration-200 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg text-white 
              hover:from-pink-500 hover:to-purple-500 hover:shadow-xl 
              active:scale-95 active:shadow-sm"
              >
                Mostrar mais
                <ArrowSquareOut size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="lg:mx-auto w-full xxx-max-w-6xl relative mt-8 mx-4 pt-8 pb-12"
        role="region"
        aria-label="Carrossel de imagens das casas"
      >
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
              return `<span class="${className} bg-purple-500 w-3 h-3 rounded-full mx-1"></span>`;
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
                width={300} // Ajuste conforme necessário
                height={450} // Ajuste conforme necessário
                className="object-cover rounded-lg bg-gray-300"
              />
              <p className="mt-2 text-xs text-gray-700 ">{slide.caption}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="fixed inset-0 flex items-center justify-center  bg-black/[.06]  p-4"
        overlayClassName="fixed inset-0 bg-black/[.5] z-10"
        contentLabel="Sobre este espaço"
      >
        <div className="rounded-xl overflow-hidden bg-white max-w-3xl w-full relative flex flex-col max-h-[90vh]">
          <header className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Sobre este espaço</h2>
            <button
              onClick={closeModal}
              ref={closeModalButtonRef}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Fechar modal"
            >
              <Cross1Icon />
            </button>
          </header>

          <div className="overflow-y-auto p-6 space-y-12 py-12">
            <div className=" space-y-4">
              <p>
                Se você procura privacidade, conforto e uma experiência única em
                um dos destinos mais belos do litoral brasileiro, a Casa
                Boutique é o lugar perfeito. Ideal para casais, nossa casa
                acomoda até duas pessoas adultas e oferece um refúgio exclusivo
                em meio à natureza exuberante de Porto de Pedras.
              </p>
            </div>
            <div className=" space-y-4">
              <h3 className="text-lg font-semibold">O espaço</h3>
              <p>
                Nossas casas boutique oferecem ambientes projetados com conforto
                e elegância. Aproveite áreas de lazer privativas e quartos
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
                privacidade e abriga uma cozinha completa e moderna, perfeita
                para preparar suas refeições com tranquilidade, além de contar
                com um lavabo para sua conveniência.
              </p>
              <p>
                Entre as duas edificações, um verdadeiro oásis espera por você:
                uma piscina privativa para duas pessoas, rodeada por um jardim
                exuberante com espreguiçadeiras e uma mesa ideal para refeições
                ao ar livre. Aqui, o luxo e a praticidade se encontram para
                criar uma estadia inesquecível em um ambiente completamente
                exclusivo e acolhedor.
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
          </div>
        </div>
      </Modal>
    </section>
  );
}
