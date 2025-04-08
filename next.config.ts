import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/basicBuild" : "", // Asegura que las rutas de los recursos se incluyan correctamente en el subdirectorio
  assetPrefix: isProd ? "/basicBuild" : "",
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
  }),
};

export default nextConfig;
