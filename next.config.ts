import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The workspace sits outside any parent lockfile; pin the root so Turbopack
  // does not walk up and pick up an unrelated package-lock.json.
  turbopack: { root: __dirname },
};

export default nextConfig;
