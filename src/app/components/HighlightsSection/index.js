// src/app/components/HighlightsSection/HighlightsSection.js
"use client";

import { useState } from 'react';
import Modal from 'react-modal';

// import Swiper core and required modules
import {  Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
      ],
    },
    {
      id: 2,
      thumb: '/midias/gallery/thumb-2.jpg',
      title: 'Experiência na Praia',
      videos: [
        'https://www.youtube.com/embed/TY_KiHRhHPc',
        'https://www.youtube.com/embed/9CF56sfRXC8'
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
             // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            direction="vertical"
            slidesPerView={1}
            spaceBetween={50}
  
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
 

            onSlideChange={(swiper) => setActiveVideoIndex(swiper.activeIndex)}
            className={styles['swiper-container']}

          >
            {activeGallery.videos.map((videoUrl, index) => (
              <SwiperSlide key={index}>
                <div className={styles['video-wrapper']}>
            {activeVideoIndex === index && (
              isYouTubeVideo(videoUrl) ? (
                <iframe
                  src={`${videoUrl}?autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`Video ${index + 1} of ${activeGallery.title}`}
                  className={styles['video-player']}
                ></iframe>
              ) : (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  loop
                  muted
                  className={styles['video-player']}
                ></video>
              )
            )}
          </div>
              </SwiperSlide>

              
            ))}

<span slot="container-start">Container Start</span>
  <span slot="container-end">Container End</span>
  <span slot="wrapper-start">Wrapper Start</span>
  <span slot="wrapper-end">Wrapper End</span>
          </Swiper>
        </Modal>
      )}
    </section>
  );
};

export default HighlightsSection;