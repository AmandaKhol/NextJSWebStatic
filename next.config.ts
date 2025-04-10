import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isProd = process.env.NODE_ENV === "production";

export const projectPath = isProd ? "/NextJSWebStatic" : "";

const nextConfig: NextConfig = {
  basePath: projectPath,
  assetPrefix: projectPath,
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
  }),
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
