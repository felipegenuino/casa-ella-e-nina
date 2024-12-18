const nextConfig = {
  output: "export", // Gera arquivos estáticos
  reactStrictMode: true, // (opcional) habilita modo estrito
  swcMinify: true,
  images: {
    unoptimized: true, // Desativa otimização automática de imagens
  },
};

export default nextConfig;
