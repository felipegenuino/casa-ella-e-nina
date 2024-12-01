import React from "react";
import Image from "next/image";

const GalleryList = ({ galleries, openModal }) => {
  return (
    <div
      role="list"
      className="flex flex-nowrap lg:justify-center gap-1 overflow-x-auto"
    >
      {galleries.map((gallery, index) => (
        <div role="listitem" key={gallery.id} className="text-center px-3">
          <button
            onClick={() => openModal(index)}
            aria-expanded="false"
            aria-label={`Pressione para ver galeria de ${gallery.title}`}
          >
            <div className="ease-in-out rounded-full shadow-sm aspect-square duration-300 transition-all hover:bg-white bg-white/10">
              <Image
                className="rounded-full min-w-20 min-h-20 border-4 border-transparent"
                width={124}
                height={124}
                src={gallery.thumb}
                alt={gallery.title}
                placeholder="blur"
                blurDataURL={gallery.thumbBlurUrl}
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
};

export default GalleryList;
