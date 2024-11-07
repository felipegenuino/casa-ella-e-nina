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

export default function HomePage() {
  return (
    <main className="w-100 p-4" id="main-content">
      <SkipToContent />
      <Hero />
      {/* <RefugioLuxo /> */}
      <Ambientes />
      <Testimonials />
      <MomentosCompartilhados />
      <Reserve />
      <Footer />
    </main>
  );
}
