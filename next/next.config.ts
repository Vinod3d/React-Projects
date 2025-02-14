import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // Fixed hostname
        pathname: '/photo/**', // Allow all photos under /photo directory
      },
      {
        protocol: 'https',
        hostname: 'www.course-api.com', // Fixed hostname
        pathname: '/images/**', // Allow all photos under /photo directory
      },
    ],
  },
};

export default nextConfig;
