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
    <div
      className="relative w-full h-full"
      onClick={(e) => {
        e.preventDefault(); // Impede que o evento de clique interfira no swipe
        handleVideoClick(e.target); // Função para play/pause/mute
      }}
    >
      {/* Vídeo */}
      <video
        id={videoId}
        src={media.url}
        muted
        autoPlay={false} // Reproduz apenas no slide ativo
        loop
        className="object-cover w-full h-full rounded-lg pointer-events-auto"
        onClick={(e) => {
          e.stopPropagation(); // Garante que o clique no vídeo não interfira com o swipe
          handleVideoClick(e.target); // Função para play/pause/mute
        }}
        onKeyDown={handleKeyPress}
        // tabIndex={0} // Para ser acessível
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
