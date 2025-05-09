/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './node_modules/next-cloudinary/src/index.js',
    domains: ['res.cloudinary.com'],
  },
  typescript: {
    // !! WARN !!
    // This is for demonstration only. Don't disable type checking in production!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
