/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'placebeard.it',
        port: '',
      },
    ]
  },
};

export default nextConfig;
