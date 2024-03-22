import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rami-maalouf.tech',
  redirects:
  {
    "/resume": "https://docs.google.com/document/d/1tY_v0Se3EH0pbjVZ5-hqM8I8uq0jK4ctuRLBOG4_JrI/edit?usp=sharing",
    "/linkedin": "https://www.linkedin.com/in/rami--maalouf/",
    "/youtube": "https://youtube.com/@ramimaalouf?sub_confirmation=1",
    "/simplify": "/reflections/simplify-application"
  },
  integrations: [
    react(),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: {
        applyBaseStyles: false
      }
    }),
    solidJs({
      include: ["**/NavLinks.tsx"]
    })
  ],
  devOverlay: true,
  // output: "server",
  // adapter: vercel(),
  server: {
    port: 3000
  },

});