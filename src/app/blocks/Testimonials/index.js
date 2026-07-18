import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Avaliacao from "./Avaliacao";
import TestimonialsCarousel from "./TestimonialsCarousel";

const airbnbLinks = [
  {
    labelKey: "airbnbEllaLabel",
    href: "https://www.airbnb.com.br/rooms/987771438493887391/reviews",
  },
  {
    labelKey: "airbnbNinaLabel",
    href: "https://www.airbnb.com.br/rooms/1049859270366355530/reviews",
  },
];

export default function Testimonials() {
  const t = useTranslations("testimonials");
  return (
    <section id="historias" className="pt-24 lg:pt-32">
      <div className="_max-w-screen-xl mx-auto lg:px-8 md:px-8">
        <div className=" max-w-screen-xl  mx-auto  px-6 md:px-0 mb-8 w-full _bg-red-300">
          <p className="text-indigo-600 font-light py-2">{t("eyebrow")}</p>
          <div className="space-y-5">
            <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl">
              {t("titleLine1")}
              <span className="md:flex"> {t("titleLine2")}</span>
            </h2>

            <div className="text-gray-500  ">
              <p className="xs:mt-3 text-gray-600">{t("lead")}</p>
            </div>
          </div>
        </div>
        <Avaliacao />
        <div className="w-full flex flex-col items-center gap-y-3 py-4 mb-6 px-6">
          <p className="text-gray-600 text-center">{t("readReviewsCta")}</p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {airbnbLinks.map((l) => (
              <Link
                key={l.href}
                title={t("airbnbLinkTitle")}
                target="_blank"
                className="inline-flex items-center gap-1 text-lg lg:text-base transition-colors duration-300 text-indigo-600 underline underline-offset-4 hover:no-underline active:scale-95"
                href={l.href}
              >
                {t(l.labelKey)}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 md:px-0">
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  );
}
