"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

import testimonials from "./data";

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function Card({ testimonial }) {
  return (
    <div className="flex flex-col rounded-xl bg-slate-50 p-6 lg:p-7">
      <div className="flex items-center gap-x-4">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={`Foto de ${testimonial.name}`}
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
            {`Há ${formatDistanceToNow(parseISO(testimonial.date), {
              locale: ptBR,
            })}`}
          </p>
        </div>
      </div>

      <p className="mt-2 text-black" aria-label={`${testimonial.rating} de 5 estrelas`}>
        {"★".repeat(testimonial.rating)}
        <span className="text-gray-300">{"★".repeat(5 - testimonial.rating)}</span>
      </p>

      <div className="mt-3 space-y-3 text-sm/6 text-gray-700 lg:text-base/7">
        {testimonial.comment.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [items, setItems] = useState([]);

  // Embaralha só no cliente para dar volume/variedade sem quebrar a hidratação.
  useEffect(() => {
    setItems(shuffle(testimonials));
  }, []);

  if (!items.length) {
    return <div className="min-h-[280px]" aria-hidden="true" />;
  }

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1.1}
      grabCursor
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Autoplay, Pagination, A11y]}
      className="!pb-12"
      aria-label="Avaliações dos hóspedes"
    >
      {items.map((testimonial) => (
        <SwiperSlide key={testimonial.id} className="!h-auto">
          <Card testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
