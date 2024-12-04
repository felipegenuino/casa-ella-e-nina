import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <div
          className="
        flex 
        flex-col 
        md:flex-row-reverse
        lg:flex-col
        md:justify-between
        items-start 
        lg:items-center 
        lg:text-center"
        >
          <Image
            src="/midias/brands/casas-ella-e-nina.jpg"
            width={180}
            height={180}
            alt=""
            aria-hidden="true"
            className=""
          />

          <div className="flex flex-col  lg:flex-row   items-center lg:justify-center mt-8 space-y-2 lg:space-y-0">
            <Link
              href="/"
              className="w-full
              mx-4 lg:text-base text-lg transition-colors duration-300   text-indigo-400 underline underline-offset-4 hover:no-underline"
            >
              Reserve
            </Link>

            <Link
              href="/"
              className="w-full
              mx-4 lg:text-base text-lg transition-colors duration-300   text-indigo-400 underline underline-offset-4 hover:no-underline"
            >
              Ambientes
            </Link>

            <Link
              href="/"
              className="w-full
              mx-4 lg:text-base text-lg transition-colors duration-300   text-indigo-400 underline underline-offset-4 hover:no-underline"
              aria-label="Reddit"
            >
              Comodidades
            </Link>

            <Link
              href="/"
              className="w-full
              mx-4 lg:text-base text-lg transition-colors duration-300   text-indigo-400 underline underline-offset-4 hover:no-underline text-nowrap"
            >
              Fale conosco
            </Link>

            <Link
              href="#"
              className="w-full
              mx-4 lg:text-base text-lg transition-colors duration-300   text-indigo-400 underline underline-offset-4 hover:no-underline text-nowrap"
            >
              Perguntas Frequentes
            </Link>
          </div>
        </div>

        <div className=" mt-12 flex flex-col md:flex-row justify-between lg:justify-center text-sm lg:text-center text-gray-500  space-y-4 md:space-y-0 md:space-x-4 ">
          <Link
            href="mailto:contato@ellaninaboutique.com"
            className=" px-4 py-2 text-center border duration-200 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg  text-dark  hover:from-gray-100 hover:to-gray-50 hover:shadow-lg transition-all  active:scale-95 active:shadow-sm"
          >
            contato@ellaninaboutique.com
          </Link>

          <Link
            href="https://wa.me/5581987654321"
            target="_blank"
            className=" px-4 py-2  text-center border duration-200 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg   text-white  hover:from-pink-500 hover:to-purple-500 hover:shadow-lg transition-all  active:scale-95 active:shadow-sm
           "
          >
            WhatsApp: +55 81 98765-4321
          </Link>
        </div>
      </div>
    </footer>
  );
}
