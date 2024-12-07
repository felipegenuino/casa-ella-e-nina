"use client";

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
import Avaliacao from "./blocks/Testimonials/Avaliacao";
import FAQSection from "./blocks/Faq";
import { Brandy } from "@phosphor-icons/react";
import FaleComAnfitria from "./blocks/FaleComAnfitria";
import BannerTop from "./blocks/BannerTop";
import BarraSticky from "./blocks/BarraSticky";

export default function HomePage() {
  return (
    <main className=" relative w-100  overflow-x-hidden" id="main-content">
      {/* <BannerTop /> */}

      <Hero />
      {/* <RefugioLuxo /> */}

      {/* <BarraSticky /> */}

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
