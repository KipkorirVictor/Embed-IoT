import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? '/KipkorirVictor' : '',
  assetPrefix: isProd ? '/Embed-IoT/' : '',

  images: {
    unoptimized: true,
  },

  output: 'export',
}

export default nextConfig;
