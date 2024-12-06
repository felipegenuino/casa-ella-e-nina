import { useState, useEffect } from "react";

export default function BarraSticky() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExitingHero, setIsExitingHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      const footerSection = document.getElementById("footer-section");
      const stickyBar = document.getElementById("sticky-bar");

      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        // Detecta se saiu da Hero
        if (heroBottom <= 0) {
          setIsExitingHero(true);
        } else {
          setIsExitingHero(false);
        }
      }

      if (footerSection) {
        const footerTop = footerSection.getBoundingClientRect().top;

        // Exibe a barra sticky quando chega no footer
        if (footerTop <= window.innerHeight) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra sticky só aparece ao sair da Hero ou ao chegar no Footer */}
      {isExitingHero && (
        <div
          className={`fixed w-full bottom-0 z-50 bg-white shadow-md py-3 transition-transform ${
            isVisible ? "transform translate-y-0" : "transform translate-y-full"
          }`}
          id="sticky-bar"
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Botão: Conferir Disponibilidade */}
            <a
              href="#disponibilidade"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow transition-all active:scale-95"
            >
              Conferir Disponibilidade
            </a>

            {/* Botão: Falar com a Anfitriã */}
            <a
              href="#fale-com-anfitria"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 shadow transition-all active:scale-95"
            >
              Falar com a Anfitriã
            </a>
          </div>
        </div>
      )}
    </>
  );
}
