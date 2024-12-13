import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, A11y } from "swiper/modules"; // Importa o módulo Mousewheel
import VideoSlide from "./VideoSlide";
import ImageSlide from "./ImageSlide";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";

import { VideoIcon, ImageIcon } from "@radix-ui/react-icons";

const ModalContent = ({ gallery, closeModal }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index); // Move para o slide clicado
    }
  };

  useEffect(() => {
    if (swiperInstance) {
      const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
          swiperInstance.slideNext(); // Avança para o próximo slide
        } else if (event.key === "ArrowLeft") {
          swiperInstance.slidePrev(); // Volta para o slide anterior
        }
      };

      // Adiciona o evento de tecla pressionada
      window.addEventListener("keydown", handleKeyDown);

      // Remove o evento ao desmontar
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [swiperInstance]);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        const activeIndex = swiperInstance.activeIndex;
        const slides = swiperInstance.slides;

        slides.forEach((slide, index) => {
          if (index === activeIndex) {
            slide.classList.add("swiper-slide-active");
            if (slide.querySelector("video")) {
              const video = slide.querySelector("video");
              video.muted = false; // Ativa o som
              video.play(); // Reproduz o vídeo
            }
          } else {
            slide.classList.remove("swiper-slide-active");
            if (slide.querySelector("video")) {
              const video = slide.querySelector("video");
              video.pause();
              video.currentTime = 0;
              video.muted = true; // Silencia o vídeo
            }
          }
        });
      });
    }
  }, [swiperInstance]);

  return (
    <div className="relative w-full h-full _overflow-y-auto">
      {/* Header */}
      <div className="px-12 py-4 flex justify-between items-center bg-white border-b">
        <div>
          <h3 className="text-pretty text-2xl/7 font-regular tracking-tight text-black">
            {gallery.title || "Título da Galeria"}
          </h3>
          <p className="hidden lg:visible mt-1 max-w-2xl text-sm/6 text-gray-500">
            {gallery.description || "Descrição da galeria"}
          </p>
        </div>

        <button
          onClick={closeModal}
          className="flex gap-2 px-6 py-2  min-h-[46px]   content-center  items-center  justify-center  border  duration-200  rounded-full transition-all  text-white   bg-gradient-to-r  from-purple-500 to-pink-500   hover:from-indigo-500 hover:to-indigo-400   active:from-indigo-600 active:to-indigo-600  hover:shadow-md  active:scale-95  active:shadow-s"
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
      <div className="bg-slate-900 flex-1 h-full">
        <Swiper
          id="swiper-gallery"
          slidesPerView={1.4}
          centeredSlides
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          onSwiper={setSwiperInstance}
          a11y={{ enabled: true }}
          keyboard={{ enabled: true }}
          grabCursor={true}
          mousewheel={true} // Ativa o Mousewheel
          modules={[Mousewheel, Pagination, A11y]} // Inclui os módulos
          aria-label={gallery.title || "Swiper de imagens e vídeos"}
          className=" bg-white"
        >
          {gallery.media.map((media, index) => (
            <SwiperSlide
              key={index}
              tabIndex={0} // Permite foco direto no slide
              className="outline-none relative" // Adiciona o ícone
              onClick={() => handleSlideClick(index)} // Move para o slide clicado
            >
              {media.type === "video" ? (
                <>
                  <VideoSlide
                    media={media}
                    galleryId={gallery.id}
                    index={index}
                    description={media.description}
                  />
                  <div className="absolute top-8 right-6 bg-slate-700 bg-opacity-50_ p-1 rounded">
                    <VideoIcon className="w-5 h-5 text-white" />
                  </div>
                </>
              ) : (
                <>
                  <ImageSlide src={media.url} description={media.description} />
                  <div className="absolute top-8 right-6 bg-slate-700 bg-opacity-50_ p-1 rounded">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
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
