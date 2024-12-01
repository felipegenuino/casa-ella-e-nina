// Atualizamos a estrutura do array para incluir vídeos e imagens.
const galleries = [
  {
    id: 1,
    thumb: "/midias/gallery/thumb-1-p.jpg",
    title: "Galeria 1",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-3-p.jpg",
        description: "Leganda da imagem 3",
      },
      {
        type: "video",
        url: "/midias/gallery/video-1.mp4",
        description: "Legenda do video 1",
      },
      {
        type: "image",
        url: "/midias/gallery/image-1-p.jpg",
        description: "Legenda da imagem 1",
      },
      {
        type: "video",
        url: "/midias/gallery/video-2.mp4",
        description: "Legenda do video 2",
      },
      {
        type: "image",
        url: "/midias/gallery/image-5-p.jpg",
        description: "Legenda da imagem 5",
      },
      {
        type: "image",
        url: "/midias/gallery/image-6-p.jpg",
        description: "Legenda da imagem 6",
      },
      {
        type: "image",
        url: "/midias/gallery/image-7-p.jpg",
        description: "Legenda da imagem 7",
      },
    ],
  },
  {
    id: 2,
    thumb: "/midias/gallery/thumb-2-p.jpg",
    title: "Galeria 2",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-2-p.jpg",
        description: "Legenda da imagem 2",
      },
      {
        type: "video",
        url: "/midias/gallery/video-3.mp4",
        description: "Legenda do video 3",
      },
      {
        type: "image",
        url: "/midias/gallery/image-2-p.jpg",
        description: "Legenda da imagem 2",
      },
      {
        type: "video",
        url: "/midias/gallery/video-4.mp4",
        description: "Legenda do video 4",
      },
    ],
  },
  {
    id: 3,
    thumb: "/midias/gallery/thumb-1-p.jpg",
    title: "Galeria 3",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-3-p.jpg",
        description: "Legenda da imagem 3",
      },
      {
        type: "video",
        url: "/midias/gallery/video-1.mp4",
        description: "Legenda do video 1",
      },
      {
        type: "image",
        url: "/midias/gallery/image-1-p.jpg",
        description: "Legenda da imagem 1",
      },
      {
        type: "video",
        url: "/midias/gallery/video-2.mp4",
        description: "Legenda do video 2",
      },
      {
        type: "image",
        url: "/midias/gallery/image-5-p.jpg",
        description: "Legenda da imagem 5",
      },
      {
        type: "image",
        url: "/midias/gallery/image-6-p.jpg",
        description: "Legenda da imagem 6",
      },
      {
        type: "image",
        url: "/midias/gallery/image-7-p.jpg",
        description: "Legenda da imagem 7",
      },
    ],
  },
  {
    id: 4,
    thumb: "/midias/gallery/thumb-2-p.jpg",
    title: "Galeria 4",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-2-p.jpg",
        description: "Legenda da imagem 2",
      },
      {
        type: "video",
        url: "/midias/gallery/video-3.mp4",
        description: "Legenda do video 3",
      },
      {
        type: "image",
        url: "/midias/gallery/image-2-p.jpg",
        description: "Legenda da imagem 2",
      },
      {
        type: "video",
        url: "/midias/gallery/video-4.mp4",
        description: "Legenda do video 4",
      },
    ],
  },
  {
    id: 5,
    thumb: "/midias/gallery/thumb-1-p.jpg",
    title: "Galeria 5",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-3-p.jpg",
        description: "Legenda da imagem 3",
      },
      {
        type: "video",
        url: "/midias/gallery/video-1.mp4",
        description: "Legenda do video 1",
      },
      {
        type: "image",
        url: "/midias/gallery/image-1-p.jpg",
        description: "Legenda da imagem 1",
      },
      {
        type: "video",
        url: "/midias/gallery/video-2.mp4",
        description: "Legenda da imagem 2",
      },
      {
        type: "image",
        url: "/midias/gallery/image-5-p.jpg",
        description: "Legenda da imagem 5",
      },
      {
        type: "image",
        url: "/midias/gallery/image-6-p.jpg",
        description: "Legenda da imagem 6",
      },
      {
        type: "image",
        url: "/midias/gallery/image-7-p.jpg",
        description: "Legenda da imagem 7",
      },
    ],
  },
  {
    id: 6,
    thumb: "/midias/gallery/thumb-2-p.jpg",
    title: "Galeria 6",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-2-p.jpg",
        description: "Legenda da imagem 2",
      },
      {
        type: "video",
        url: "/midias/gallery/video-3.mp4",
        description: "Legenda da imagem 3",
      },
      {
        type: "image",
        url: "/midias/gallery/image-2-p.jpg",
        description: "Legenda da imagem 2",
      },
      {
        type: "video",
        url: "/midias/gallery/video-4.mp4",
        description: "Legenda do video 4",
      },
    ],
  },
  {
    id: 7,
    thumb: "/midias/gallery/thumb-1-p.jpg",
    title: "Galeria 7",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-3-p.jpg",
        description: "Legenda da imagem 3",
      },
      {
        type: "video",
        url: "/midias/gallery/video-1.mp4",
        description: "Legenda do video 1",
      },
      {
        type: "image",
        url: "/midias/gallery/image-1-p.jpg",
        description: "Legenda da imagem 1",
      },
      {
        type: "video",
        url: "/midias/gallery/video-2.mp4",
        description: "Legenda do video 2",
      },
      {
        type: "image",
        url: "/midias/gallery/image-5-p.jpg",
        description: "Legenda da imagem 5",
      },
      {
        type: "image",
        url: "/midias/gallery/image-6-p.jpg",
        description: "Legenda da imagem 6",
      },
      {
        type: "image",
        url: "/midias/gallery/image-7-p.jpg",
        description: "Legenda da imagem 7",
      },
    ],
  },
  {
    id: 8,
    thumb: "/midias/gallery/thumb-2-p.jpg",
    title: "Galeria 8",
    media: [
      {
        type: "image",
        url: "/midias/gallery/image-2-p.jpg",
        description: "Legenda da imagem 2",
      },
      {
        type: "video",
        url: "/midias/gallery/video-3.mp4",
        description: "Legenda do video 3",
      },
      {
        type: "image",
        url: "/midias/gallery/image-2-p.jpg",
        description: "Legenda da imagem 2",
      },
      {
        type: "video",
        url: "/midias/gallery/video-4.mp4",
        description: "Legenda do video 4",
      },
    ],
  },
];

export default galleries;
