import Image from "next/image";
import React from "react";

const ImageSlide = ({ src, description }) => {
  return (
    <div className="image-slide relative">
      <Image width={480} height={852} src={src} alt={description} />
      <p className="absolute bottom-7  py-2 bg-black/45 w-full text-white text-center text-sm mt-2">
        {description}
      </p>
    </div>
  );
};

export default ImageSlide;
