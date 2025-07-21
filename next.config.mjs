/** @type {import('next').NextConfig} */
const nextConfig = {
  // SUA CONFIGURAÇÃO EXISTENTE (mantida)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'acdn-us.mitiendanube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'static.sizebay.technology',
      },
    ],
  },

  // NOVA CONFIGURAÇÃO PARA SVGs (adicionada)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;