import React from "react";

const ImageSlide = ({ src, description }) => {
  return (
    <div className="image-slide">
      <img src={src} alt={description} />
      <p>{description}</p>
    </div>
  );
};

export default ImageSlide;
