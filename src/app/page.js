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

      <Footer />
    </main>
  );
}
