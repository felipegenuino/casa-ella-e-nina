/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)", "sans-serif"], // Usando Fraunces
        body: ["var(--font-body)", "sans-serif"], // Usando Inter
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
