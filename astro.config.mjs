import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... your existing integrations like tailwind or sitemap
  trailingSlash: 'always',
  build: {
    format: 'directory' // Forces Astro to build /symptoms/president-indonesia/index.html
  }
});