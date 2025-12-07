// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://tobezdev.com",
  trailingSlash: "never",

  redirects: {
      '/redirect/audius-profile': { destination: 'https://audius.co/tobezdev', status: 302 },
      '/redirect/audius-discord': { destination: 'https://discord.gg/audius', status: 302 },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});