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

SwiperCore.use([Pagination, Navigation]);

// Atualizamos a estrutura do array para incluir vídeos e imagens.
const galleries = [
  {
    id: 1,
    thumb: "/midias/gallery/thumb-1.jpg",
    title: "Sobre as Casas",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-3.jpg",
        description: "Tour virtual pela casa 1",
      },
      {
        type: "video",
        url: "/midias/gallery/video-1.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-1.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-2.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-5.jpg",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-6.jpg",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-7.jpg",
        description: "Aria label",
      },
    ],
  },
  {
    id: 2,
    thumb: "/midias/gallery/thumb-2.jpg",
    title: "Experiência na Praia",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-2.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-3.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-2.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-4.mp4",
        description: "Aria label",
      },
    ],
  },
  {
    id: 1,
    thumb: "/midias/gallery/thumb-1.jpg",
    title: "Sobre as Casas",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-3.jpg",
        description: "Tour virtual pela casa 1",
      },
      {
        type: "video",
        url: "/midias/gallery/video-1.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-1.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-2.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-5.jpg",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-6.jpg",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-7.jpg",
        description: "Aria label",
      },
    ],
  },
  {
    id: 2,
    thumb: "/midias/gallery/thumb-2.jpg",
    title: "Experiência na Praia",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-2.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-3.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-2.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-4.mp4",
        description: "Aria label",
      },
    ],
  },
  {
    id: 1,
    thumb: "/midias/gallery/thumb-1.jpg",
    title: "Sobre as Casas",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-3.jpg",
        description: "Tour virtual pela casa 1",
      },
      {
        type: "video",
        url: "/midias/gallery/video-1.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-1.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-2.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-5.jpg",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-6.jpg",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-7.jpg",
        description: "Aria label",
      },
    ],
  },
  {
    id: 2,
    thumb: "/midias/gallery/thumb-2.jpg",
    title: "Experiência na Praia",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-2.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-3.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-2.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-4.mp4",
        description: "Aria label",
      },
    ],
  },
  {
    id: 1,
    thumb: "/midias/gallery/thumb-1.jpg",
    title: "Sobre as Casas",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-3.jpg",
        description: "Tour virtual pela casa 1",
      },
      {
        type: "video",
        url: "/midias/gallery/video-1.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-1.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-2.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-5.jpg",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-6.jpg",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-7.jpg",
        description: "Aria label",
      },
    ],
  },
  {
    id: 2,
    thumb: "/midias/gallery/thumb-2.jpg",
    title: "Experiência na Praia",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-2.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-3.mp4",
        description: "Aria label",
      },
      {
        type: "image",
        url: "/midias/gallery/image-2.jpg",
        description: "Aria label",
      },
      {
        type: "video",
        url: "/midias/gallery/video-4.mp4",
        description: "Aria label",
      },
    ],
  },
];

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
          // Prevenir o comportamento padrão de rolar a página quando a tecla de espaço é pressionada
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
    <div className="highlight-container mx-auto py-5 bg-white">
      <div className="max-w-7xl px-0 lg:px-8 mx-auto relative rounded-xl overflow-auto">
        <div role="list" className="flex flex-nowrap gap-1 overflow-x-auto">
          {galleries.map((gallery, index) => (
            <div role="listitem" key={gallery.id} className="text-center px-3">
              <button
                onClick={() => openModal(index)}
                aria-expanded={modalIsOpen}
                aria-label={`Ver galeria de ${gallery.title}`}
              >
                <div className="bg-white hover:bg-violet-600 rounded-full shadow-sm aspect-square">
                  <img
                    className="rounded-full min-w-24 min-h-24 p-1 border-2 border-black"
                    src={gallery.thumb}
                    alt={gallery.title}
                    aria-hidden="true"
                  />
                </div>
                <p aria-hidden="true" className="text-xs my-2 font-medium">
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
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90"
          overlayClassName="fixed inset-0 bg-black bg-opacity-90"
          contentLabel={`Galeria de ${activeGallery.title}`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 z-50"
              ref={closeModalButtonRef}
              aria-label="Fechar galeria"
            >
              Fechar
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
                          ></video>
                          <button
                            onClick={toggleMute}
                            className="absolute bottom-4 right-4 text-white bg-gray-800 rounded-full p-2 z-50"
                            aria-label={
                              isMuted ? "Ativar som" : "Desativar som"
                            }
                          >
                            {isMuted ? "🔇" : "🔊"}
                          </button>
                        </div>
                      ) : (
                        <Image
                          width="1200"
                          height="700"
                          src={mediaItem.url}
                          alt={mediaItem.description}
                          className="max-h-[90vh] max-w-full object-contain"
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
