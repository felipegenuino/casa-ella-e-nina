"use client";

// src/app/page.js
import Hero from "./blocks/Hero";
import Footer from "./blocks/Footer";
import Testimonials from "./blocks/Testimonials";
import Ambientes from "./blocks/Ambientes";
import MomentosCompartilhados from "./blocks/MomentosCompartilhados";
import Reserve from "./blocks/Reserve";
import Amenities from "./blocks/Comodidades";
import FAQSection from "./blocks/Faq";
import FaleComAnfitria from "./blocks/FaleComAnfitria";
import BannerTop from "./blocks/BannerTop";

export default function HomePage() {
  return (
    <main id="main-content" className=" relative w-100  overflow-x-hidden">
      {/* <BannerTop /> */}
      <Hero />
      <Ambientes />
      <Amenities />
      <Testimonials />
      <MomentosCompartilhados />
      <Reserve />
      <FAQSection />
      <FaleComAnfitria />
      <Footer />
    </main>
  );
}
