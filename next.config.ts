import type { NextConfig } from "next";

// Подпуть GitHub Pages: https://<user>.github.io/loftika
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/loftika";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  trailingSlash: true,
};

export default nextConfig;
