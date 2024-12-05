import Image from "next/image";
import React from "react";

const ImageSlide = ({ src, description }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      console.log("Imagem ativada via teclado:", src);
    }
  };

  const handleClick = () => {
    console.log("Imagem clicada:", src);
  };

  return (
    <div
      tabIndex={0} // Permite navegação via teclado
      role="img" // Declara que o elemento é uma imagem
      aria-label={description || "Imagem da galeria"} // Descrição acessível
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      className="relative w-full h-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <Image
        width={480}
        height={852}
        src={src}
        aria-hidden="true"
        alt={description || "Imagem da galeria"} // Texto alternativo para leitores de tela
        className="object-cover w-full h-full rounded-lg"
      />
      {description && (
        <p className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
          {description}
        </p>
      )}
    </div>
  );
};

export default ImageSlide;
