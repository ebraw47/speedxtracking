import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/posts/for-retailers.html",
        destination: "/posts/for-retailers",
        permanent: true,
      },
      {
        source: "/posts/for-logistics-providers.html",
        destination: "/posts/for-logistics-providers",
        permanent: true,
      },
      {
        source: "/posts/cross-border-shipping.html",
        destination: "/posts/cross-border-shipping",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
