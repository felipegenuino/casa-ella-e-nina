import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules"; // Corrigido
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale"; // Locale para formato em português
import testimonials from "./testimonials";
import Image from "next/image";

const TestimonialSlides = () => {
  console.log("Testimonials data:", testimonials);
  console.log("Swiper configuration:", Swiper);

  return (
    <div className="testimonial-container mx-6  _max-w-4xl   py-10 px-4">
      <Swiper
        modules={[Navigation, Pagination, A11y]} // Corrigido
        navigation
        pagination={{ clickable: true }}
        className="testimonial-swipe"
        slidesPerView={1.4}
        centeredSlides
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 1.4 },
          1024: { slidesPerView: 2.4 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="flex w-[300px] h-full flex-col items-start justify-stretch even:bg-white odd:bg-slate-50 p-5 py-12  lg:rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                width={500}
                height={500}
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16  rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.time}</p>
              </div>
            </div>

            <div className="testimonial-content text-gray-800 space-y-4">
              {testimonial.comment.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="testimonial-footer text-sm text-gray-500 mt-4">
              {`Há ${formatDistanceToNow(parseISO(testimonial.date), {
                locale: ptBR,
              })}`}
            </div>

            <p className="mt-auto md:mt-0 lg:mt-auto md:px-4 lg:px-0 ">
              <span className="text-black text-xl ">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlides;
