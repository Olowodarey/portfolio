import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Ignore Playwright MCP test artifacts (screenshots/logs) so writes
      // there don't trigger endless dev-server recompiles.
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/.playwright-mcp/**",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
