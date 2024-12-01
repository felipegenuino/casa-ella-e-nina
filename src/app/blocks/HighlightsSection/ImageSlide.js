import React from "react";

const ImageSlide = ({ src }) => (
  <img
    src={src}
    alt="Imagem da galeria"
    className="max-h-[90vh] max-w-full object-contain rounded-lg"
  />
);

export default ImageSlide;
