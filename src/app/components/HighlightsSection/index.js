// src/app/components/HighlightsSection/HighlightsSection.js
"use client";

import { useState } from 'react';
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
      { type: 'image', url: '/midias/gallery/image-3.jpg' },
      { type: 'video', url: '/midias/gallery/video-1.mp4' },
      { type: 'image', url: '/midias/gallery/image-1.jpg' },
      { type: 'video', url: '/midias/gallery/video-2.mp4' },
      { type: 'image', url: '/midias/gallery/image-5.jpg' },
      { type: 'image', url: '/midias/gallery/image-6.jpg' },
      { type: 'image', url: '/midias/gallery/image-7.jpg' },
    ],
  },
  {
    id: 2,
    thumb: '/midias/gallery/thumb-2.jpg',
    title: 'Experiência na Praia',
    media: [
        { type: 'image', url: '/midias/gallery/image-2.jpg' },
      { type: 'video', url: '/midias/gallery/video-3.mp4' },
      { type: 'image', url: '/midias/gallery/image-2.jpg' },
      { type: 'video', url: '/midias/gallery/video-4.mp4' },
    ],
  },
];

const HighlightsSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

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

  return (
    <section>
      <h2>Momentos Especiais</h2>
      <ul className={styles['highlights-list']}>
        {galleries.map((gallery, index) => (
          <li key={gallery.id} className={styles['highlight-item']}>
            <button onClick={() => openModal(index)}>
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
        >
         <div className={styles['modal-header-buttons']}>
         <button onClick={closeModal} className={styles['close-button']}>
            Fechar
          </button>

           {/* <button onClick={toggleMute} className={styles['mute-button']}>
                          {isMuted ? 'Ativar Som' : 'Desativar Som'}
                        </button>   */}

         </div>
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
                        <video
                          src={mediaItem.url}
                        //   controls
                          muted={!isMuted}
                          autoPlay
                          loop
                          className={`${styles['media-player']} ${styles['local-video']}`}
                        ></video>
                       
                      </div>
                    ) : (
                      <img
                        src={mediaItem.url}
                        alt={`Image ${index + 1} of ${activeGallery.title}`}
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