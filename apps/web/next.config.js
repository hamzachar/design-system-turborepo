import tailwindcss from "@tailwindcss/vite";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(tailwindcss());
    return config;
  },
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;
