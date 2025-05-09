/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // This is for demonstration only. Don't disable type checking in production!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
