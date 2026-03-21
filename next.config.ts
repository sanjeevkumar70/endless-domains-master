/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all (or restrict if needed)
      },
    ],
  },
};

module.exports = nextConfig;