import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Para ancoras
import Link from "next/link"; // Para links internos
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer id="footer-section" className="bg-white">
      <div className="container px-6 pt-12 pb-32 mx-auto">
        <div className="flex flex-col md:flex-row-reverse lg:flex-col md:justify-between items-start lg:items-center lg:text-center">
          <Image
            src="/midias/brands/casas-ella-e-nina.jpg"
            width={180}
            height={180}
            alt=""
            aria-hidden="true"
          />

          <div className="flex flex-col lg:flex-row items-center lg:justify-center mt-8 space-y-2 lg:space-y-0">
            <ScrollLink
              to="reserve"
              smooth={true}
              duration={1500}
              className="cursor-pointer w-full mx-4 lg:text-base text-lg transition-colors duration-300 text-indigo-600 underline underline-offset-4 hover:no-underline active:scale-95"
            >
              {t("reserve")}
            </ScrollLink>

            <ScrollLink
              to="ambientes"
              smooth={true}
              duration={1500}
              className="cursor-pointer w-full mx-4 lg:text-base text-lg transition-colors duration-300 text-indigo-600 underline underline-offset-4 hover:no-underline active:scale-95"
            >
              {t("ambientes")}
            </ScrollLink>

            <ScrollLink
              to="comodidades"
              smooth={true}
              duration={1500}
              className="cursor-pointer w-full mx-4 lg:text-base text-lg transition-colors duration-300 text-indigo-600 underline underline-offset-4 hover:no-underline active:scale-95"
            >
              {t("comodidades")}
            </ScrollLink>

            <ScrollLink
              to="fale-com-anfitria"
              smooth={true}
              duration={1500}
              className="w-full cursor-pointer mx-4 lg:text-base text-lg transition-colors duration-300 text-indigo-600 underline underline-offset-4 hover:no-underline text-nowrap active:scale-95"
            >
              {t("faleComAnfitria")}
            </ScrollLink>

            <ScrollLink
              to="faq"
              smooth={true}
              duration={1500}
              className="cursor-pointer w-full mx-4 lg:text-base text-lg transition-colors duration-300 text-indigo-600 underline underline-offset-4 hover:no-underline text-nowrap active:scale-95"
            >
              {t("faq")}
            </ScrollLink>

            {/* Adicionando o Link para Playlist */}
            <Link
              href="/playlist" // Caminho interno para a rota de playlist
              className="cursor-pointer w-full mx-4 lg:text-base text-lg transition-colors duration-300 text-indigo-600 underline underline-offset-4 hover:no-underline text-nowrap active:scale-95"
            >
              {t("playlist")}
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between lg:justify-center text-sm lg:text-center text-gray-500 space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="mailto:casasboutique@gmail.com"
            className="px-5 py-2 text-black text-center border duration-200 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-white hover:to-white active:from-gray-100 active:to-gray-200 transition-all rounded-full hover:shadow-lg active:scale-95 active:shadow-sm"
          >
            {t("email")}
          </Link>

          <Link
            href="https://wa.me/5548996377637"
            target="_blank"
            className="px-5 py-2 text-center border duration-200 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:from-indigo-500 hover:to-indigo-400 active:from-indigo-600 active:to-indigo-600 hover:shadow-lg transition-all active:scale-95 active:shadow-sm"
          >
            {t("whatsapp")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
