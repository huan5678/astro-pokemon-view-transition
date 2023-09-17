import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  integrations: [react(), vue(), tailwind()]
});