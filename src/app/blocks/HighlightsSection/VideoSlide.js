import { handleVideoClick, handleVideoKeyPress } from "./helpers";

const VideoSlide = ({ media, galleryId, index }) => {
  // Verifica se a mídia é válida antes de renderizar
  if (!media || !media.url) {
    console.error("Media or media.url is undefined:", media);
    return null; // Evita renderizar se os dados estiverem incorretos
  }

  const videoId = `video-${galleryId}-${index}`;

  const handleKeyPress = (e) => {
    const videoElement = document.getElementById(videoId);
    if (videoElement) {
      handleVideoKeyPress(e, videoElement);
    }
  };

  const handleClick = () => {
    const videoElement = document.getElementById(videoId);
    if (videoElement) {
      handleVideoClick(videoElement);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Vídeo */}
      <video
        id={videoId}
        src={media.url}
        muted
        autoPlay={false} // Reproduz apenas no slide ativo
        loop
        className="object-cover w-full h-full rounded-lg"
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        tabIndex={0} // Para ser acessível
        aria-label={media.description}
      ></video>

      {/* Descrição */}
      <p className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
        {media.description}
      </p>
    </div>
  );
};

export default VideoSlide;
