import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Reserve() {
  return (
    <section id="reserve" className="py-32 min-h-screen lg:px-8 bg-white">
      <div className=" max-w-screen-md  mx-auto  px-6 md:px-0 mb-8 w-full">
        {/* <p className="text-indigo-600 font-light py-2">
          O Que Nossos Hóspedes Dizem
        </p> */}
        <div className="space-y-5">
          <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl">
            Reserve Sua Estadia
          </h2>

          <div className="text-gray-500  ">
            <p className="xs:mt-3 text-gray-600">
              Escolha uma de nossas casas boutique e finalize sua reserva pelo
              Airbnb ou Booking.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto  px-6 md:px-0 mb-8 w-full">
        {/* Escolha entre as casas */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card Casa Ella */}
          <div
            id="reserve-casa-ella"
            className="bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            <header
              className="
            flex flex-col justify-center 
            px-8 pt-8 pb-8 
            absolute left-0 right-0 top-0  bg-indigo-950/90 "
            >
              <h3 className="text-white text-5xl font-regular">Casa Ella</h3>
              <p className="mt-2 text-indigo-300 text-sm">
                Acomode-se na charmosa Casa Ella.
              </p>
            </header>
            <Image
              src="./midias/reserve/bg-casa-ella.jpg"
              alt="Casa Nina"
              width={300}
              height={200}
              className=" object-cover w-full"
            />
            <footer
              className=" 
              flex justify-center 
            absolute left-0 right-0 bottom-0  
               _bg-orange-200  "
            >
              <div
                className="   
                flex justify-center
                 bg-black/70   
                py-4 space-x-4
                 px-4  mx-4 mb-4
               rounded-full"
              >
                <a
                  href="https://www.airbnb.com.br/rooms/987771438493887391?preview_for_ml=true&source_impression_id=p3_1702991668_DGJbiGH7c6Bx0E9I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-[#E61E4D] 
                flex py-2 px-6 text-white font-medium
                rounded-full shadow-md 
                duration-150 
                transition-all 
                  hover:bg-gradient-to-r
                  hover:from-indigo-500 hover:to-indigo-400  
                  active:from-indigo-600 active:to-indigo-600 
                  hover:shadow-xl 
                  active:scale-95 
                  active:shadow-sm   
                "
                  aria-label="Reservar casa Ela no Airbnb"
                >
                  <Image
                    width={100}
                    height={32}
                    aria-hidden="true"
                    src="/midias/brands/airbnb-white.svg"
                    alt="airbnb"
                  />
                </a>

                <Link
                  href="https://www.booking.com/hotel/br/pousada-casas-boutique-ella-amp-nina-no-patacho.pt-br.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" 
                 bg-[#003B95] 
                flex py-2 px-6 text-white font-medium
                rounded-full shadow-md 
                duration-150 
                transition-all 
                  hover:bg-gradient-to-r
                  hover:from-indigo-500 hover:to-indigo-400  
                  active:from-indigo-600 active:to-indigo-600 
                  hover:shadow-xl 
                  active:scale-95 
                  active:shadow-sm  "
                  aria-label="Reservar no Booking.com"
                >
                  <Image
                    width={133}
                    height={24}
                    aria-hidden="true"
                    src="/midias/brands/booking-white.svg"
                    alt="booking.com"
                  />
                </Link>
              </div>
            </footer>
          </div>
          {/* end Card Casa Ella */}

          {/* Card Casa Nina */}
          <div
            id="reserve-casa-nina"
            className="bg-white shadow-md   rounded-lg overflow-hidden relative"
          >
            <header
              className="
            flex flex-col justify-center 
            px-8 pt-8 pb-8 
            absolute left-0 right-0 top-0  bg-indigo-950/90 "
            >
              <h3 className="text-white text-5xl font-regular">Casa Nina</h3>
              <p className="mt-2 text-indigo-300 text-sm">
                Acomode-se na charmosa Casa Nina.
              </p>
            </header>
            <Image
              src="./midias/reserve/bg-casa-nina.jpg"
              alt="Casa Nina"
              width={300}
              height={200}
              className=" object-cover w-full"
            />
            <footer
              className=" 
              flex justify-center 
            absolute left-0 right-0 bottom-0  
               _bg-orange-200  "
            >
              <div
                className="   
                flex justify-center
                 bg-black/70   
                py-4 space-x-4
                 px-4  mx-4 mb-4
               rounded-full"
              >
                <Link
                  href="https://www.airbnb.com.br/rooms/1049859270366355530?preview_for_ml=true&source_impression_id=p3_1702991100_xtLxwyiJs7cmelpN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" bg-[#E61E4D] 
                flex py-2 px-6 text-white font-medium
                rounded-full shadow-md 
                duration-150 
                transition-all 
                  hover:bg-gradient-to-r
                  hover:from-indigo-500 hover:to-indigo-400  
                  active:from-indigo-600 active:to-indigo-600 
                  hover:shadow-xl 
                  active:scale-95 
                  active:shadow-sm   
                "
                  aria-label="Reservar casa Nina no Airbnb"
                >
                  <Image
                    width={100}
                    height={32}
                    aria-hidden="true"
                    src="/midias/brands/airbnb-white.svg"
                    alt="airbnb"
                  />
                </Link>

                <Link
                  href="https://www.booking.com/hotel/br/pousada-casas-boutique-ella-amp-nina-no-patacho.pt-br.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" 
                 bg-[#003B95] 
                flex py-2 px-6 text-white font-medium
                rounded-full shadow-md 
                duration-150 
                transition-all 
                  hover:bg-gradient-to-r
                  hover:from-indigo-500 hover:to-indigo-400  
                  active:from-indigo-600 active:to-indigo-600 
                  hover:shadow-xl 
                  active:scale-95 
                  active:shadow-sm  "
                  aria-label="Reservar no Booking.com"
                >
                  <Image
                    width={133}
                    height={24}
                    aria-hidden="true"
                    src="/midias/brands/booking-white.svg"
                    alt="booking.com"
                  />
                </Link>
              </div>
            </footer>
          </div>
          {/* end Card Casa Nina */}
        </div>
      </div>
    </section>
  );
}
