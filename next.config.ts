import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/NextJSWebStatic" : "",
  assetPrefix: isProd ? "/NextJSWebStatic" : "",
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
  }),
};

export default nextConfig;
