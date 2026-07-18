import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Modal from "react-modal";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import slides from "./slides"; // Importa slides de slides.js
import { ArrowSquareOut } from "@phosphor-icons/react";

import ModalWithMotion from "@/app/components/ModalWithMotion";

export default function Ambientes() {
  const t = useTranslations("ambientes");
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
    <section
      id="ambientes"
      className="py-32 min-h-screen lg:px-8 flex flex-col  bg-white overflow-x-hidden"
    >
      <div className="max-w-screen-xl w-full  mx-auto lg:px-8 md:px-8 px-6">
        <p className="text-indigo-600 font-light py-2">{t("eyebrow")}</p>
        <div className="space-y-5">
          <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl">
            <span className="md:block">{t("tituloEnfase")} </span>
            {t("tituloResto")}
          </h2>

          <p className="text-gray-500  space-y-1  ">
            <span className="lg:flex">{t("introP1")}</span>
            <span className="text-gray-800 mx-2 lg:flex lg:mx-0">
              {t("introP2")}
            </span>
            <span className="lg:flex">{t("introP3")}</span>
          </p>
        </div>

        <button
          onClick={openModal}
          aria-label={t("ctaAriaLabel")}
          className="button-primary  mt-6
              "
        >
          <span> {t("cta")}</span>
          <ArrowSquareOut size={24} className=" hidden md:flex mt-[-4px]" />
        </button>
      </div>

      <div
        className="lg:mx-auto w-full xxx-max-w-6xl relative mt-8  pl-6 md:px-6 pt-8 pb-12"
        role="region"
        aria-label={t("carouselAriaLabel")}
      >
        {/* Exibe um loader enquanto as imagens carregam */}
        {!isSwiperReady && (
          <div className="flex justify-center items-center h-[300px]">
            <p>{t("loading")}</p>
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
              dynamicBullets: true,
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
                  alt={t(`items.${index}.caption`)}
                  width={300}
                  height={450}
                  className="object-cover rounded-lg bg-gray-300"
                />
                <p className="mt-2 text-xs text-gray-700 ">
                  {t(`items.${index}.caption`)}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <ModalWithMotion
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title={t("modalTitle")}
      >
        {/* Conteúdo do modal */}
        <div className=" space-y-4">
          <p>{t("modalIntro")}</p>
        </div>
        <div className=" space-y-4">
          <h3 className="text-lg font-semibold">{t("modalSpaceHeading")}</h3>
          <p>{t("modalSpaceP1")}</p>
          <p>{t("modalSpaceP2")}</p>
          <p>{t("modalSpaceP3")}</p>
          <p>{t("modalSpaceP4")}</p>
        </div>

        <div className=" space-y-4">
          <h3 className="text-lg font-semibold">{t("modalAccessHeading")}</h3>
          <p>{t("modalAccessP1")}</p>
        </div>
        <div className=" space-y-4">
          <h3 className="text-lg font-semibold">{t("modalNotesHeading")}</h3>
          <p>{t("modalNotesP1")}</p>
        </div>
        {/* end Conteúdo do modal */}
      </ModalWithMotion>
    </section>
  );
}
