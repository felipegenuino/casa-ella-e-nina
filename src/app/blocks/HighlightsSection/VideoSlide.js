import React, { useEffect } from "react";

const VideoSlide = ({ media, galleryId, index, onActivateSlide }) => {
  const videoId = `video-${galleryId}-${index}`;

  useEffect(() => {
    const videoElement = document.getElementById(videoId);

    // Força a ativação se for o primeiro slide
    if (index === 0 && videoElement) {
      videoElement.muted = false;
      videoElement.play();
    }
  }, [index, videoId]);

  const handleVideoClick = (event) => {
    const videoElement = event.currentTarget;

    // Ativa o slide correspondente
    onActivateSlide();

    // Pausa ou reproduz o vídeo
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  return (
    <div className="relative">
      <video
        id={videoId}
        src={media.url}
        muted
        autoPlay={false} // Reproduz apenas no slide ativo
        loop
        className="object-cover w-full h-full  cursor-pointer"
        onClick={handleVideoClick} // Controla o comportamento ao clicar
      />
      {media.description && (
        <p className="absolute bottom-4 mx-4 px-4 py-2 left-0 right-0  text-white text-sm bg-violet-950 bg-opacity-85 rounded">
          {media.description}
        </p>
      )}
    </div>
  );
};

export default VideoSlide;
