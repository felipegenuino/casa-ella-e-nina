import React from "react";

export default function Reserve() {
  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-regular sm:text-4xl">
            Reserve sua estadia perfeita
          </h3>
          <p className="mt-3 text-gray-600">
            Escolha a melhor plataforma para garantir uma experiência
            inesquecível na Praia do Patacho. Faça sua reserva de forma rápida e
            segura com nossos parceiros de confiança.
          </p>
        </div>
        <div className="flex gap-3 items-center mt-4 md:justify-center">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-block py-2 px-4 text-white font-medium bg-[#E61E4D] duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            aria-label="Reservar no Airbnb"
          >
            <img
              className="h-8"
              aria-hidden="true"
              src="/midias/brands/airbnb-white.svg"
              alt="airbnb"
              w
            />
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-block py-3 px-4 text-white font-medium bg-[#003B95] duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            aria-label="Reservar no Booking.com"
          >
            <img
              className="h-6"
              aria-hidden="true"
              src="/midias/brands/booking-white.svg"
              alt="booking.com"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
