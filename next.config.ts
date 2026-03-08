import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Explicitly disable turbopack by not providing it or forcing webpack if needed, 
  // but better to just use webpack config and run with --webpack if next 16 defaults to turbo.
  // OR add empty turbopack config as suggested to silence error if we want to try turbo, 
  // BUT we have webpack rules for mp4 that won't work in turbo without migration.
  // So we should force webpack usage or migrate.
  // For simplicity and compatibility with file-loader, we'll try to run with `next dev --webpack` 
  // OR we can try to use a different approach for videos that doesn't require webpack loader (e.g. public folder).
  
  // Since I cannot change the run command easily without user intervention or overriding script,
  // I will try to update the dev script in package.json to use --webpack
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/media/",
          outputPath: "static/media/",
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
