"use client";

import { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

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
  const videoRef = useRef(null);

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

  useEffect(() => {
    if (videoRef.current) {
      const handlePlayPause = () => {
        setIsMuted(videoRef.current.muted);
      };

      videoRef.current.addEventListener("play", handlePlayPause);
      videoRef.current.addEventListener("pause", handlePlayPause);

      return () => {
        videoRef.current.removeEventListener("play", handlePlayPause);
        videoRef.current.removeEventListener("pause", handlePlayPause);
      };
    }
  }, [videoRef.current]);

  return (
    <div className="highlight-container mx-auto py-5 w-full bg-white">
      <div className="max-w-7xl px-0 lg:px-8 mx-auto relative rounded-xl overflow-auto">
        <div role="list" className="flex flex-nowrap gap-1 overflow-x-auto">
          {galleries.map((gallery, index) => (
            <div role="listitem" key={gallery.id} className="text-center px-3">
              <button
                onClick={() => openModal(index)}
                aria-label={`Ver galeria de ${gallery.title}`}
              >
                <div className="ease-in duration-300 bg-white hover:bg-violet-600 rounded-full p-0 shadow-sm aspect-square">
                  <img
                    className="rounded-full min-w-24 min-h-24 aspect-square p-1 border-solid border-2 border-black-600"
                    src={gallery.thumb}
                    alt={gallery.title}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-xs my-2 font-medium">{gallery.title}</p>
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeGallery && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          ariaHideApp={false}
          closeTimeoutMS={200}
          contentLabel={`Galeria de ${activeGallery.title}`}
        >
          <header>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 z-50"
              aria-label="Fechar galeria"
            >
              Fechar
            </button>
          </header>

          <Swiper
            direction="vertical"
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveMediaIndex(swiper.activeIndex)}
            className="w-full h-full"
            navigation
            pagination={{ clickable: true }}
          >
            {activeGallery.media.map((mediaItem, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-full relative">
                  {activeMediaIndex === index &&
                    (mediaItem.type === "video" ? (
                      <div>
                        <video
                          ref={videoRef}
                          src={mediaItem.url}
                          autoPlay
                          muted={isMuted}
                          loop
                          className="w-full h-auto"
                          aria-label={mediaItem.description}
                          onClick={() => {
                            if (videoRef.current.paused) {
                              videoRef.current.play();
                            } else {
                              videoRef.current.pause();
                            }
                          }}
                        ></video>
                        <button
                          onClick={toggleMute}
                          className="absolute bottom-4 right-4 text-white bg-gray-800 rounded-full p-2 z-50"
                          aria-label={isMuted ? "Ativar som" : "Desativar som"}
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
                        className="w-full h-auto"
                      />
                    ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal>
      )}
    </div>
  );
};

export default HighlightsSection;
