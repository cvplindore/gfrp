import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "i.postimg.cc",
      "cdn.prod.website-files.com",
      "images.unsplash.com",
      "composite-tech.com",
      "127.0.0.1",
      "gfrp-india.onrender.com",
    ],
  },
};

export default nextConfig;