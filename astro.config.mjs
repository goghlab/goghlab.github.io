import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  integrations: [react(), tailwind()],
  base: "/",
  src: 'src',

  routes: [
    { src: '/about', dest: '/src/pages/about.astro' },
    { src: '/landing', dest: '/src/pages/landing.astro' },
    { src: '/autoshop', dest: '/src/pages/autoshop.astro' },  // Add this line
    { src: '/fuck', dest: '/src/pages/landing.astro' },
    { src: '/', dest: '/src/pages/index.astro' },
    // ... other routes
  ],
});
