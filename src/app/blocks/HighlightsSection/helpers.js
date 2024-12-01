export const handleSlideChange = (swiper, gallery) => {
  // Pausar todos os vídeos e silenciá-los
  gallery.media.forEach((media, index) => {
    if (media.type === "video") {
      const videoElement = document.querySelector(
        `#video-${gallery.id}-${index}`
      );
      if (videoElement) {
        videoElement.pause();
        videoElement.muted = true; // Silencia o vídeo
      }
    }
  });

  // Reproduzir o vídeo do slide ativo com som
  const activeIndex = swiper.activeIndex;
  const activeMedia = gallery.media[activeIndex];
  if (activeMedia && activeMedia.type === "video") {
    const activeVideo = document.querySelector(
      `#video-${gallery.id}-${activeIndex}`
    );
    if (activeVideo) {
      activeVideo.muted = false; // Habilita o som
      activeVideo.play();
    }
  }
};

export const preloadMedia = (galleries) => {
  galleries.forEach((gallery) => {
    gallery.media.forEach((media) => {
      if (media.type === "image") {
        const img = new Image();
        img.src = media.url;
      } else if (media.type === "video") {
        const video = document.createElement("video");
        video.src = media.url;
        video.muted = true; // Silencia por padrão
      }
    });
  });
};
