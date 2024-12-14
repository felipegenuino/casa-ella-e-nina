import React from "react";
import Image from "next/image";
import Link from "next/link";

import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale"; // Locale para formato em português

import testimonials from "./data";

function TestimonialsList() {
  return (
    <>
      <div className="grid grid-cols-1  lg:gap-x-6  lg:gap-y-16 mt-4 mb-8 pt-2  lg:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex w-full flex-col items-start justify-between even:bg-white odd:bg-slate-50 p-5 py-12  lg:rounded-xl"
          >
            <div className="p-0 flex gap-y-0 text-xs flex-col md:flex-row lg:flex-col h-full md:items-start">
              <div className="relative flex md:flex-col lg:flex-col  gap-x-4 md:px-4 lg:px-0 ">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-lg bg-gray-50 object-cover"
                />

                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {`Há ${formatDistanceToNow(parseISO(testimonial.date), {
                      locale: ptBR,
                    })}`}
                  </p>
                </div>
              </div>

              <div className="mt-4 text-base lg:text-sm xl:text-lg space-y-6 md:mt-0 lg:mt-4 mb-2 text-gray-700   md:flex-1">
                {testimonial.comment.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-auto md:mt-0 lg:mt-auto md:px-4 lg:px-0 ">
                <span className="text-black text-xl ">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center  py-4 mb-6  _bg-yellow-50">
        <div className="md:space-x-4 space-y-4 md:space-y-0 flex flex-col md:flex-row md:justify-center md:items-center">
          <Link
            title="Abre em outra janela"
            target="_blank"
            className="lg:mx-auto
            lg:text-base text-lg transition-colors duration-300  
               text-indigo-600 underline underline-offset-4 hover:no-underline text-nowrap active:scale-95"
            href="https://www.airbnb.com.br/rooms/1049859270366355530/reviews?preview_for_ml=true&source_impression_id=p3_1702991100_xtLxwyiJs7cmelpN&scroll_to_review=1267497349451369858"
          >
            Comentários no Airbnb
          </Link>

          <Link
            title="Abre em outra janela"
            target="_blank"
            className="lg:mx-auto
            lg:text-base text-lg transition-colors duration-300  
               text-indigo-600 underline underline-offset-4 hover:no-underline text-nowrap active:scale-95"
            href="https://www.booking.com/hotel/br/pousada-casas-boutique-ella-amp-nina-no-patacho.pt-br.html#tab-reviews"
          >
            Comentários no Booking.com
          </Link>
        </div>
      </div>
    </>
  );
}

export default TestimonialsList;
