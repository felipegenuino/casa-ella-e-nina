import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// País (ISO-3166 alpha-2) -> idioma. Usado só como REFORÇO de região, quando o
// navegador não aponta pra um idioma que o site suporta. Ex.: brasileiro com o
// celular em inglês ainda cai em pt; argentino com navegador em inglês cai em es.
const COUNTRY_TO_LOCALE = {
  // Português
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt", CV: "pt", GW: "pt", ST: "pt", TL: "pt",
  // Espanhol
  ES: "es", AR: "es", MX: "es", CO: "es", CL: "es", PE: "es", UY: "es", PY: "es",
  BO: "es", EC: "es", VE: "es", GT: "es", CR: "es", PA: "es", DO: "es", HN: "es",
  NI: "es", SV: "es", CU: "es", PR: "es",
  // Inglês
  US: "en", GB: "en", CA: "en", AU: "en", NZ: "en", IE: "en", IN: "en", ZA: "en",
  SG: "en", PH: "en", NG: "en",
};

const SUPPORTED = routing.locales;

// O navegador já pede um idioma que suportamos?
function browserSupportsLocale(accept) {
  if (!accept) return false;
  return accept
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase())
    .some((lang) => SUPPORTED.includes(lang));
}

export default function middleware(req) {
  const hasManualChoice = req.cookies.has("NEXT_LOCALE");
  const accept = req.headers.get("accept-language");

  // Só usamos a região quando NÃO há escolha salva e o navegador não indica um
  // idioma suportado. Aí o país (geo-IP da Vercel) decide.
  if (!hasManualChoice && !browserSupportsLocale(accept)) {
    const country = req.headers.get("x-vercel-ip-country");
    const regionLocale = country ? COUNTRY_TO_LOCALE[country.toUpperCase()] : undefined;

    if (regionLocale) {
      const headers = new Headers(req.headers);
      headers.set("accept-language", regionLocale);
      return intlMiddleware(new NextRequest(req.url, { headers }));
    }
  }

  return intlMiddleware(req);
}

export const config = {
  // Roda em todas as rotas, menos API, internos do Next e arquivos com extensão.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
