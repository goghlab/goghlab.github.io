// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: isProd ? "https://goghlab.github.io" : "http://localhost:3000",
  base: isProd ? "/goghlab.github.io/" : "/", // Adjusted the base property
});
