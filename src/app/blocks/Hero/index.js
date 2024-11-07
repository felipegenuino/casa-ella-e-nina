import styles from "./index.module.css";
import Image from "next/image";

import {
  WhatsappLogo,
  ArrowDown,
  Bed,
  Users,
  HouseSimple,
} from "@phosphor-icons/react";

// import HighlightsSection from "@/app/blocks/HighlightsSection";
import Hero2 from "@/app/blocks/Hero2";

export default function Hero() {
  return (
    <section className="hero bg-center	bg-top min-h-screen  justify-center flex flex-col">
      <Hero2 />
    </section>
  );
}
