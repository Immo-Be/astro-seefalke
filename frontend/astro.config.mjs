import {defineConfig} from 'astro/config';

import sitemap from '@astrojs/sitemap';

import {loadEnv} from 'vite';
const {APP_PORT} = loadEnv(process.env, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: 'class',
  site: 'https://Immo-Be.github.io',
  // base: './',
  integrations: [sitemap()],
  vite: {
    server: {
      host: true,
      hmr: {clientPort: 3000},
      port: 3000,
      watch: {usePolling: true}

      // port: 3000,
      // host: true,
      // hmr: {
      //   protocol: 'ws',
      //   port: 3000
      // }
    }
  }
});
