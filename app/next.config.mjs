/** @type {import('next').NextConfig} */
const nextConfig = {
  // next/image optimisation is handled by Amplify (WEB platform).
  images: {
    unoptimized: true,
  },

  trailingSlash: false,
};

export default nextConfig;
