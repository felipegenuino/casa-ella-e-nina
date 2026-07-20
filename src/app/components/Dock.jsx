"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const SECTIONS = [
  { id: "ambientes", key: "ambientes" },
  { id: "comodidades", key: "comodidades" },
  { id: "historias", key: "avaliacoes" },
  { id: "reserve", key: "reserva" },
  { id: "faq", key: "faq" },
  { id: "fale-com-anfitria", key: "contato" },
];

const LANGS = [
  { code: "pt", flag: "/flags/br.svg", label: "Português" },
  { code: "en", flag: "/flags/gb.svg", label: "English" },
  { code: "es", flag: "/flags/es.svg", label: "Español" },
];

function TranslateIcon() {
  return (
    <svg className="h-[18px] w-[18px] flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}

function Caret({ open }) {
  return (
    <svg className={`h-3.5 w-3.5 flex-none transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Dock() {
  const t = useTranslations("dock");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [active, setActive] = useState(SECTIONS[0].id);
  const [present, setPresent] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const menuRef = useRef(null);
  const langRef = useRef(null);

  // Scroll suave até a seção. Animação própria (rAF + scroll instantâneo por
  // frame) porque o smooth nativo é intermitente neste layout; respeita
  // prefers-reduced-motion.
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const startY = window.scrollY;
    const targetY = el.getBoundingClientRect().top + startY;
    const finish = () => history.replaceState(null, "", `#${id}`);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      window.scrollTo({ top: targetY, behavior: "instant" });
      finish();
      return;
    }

    const dist = targetY - startY;
    const duration = 500;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    let startTime = null;
    const step = (now) => {
      if (startTime === null) startTime = now;
      const p = Math.min((now - startTime) / duration, 1);
      window.scrollTo({ top: startY + dist * easeOutCubic(p), behavior: "instant" });
      if (p < 1) requestAnimationFrame(step);
      else finish();
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const ids = SECTIONS.filter((s) => document.getElementById(s.id)).map((s) => s.id);
    setPresent(ids);
    if (ids.length) setActive(ids[0]);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    }
    function onKey(e) { if (e.key === "Escape") { setMenuOpen(false); setLangOpen(false); } }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onClick); document.removeEventListener("keydown", onKey); };
  }, []);

  const visible = SECTIONS.filter((s) => present.includes(s.id));
  const current = LANGS.find((l) => l.code === locale) || LANGS[0];

  return (
    <nav
      aria-label={t("menu")}
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-indigo-950/95 p-1.5 shadow-[0_16px_44px_rgba(20,18,45,0.45)] backdrop-blur-xl">
        {/* MENU */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => { setMenuOpen((v) => !v); setLangOpen(false); }}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[12px] font-bold uppercase tracking-[1px] transition-colors ${
              menuOpen ? "border-white/40 bg-white/10 text-white" : "border-white/25 text-white/85 hover:border-white/40 hover:text-white"
            }`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            {t("menu")}
          </button>
          {menuOpen && (
            <div className="absolute bottom-[calc(100%+12px)] left-0 z-[5] flex min-w-[190px] flex-col gap-0.5 rounded-2xl border border-white/10 bg-indigo-950/95 p-1.5 shadow-[0_18px_44px_rgba(6,26,32,0.5)] backdrop-blur-xl">
              {visible.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={scrollToId(s.id)}
                  className={`rounded-xl px-3 py-2.5 text-[14px] font-semibold transition-colors ${
                    active === s.id ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {t(s.key)}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* IDIOMA */}
        <div ref={langRef} className="relative">
          <button
            type="button"
            onClick={() => { setLangOpen((v) => !v); setMenuOpen(false); }}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
            aria-label={t("langLabel")}
            className={`flex items-center gap-2 rounded-full px-3 py-2.5 text-white/85 transition-colors hover:bg-white/10 hover:text-white ${langOpen ? "bg-white/10 text-white" : ""}`}
          >
            <TranslateIcon />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.flag} alt="" width="22" height="15" className="block h-[15px] w-[22px] rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.25)]" />
            <Caret open={langOpen} />
          </button>
          {langOpen && (
            <ul
              role="listbox"
              className="absolute bottom-[calc(100%+12px)] right-0 z-[5] flex min-w-[190px] flex-col gap-0.5 rounded-2xl border border-white/10 bg-indigo-950/95 p-1.5 shadow-[0_18px_44px_rgba(6,26,32,0.5)] backdrop-blur-xl"
            >
              {LANGS.map((l) => (
                <li key={l.code}>
                  <button
                    type="button"
                    onClick={() => { router.replace(pathname, { locale: l.code }); setLangOpen(false); }}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[14px] font-semibold transition-colors hover:bg-white/10 ${
                      l.code === locale ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.flag} alt="" width="22" height="15" className="block h-[15px] w-[22px] rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.25)]" />
                    <span className="flex-1">{l.label}</span>
                    <svg className={`h-4 w-4 flex-none text-indigo-300 transition-opacity ${l.code === locale ? "opacity-100" : "opacity-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA */}
        <a
          href="#reserve"
          onClick={scrollToId("reserve")}
          className="whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[12px] font-extrabold uppercase tracking-[1px] text-indigo-950 shadow-[0_0_0_4px_rgba(255,255,255,0.14)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
        >
          {t("cta")}
        </a>
      </div>
    </nav>
  );
}
