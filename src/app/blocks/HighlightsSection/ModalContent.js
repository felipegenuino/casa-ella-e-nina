"use client";

import React from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import VideoSlide from "./VideoSlide";
import ImageSlide from "./ImageSlide";

const ModalContent = ({ isOpen, gallery, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100"
      overlayClassName="fixed inset-0 bg-opacity-90 z-10"
      contentLabel={`Galeria de ${gallery.title}`}
    >
      <div className="relative w-full h-full flex items-center justify-center content-center">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white transition bg-gray-800 hover:bg-gray-900 rounded-full px-3 py-2 z-50 flex items-center gap-2"
          aria-label="Fechar galeria"
        >
          Fechar
        </button>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.4}
          breakpoints={{
            640: { slidesPerView: 1.4, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
            1280: { slidesPerView: 4, spaceBetween: 50 },
          }}
          className="w-full h-full"
        >
          {gallery.media.map((mediaItem, index) => (
            <SwiperSlide key={index}>
              {mediaItem.type === "video" ? (
                <VideoSlide src={mediaItem.url} isActive={index === 0} />
              ) : (
                <ImageSlide
                  src={mediaItem.url}
                  alt={mediaItem.description}
                  blurUrl={mediaItem.blurUrl}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
};

export default ModalContent;
