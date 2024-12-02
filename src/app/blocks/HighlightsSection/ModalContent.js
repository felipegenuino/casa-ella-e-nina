import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoSlide from "./VideoSlide";
import ImageSlide from "./ImageSlide";
import { handleSlideChange } from "./helpers";

const ModalContent = ({ gallery, closeModal }) => {
  return (
    <div className="relative w-full h-full ">
      {/* Header */}
      <div class="px-12 py-8  flex justify-between items-center ">
        <div>
          <h3 class="text-xl/7  font-semibold text-gray-100">
            {gallery.title || "Título da Galeria"}
          </h3>
          <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">
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
      <div className=" h-full bg-slate-900 flex-1 py-12">
        <Swiper
          slidesPerView={1.4}
          centeredSlides
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => handleSlideChange(swiper, gallery)}
          id="swiper-gallery"
        >
          {gallery.media.map((media, index) => (
            <SwiperSlide key={index}>
              {media.type === "video" ? (
                <VideoSlide
                  id={`video-${gallery.id}-${index}`}
                  src={media.url}
                  description={media.description}
                />
              ) : (
                <ImageSlide src={media.url} description={media.description} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ModalContent;
