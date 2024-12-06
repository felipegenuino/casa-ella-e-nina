import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const GalleryList = ({ galleries, openModal }) => (
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    role="list"
    className="flex flex-nowrap gap-4 overflow-x-auto px-4 pl-12  lg:pl-0 lg:justify-center"
  >
    {galleries.map((gallery, index) => (
      <motion.div
        variants={item}
        role="listitem"
        key={gallery.id}
        className="text-center px-3"
      >
        <button
          key={gallery.id}
          onClick={() => openModal(gallery)}
          className="flex-shrink-0 w-40 group"
          aria-label={`Pressione para ver galeria de ${gallery.title}`}
        >
          <div
            className=" 
             rounded-full shadow-sm aspect-square duration-300  
            hover:bg-gradient-to-r 
            hover:from-purple-500 
            hover:to-pink-500 
            _hover:border-4 
            _hover:border-indigo-900/20
            overflow-hidden transition-all
             bg-white/10
          "
          >
            <Image
              className="rounded-full min-w-20 min-h-20 border-4 border-transparent  duration-300 transition-all group-hover:shadow-xl scale-100  hover:scale-150 "
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
      </motion.div>
    ))}
  </motion.div>
);

export default GalleryList;
