/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1380, 1920, 2048, 3840],
    domains: ["i.dummyjson.com"],
  },
};

module.exports = nextConfig;
