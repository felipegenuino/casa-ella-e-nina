export const preloadVideos = (videoRefs) => {
  videoRefs.forEach((video) => {
    if (video) {
      video.load();
      video.currentTime = 0;
      video.pause();
    }
  });
};
