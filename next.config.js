/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'firebasestorage.googleapis.com',
      'xsgames.co',
    ],
  },
};

module.exports = nextConfig;
