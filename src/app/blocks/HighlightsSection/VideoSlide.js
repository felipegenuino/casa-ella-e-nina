import React, { useRef } from "react";

const VideoSlide = ({ id, src, description }) => {
  const videoRef = useRef(null);

  return (
    <div className="video-slide relative">
      <video
        ref={videoRef}
        id={id}
        src={src}
        muted
        loop
        className="max-h-[90vh]  max-w-full object-contain rounded-lg"
        aria-label="Clique para reproduzir ou pausar"
      ></video>
      <p className="absolute bottom-10 w-full text-white text-center text-sm mt-2">
        {description}
      </p>
    </div>
  );
};

export default VideoSlide;
