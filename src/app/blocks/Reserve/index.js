import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Reserve() {
  return (
    <section id="reserve" className="py-32 min-h-screen lg:px-8 bg-white">
      <div className="max-w-screen-md mx-auto px-6 md:px-0 mb-8 w-full">
        <div className="space-y-5">
          <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl">
            Reserve Sua Estadia
          </h2>
          <p className="text-gray-600">
            Escolha uma de nossas casas boutique e finalize sua reserva pelo Airbnb.
          </p>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto px-6 md:px-0 mb-8 w-full">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card Casa Ella */}
          <Link
            href="https://www.airbnb.com.br/rooms/987771438493887391?preview_for_ml=true&source_impression_id=p3_1702991668_DGJbiGH7c6Bx0E9I"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white shadow-md rounded-lg overflow-hidden relative transition-all hover:shadow-2xl"
          >
            <div className="relative">
              <Image
                src="/midias/reserve/bg-casa-ella.jpg"
                alt="Casa Ella"
                width={600}
                height={400}
                className="w-full object-cover transition-transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-indigo-950/60 flex flex-col justify-center items-center text-white text-center">
                <h3 className="text-5xl font-semibold">Casa Ella</h3>
                <p className="mt-2 text-indigo-50 text-sm">
                  Acomode-se na charmosa Casa Ella.
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Image
                width={100}
                height={32}
                src="/midias/brands/airbnb-white.svg"
                alt="Reservar no Airbnb"
              />
            </div>
          </Link>

          {/* Card Casa Nina */}
          <Link
            href="https://www.airbnb.com.br/rooms/1049859270366355530?preview_for_ml=true&source_impression_id=p3_1702991100_xtLxwyiJs7cmelpN"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white shadow-md rounded-lg overflow-hidden relative transition-all hover:shadow-2xl"
          >
            <div className="relative">
              <Image
                src="/midias/reserve/bg-casa-nina.jpg"
                alt="Casa Nina"
                width={600}
                height={400}
                className="w-full object-cover transition-transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-indigo-950/60 flex flex-col justify-center items-center text-white text-center">
                <h3 className="text-5xl font-semibold">Casa Nina</h3>
                <p className="mt-2 text-indigo-50 text-sm">
                  Acomode-se na charmosa Casa Nina.
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Image
                width={100}
                height={32}
                src="/midias/brands/airbnb-white.svg"
                alt="Reservar no Airbnb"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}