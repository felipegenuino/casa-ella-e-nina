"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Autoplay, Pagination, A11y, EffectCards } from "swiper/modules";

import { useTranslations, useLocale } from "next-intl";

import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR, enUS, es } from "date-fns/locale";

import testimonials from "./data";
import { getReviewComment } from "./translations";

const dateLocales = { pt: ptBR, en: enUS, es };

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function Card({ testimonial, deck }) {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  return (
    <div
      className={`flex flex-col rounded-xl bg-slate-50 p-6 lg:p-7 ${
        deck ? "h-full" : ""
      }`}
    >
      <div className="flex items-center gap-x-4">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={t("photoAlt", { name: testimonial.name })}
            width={56}
            height={56}
            className="h-14 w-14 rounded-full bg-gray-50 object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl font-semibold text-indigo-700 select-none"
          >
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-500">
            {formatDistanceToNow(parseISO(testimonial.date), {
              locale: dateLocales[locale] || ptBR,
              addSuffix: true,
            })}
          </p>
        </div>
      </div>

      <p
        className="mt-2 text-black"
        aria-label={t("ratingAriaLabel", { rating: testimonial.rating })}
      >
        {"★".repeat(testimonial.rating)}
        <span className="text-gray-300">{"★".repeat(5 - testimonial.rating)}</span>
      </p>

      <div
        className={`mt-3 space-y-3 text-sm/6 text-gray-700 lg:text-base/7 ${
          deck ? "relative min-h-0 flex-1 overflow-hidden" : ""
        }`}
      >
        {getReviewComment(testimonial, locale).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {locale !== "pt" && (
          <p className="text-xs italic text-gray-400">{t("translatedNote")}</p>
        )}
        {deck && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50 to-transparent"
          />
        )}
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const t = useTranslations("testimonials");
  const [items, setItems] = useState([]);

  const [isMobile, setIsMobile] = useState(false);

  // Embaralha só no cliente para dar volume/variedade sem quebrar a hidratação.
  useEffect(() => {
    setItems(shuffle(testimonials));
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!items.length) {
    return <div className="min-h-[280px]" aria-hidden="true" />;
  }

  // Mobile: baralho de cards empilhados (efeito "cards").
  if (isMobile) {
    return (
      <div className="mx-auto w-full max-w-[320px] px-2">
        <Swiper
          effect="cards"
          grabCursor
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[EffectCards, Autoplay, A11y]}
          style={{ height: 420 }}
          className="!overflow-visible"
          aria-label={t("carouselAriaLabel")}
        >
          {items.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="!rounded-xl !overflow-hidden"
            >
              <Card testimonial={testimonial} deck />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  // Desktop / tablet: carrossel de vários cards.
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={2}
      grabCursor
      autoHeight
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        1024: { slidesPerView: 3 },
      }}
      modules={[Autoplay, Pagination, A11y]}
      className="!pb-12"
      aria-label={t("carouselAriaLabel")}
    >
      {items.map((testimonial) => (
        <SwiperSlide key={testimonial.id} className="!h-auto">
          <Card testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
