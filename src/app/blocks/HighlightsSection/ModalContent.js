import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoSlide from "./VideoSlide";
import ImageSlide from "./ImageSlide";
import { handleSlideChange } from "./helpers";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";

import { VideoIcon, ImageIcon } from "@radix-ui/react-icons";

const ModalContent = ({ gallery, closeModal }) => {
  const swiperRef = useRef(null);

  const handleFocus = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Move para o slide correspondente
      handleSlideChange(swiperRef.current, gallery); // Ativa o slide
    }
  };

  return (
    <div className="relative w-full h-full _overflow-y-auto">
      {/* Header */}
      <div className="px-12 py-4 flex justify-between items-center">
        <div>
          <h3 className="text-pretty text-2xl/7 font-regular tracking-tight text-gray-100">
            {gallery.title || "Título da Galeria"}
          </h3>

          <p className="hidden lg:visible mt-1 max-w-2xl text-sm/6 text-gray-500">
            {gallery.description || "Descrição da galeria"}
          </p>
        </div>

        <button
          onClick={closeModal}
          className="right-4 bg-gray-800 text-white flex items-center justify-between rounded-full px-4 py-2 z-50 gap-1 hover:bg-gray-900"
          aria-label="Fechar galeria"
        >
          <span className="text-sm">Fechar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      {/* Swiper Section */}
      <div className="bg-slate-900 flex-1 _lg:py-12  h-lvh _overflow-y-auto mb-8">
        <Swiper
          slidesPerView={1.4}
          centeredSlides
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => handleSlideChange(swiper, gallery)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Guarda a instância do Swiper
          }}
          id="swiper-gallery"
          a11y={{ enabled: true }}
          keyboard={{ enabled: true }}
          aria-label={gallery.title || "Swiper de imagens e vídeos"}
        >
          {gallery.media.map((media, index) => (
            <SwiperSlide
              key={index}
              tabIndex={0} // Permite focar no slide com Tab
              className="outline-none"
              onFocus={() => handleFocus(index)} // Chama a função ao focar
            >
              {media.type === "video" ? (
                <div className="relative">
                  <VideoSlide
                    key={index}
                    media={media}
                    galleryId={gallery.id}
                    index={index}
                    description={media.description}
                  />
                  {/* Ícone de vídeo */}
                  <VideoIcon
                    width="32"
                    height="32"
                    className="absolute _inset-0 top-8 right-8 m-auto text-white text-4xl opacity-80 pointer-events-none"
                  />
                </div>
              ) : (
                <>
                  <ImageSlide src={media.url} description={media.description} />
                  {/* Ícone de imagem */}
                  <ImageIcon
                    width="32"
                    height="32"
                    className="absolute _inset-0 top-8 right-8 m-auto text-white text-4xl opacity-80 pointer-events-none"
                  />
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ModalContent;
