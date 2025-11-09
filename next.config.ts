const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sap.sc.gov.br",
      },
      {
        protocol: "https",
        hostname: "repositorio.ciasc.sc.gov.br",
      },
    ],
  },
};

export default nextConfig;