import Image from "next/image";
import React from "react";

const GalleryList = ({ galleries, openModal }) => (
  <div
    role="list"
    className="flex flex-nowrap gap-4 overflow-x-auto px-4 pl-12  lg:pl-0 lg:justify-center"
  >
    {galleries.map((gallery, index) => (
      <div role="listitem" key={gallery.id} className="text-center px-3">
        <button
          key={gallery.id}
          onClick={() => openModal(gallery)}
          className="flex-shrink-0 w-40 group"
          aria-label={`Pressione para ver galeria de ${gallery.title}`}
        >
          <div
            className="
            transition ease-in-out
             rounded-lg shadow-sm aspect-square duration-300  
            hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500

             bg-white/10
          "
          >
            <Image
              className="rounded-lg min-w-20 min-h-20 border-4 border-transparent transition-shadow duration-300 group-hover:shadow-xl" // Shadow ao passar o mouse
              width={500}
              height={500}
              src={gallery.thumb}
              alt={gallery.title}
              aria-hidden="true"
            />
          </div>
          <p aria-hidden="true" className="text-xs my-2 font-bold text-white">
            {gallery.title}
          </p>
        </button>
      </div>
    ))}
  </div>
);

export default GalleryList;
