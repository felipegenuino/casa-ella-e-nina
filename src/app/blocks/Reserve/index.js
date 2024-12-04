import Image from "next/image";
import React from "react";

export default function Reserve() {
  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4  md:px-8">
        <div className="space-y-12">
          <h3 className="text-gray-800 text-3xl font-regular sm:text-4xl">
            Reserve Sua Estadia Perfeita
          </h3>
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="mt-3 text-gray-600">
                Escolha a melhor plataforma para garantir uma experiência
                inesquecível na Praia do Patacho.
              </p>
              <p>
                Faça sua reserva de forma rápida e segura com nossos parceiros
                de confiança.
              </p>
            </div>
            <div className="flex gap-3 ">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-block py-2 px-4 text-white font-medium bg-[#E61E4D] duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
                aria-label="Reservar no Airbnb"
              >
                <Image
                  width={100}
                  height={32}
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
                <Image
                  width={133}
                  height={24}
                  aria-hidden="true"
                  src="/midias/brands/booking-white.svg"
                  alt="booking.com"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
