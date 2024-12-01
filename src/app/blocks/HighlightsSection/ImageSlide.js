import React from "react";
import Image from "next/image";

const ImageSlide = ({ src, alt, blurUrl }) => {
  return (
    <Image
      className="max-h-[90vh] max-w-full object-contain rounded-lg"
      width={1200}
      height={800}
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurUrl}
    />
  );
};

export default ImageSlide;
