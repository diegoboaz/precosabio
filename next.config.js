/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mongoose'] // Mantém a configuração de pacotes externos
  },
  images: {
    domains: ['m.media-amazon.com'] // Configura o carregamento de imagens de domínios específicos
  }
}

module.exports = nextConfig;
