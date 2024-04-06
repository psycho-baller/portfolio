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
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  server: {
    port: 3000
  },

});