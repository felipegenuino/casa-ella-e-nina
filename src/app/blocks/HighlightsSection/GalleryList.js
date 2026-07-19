import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { tGallery } from "./translations";

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

const GalleryList = ({ galleries, openModal }) => {
  const locale = useLocale();
  const t = useTranslations("highlights");

  return (
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    role="list"
    className="flex flex-nowrap gap-4 overflow-x-auto px-4 pl-12  lg:pl-0 lg:justify-center"
  >
    {galleries.map((gallery, index) => {
      const title = tGallery(gallery.title, locale);
      return (
      <motion.div
        variants={item}
        role="listitem"
        key={gallery.id}
        className="text-center px-3"
      >
        <button
          key={gallery.id}
          onClick={() => openModal(gallery)}
          className="flex-shrink-0 w-32 lg:w-40 group"
          aria-label={t("viewGalleryLabel", { title })}
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
              className="rounded-full min-w-32 min-h-32  lg:min-w-32 lg:min-h-32 border-4 border-transparent  duration-300 transition-all group-hover:shadow-xl scale-100  hover:scale-150 "
              width={160}
              height={160}
              src={gallery.thumb}
              alt={title}
              aria-hidden="true"
            />
          </div>
          <p
            aria-hidden="true"
            className="text-sm my-2 font-regular text-white"
          >
            {title}
          </p>
        </button>
      </motion.div>
      );
    })}
  </motion.div>
  );
};

export default GalleryList;
