/** @type {import('next').NextConfig} */
const nextConfig = {
  // only for dev
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'stoprocent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
