import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Site estático (HostGator) — gera ./out com /pt /en /es
  trailingSlash: true, // gera pasta/index.html — Apache serve sem depender de MultiViews
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Desativa otimização automática (obrigatório no export)
  },
};

export default withNextIntl(nextConfig);
