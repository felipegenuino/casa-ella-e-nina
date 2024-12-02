import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoSlide from "./VideoSlide";
import ImageSlide from "./ImageSlide";
import { handleSlideChange } from "./helpers";

const ModalContent = ({ gallery, closeModal }) => {
  return (
    <div className="relative w-full h-full content-center py-20 ">
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 bg-gray-800 text-white  rounded-full p-2 z-50"
        aria-label="Fechar galeria"
      >
        Fechar
      </button>
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
              <VideoSlide id={`video-${gallery.id}-${index}`} src={media.url} />
            ) : (
              <ImageSlide src={media.url} description={media.description} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ModalContent;
