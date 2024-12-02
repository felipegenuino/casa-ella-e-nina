import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GalleryList from "./GalleryList";
import ModalContent from "./ModalContent";
import { preloadMedia } from "./helpers";
import galleries from "./galleries";

SwiperCore.use([Navigation, Pagination]);

const HighlightsSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);

  useEffect(() => {
    preloadMedia(galleries);
  }, []);

  const openModal = (gallery) => {
    setActiveGallery(gallery);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveGallery(null);
  };

  return (
    <div className="highlight-container mx-auto py-5  overflow-auto w-full z-10">
      <GalleryList galleries={galleries} openModal={openModal} />
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-slate-700	 bg-opacity-90"
          overlayClassName="fixed inset-0 bg-black bg-opacity-90 z-10"
          ariaHideApp={false}
        >
          <ModalContent gallery={activeGallery} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default HighlightsSection;
