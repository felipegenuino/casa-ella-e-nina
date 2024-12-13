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
    <div className="relative mb-20">
      <video
        id={videoId}
        src={media.url}
        muted
        autoPlay={false} // Reproduz apenas no slide ativo
        loop
        className="object-cover w-full h-full rounded-lg cursor-pointer"
        onClick={handleVideoClick} // Controla o comportamento ao clicar
      />
      {media.description && (
        <p className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
          {media.description}
        </p>
      )}
    </div>
  );
};

export default VideoSlide;
