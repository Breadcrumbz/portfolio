// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config

export default defineConfig({
  site: 'https://breadcrumbz.github.io',
  base: '/portfolio',
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
});