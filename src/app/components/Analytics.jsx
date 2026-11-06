"use client";

// Google Analytics 4 com consentimento (LGPD), o mesmo padrão do ttcab e da agenda
// (06/11/2026). Nada do Google carrega antes do "Aceitar": sem script, sem cookie.
// A escolha fica no localStorage do visitante; o link "Cookies" no rodapé reabre o
// aviso. Só mede no domínio oficial (não no localhost nem na cópia da Vercel).
// Tag do Google do fluxo "Casas Boutique Patacho" (GTM-MZJB5GCH → GA4 G-BLKZSPDWCC):
// a configuração do GA4 (destino, medição otimizada, cliques de saída) mora no contêiner.
// Os domínios do Google estão liberados na CSP do public/.htaccess.
import { useEffect, useState, useSyncExternalStore } from "react";
import { useLocale } from "next-intl";

const TAG_ID = "GTM-MZJB5GCH";
const HOSTS = ["casasboutiquepatacho.com.br", "www.casasboutiquepatacho.com.br"];
const KEY = "cbp-consent";
const OPEN_EVENT = "cbp:cookies";
const CHANGE_EVENT = "cbp:consent";

const T = {
  pt: {
    title: "Cookies e privacidade",
    text: "Usamos o Google Analytics para entender como o site é visitado. Ele só é ativado se você aceitar.",
    accept: "Aceitar",
    decline: "Recusar",
    settings: "Cookies",
  },
  en: {
    title: "Cookies and privacy",
    text: "We use Google Analytics to understand how the site is visited. It is only turned on if you accept.",
    accept: "Accept",
    decline: "Decline",
    settings: "Cookies",
  },
  es: {
    title: "Cookies y privacidad",
    text: "Usamos Google Analytics para entender cómo se visita el sitio. Solo se activa si aceptas.",
    accept: "Aceptar",
    decline: "Rechazar",
    settings: "Cookies",
  },
};

function read() {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function save(c) {
  try {
    localStorage.setItem(KEY, c);
  } catch {}
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(cb) {
  window.addEventListener(CHANGE_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

function loadTag() {
  if (window.gtag || !HOSTS.includes(location.hostname)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${TAG_ID}`;
  document.head.appendChild(s);
}

/** Apaga os cookies _ga* (quem aceitou e depois recusou). */
function clearGaCookies() {
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const domain of ["", "; domain=.casasboutiquepatacho.com.br", "; domain=casasboutiquepatacho.com.br"]) {
      document.cookie = `${name}=; max-age=0; path=/${domain}`;
    }
  }
}

/** Link do rodapé que reabre o aviso. */
export function CookieSettingsLink({ className = "" }) {
  const t = T[useLocale()] || T.pt;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={`underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
    >
      {t.settings}
    </button>
  );
}

export default function Analytics() {
  const t = T[useLocale()] || T.pt;
  // no HTML estático ainda não se sabe a escolha: nada aparece até hidratar
  const choice = useSyncExternalStore(subscribe, read, () => "ssr");
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    if (choice === "granted") loadTag();
  }, [choice]);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const choose = (c) => {
    const before = read();
    setReopened(false);
    save(c);
    if (c === "denied" && before === "granted") {
      clearGaCookies();
      location.reload();
    }
  };

  const open = choice === null || (reopened && choice !== "ssr");
  if (!open) return null;

  return (
    <section
      role="region"
      aria-label={t.title}
      className="fixed inset-x-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-50 rounded-3xl border border-white/10 bg-indigo-950/95 p-5 text-white shadow-[0_16px_44px_rgba(20,18,45,0.45)] backdrop-blur-xl sm:left-6 sm:right-auto sm:max-w-sm"
    >
      <p className="font-title text-xl">{t.title}</p>
      <p className="mt-1.5 font-body text-sm font-light leading-relaxed text-white/85">{t.text}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-full bg-white px-5 py-2.5 font-body text-[12px] font-bold uppercase tracking-[1px] text-indigo-950 transition-colors hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {t.accept}
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-full border border-white/40 px-5 py-2.5 font-body text-[12px] font-bold uppercase tracking-[1px] text-white transition-colors hover:border-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {t.decline}
        </button>
      </div>
    </section>
  );
}
