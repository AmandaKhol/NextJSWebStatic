import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/basicBuild", // Asegura que las rutas de los recursos se incluyan correctamente en el subdirectorio
  images: {
    loader: "default",
    path: "/basicBuild/_next/image", // Prefijo para las imágenes optimizadas de Next.js
  },
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
  }),
};

export default nextConfig;
