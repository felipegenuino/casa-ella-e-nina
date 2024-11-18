"use client";

import Image from "next/image";

// src/app/page.js
import Hero from "./blocks/Hero";
import RefugioLuxo from "./blocks/RefugioLuxo";
import Impact from "./blocks/Impact";
import Footer from "./blocks/Footer";
import Testimonials from "./blocks/Testimonials";
import Ambientes from "./blocks/Ambientes";
import SkipToContent from "./components/SkipToContent";
import MomentosCompartilhados from "./blocks/MomentosCompartilhados";
import Reserve from "./blocks/Reserve";
import Hero2 from "./blocks/Hero2";
import Amenities from "./blocks/Comodidades";
import Avaliacao from "./blocks/Avaliacao";
import FAQSection from "./blocks/Faq";
import { Brandy } from "@phosphor-icons/react";

export default function HomePage() {
  return (
    <main className="w-100" id="main-content">
      <SkipToContent />

      <Hero />
      {/* <RefugioLuxo /> */}
      <Ambientes />
      <Amenities />
      <Testimonials />
      <MomentosCompartilhados />
      <Reserve />
      <FAQSection />

      <div className="container mx-auto my-10">
        <div className="flex flex-col lg:flex-row items-center p-4 lg:p-5 rounded-3xl border shadow-lg">
          <div className="lg:w-2/3 p-4 lg:p-5 pt-0">
            <h1 className="text-4xl font-bold leading-tight text-gray-800">
              Border hero with cropped image and shadows
            </h1>
            <p className="text-lg mt-4 text-gray-600">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-700 transition duration-200">
                Primary
              </button>
              <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-200">
                Default
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 lg:ml-4 mt-6 lg:mt-0 overflow-hidden shadow-lg rounded-lg">
            <Image
              className="rounded-lg"
              src="/midias/instagram/h-4.jpg"
              alt="Bootstrap documentation"
              width="720"
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto my-5">
        <div className="relative p-8 text-center text-gray-500 bg-white border-2 border-dashed rounded-lg">
          <button
            type="button"
            className="absolute top-0 right-0 p-3 m-3 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300"
            aria-label="Close"
          >
            &times;
          </button>

          <Brandy className="mx-auto mt-5 mb-3 w-12 h-12 text-blue-500" />
          <h1 className="text-gray-800 font-bold text-3xl">
            Placeholder jumbotron
          </h1>

          <p className="mx-auto my-4 text-lg max-w-lg text-gray-600">
            This faded back jumbotron is useful for placeholder content. Its
            also a great way to add a bit of context to a page or section when
            no content is available and to encourage visitors to take a specific
            action.
          </p>

          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition mb-5">
            Call to action
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <footer className="flex flex-wrap justify-between items-center py-3 my-4 border-t">
          <p className="w-full md:w-auto mb-3 md:mb-0 text-gray-600">
            © 2024 Company, Inc
          </p>

          <a
            href="/"
            className="w-full md:w-auto flex items-center justify-center mb-3 md:mb-0 text-gray-800"
          >
            <Brandy className="mx-auto mt-5 mb-3 w-12 h-12 text-blue-500" />
          </a>

          <ul className="flex justify-center md:justify-end w-full md:w-auto space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>

      <Footer />
    </main>
  );
}
