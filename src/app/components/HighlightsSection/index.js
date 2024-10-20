// src/app/components/HighlightsSection/HighlightsSection.js
"use client";

import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperCore from 'swiper';
import styles from './index.module.css';

SwiperCore.use([Pagination, Navigation]);

// Atualizamos a estrutura do array para incluir vídeos e imagens.
const galleries = [
  {
    id: 1,
    thumb: '/midias/gallery/thumb-1.jpg',
    title: 'Sobre as Casas',
    media: [
      { type: 'image', url: '/midias/gallery/image-3.jpg', description: 'Tour virtual pela casa 1'  },
      { type: 'video', url: '/midias/gallery/video-1.mp4', description: 'Aria label'  },
      { type: 'image', url: '/midias/gallery/image-1.jpg', description: 'Aria label'  },
      { type: 'video', url: '/midias/gallery/video-2.mp4', description: 'Aria label'  },
      { type: 'image', url: '/midias/gallery/image-5.jpg', description: 'Aria label'  },
      { type: 'image', url: '/midias/gallery/image-6.jpg', description: 'Aria label'  },
      { type: 'image', url: '/midias/gallery/image-7.jpg', description: 'Aria label'  },
    ],
  },
  {
    id: 2,
    thumb: '/midias/gallery/thumb-2.jpg',
    title: 'Experiência na Praia',
    media: [
      { type: 'image', url: '/midias/gallery/image-2.jpg', description: 'Aria label'  },
      { type: 'video', url: '/midias/gallery/video-3.mp4', description: 'Aria label'  },
      { type: 'image', url: '/midias/gallery/image-2.jpg', description: 'Aria label'  },
      { type: 'video', url: '/midias/gallery/video-4.mp4', description: 'Aria label'  },
    ],
  },
];
const HighlightsSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeGallery, setActiveGallery] = useState(null);
    const [activeMediaIndex, setActiveMediaIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const closeModalButtonRef = useRef(null);
  
    const toggleMute = () => {
      setIsMuted(!isMuted);
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
      // Focar no botão de fechar quando o modal abrir
      if (modalIsOpen && closeModalButtonRef.current) {
        closeModalButtonRef.current.focus();
      }
    }, [modalIsOpen]);
  
    return (
      <section>
        <h2>Momentos Especiais</h2>
        <ul className={styles['highlights-list']}>
          {galleries.map((gallery, index) => (
            <li key={gallery.id} className={styles['highlight-item']}>
              <button
                onClick={() => openModal(index)}
                role="button"
                aria-expanded={modalIsOpen}
                aria-label={`Ver galeria de ${gallery.title}`}
              >
                <img src={gallery.thumb} alt={gallery.title} />
                <p>{gallery.title}</p>
              </button>
            </li>
          ))}
        </ul>
  
        {activeGallery && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={styles.modal}
            overlayClassName={styles.overlay}
            ariaHideApp={false}
            contentLabel={`Galeria de ${activeGallery.title}`}
          >
            <button
              onClick={closeModal}
              className={styles['close-button']}
              ref={closeModalButtonRef}
              aria-label="Fechar galeria"
            >
              Fechar
            </button>
  
            <Swiper
              direction="vertical"
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveMediaIndex(swiper.activeIndex)}
              className={styles['swiper-container']}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {activeGallery.media.map((mediaItem, index) => (
                <SwiperSlide key={index}>
                  <div className={styles['media-wrapper']}>
                    {activeMediaIndex === index && (
                      mediaItem.type === 'video' ? (
                        <div className={styles['video-container']}>
                            <button
                            onClick={toggleMute}
                            className={styles['mute-button']}
                            aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                          >
                            {!isMuted ? 'Ativar Som' : 'Desativar Som'}
                          </button>

                          <video
                            src={mediaItem.url}
                            //controls
                            muted={!isMuted}
                            autoPlay
                            loop
                            className={`${styles['media-player']} ${styles['local-video']}`}
                            aria-label={mediaItem.description}
                          ></video>
                          
                        </div>
                      ) : (
                        <img
                          src={mediaItem.url}
                          alt={mediaItem.description}
                          className={styles['media-player']}
                        />
                      )
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Modal>
        )}
      </section>
    );
  };
  
  export default HighlightsSection;