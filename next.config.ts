import type { NextConfig } from "next";

// GitHub Pages serves static files only, so the site is exported as plain HTML.
// A user page (<user>.github.io) is served from the root and needs no basePath;
// a project page lives under /<repo>/ and does. Set NEXT_PUBLIC_BASE_PATH for
// the latter — e.g. "/portfolio".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // There is no server on Pages to run Next's image optimizer.
  images: { unoptimized: true },
  // Emits /path/index.html, which static hosts resolve without extra rules.
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  // The project sits below an unrelated parent lockfile; pin the root so
  // Turbopack does not walk up and find it.
  turbopack: { root: __dirname },
};

export default nextConfig;
