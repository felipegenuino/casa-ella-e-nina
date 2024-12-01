"use client";

import { useState } from "react";
import ModalContent from "./ModalContent";
import GalleryList from "./GalleryList";
import galleries from "./galleries";

const HighlightsSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState(null);

  const openModal = (galleryIndex) => {
    setActiveGallery(galleries[galleryIndex]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveGallery(null);
  };

  return (
    <div className="highlight-container mx-auto py-5 w-full z-10">
      <GalleryList galleries={galleries} openModal={openModal} />
      {modalIsOpen && activeGallery && (
        <ModalContent
          isOpen={modalIsOpen}
          gallery={activeGallery}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default HighlightsSection;
