import React, { useRef } from "react";

const VideoSlide = ({ src, isActive }) => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      muted={!isActive}
      loop
      onClick={handleVideoClick}
      className={`max-h-[90vh] max-w-full object-contain rounded-lg ${
        isActive ? "opacity-100" : "opacity-80"
      }`}
      aria-label="Clique para reproduzir ou pausar"
    ></video>
  );
};

export default VideoSlide;
