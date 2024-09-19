import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://emmanuel-mendez.github.io',
  integrations: [tailwind({
      nesting: true,
    })]
});