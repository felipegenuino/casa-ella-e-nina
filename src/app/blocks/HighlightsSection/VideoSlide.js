import React, { useRef } from "react";

const VideoSlide = ({ id, src }) => {
  const videoRef = useRef(null);

  return (
    <video
      ref={videoRef}
      id={id}
      src={src}
      muted
      loop
      className="max-h-[90vh] max-w-full object-contain rounded-lg"
      aria-label="Clique para reproduzir ou pausar"
    ></video>
  );
};

export default VideoSlide;
