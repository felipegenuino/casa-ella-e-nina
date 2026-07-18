import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

export default function MomentosCompartilhados() {
  const t = useTranslations("momentos");

  return (
    <section
      id="momentos-compartilhados"
      className="pt-24 lg:pt-32 border-y border-yellow-200 bg-yellow-50 "
    >
      <div className=" space-y-6">
        <div className="max-w-screen-xl mx-auto px-4  md:px-8">
          <p className="text-indigo-600 font-light py-2">{t("eyebrow")}</p>
          <div className="space-y-6">
            <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl">
              {t("titulo")}
            </h2>

            <p className="space-y-1">
              <span className="text-gray-500 lg:flex">{t("lead")}</span>
              <span className="text-gray-800 mx-2 lg:mx-0 lg:flex ">
                {t("seguirAntes")}
                <Link
                  className=" mx-1 underline underline-offset-4  text-blue-800 transition-all "
                  href="https://www.instagram.com/casasboutiquepatacho/"
                  target="_blank"
                  title={t("instagramTitle")}
                >
                  {t("instagram")}
                </Link>
                {t("seguirDepois")}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap pt-6">
          <div className="flex flex-wrap w-full lg:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={500}
                height={500}
                alt={t("altDetalhes")}
                className="w-full h-full object-cover object-center block rounded-lg"
                src="/midias/instagram/h-4.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={500}
                height={500}
                alt={t("altCuidado")}
                className="w-full h-full object-cover object-center block rounded-lg"
                src="/midias/instagram/7.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                width={500}
                height={500}
                alt={t("altSemana")}
                className="w-full object-cover h-full object-center block rounded-lg"
                src="/midias/instagram/2.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full lg:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                width={500}
                height={500}
                alt={t("altDetalhes")}
                className="w-full h-full object-cover object-center block rounded-lg"
                src="/midias/instagram/b-1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={500}
                height={500}
                alt={t("altDetalhes")}
                className="w-full h-full object-cover object-center block rounded-lg"
                src="/midias/instagram/6.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={500}
                height={500}
                alt={t("altCuidado")}
                className="w-full h-full object-cover object-center block rounded-lg"
                src="/midias/instagram/h-3.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
