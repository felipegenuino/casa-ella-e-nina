"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// Seções do dock: id da <section> no DOM + chave de rótulo (namespace "dock").
const SECTIONS = [
  { id: "ambientes", key: "ambientes" },
  { id: "comodidades", key: "comodidades" },
  { id: "historias", key: "avaliacoes" },
  { id: "reserve", key: "reserva" },
  { id: "faq", key: "faq" },
  { id: "fale-com-anfitria", key: "contato" },
];

const LANG_LABELS = { pt: "PT", en: "EN", es: "ES" };

export default function Dock() {
  const t = useTranslations("dock");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(SECTIONS[0].id);
  const [present, setPresent] = useState([]);
  const [langOpen, setLangOpen] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  const linksRef = useRef(null);
  const itemRefs = useRef({});
  const langRef = useRef(null);
  const hovering = useRef(false);

  // Aparece depois de rolar ~70% da primeira dobra.
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Quais seções existem na página.
  useEffect(() => {
    const ids = SECTIONS.filter((s) => document.getElementById(s.id)).map((s) => s.id);
    setPresent(ids);
    if (ids.length) setActive(ids[0]);
  }, []);

  // Scrollspy.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Fecha o dropdown de idioma ao clicar fora.
  useEffect(() => {
    function onClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const movePillTo = useCallback((id) => {
    if (!id) {
      setPill((p) => ({ ...p, opacity: 0 }));
      return;
    }
    const el = itemRefs.current[id];
    if (!el) return;
    setPill({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
  }, []);

  useEffect(() => {
    if (!hovering.current) movePillTo(active);
  }, [active, shown, movePillTo]);

  useEffect(() => {
    const onResize = () => {
      if (!hovering.current) movePillTo(active);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, movePillTo]);

  const visible = SECTIONS.filter((s) => present.includes(s.id));

  return (
    <nav
      aria-label={t("menu")}
      className={`fixed bottom-3 left-3 right-3 z-40 transition-[opacity,transform] duration-500 md:bottom-5 md:left-1/2 md:right-auto md:-translate-x-1/2 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex w-full items-center gap-2 rounded-full bg-indigo-950 p-1.5 shadow-[0_16px_44px_rgba(20,18,45,0.4)] md:w-auto">
        {/* Links das seções (scrollspy) */}
        <div
          ref={linksRef}
          onMouseLeave={() => {
            hovering.current = false;
            movePillTo(active);
          }}
          className="relative flex flex-1 items-center gap-0.5 overflow-x-auto [scrollbar-width:none] md:flex-none [&::-webkit-scrollbar]:hidden"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-0 h-full rounded-full bg-white/15 transition-[transform,width,opacity] duration-300 ease-out"
            style={{ width: pill.width, transform: `translateX(${pill.left}px)`, opacity: pill.opacity }}
          />
          {visible.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                ref={(el) => {
                  itemRefs.current[s.id] = el;
                }}
                href={`#${s.id}`}
                onMouseEnter={() => {
                  hovering.current = true;
                  movePillTo(s.id);
                }}
                onFocus={() => {
                  hovering.current = true;
                  movePillTo(s.id);
                }}
                className={`relative z-[1] block shrink-0 whitespace-nowrap rounded-full px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[1px] transition-colors md:px-4 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {t(s.key)}
              </a>
            );
          })}
        </div>

        {/* Seletor de idioma */}
        <div ref={langRef} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setLangOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
            aria-label={t("langLabel")}
            className="flex items-center gap-1 rounded-full px-3 py-2.5 text-[11px] font-bold uppercase tracking-[1px] text-white/80 transition-colors hover:text-white"
          >
            {LANG_LABELS[locale]}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {langOpen && (
            <ul
              role="listbox"
              className="absolute bottom-full right-0 z-50 mb-3 min-w-[92px] overflow-hidden rounded-2xl bg-white py-1 shadow-[0_12px_30px_rgba(20,18,45,0.24)] ring-1 ring-black/5"
            >
              {routing.locales.map((loc) => (
                <li key={loc}>
                  <button
                    type="button"
                    onClick={() => {
                      router.replace(pathname, { locale: loc });
                      setLangOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left text-[12px] font-semibold uppercase tracking-[1px] transition-colors hover:bg-black/5 ${
                      loc === locale ? "text-indigo-900" : "text-gray-500"
                    }`}
                  >
                    {LANG_LABELS[loc]}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Reservar -> #reserve */}
        <a
          href="#reserve"
          className="shrink-0 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[1px] text-indigo-950 transition-all duration-200 hover:scale-[1.05] hover:bg-indigo-50 active:scale-[0.97]"
        >
          {t("cta")}
        </a>
      </div>
    </nav>
  );
}
