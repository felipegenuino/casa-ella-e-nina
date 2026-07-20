import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata = {
  metadataBase: new URL("https://casasboutiquepatacho.com.br"),
  title: "Curta a Trilha Sonora | Casa Boutique Ella e Nina",
  description:
    "Ouça as playlists exclusivas inspiradas nas grandes musas do jazz: Nina Simone e Ella Fitzgerald. Aproveite uma experiência musical inesquecível.",
  openGraph: {
    title: "Curta a Trilha Sonora | Casa Boutique Ella e Nina",
    description:
      "Ouça as playlists exclusivas inspiradas nas grandes musas do jazz: Nina Simone e Ella Fitzgerald. Aproveite uma experiência musical inesquecível.",
    url: "https://casasellanina.com.br/playlist",
    siteName: "Casa Boutique Ella e Nina",
    images: [
      {
        url: "/midias/metadata/playlist-cover.jpg", // Caminho da imagem para OG
        width: 1200,
        height: 630,
        alt: "Playlist inspirada em Nina Simone e Ella Fitzgerald",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curta a Trilha Sonora | Casa Boutique Ella e Nina",
    description:
      "Ouça as playlists exclusivas inspiradas nas grandes musas do jazz: Nina Simone e Ella Fitzgerald. Aproveite uma experiência musical inesquecível.",
    images: ["/midias/metadata/playlist-cover.jpg"], // Imagem para Twitter
  },
};

export default async function PlaylistsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "playlist" });
  return (
    <div
      className="min-h-screen  px-4 sm:px-6 lg:px-8 
    py-32  bg-green-50 space-y-12    border-b border-t border-gray-200
    
    "
    >
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        <section className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden p-6">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎵 This is Nina Simone
          </h2> */}
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4xXdS0?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <a
            href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4xXdS0?si=41202f67972244f6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 button-primary"
          >
            {t("listen")}
          </a>
        </section>

        <section className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden p-6">
          {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎵 This is Ella Fitzgerald
          </h2> */}
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3umewU?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <a
            href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO3umewU?si=8b8f819af57d4142"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 button-primary"
          >
            {t("listen")}
          </a>
        </section>
      </main>
    </div>
  );
}
