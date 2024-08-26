/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["newsroom.porsche.com"], // Add allowed external image domains here
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
