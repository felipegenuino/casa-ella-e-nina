// src/app/components/HighlightsSection/HighlightsSection.js
"use client";

import { useState } from 'react';
import Modal from 'react-modal';

// import Swiper core and required modules
import {  Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperCore from 'swiper'; 


import styles from './index.module.css';


SwiperCore.use([Pagination, Navigation]);

const galleries = [
    {
      id: 1,
      thumb: '/midias/gallery/thumb-1.jpg',
      title: 'Sobre as Casas',
      videos: [
        '/midias/gallery/thumb-1.mp4',
        '/midias/gallery/thumb-2.mp4',
        '/midias/gallery/thumb-3.mp4',
      ],
    },
    {
      id: 2,
      thumb: '/midias/gallery/thumb-2.jpg',
      title: 'Experiência na Praia',
      videos: [
        '/midias/gallery/thumb-1.mp4',
        '/midias/gallery/thumb-2.mp4',
        '/midias/gallery/thumb-3.mp4',
      ],
    },
  ];


// Definindo a função isYouTubeVideo
const isYouTubeVideo = (videoUrl) => {
    return videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  };

const HighlightsSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
 

  const openModal = (galleryIndex) => {
    setActiveGallery(galleries[galleryIndex]);
    setActiveVideoIndex(0);
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
          <button onClick={closeModal} className={styles['close-button']}>Fechar</button>



          <Swiper
            direction="vertical"
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveVideoIndex(swiper.activeIndex)}
            className={styles['swiper-container']}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {activeGallery.videos.map((videoUrl, index) => (
              <SwiperSlide key={index}>
                <div className={styles['video-wrapper']}>
                  {activeVideoIndex === index && (
                    <div className={styles['video-container']}>
                      <video
                        src={videoUrl}
                        //controls
                        autoPlay
                        loop
                        className={`${styles['video-player']} ${styles['local-video']}`}
                      ></video>
                    </div>
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