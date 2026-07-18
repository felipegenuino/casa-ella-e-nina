import { Fraunces, Sora } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../../styles/globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e1b4be6",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL("https://casasboutiquepatacho.com.br"),
    title,
    description,
    manifest: "/site.webmanifest",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: [
        { rel: "apple-touch-icon", sizes: "57x57", url: "/midias/metadata/apple-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", url: "/midias/metadata/apple-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", url: "/midias/metadata/apple-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", url: "/midias/metadata/apple-icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", url: "/midias/metadata/apple-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", url: "/midias/metadata/apple-icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", url: "/midias/metadata/apple-icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", url: "/midias/metadata/apple-icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", url: "/midias/metadata/apple-icon-180x180.png" },
      ],
    },
    openGraph: {
      title,
      description,
      url: "https://casasboutiquepatacho.com.br",
      siteName: "Casa Boutique na Praia do Patacho - Casa Ella & Nina",
      images: [
        {
          url: "/midias/metadata/open-graph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Casa Boutique Ella & Nina",
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/midias/metadata/open-graph-image.jpg"],
    },
  };
}

const fontTitle = Fraunces({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "700"],
  display: "swap",
});
const fontBody = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
  display: "swap",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${fontTitle.variable} ${fontBody.variable} antialiased w-100`}
      >
        <NextIntlClientProvider messages={messages}>
          <div id="__next">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
