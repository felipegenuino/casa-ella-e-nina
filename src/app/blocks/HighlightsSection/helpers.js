export const handleSlideChange = (swiper, gallery) => {
  // Pausar todos os vídeos e silenciá-los
  swiper.slides.forEach((slide, index) => {
    const videoElement = slide.querySelector("video");

    if (index === swiper.activeIndex) {
      // Ativar o slide atual
      slide.classList.add("swiper-slide-active");
      if (videoElement) {
        videoElement.muted = false;
        videoElement.play();
      }

      // Focar no slide ativo
      slide.focus(); // Adiciona foco ao slide ativo
    } else {
      // Desativar slides inativos
      slide.classList.remove("swiper-slide-active");
      if (videoElement) {
        videoElement.pause();
        videoElement.muted = true;
      }
    }
  });
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

export const handleVideoClick = (videoElement) => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};

export const handleVideoKeyPress = (e, videoElement) => {
  if (e.code === "Space") {
    e.preventDefault(); // Evita o scroll ao pressionar espaço
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }
};
