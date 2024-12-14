import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FaleComAnfitria() {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="fale-com-anfitria"
      className="relative 
        bg-gradient-to-b from-white to-yellow-50 
        border-b border-yellow-200
        py-16
        lg:pt-24 lg:pb-0"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Imagem da anfitriã */}
          <div>
            <div
              className="rounded-xl _shadow-2xl overflow-hidden 
            border-b border-yellow-200 lg:border-0"
            >
              <Image
                src="/midias/host/anfitria.png"
                alt="Mariangela, anfitriã da Casa Boutique Ella e Nina"
                width={500}
                height={500}
                className="lg:object-cover"
              />
            </div>
          </div>

          {/* Conteúdo da seção */}
          <motion.div
            ref={inViewRef}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 mt-8 lg:mt-0 lg:pl-12"
          >
            <h2 className="text-3xl font-regular text-gray-800 sm:text-4xl">
              Fale com a Anfitriã
            </h2>
            <p className="text-lg text-gray-600">
              Olá! Sou Mariangela, sua anfitriã na Casa Boutique Ella e Nina.
              Estou à disposição para responder suas dúvidas e ajudá-lo a
              planejar uma estadia incrível.
            </p>
            <div
              className="
                flex 
                flex-col 
                md:flex-row 
                lg:flex-col 
                xl:flex-row
                items-center 
              space-y-2 
              md:space-x-4
              lg:space-x-0
              xl:space-y-0
              xl:space-x-6"
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5548996377637&text=Tenho%20uma%20dúvida%20relacionada%20a%20Casas%20Ella%20e%20Nina&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full md:w-auto lg:w-full
                button-whatsapp "
              >
                Mensagem no WhatsApp
              </Link>
              <Link
                href="mailto:anfitria@ellaninacasas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full md:w-auto lg:w-full"
              >
                Enviar Email
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Estamos prontos para tornar sua experiência inesquecível!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
