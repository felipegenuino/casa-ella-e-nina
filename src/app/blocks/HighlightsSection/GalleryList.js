import Image from "next/image";
import React from "react";

const GalleryList = ({ galleries, openModal }) => (
  <div className="flex flex-nowrap gap-4 overflow-x-auto px-4 justify-center">
    {galleries.map((gallery) => (
      <button
        key={gallery.id}
        onClick={() => openModal(gallery)}
        className="flex-shrink-0 w-40"
        aria-label={`Abrir galeria ${gallery.title}`}
      >
        <Image
          width={256}
          height={256}
          src={gallery.thumb}
          alt={`Thumbnail da galeria ${gallery.title}`}
          className="w-full h-40 object-cover rounded-lg"
        />
        <p className="text-white text-center text-sm mt-2">{gallery.title}</p>
      </button>
    ))}
  </div>
);

export default GalleryList;
