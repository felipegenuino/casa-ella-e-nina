"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper";
import Image from "next/image";
import { PlayIcon, PauseIcon, Cross1Icon } from "@radix-ui/react-icons";

import galleries from "./galleries"; // Importando o objeto atualizado

SwiperCore.use([Pagination, Navigation]);

const HighlightsSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const closeModalButtonRef = useRef(null);
  const videoRef = useRef(null);
  const swiperRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const openModal = (galleryIndex) => {
    setActiveGallery(galleries[galleryIndex]);
    setActiveMediaIndex(0);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveGallery(null);
  };

  const handleVideoPress = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    if (modalIsOpen && closeModalButtonRef.current) {
      closeModalButtonRef.current.focus();
    }
  }, [modalIsOpen]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [activeMediaIndex, isMuted]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalIsOpen) {
        if (e.key === "ArrowRight" && swiperRef.current) {
          swiperRef.current.swiper.slideNext();
        } else if (e.key === "ArrowLeft" && swiperRef.current) {
          swiperRef.current.swiper.slidePrev();
        } else if (e.key === " " && videoRef.current) {
          e.preventDefault();
          handleVideoPress();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalIsOpen]);

  return (
    <div className="highlight-container mx-auto py-5 border overflow-auto w-full">
      <div className="max-w-7xl px-0 lg:px-8 mx-auto relative rounded-xl overflow-auto">
        <div
          role="list"
          className="flex flex-nowrap justify-center gap-1 overflow-x-auto"
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

      {activeGallery && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100"
          overlayClassName="fixed inset-0 bg-opacity-90 z-10"
          contentLabel={`Galeria de ${activeGallery.title}`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white transition bg-gray-800 hover:bg-gray-900 rounded-full px-3 py-2 z-50 flex items-center gap-2"
              ref={closeModalButtonRef}
              aria-label="Fechar galeria"
            >
              Fechar <Cross1Icon />
            </button>

            <Swiper
              direction="horizontal"
              slidesPerView={1}
              onSlideChange={(swiper) => {
                setActiveMediaIndex(swiper.activeIndex);
                setIsMuted(false);
              }}
              className="w-full h-full flex items-center justify-center"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              ref={swiperRef}
            >
              {activeGallery.media.map((mediaItem, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-full w-full">
                    {activeMediaIndex === index &&
                      (mediaItem.type === "video" ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <video
                            ref={videoRef}
                            src={mediaItem.url}
                            muted={isMuted}
                            autoPlay
                            loop
                            className="max-h-[90vh] max-w-full object-contain"
                            aria-label={mediaItem.description}
                            onClick={handleVideoPress}
                            tabIndex="0"
                          ></video>
                        </div>
                      ) : (
                        <Image
                          className="max-h-[90vh] max-w-full object-contain"
                          width={1200}
                          height={700}
                          src={mediaItem.url}
                          alt={mediaItem.description}
                          placeholder="blur"
                          blurDataURL={mediaItem.blurUrl}
                        />
                      ))}
                  </div>
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
