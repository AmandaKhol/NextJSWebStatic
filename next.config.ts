import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
