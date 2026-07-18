import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Idiomas suportados
  locales: ["pt", "en", "es"],
  // Idioma padrão (pt-BR)
  defaultLocale: "pt",
});
