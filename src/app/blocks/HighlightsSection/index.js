"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import galleries from "./galleries"; // Importando o objeto atualizado

const HighlightsSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const swiperRef = useRef(null);

  const openModal = (galleryIndex) => {
    setActiveGallery(galleries[galleryIndex]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveGallery(null);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="highlight-container mx-auto py-5 w-full">
      <div className="max-w-7xl px-0 lg:px-8 mx-auto relative rounded-xl overflow-auto">
        <div
          role="list"
          className="flex flex-nowrap lg:justify-center gap-1 overflow-x-auto"
        >
          {galleries.map((gallery, index) => (
            <div role="listitem" key={gallery.id} className="text-center px-3">
              <button
                onClick={() => openModal(index)}
                aria-expanded={modalIsOpen}
                aria-label={`Pressione para ver galeria de ${gallery.title}`}
              >
                <div className="ease-in-out rounded-full shadow-sm aspect-square duration-300 transition-all hover:bg-white bg-white/10">
                  <Image
                    className="rounded-full min-w-20 min-h-20 border-4 border-transparent"
                    width={124}
                    height={124}
                    src={gallery.thumb}
                    alt={gallery.title}
                    placeholder="blur"
                    blurDataURL={gallery.thumbBlurUrl}
                  />
                </div>
                <p
                  aria-hidden="true"
                  className="text-xs my-2 font-bold text-white"
                >
                  {gallery.title}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalIsOpen && activeGallery && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100"
          overlayClassName="fixed inset-0 bg-opacity-90 z-10"
          contentLabel={`Galeria de ${activeGallery.title}`}
        >
          <div
            className="relative w-full h-full flex items-center
          justify-center  content-center"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white transition bg-gray-800 hover:bg-gray-900 rounded-full px-3 py-2 z-50 flex items-center gap-2"
              aria-label="Fechar galeria"
            >
              Fechar
            </button>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20} // Espaçamento entre os slides
              slidesPerView={3} // Exibe 1.5 slides ao mesmo tempo
              centeredSlides={true} // Centraliza o slide ativo
              loop={true} // Permite o loop infinito
              className="max-w-full max-h-full flex items-center justify-center  content-center"
              onSlideChange={() => setIsMuted(false)}
              ref={swiperRef}
            >
              {activeGallery.media.map((mediaItem, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center  content-center"
                >
                  {mediaItem.type === "video" ? (
                    <video
                      src={mediaItem.url}
                      muted={isMuted}
                      autoPlay
                      loop
                      width={480}
                      height={852}
                      className="max-h-[70vh]  max-w-full object-contain rounded-lg"
                      onClick={toggleMute}
                      aria-label={mediaItem.description}
                    ></video>
                  ) : (
                    <Image
                      className="max-h-[70vh] max-w-full object-cover rounded-lg"
                      width={480}
                      height={852}
                      src={mediaItem.url}
                      alt={mediaItem.description}
                      placeholder="blur"
                      blurDataURL={mediaItem.blurUrl}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HighlightsSection;
